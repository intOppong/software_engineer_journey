# Daily Log

### Monday
- What i did
  - Wrote my Monthly blog for Septempber.
  - cont with TP: react router: withRouter, localTunnel
- What i learnt
  - redux-form's destroyOnMount option dump form data from memory when the Component is unmounted ie no longer shown
  on the screen.
  - Webhooks: it’s basically where One Server communicates some data to another server because of some event that occurred on the first one.
  - localTunnel is service that links your localhost to the outside web. It helps with web hooks in development environments
  - withRouter:
- Challenges
  -  
- Thoughts
  - 

### Tuesday
- What i did
  - Completed Stephen Grider's TP: saving webhook data, fetching list of surveys into redux & react.
  - Reading MongoDB docs on Data Modeling
- What i learnt
  - Data modeling is designing/setting-up your database(Collections & Documents) so it'll be well optimized & easy to work with & maintain. Some things to consider when designing a data model includes:
    - How your application will use the database. eg if your app needs are mainly read operations to a collection, adding indexes to support common queries can improve performance.
    - Characteristics of the Database Engine such as the max size of a record. This helps in deciding whether to use denormalization or not.
  - Documents should be structured based on relationship between data. Documents can be structured in 2 main ways: Embedding Documents (denormalized) or using References (normalized)
  - Schema & Validation: You do not need schemas to create documents in mongodb. Documents in the same collection can have different schemas. In practice, however, the documents in a collection share a similar structure, and you can enforce document validation rules for a collection during update and insert operations.
    - To specify validation rules when creating a new collection, use `db.createCollection()` with the validator option.
    - To add document validation to an existing collection, use NOTE collMod command with the NOTE  validator option.
- Challenges.
  - 
- Thoughts
  - 
### Wednesday
- What i did
  - 
- What I learnt & Challenges
  - 
  - 
- Thoughts
  - 

### Thursday
- What i did
  - 
  - cont with TP: 
- What i learnt & Challenges
  - 
- Challenges
  - 
 
  


### Friday
- What i did
  - 
- What i learnt & 
  - 
- Challenges
  - 
 
  
 
