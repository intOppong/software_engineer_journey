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
  - 
- What i learnt & Challenges I faced
  - 

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
