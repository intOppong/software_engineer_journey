# Daily Log

### Monday
- What i did
  - Completed FCC Lectures on Quality Assurance & Testing with Chai
  - Started FCC lectures on Advanced Node & Express
- What i learnt
  - Chai: is a JavaScript testing (assertion) library that helps you check that your program still behaves the way you expect it to after you make changes.
    - Assertion: is a statement that a predicate (Boolean-valued function, i.e. a true–false expression) is always true at that point in code execution.
  - Mocha: Is a javascript testing framework on nodejs that has a lot of features for testing.
    - by default Mocha looks for a dir called test for files to test.
  - You can place scripts in your `package.json` file & run it from the terminal `npm run <scriptName>`. That's how mocha is mostly run.
  - API Calls are Async. Web interactions are asynchronous !!.
  - A headless browser is a browser without a graphical user interface. useful for testing web pages as they are able to render and understand HTML, CSS, and JavaScript the same way a browser would. eg Zombie.js for node.js
  - [Unit Testing vs Functional Testing](https://stackoverflow.com/questions/2741832/unit-tests-vs-functional-tests)
  
    | Unit Testing | Functional Testing |
    | --- | --- |
    | Unit Test - testing an individual unit, such as a method (function) in a class, with all dependencies mocked up. | Functional Test - AKA Integration Test, testing a slice of functionality in a system. This will test many methods and may interact with dependencies like Databases or Web Services. |
    | Unit tests are written from a programmer's perspective. They ensure that a particular method of a class successfully performs a set of specific tasks. Each test confirms that a method produces the expected output when given a known input. | Functional tests are written from a user's perspective. These tests confirm that the system does what users are expecting it to. |
    | Unit tests tell a developer that the code is doing things right | functional tests tell a developer that the code is doing the right things. |
    | Unit test is done first | functional test assumes you already did the Unit test. Now we testing if it the right things were done not just anything regardless if anything was done right. |
  - Passport.js: If the authentication was successful, the user object will be saved in req.user.
- Challenges
  - Don’t fully understand how chai-http works.
  - Don't fully understand how passport flow works. is serialization done before auth? among other thoughts.
- Thoughts
  -

### Tuesday
- What i did
  - FCC Lectures on Passport: the Local Auth Strategy & the Social Auth Strategy
- What i learnt
  - export a function containing all the needed routes or use express's mini app: `express.Router()` and export that? when some routes depend on a variable from the main app, export a funciton containing all the routes else use `express.Router()` to export route modules.
    ``` javascript
      // Export a function containing all the routes
      module.exports = function(app, db) {            
      app.get('/', (req, res) => {
        db.findOne()                       // db instance is needed in the routes
        res.send('home')
      });
      
      // express.Router()
      const router = require('express').Router()

      module.exports = router;

      router.get('/', (req, res) => {
        res.send('home')
      });
    ```
  - Strategies with Social Auth require you (the dev) to have at least a `Client ID` and a `Client Secret` which is a way for the 3rd party to verify who the authentication request is coming from and if it is valid. THEY ARE NOT TO BE SHARED. A common practice is to put them in your .env file and reference them like: process.env.GITHUB_CLIENT_ID.
- Challenges
  - some of FCC's tests fails even when the tasks are complete. It's Frustrating!
- Thoughts
  -

### Wednesday
- What i did
  - Did not work on Wednesday - was feeling sick
- What i learnt 
  - 
- Challenges I faced
  - 
- Thoughts
  - 

### Thursday
- What i did
  - Did FCC’s social Auth with passport.
  - Followed the nodejs chatapp [tutorial project](https://github.com/intOppong/software_engineer_journey/tree/dev/tutorial_projects/nodejs_chat_app) on auth with passport. 
  - Reading passport Docs to get more understanding.
- What i learnt 
  - To serialize an object means to break it’s properties down into a smaller unit so it can be easily accessed/transported/saved etc. When we serialize an object we store a (unique) part of the object for the session, so it's available for the next request to the app. Serialization is where the session is created & saved.
  - To Deserialize an object means use one known unit to assemble the whole object back together. Deserialization finds the user & makes it available to the app for the session.
  - Understood how the passport authentication process works.
  - Passport adds some properties to the req/res objects including
    - `req.user`: stores the user object after authenticating. Is also used as a check to verify if user is authenticated. It's also done with the `req.isAuthenticated` property
    - `req.logout()`: it sets `req.user` property to null & clears out the session.
    - `req.logIn()`: used to login a user
  - Expresses `req.app`:The app instance is available on the req object & is used to access application settings eg `req.app.get('env')` returns the development environment
  - done() as used in node is a callback that you can call when done executing a function.
    - done() in passport acts as the next() like in express i.e. it calls the next function in the stack. 
- Challenges I faced
  - 
- Thoughts
  - 


### Friday
- What i did
  -
- What i learnt
  -
- Challenges
  -
- Thoughts
  -
