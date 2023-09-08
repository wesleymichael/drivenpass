# DrivenPass - Your Information Manager
DrivenPass is the ultimate solution for protecting and organizing your passwords securely and conveniently. 
With just one master password, you can access all your confidential credentials in a simple and protected manner. 
Never worry about memorizing complex passwords again - let DrivenPass take care of it for you! Your online security has never been this easy.

<p align="center">
  <img src="/public/images/drivenpass-usage.gif" />
</p>

## About

DrivenPass is a comprehensive data management application designed to empower users in safeguarding their sensitive information 
while providing an array of versatile functionalities. Here are the key features:

- 👤 **Register**: Create your account securely with a email and password, ensuring your data remains protected from the start.

- 👤 **Login**: Access your account using your registered email and password, backed by security measures.

- 🔑 **Credential Management**: Store and organize login credentials for websites, services, and social medias. Add, update, or delete credentials as needed.

- 💳 **Card Management**: Manage your credit and debit card details, including card number, security code, and expiration date. Easily add, update, or remove cards from your collection.

- ✏️ **Secure Notes**: Create and store personalized secure notes with titles and content. Keep important information safe and easily accessible.

- 📶 **Wi-Fi Passwords**: Safeguard your Wi-Fi network information by storing network names and passwords securely.

- 🗑️ **Account Deletion**: If you ever decide to delete your account and all associated data, DrivenPass allows you to do so. Ensure your data remains under your control.


## Technologies
The following tools and frameworks were used in the construction of the project:<br>

<p>
  <img style='margin: 5px;' src='https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/axios%20-%2320232a.svg?&style=for-the-badge&color=informational'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens'>
</p>

## How to run
To run this application, follow these steps:

1. Clone the repository to your local machine.

   ```bash
   git clone https://github.com/wesleymichael/drivenpass.git
   ```

2. Install project dependencies:

   ```bash
   npm install
   ```

3. Clone the back-end repository at [drivenpass-server](https://github.com/wesleymichael/drivenpass-api)
   
4. Follow instructions to run back-end at [drivenpass-server](https://github.com/wesleymichael/drivenpass-api)

5. Configure the environment variable in this front-end repository and insert the server's URL when running the back-end. Follow these steps:

    - In the directory of your front-end project, check if there is a file called .env.local. If it doesn't exist, create a new file with that name;
    - Open the `.env.local` and set the REACT_APP_API_BASE_URL variable to the URL of the back-end server;
    - Here's an example:

       ```bash
       REACT_APP_API_BASE_URL=http://localhost:4000
       ```  
    -  Make sure to replace http://localhost:4000 with the correct URL of the back-end server if you've made changes to the default server port.

6. Start the front-end aplication:

   ```bash
   npm run dev
   ```

## Contributions

Contributions are welcome! Feel free to open issues and send pull requests to improve this project.
