# How to Get the Spreadsheet ID
When working with Google Sheets, you often need the Spreadsheet ID to interact with the API. The Spreadsheet ID is a unique identifier found in the URL of the Google Sheet.

## Step-by-Step Guide

1. **Open Your Google Sheet**:
   - Go to [Google Sheets](https://docs.google.com/spreadsheets/) and open the spreadsheet you want to work with.

2. **Locate the Spreadsheet ID**:
   - Look at the URL in your browser's address bar.
   - The URL should look something like this:
     ```
     https://docs.google.com/spreadsheets/d/1SeTFM_Asd167ejmTpWM_Np19zbK0mI2rPBJfwN3L1wa4/edit?usp=sharing
     ```

3. **Identify the Spreadsheet ID**:
   - The **bolded** part of the URL between `/d/` and `/edit` is your Spreadsheet ID.
   - In this example, the Spreadsheet ID is:
     ```
     1SeTFM_Asd167ejmTpWM_Np19zbK0mI2rPBJfwN3L1wa4


---

# How to Add the Google Service Account as an Editor in Google Spreadsheets

To allow your Google Service Account to interact with a Google Spreadsheet, you need to add it as an Editor. Here's how you can do it:

## Step-by-Step Guide

1. **Create or Obtain the Service Account Email**:
   - If you haven't created a service account yet, follow the steps [[here]](https://github.com/deniganda/ISBtoSheets/blob/main/Guide/Google%20Service%20Account.md).
   - The service account email typically looks something like `your-service-account@your-project-id.iam.gserviceaccount.com`.

2. **Open the Google Spreadsheet**:
   - Go to [Google Sheets](https://docs.google.com/spreadsheets/) and open the spreadsheet you want to share.

3. **Open the Sharing Settings**:
   - In the top-right corner of the spreadsheet, click the **Share** button.

4. **Add the Service Account as an Editor**:
   - In the "Share with people and groups" field, enter the service account email you obtained earlier.
   - Click on the dropdown next to the email address and select **Editor**.

5. **Save the Changes**:
   - Click **Send** or **Share** to grant the service account editing access to the spreadsheet.
