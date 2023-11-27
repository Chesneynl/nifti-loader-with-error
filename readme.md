# Methinks MS Teams Viewer
Make a copy of `.env.example` and change the file name to `.env`

To run the app use 
`yarn install`
Then 
`yarn dev`
to run the App

After running the app it expects a diagnostic_id which you can add to the url to see the mock diagnostic. The id should be a id that exists in the mock data JSON.
`localhost:3000/?diagnostic_id=240283`

To build the app use
`yarn build`
This will create a build in /build which we can use in the production environment.

## Testing
To test a mock Diagnostic change `REACT_APP_TEST_MODE` in .env to `true`