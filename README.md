## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Config Auth0 and Github
This app already has it's configurations done already. \
You need to get `.env` file from the developer. We need to keep this file out of the repository to keep sensitive information safe \
Paste this file into project root \
If not - follow process below

### Configuration Process
Visit [Github Profile](https://github.com/settings/profile) page \
On the navbar go to `<> Developer settings` link \
Next go to `OAuth Apps`. Click `New OAuth App` \
Generate client secret by clicking `Generate a new client secret` button. Save it in safe place on your machine

Now we need to visit [Auth0 Page](https://auth0.com/) \
Create account there. \
After account creation go to `Applications`. Click `+ Create Application` \
For testing purposes for now fill `Allowed Callback URLs, Allowed Logout URLs, Allowed Web Origins` with `http://localhost:3000` value \
If you will have this app deployed to remote server - use it's domain instead 

Now we need to connect our GitHub OAuth with Auth0 app. \
For this go to `Authentication -> Social`. Hit `+ Create Connection` \
Paste `Client ID` and `Client Secret` that you have generated on GitHub page \
Pick permissions you want to give to the app \
Hit `Save` button

Now lets go back to `Applications -> {YOUR_APP_NAME}`. Then go to `Connections` and enable our GitHub authentication \
Go to `Settings` and copy `Domain` data of your app. Go back to GitHub page. \
Fill `Homepage URL` with copied domain string (example: https://dev.us.auth0.com) \
Fill `Authorization callback URL` with copied domain string + login/callback (example: https://dev.us.auth0.com/login/callback)

Save changes

Now to enable all of this in the app go back to Auth0 app settings. \
Copy `Domain` and `Client ID` \
In the project root create `.env` file and add this data there \
For now the app has next env variables: \
`REACT_APP_AUTH_DOMAIN="{DOMAIN_STRING_WITHOUT_PROTOCOL}"` \
`REACT_APP_AUTH_ID="{CLIENT_ID_STRING}"` \
This data will be used by Auth0 Provider in `index.js` file
```javascript
 <Auth0Provider
      domain={process.env.REACT_APP_AUTH_DOMAIN}
      clientId={process.env.REACT_APP_AUTH_ID}
      redirectUri={window.location.origin}
    >
```
