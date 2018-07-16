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

### Week 4
