# Daily Log

### Monday
- What i did
  - Did not work: Was waiting for the my mood to work. 
- What i learnt
  - 
- Challenges
  - 
- Thoughts
  - 

### Tuesday
- What i did
  - Worked on Sth other than SE
- What i learnt
  - 
- Challenges
  - 
- Thoughts
  -

### Wednesday
- What i did
  - Started & Finished FCC Project: Metric-Imperial Converter
  - Started FCC Project: Issue Tracker
- What i learnt & Challenges
  - ref to FCC InfoSec Project [Readme]()
- Thoughts
  - 

### Thursday
- What i did
  - Cont work on FCC Project: Issue Tracker
- What i learnt 
  - You have to place the port in the `MongoClient.connect` definition in order to access routes defined in `MongoClient`. 
  ``` javascript
  mongo.connect(process.env.DATABASE, (err, db) => {
    // ROUTES
    app.get('/', (req, res) => {
      res.send('Homepage')
    })
    // PORT
    app.listen(3000, () => console.log("Listening on port 3000" ) );
  });
  ```
  - When Creating a document using `InsertOne()` & it’s family, the newly inserted Document is passed as a parameter(say `result`) to the callback . It can be accessed on the `ops` property of the `result` object. ie `result.ops[0]`
  - Various ways to check for an empty object. [Link](https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object).
- Challenges I faced
  - Accessing routes in `MongoConnect.connect()`.
  - Updating an Issue
- Thoughts
  - Great Challengin Project. It pushed me


### Friday
- What i did
  - 
- What i learnt
  - 
- Challenges
  - 
- Thoughts
  - 
