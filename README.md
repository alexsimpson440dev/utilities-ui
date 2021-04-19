### `Download Node`
 - https://nodejs.org/en/download/
    - This project is running on Node 14.16.1 and npm version 6.14.12
 - Run the installer (it will likely ask to add it to your path, do this!)
 - Verify node is installed correctly
    - In your cmd or powershell window, type `node --version`
 - Once you verify that node is installed, go to the project directory
    - run npm install
        - this will install project dependencies
    - run npm start
        - this should start the application on `localhost:3000` and likely will open the application in your browser
 - NOTE: This project will not run without the api running in the background!
    - Techinically it will, but it will not have any data populated and will fail if you click buttons (likely)
    - API needs to be running on `localhost:8080`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
