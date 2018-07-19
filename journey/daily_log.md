# Daily Log

### Monday
- What i did
  - read Express docs on Routing
- What i learnt
  - Passing multiple callback functions as arguments to the route handler. This can be used as some kind of route-specific middleware. You can use this mechanism to impose pre-conditions on a route, then pass control to subsequent routes if there’s no reason to proceed with the current route.
  ```javascript
    router.get('/seven/a', (req, res, next) => {                  // route-specific middleware
      if (req.params.firstname) {
        next();
      } else {
        res.send('condition failed');
      }
    }, (req, res) => {                                            // actual handler/controller
        res.send(`<p>firstname: ${req.params.firstname}</p>`);  
    });
  ```
  - You can also pass an Array of Callbacks to the route handler.
  - The Route path can be a stirng `'/user'`, string pattern `/ab?cd` or regular expressions `/a/`.
- Challenges
  - 
- Thoughts
  -

### Tuesday
- What i did
  - read express Docs on Middleware, Template Engine & Error Handling
  - started reading mongodb docs
  - installed Mongodb locally
  - used the mongo shell to manipulate the database
- What i learnt
  - `process.cwd()` is an absolute path to the root director of the current node process.
  - You can skip the rest of the middleware functions from a router middleware stack, by calling
    next('route') to pass control to the next route.
    ```javascript
        app.get('/user/:id', function (req, res, next) {
          if (req.params.id === '0') next('route')  // if the user ID is 0, skip to the next route
          else next()                               // pass control to the next middleware function in this stack
        }, function (req, res, next) {
          // send a regular response.
          res.send('Regular User')
        })
        app.get('/user/:id', function (req, res, next) {
          res.send('Special User');
        })
     ```
  - used the mongod daemon & mongo shell. 
  - package-lock.json (newly added in npm 5): It's automatically generated for any operations where npm modifies either the node_modules tree, or package.json. It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.
  - Relational Databases (MySQL) vs Non-Relational Databases(MongoDB) [link](https://www.neonrain.com/blog/mysql-vs-mongodb-looking-at-relational-and-non-relational-databases/)
    - Relational databases uses tables & rows to represent & store data whiles non-relational databases represents data using collections of Json document. RDB follows more strict rules whereas NoSQL is more free & dynamic. Both have their use cases.
    - If your data structure fits nicely into tables and rows, RDB will offer you robust and easy interaction with your data.
    - If your data seems complex to model in a relational database system, or if you find yourself de-normalizing your database schema or coding around performance issues you should consider using MongoDB.
- Challenges
  -
- Thoughts
  -

### Wednesday
- What i did
  - reading MongoDB docs on Inserting & Querying Documents
  - used the MongoDB Node.js driver in a dummy node app to connect to my mongodb database
- What i learnt & Challenges I faced
  - a lot of ways to query the collection using the find() method. Some include
    ```javascript
      db.inventory.find( {} ) === db.inventory.find() // return all documents
      db.inventory.find( { status: { $in: [ "A", "D" ] } } )  // Query Operators
      db.inventory.find( { status: "A", $or: [ { qty: { $lt: 30 } }, { item: /^p/ } ] } ) // Logical AND & OR conditions
      db.inventory.find( { size: { h: 14, w: 21, uom: "cm" } } )  // Query on Embedded/Nested Documents
      db.inventory.find( { tags: { $all: ["red", "blank"] } } )   // Querying an Array
      db.inventory.find( { dim_cm: { $elemMatch: { $gt: 22, $lt: 30 } } } ) // Specify Multiple Conditions for Array Elements
    ```
   - how to connect mongodb to a node application & use the MongoDB Node.js driver to update the database.
   - Cursor Handling: A cursor is a pointer to the result set of a query. ie when you run a query looking for documents, what
  gets returned is a pointer to the results of that query rather than all of the results in one shot as it can be way to many & will slow down the service. 
  (as it can be way to many & will slow down the service).
     - Executing db.collection.find() in the mongo shell automatically iterates the cursor to display up to the first 20 documents. Type 'it' to continue iteration.

### Thursday
- What i did
  - 
- What i learnt & Challenges I faced
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
