# Daily Log

### Monday
- What i did
  - applied for FCC JAMstack hackathon
  - cont learning Promises. YDKJS: Async
  - continued TP
    - Added MongoDB & Mongoose to Project to save user data from oAuth
- What i learnt
  - a beneficial side effect of wrapping Promise.resolve(..) around any function's return value (thenable or not) is that it's an easy way to normalize that function call into a well-behaving async task. If foo(42) returns an immediate value sometimes, or a Promise other times, Promise.resolve( foo(42) ) makes sure it's always a Promise result. And avoiding Zalgo makes for much better code.
  - You shouldn't require mongoose models in multiple files. When running mongoose in a test env (running some mocha test) & require your models in multiple files, your model files will be required into the project multiple times & mongoose assumes you attempting to Load in multiple models of the same name. The solution is to: 
    - Require the model class in the entry file eg index.js. Once required, the model class then loads the schema into mongoose. Hence mongoose is alreadly aware of the model class, so pull the model out of mongoose using `mongoose.model(<modelName>)`
    
- Challenges
  - It's difficult to understand passport's workflow
- Thoughts
  - 

### Tuesday
- What i did
  - cont learning Promises. YDKJS: Async
  - continued TP: Development & Production Keys, Generated react app using create-react-app, Coding some React
  - used `concurrently` npm module to start up 2 servers togheter 
- What i learnt
  - Chaining Promises
    - Inside the fulfillment/rejection handlers, if you return a value or an exception is thrown, the new returned (chainable) Promise is resolved accordingly
    - If the fulfillment or rejection handler returns a Promise, it is unwrapped, so that whatever its resolution is will become the resolution of the chained Promise returned from the current then(..)
    - if the rejection handler is omitted, Errors are passed(rethrows the error) on to the next chained promise. error continue propagating along a Promise chain until an explicitly defined rejection handler is encountered.
    - if the fulfillment handler is ommited, it simple passes whatever value it recieves along to the next Promise.
  ``` javascript
    p = Promise.resolve(4);
    p
      .then( function(){

        console.log( "A" );           // runs
        obj.one;                      // Obj is not Defined Error
        console.log('B');             // never gets here
      })
      .then(function(){               // never gets here
          console.log( "B" );
        })
      .then(
        function() {                  // never gets here
          console.log('C');
        },
        function(err) {                 // rejection handler to catch the error
          console.log('ERROR:', err);   // Reference Error: obj is not defined
          return 'ydkjs';               // fulfills/resolves next promise
        }
      )
      .then(
        function(val){
          console.log( val );           // 'ydkjs' - resume operation
        }
      )
   ```
  - create-react-app (CRA) has it's own built-in server for running the client. CRA will bundle together your frontend files & produce static files for production so that the server will not be needed in production.
  - __Routing Stumbling Block:__ since CRA has it’s own server, relative links <a> will be added to the domain of the front-end server not our backend server & this can cause unwanted problems. For example, the sign in (eg `/auth/google`) routes are defined in the backend server & accessing the them from the client server will lead somewhere else since they both have different servers hence domains ie
    - backend domain: http://localhost:5000 -> route: `/auth/google`
    - frontend domain: http//localhost:3000 -> route: `/auth/google`
  - __Solution:__ CRA has a built in proxy that can be configured to forwards requests from the client server to the backend server in development mode. This way you don't have to use absolute links in your html files
- Challenges.
  - 
- Thoughts
  - 

### Wednesday
- What i did
  - cont learning Promises. YDKJS: Async
  - cont FCC Tutorials on React
  - Reading MDN docs on ES6 Classes
- What I learnt & Challenges
  - The nuances of promise errors.
  - `Promise.all([ .. ])` & `Promise.race[ .. ]` Patterns. The former takes an array of promises, and returns a new promise that waits on them all to finish regardless of the order. The main promise returned from Promise.all([ .. ]) will only be fulfilled if and when all its constituent promises are fulfilled else the promise is immediately rejected. The fulfillment message from Promise.all([ .. ]) is an array of all the fulfillment messages from the passed in promises in the same order as specified. Unlike `Promise.all([ .. ])`,  `Promise.race([ .. ])` waits for the first async to complete then returns just that one, ignoring the others. Both these Patterns passes each value in the array through Promise.resolve() which returns a promise.
  ``` javascript
    const promise1 = Promise.resolve('Hello World');
    const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 200, 'GoodBye'));
    const promise4 = fetch(jsonAPI).then((res) => res.json());
    const promise2 = 10;                // NOTE: resolves to a promise
    
    // Promise.all([ .. ])
    Promise.all([promise1, promise2, promise3, promise4])
      .then((values) => console.log(values)); // ['Hello World', 'GoodBye', {json}, 10]
      
    // Promise.race([promise1, promise2, promise3, promise4])
    Promise.race([promise1, p2])
      .then( function(msg){  
        console.log(msg);     // only 1 will fulfill and pass (win the race)
      })
  ```
  - A function's object ie function.prorotype has a read only `name` property indicates the function's name as specified when it was created or `anonymous` for functions created anonymously. 
  - A function itself can have properties listed on it just like the function.prototype object ie 
  ```javascript
    function Person() {console.log('I'm a function)}
    Person.age = 10;
    Person.prototype.age = 20;
  ```
  - Learnt about the 3 different Types of react components: Stateless Functional Components, Stateless ES6 Class Components & Stateful Components
- Thoughts
  - I’m starting to like all this theoretical stuff from reading YDKJS Promises. Its becoming cool; I even liked reading about "what's proper name: resolve or fulfilled."

### Thursday
- What i did
  - Finished FCC Tutorials on React
  - Begun FCC Tutorials on Redux
  - Finished YDKJS: Async Chapter on Promises
  - Cont with TP: React Router Setup & installed Materialize UI
- What i learnt & Challenges
  - pasing state as props to child components
  - Component Lifecycle Methods/hooks: They're special methods that provide opportunities to perform actions at specific points in the lifecycle of a component. They include `componentWillMount()`, `componentDidMount()` etc. the lifecycle of a component.
  - Inline Styling with react
   ``` javascript
    // HTML inline Styles
    <div style="color: yellow; font-size: 16px">Mellow Yellow</div>

    // JSX Inline styles
    <div style={{color: "yellow", fontSize: 16}}>Mellow Yellow</div>

    // Define a varialbe
    const beautify = {color: 'purple',fontSize: 40, border: '2px solid purple'}
    <div style={beautify}>Mellow Yellow</div>
   ```
- Challenges
  - 
  


### Friday
- What i did
  - 
- What i learnt & Challenges
 
  
 
