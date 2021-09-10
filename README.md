## Hello there! It's Sri Indri's submission.

The steps below will take you all the way through Cypress. It is assumed you have nothing installed except for node + git.

1. Install Cypress
[Follow these instructions to install Cypress.](https://on.cypress.io/guides/installing-and-running#section-installing)

2. Fork this repo
If you want to experiment with running this project in Continous Integration, you'll need to [fork](https://github.com/indsane96/SDETInnovation.git) it first.

After forking this project in Github, run these commands:
## Clone this repo to a local directory
git clone https://github.com/<your-username>/SDETInnovation.git
```bash
## cd into the cloned repo
cd SDETInnovation/latihanCypress

## install the node_modules
sudo apt install npm
  
## install cypress
npm install cypress --save-dev

## run the existing test cases
npx cypress open
```
## Test Challenges
Find all the submissions file in cypress/integration
  1. for scenario #1 Login to http://testautomasi.com/ the file name is test.js
  2. for scenario #2 API POST to https://reqres.in/api/login the file name is api.js

## More About Test Scenario
  1. Login (test.js)
  ```bash
    cy.get('#username') ## using id
    cy.get('#password') ## using id
    cy.get('button').contains('Login') ##using button which has Login wording as selector
    cy.get('.profile-name') ## using class as selector for print the username purpose
  ```
    run $ npx cypress run --spec "cypress/integration/test.js"
    to run and record the test case
  
  2. API (api.js)
    Make request as mentioned in challenges using:
  
   ```bash
      cy.request({
         method:,
         url:,
         body:{"email": "based on https://reqres.in/",
               "password": "based on https://reqres.in/"}
         })
      print the log
      then take screenshoot
  ```
  3. the video recording in cypress/videos and screnshoot in cypress/screenshots
  
  

