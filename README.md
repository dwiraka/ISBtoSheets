# ISBtoSheets
Import ISB LKPP JSON data to Google Sheets

## Requirements
- [Google Service Account](https://github.com/deniganda/ISBtoSheets/blob/main/Guide/Google%20Service%20Account.md) with Google Sheets API enabled (the `credentials.json` file).
- [Google Sheets](https://github.com/deniganda/ISBtoSheets/blob/main/Guide/Google%20Sheets.md) (You'll need the Spreadsheet ID to push the data).
- JSON Link from ISB LKPP.

## Setup

### 1. Fork the GitHub Repository

- Fork this repository to your GitHub account.

### 2. Prepare the Google Sheets

a. **Create Sheets with the Following Names:**
``` 
        - Tender
        - NonTender
        - Pen NonTender
        - Pen Swakelola
        - E-Purchasing
        - TokoDaring
```
b. **Add the Google Service Account as an Editor:**
- Follow this [guide](https://github.com/deniganda/ISBtoSheets/blob/main/Guide/Google%20Sheets.md#how-to-add-the-google-service-account-as-an-editor-in-google-sheets) to grant editor access to your Google Service Account in the Google Sheets.

### 3. Create GitHub Secrets

To securely store and use sensitive information, set up GitHub Secrets:

- **Navigate to:** `Settings > Secrets and variables > Actions > New repository secret`

#### **Required Secrets:**
- `GOOGLE_SHEET_KEY_JSON`: Copy and paste the contents of your `credentials.json` file here.
- `SPREADSHEET_ID`: The Spreadsheet ID from the Google Sheets link.

#### **Optional Secrets for Customization:**
- `API_URL_TS`: JSON link from SPSE-TenderSelesai.
- `API_URL_TD`: JSON link from Bela-TokoDaringRealisasi.
- `API_URL_SWA`: JSON link from RUP-PaketSwakelola-Terumumkan.
- `API_URL_PS`: JSON link from SPSE-PencatatanSwakelola.
- `API_URL_PNT`: JSON link from SPSE-PencatatanNonTender.
- `API_URL_PEN`: JSON link from RUP-PaketPenyedia-Terumumkan.
- `API_URL_NTS`: JSON link from SPSE-PencatatanNonTender.
- `API_URL_EP`: JSON link from Ecat-PaketEPurchasing.

### 4. Enable GitHub Actions

a. **Set Up the Workflow:**
- Go to the **Actions** tab.
- Click on `'I understand my workflows, go ahead and enable them'`.
- Select the `'Daily Node.js Script'` workflow.
- Click `'Enable workflow'`.

b. **Run the Workflow:**
- You can manually trigger the workflow by clicking `'Run Workflow'`.
- The workflow will also automatically run every morning at 6 AM.

---

Now you're all set! Your setup will automatically import ISB LKPP JSON data into the specified Google Sheets every day. You can also run the script manually whenever needed.
