# ISBtoSheets
Import ISB LKPP JSON data to Google Sheets

## Requirements
- Google Service Account (the credential.json file)
- Google Spreadsheets (It need the Spreadsheet ID to push the Data)
- JSON Link from ISB LKPP

## Setup
**1. Fork the github**

**2. make Githu Secrets**

    a. Go to setting
    b. Secrets and variables
    c. Actions
    d. New repository secret

***Required Secrets***
- `GOOGLE_SHEET_KEY_JSON`: Fill it with the value inside credentials.json
- `SPREADSHEET_ID`: Spreadsheets ID from the Google Sheets link

***Customize Secret***
- `API_URL_TS`: JSON link from SPSE-TenderSelesai 
- `API_URL_TD`: JON link from Bela-TokoDaringRealisasi 
- `API_URL_SWA`: JON link from RUP-PaketSwakelola-Terumumkan
- `API_URL_PS`: JON link from SPSE-PencatatanSwakelola 
- `API_URL_PNT`: JON link from SPSE-PencatatanNonTender 
- `API_URL_PEN`: JON link from RUP-PaketPenyedia-Terumumkan
- `API_URL_NTS`: JON link from SPSE-PencatatanNonTender 
- `API_URL_EP`: JON link from Ecat-PaketEPurchasing 

