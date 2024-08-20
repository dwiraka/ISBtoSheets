# How to Create a `credentials.json` for a Google Service Account

Follow these steps to create a `credentials.json` file, which you can use to authenticate your application with Google APIs.

## 1. Go to the Google Cloud Console
- Visit the [Google Cloud Console](https://console.cloud.google.com/).

## 2. Create a New Project or Select an Existing One
- **New Project**: Click the project dropdown at the top and select **New Project**. Give it a name, and click **Create**.
- **Existing Project**: Select your project from the dropdown.

## 3. Enable the Required API
- Navigate to the **APIs & Services** section from the left-hand menu.
- Click on **Library** and search for the API you need (e.g., Google Sheets API, Google Drive API).
- Click on the API, then click **Enable**.

## 4. Create a Service Account
- In the **APIs & Services** section, click on **Credentials**.
- Click the **Create Credentials** button and select **Service account**.
- Provide a name for the service account and an optional description.
- Click **Create and Continue**.
- If necessary, assign roles or permissions; otherwise, click **Done**.

## 5. Create a Key for the Service Account
- In the **APIs & Services** section, find your newly created service account under **Service Accounts**.
- Click on the service account name.
- Go to the **Keys** tab.
- Click on **Add Key** and select **Create new key**.
- Choose the key type as **JSON** and click **Create**.
- A `credentials.json` file will be downloaded to your computer.
