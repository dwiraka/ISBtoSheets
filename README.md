# ISBtoSheets
Import ISB LKPP JSON data to Google Sheets

## Requirements
- Google Service Account with Google Sheets API enabled (the credential.json file)
- Google Spreadsheets (It need the Spreadsheet ID to push the Data)
- JSON Link from ISB LKPP

## Setup
**1. Fork the Github**

**2. Preparing the Google Sheets**

a. Make sheets with name:
``` 
        - Tender
        - NonTender
        - Pen NonTender
        - Pen Swakelola
        - E-Purchasing
        - TokoDaring
```
b. Give Google Service Account to be Editor in the Goggle Sheets

**3. make Github Secrets**
```
Go to setting > Secrets and variables > Actions > New repository secret
```
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

**4. make Github Actions**
```
a. Go to Actions tab > 'I understand my workflows, go ahead and enable them' > 'Daily Node.js Script' > 'Enable workflow'
```
 - Now you can run the Script Manually with `Run Workflow` or it will automatically run very mornign at 6

