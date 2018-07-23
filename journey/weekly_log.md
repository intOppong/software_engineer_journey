# Weekly Log

### Overview
- I want this. I want to be better

### Week 1
- What i did:
  - did FCC nodejs lectures: Basic Node & Express
  - started FCC MongoDB & Mongoose lectures
  - finished FCC API & Micro-services lectures: MongoDB & Mongoose
  - started Following a Nodejs Tutorial Project to get a feel of how full stack app is built with Nodejs. [link](https://www.safaribooksonline.com/videos/node-js-web-apps/9781491958940/9781491958940-video242242)
  - Jade view engine, CRUD using simple JSON, Routing & Middleware, working with API
- What I Learnt
  - how to set up MongoDB & Mongoose in a node app
  - Various express route & middleware techniques such as
    - chaining diff http verbs to the same route,
    - getting input from user using the request parameter, query parameter or through the usual post request
    - chaining middlewares / handlers using the next function.
    - the body-parser middleware package
  - CRUD With Mongoose
  - working with Node on local machine. learnt the Jade syntax
  - Template engines: what they are & why they important
  - res.render() in express [add some more] ref to express.js
  - using express.router() to create mini-app instances & access the routing capabilities in our module without having to pass in our main app instance into our modules.
  - postman. API testing tool.
  - What an API is. *been very confusing to me what it really is. is it a Server? etc*
    - An API is just a server that returns to the client side data upon request.
    - API is where the client makes a call to our web server & we return an object (data, methods) & use it to build up an interactive client side app.
    - so the client side don’t have to go to the main server to ask for data, it interacts with the API, & the API interacts with the server. The API acts as the middleman between Client Side & Server Side, & what is does it sending resources/data
- Challenges
  - are middlewares different from handlers.
  - took a while to understand what the done() was for in the fcc mongodb/mongoose challenges. It’s basically our
  error handler.
  - why module.exports is used for the export of functions instead of just exports i.e. What is the difference between Node's module.exports and ES6's export
- My Thoughts

### Week 2
- What i did:
  - continued with Node TP: Logging & Debugging, Error Handling.
  - Started & Completed FCC's API & Microservices Projects: Timestamp Micro-service, Request Header Parser Microservice, URL shortener Microservice, Exercise Tracker Project, File Metadata Microservice.
  - Setup a basic node app using (both pure node & express's generator) for testing purposes on my local machine.
- What I Learnt
  - Logging & Debugging Middleware in express: `express-debug`, `morgan`: an http request logger & `fs` to write to an output stream.
  - learnt about Environment Variables & node’s process .env
    - They are variables that determine how your app should run/execute depending on your host environment/device.
    - The act of providing environment variables is referred to as `provisioning`.
    - When your Node.js process boots up it will automatically provide access to all existing environment variables by creating an env object as property of the process global object
    - You can Set or Override them & provide temporary variables through the console before running the node app eg `PORT=999 node app.js`
  - a little bit about Error Handling:
    - let express handle errors by passing in errors to the next().
    - write custom error handlers/middleware.
  - read about html form multipart/form-data [encoding type](https://stackoverflow.com/questions/4526273/what-does-enctype-multipart-form-data-mean).
  - read more on API.
    - summary: when a company offers an API to their customers, it just means that they’ve built a set of dedicated URLs that return pure data responses — meaning the responses won’t contain the kind of presentational overhead that you would expect in a graphical user interface like a website.
  - learnt Json Format & it’s data types.
  - I learnt earlier that the response object terminates the request/response cycle. But the Code after res.<send()> among others is executed. Hence make sure that res.<send()> is the last code in a handler. example 
    ```javascript
      app.get(‘/test’, (req, res) => {
        res.send(‘end request/response cycle’); 
        res.send(‘after the end’);
      });
    ```
  - I've detailed the rest in the api projects [readme](https://github.com/intOppong/software_engineer_journey/blob/dev/fcc_projects/api_microservices/README.md) for more
- Challenges
  - refer to api projects [readme].
- My Thoughts
  - I want to build more applications with nodejs to improve my backend skills.

### Week 3
- What i did:
  - read Express docs on Routing, Middleware, Template Engine & Error Handling
  - started reading mongodb docs on the Basics: Installation, CRUD etc
  - installed Mongodb locally.
  - used the mongo shell to manipulate the database.
  - used the MongoDB Node.js driver & mongoose in a dummy node app to connect to my mongodb database.
  - Started following FCC lectures on Information Security & Quality Assurance.
- What I Learnt
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
  - How to iterate a cursor in the mongo shell
  - projection: return the Specified Fields from a document (_id is returned by default).
  - Querying for Null or Missing Fields.
  - helmet.js: a node module which is a collection of 13 smaller middleware functions that set HTTP headers.
  - Hashing: A hash is basically a fingerprint of the original data- always unique. This is accomplished by feeding the original data into a algorithm and having returned a fixed length result. To further complicate this process and make it more secure, you can also salt your hash. Hashing is designed to be computationally intensive
    - Salting your hash involves adding random data to the original data before the hashing process which makes it even harder to crack the hash.
    - BCrypt is a password hashing algorithm/function
- Challenges
  - A little unfocused during work, was thinking about other things 
- My Thoughts
  - using mongoose SchemaType Mixed in your design is bad don’t use it. And They don’t even manage the mixed type well.
  - I glad i was very consistent this week amidst lots of life stuff & planning.

### Week 4
- What i did:
  - 
- What I Learnt
  - 
- Challenges
  - 
- My Thoughts
  - 
