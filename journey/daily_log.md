# Daily Log

### Monday
- What i did
  - more on ES6 Classes
  - Going through Software Development Steps: defining the purpose of the next project, Who the users are, coming up with initial user stories, listing initial features, The User/Screen Flow through the app ie steps the user goes through to accomplish a task, among other things
- What i learnt
  - [why do we have to bind prototype methods to class constructors in react?](https://medium.freecodecamp.org/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb)
- Challenges
  - was going through the Software-dev steps & got stuck/confused on a lot of the DB & UI stuff so I need to get a feel of a full working MERN App to wrap my head around how to actually structure my app (db, routes, UI etc). 
- Thoughts
  - 

### Tuesday
- What i did
  - more on ES6 Classes: extend & super keyword
  - cont with TP: Redux Thunk, react-redux: connect, Link
- What i learnt
  - `extends`: syntax sugar for establishing the [[Prototype]] delegation link between two function prototypes.
    - `Bar` extends `Foo`, means to link their [[Prototype]] ie `Bar.prototyp`e to `Foo.prototype`
    - additionally, the actual `Bar()` class/function is linked to `Foo()` class/method. this is useful to static properties
  - `super`: In the constructor, super automatically refers to the “parent constructor”. In methods, super means the parent's .prototype object.
    - you cannot access `this` until super(..) has been called
  - If no constructor is specified when a Child class extends a Parent, the Parent's constructor is called by default for the child constructor. ie a default constructor that calls the parent's constructor is placed there by default: `constructor() {super()}`
  - If a Constructor is specified, you are required to call  super() explicilty.
  - React-Redux: redux & react were built independently so the react-redux library helps us connect the two. That is, to seamlessly integrate redux’s state management into a React application. The 2 helpers provided by react-redux are the `<Provider />` Component & `connect` method.
    - `<Provider />` is a React Component, that only serves the purpose of providing the store to it’s children (Your Application). The <Provider /> is given the store as a prop.
    - connect method, connects a Component (within the <Provider /> of course) to Redux Store, so the component can modify data (by dispatching action creators) & retrieve data (by obtaining the current state of the store)
  - Action Creators by default immediately return an action (an object) & the dispatch() function automatically sends the action to the reducers.
    - Redux Thunk is a middleware in the redux library that gives control of the dispatch() function to us (the developer) if an action creator returns a function instead of an action object, so we can decide when to dispatch the action - usually after some Asynchronous code.
- Challenges.
  - 
- Thoughts
  - 
### Wednesday
- What i did
  - cont with TP: Handling Payments with Stripe, Talking aobut where to build the client side
- What I learnt & Challenges
  - tried to start lessons on nodeJs Server: way too advanced at the moment & it deviates from my priority of building a full stack app. All I need to know atm is Node-Express, React, MongoDb.
  - Stripe's API, client side & server-side libraries
- Thoughts
  - 

### Thursday
- What i did
  - 
- What i learnt & Challenges
  -
- Challenges
  - 
  


### Friday
- What i did
  - 
- What i learnt & Challenges
  - 
 
  
 
