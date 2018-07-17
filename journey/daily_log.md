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
  - 
- What i learnt
  - 
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
