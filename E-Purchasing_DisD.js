const axios = require('axios');
const { google } = require('googleapis');
const TelegramBot = require('node-telegram-bot-api');

// Load and parse the JSON key from the environment variable
const keyJson = JSON.parse(process.env.GOOGLE_SHEET_KEY_JSON);

// Google Sheets API authentication setup
const auth = new google.auth.GoogleAuth({
    credentials: keyJson,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});
const sheets = google.sheets({ version: 'v4', auth });

// Define the spreadsheet ID and range for fetching parameters
const spreadsheetId = process.env.SPREADSHEET_ID; // Use environment variable for Spreadsheet ID
const parametersRange = 'E-Purchasing!P2:P'; 
const clearRange = 'E-Purchasing!DH:DM'; 
const updateRange = 'E-Purchasing!DH1'; 

// Telegram bot setup
const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
const telegramChatId = process.env.TELEGRAM_CHAT_ID;

// Initialize TelegramBot instance
const bot = new TelegramBot(telegramBotToken, { polling: false });

// Function to send a message to the Telegram bot
async function sendTelegramMessage(message) {
    try {
        await bot.sendMessage(telegramChatId, message, { parse_mode: 'HTML' });
    } catch (error) {
        console.error('Error sending message to Telegram:', error.message);
    }
}

// Remove duplicate entries based on identical key-value pairs
function removeDuplicates(data) {
    const map = new Map();

    data.forEach(entry => {
        const key = JSON.stringify(entry); // Create a unique key for each entry
        if (!map.has(key)) {
            map.set(key, entry); // Store only unique entries
        }
    });

    return Array.from(map.values());
}

async function fetchParameters() {
    try {
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range: parametersRange,
        });

        const parameters = response.data.values.flat().map(Number);

        if (!parameters.length) {
            throw new Error('No parameters found in the specified range');
        }

        return parameters;
    } catch (error) {
        console.error('Error fetching parameters:', error.response ? error.response.data : error.message);
        throw error;
    }
}

async function fetchData() {
    try {
        const parameters = await fetchParameters();
        const apiUrl = process.env.API_URL_EP_DISD; // Use the environment variable

        const allDataPromises = parameters.map(async (param, index) => {
            const url = `${apiUrl}${param}`; // Construct the URL using the environment variable
            const response = await axios.get(url);
            let data = response.data;

            if (!Array.isArray(data) || data.length === 0) {
                throw new Error(`Data format is not as expected for parameter ${param}`);
            }

            // Remove duplicates from the data
            data = removeDuplicates(data);

            const headers = Object.keys(data[0] || {});
            const rows = data.map(item => headers.map(header => item[header]));

            if (index === 0) {
                rows.unshift(headers);
            }

            return rows;
        });

        const allData = await Promise.all(allDataPromises);
        const flattenedData = allData.flat();

        await sheets.spreadsheets.values.clear({
            spreadsheetId,
            range: clearRange,
        });

        const resource = {
            values: flattenedData,
        };

        const result = await sheets.spreadsheets.values.update({
            spreadsheetId,
            range: updateRange,
            valueInputOption: 'RAW',
            resource,
        });

        // Log success message to Telegram
        const successMessage = '✅ Data Distributor Detail successfully written to Google Sheets';
        console.log(successMessage);
        await sendTelegramMessage(`<b>Success:</b> ${successMessage}`);

    } catch (error) {
        const errorMessage = `❌ Error: ${error.response ? error.response.data : error.message}`;
        console.error(errorMessage);
        await sendTelegramMessage(`<b>Error:</b> ${errorMessage}`);
    }
}

fetchData();
