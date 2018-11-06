# September 2018 Progress 

## Content
* [Goals](#goals)
* [Week One](#week-one)
* [Week Two](#week-two)
* [Week Three](#week-three)
* [Week Four](#week-four)
* [My Thoughts](#my-thoughts)

### September 2018 Overview
***

- Most consistent month so far.
- Week One: was figuring out what project to use as my production level project.
- Week Two: Learning & following a Tutorial Project
- Week Three: Applied to FCC's JAMStack hackathon, Learning & following a Tutorial Project
- Week Four: Learning & following a Tutorial Project, Started minor work's on my project.
- Moral Lessons
  - Consistency/Inconsistency: if you waste 1 week, you need 1 more week of hard work to hopefully get back to where you were & that equals 0 progress in 2 weeks.

## Goals
***
**September 2018 run from 2nd September to 29th September 2018. ie *"4 weeks"***

* Process Oriented Goals:
- Work Everyday averaging 13 Pomodoros a day & 10 Pomodoros on days where life duties call (eg: going to the bank, helping 
family with work etc). 
- __Sidenote__: Started working Half days on Saturdays but it's optional

    | | No. of Working Days | Total Pomodoros | Average Pomodoro
    | --- | --- | --- | --- |
    | Full Days | 17 days | 317 | 18.7 |
    | Half Days | 7 days | 78 | 10 |
    | Total |  24 out of 20 days | 395 |  **19.8** |

### Week One
***
- What I did:
  - finding my Next Project: Wanted it to be crypto based but my crypto project seemed too big with no clear targets & a friend asked me to help with a News/Blog for his twitter account so I decided to go  
  - working on my crypto portfolio to help me clarify what I features I need in a crypto project should I choose to do it
  - Searching for TP thats a good fit: React, Node, Express


### Week Two
***
- What I did:
  - reading jquery docs on Events & AJAX. Then later watched a video on [Why not to use jquery?](https://www.youtube.com/watch?v=pk3tsynNZ0w). :angry: But  I’ve already learnt the alternative: vanilla JS :satisfied:
  - reading [YDKJS: Async & Perfomance](https://github.com/getify/You-Dont-Know-JS/blob/master/async%20&%20performance/README.md#you-dont-know-js-async--performance) to understand the what & why of Promises.
  - Watched some video tutorials on Promises & async/wait. [link1](https://www.youtube.com/watch?v=PoRJizFvM7s), [link2](https://www.youtube.com/watch?v=QO4NXhWo_NM&index=1&list=PLRqwX-V7Uu6bKLPQvPRNNE65kBL62mVfx) 
  - Started following FCC's [react](https://learn.freecodecamp.org/front-end-libraries/react) tutorials.
  - Found a [Tutorial Project](https://www.udemy.com/node-with-react-fullstack-web-development/) to follow as a guide for my next Project
  - read MDN's Tutorials on [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  - Started Following Stephen Grider's [Node with React](https://www.udemy.com/node-with-react-fullstack-web-development/?siteID=a1o1REVAqJg-SH5_dN_AYT64vuTm1wD2.A&LSNPUBID=a1o1REVAqJg) Tutorial Project: setup a new express/node app, deployed website to Heroku, started google oAuth 
- What I Learnt & Challenges
  - [Why AJAX was needed in the first place](http://learn.jquery.com/ajax/)
  - JSON with Padding (JSONP) is a work around developed to circumvent the Same-Origin Policy & make ajax request to other domains
  - Cross Origin Resource Sharing (CORS) is a more recent & standardized technology, used by browsers to allow Ajax requests to different domains
  - the `success` option in the ajax config object & `.done()` method on the returned xmlHttpRequest Object serves the same purpose.
    ``` javascript
      // #1
      $.ajax({
        url: "/api/test",
        data: {name: 'John Doe'},
        type: "GET",
        success: function(data) {console.log(data)};  // same as .done()
      })
      
      // #2
      $.ajax({
        url: "/api/test",
        data: {name: 'John Doe'},
        type: "GET"
      }).done(function(data) {console.log(data)})     // same as 'success'
    ```
  - The jquery `.on()` method is the main method used to used to setup an event & it's handler. All the other methods including `.click(), .focus()` etc are just shorthands for the `.on()` method. The `.off()` method is used to remove events.
    ``` javascript
      // #1
      $( "p" ).on( "click", function() {
        console.log( "click" );
      });
      // #2
      $( "p" ).click(function() {
        console.log( "clicked!" );
      });
    ```
  - Event delegation allows us to attach a single event listener, to a parent element, that will fire for all descendants matching a selector, whether those descendants exist now or are added in the future.
    - Event delegation works because of the notion of event bubbling. Whenever an event occurs on the page, the event travels
    (bubbles up) from the element it occurred on, up to its parent, till the root parent ie `window`. This happens Everytime
    an event occurs.
    - This allows us to not have to add an event listener for every child element which can affect performance but rather we
    only add it to the parent element. The parent element then gets notified whenever a specified event occurs on the child
    element & take necessary action
    ``` javascript
      <ul id="list"> 
        <li><a href="http://domain1.com">Item #1</a></li>
        <li><a href="/local/path/1">Item #2</a></li>
        <li><a href="/local/path/2">Item #3</a></li>
      </ul>

      // Without Event Delegation
        // new anchor elements won't have this event unless you do it recursively which will
        // mean adding click events to all 'a' tags. This slows performance
      $( "#list a" ).on( "click", function( event ) {
        event.preventDefault();
        console.log( $( this ).text() );
      });

      // Using Event Delegation: on(event, selector, handler)
        // The event fires if the selector matches the clicked element. clicked Element: <a>, selector: 'a'. 
      $( "#list" ).on( "click", "a", function( event ) {
        event.preventDefault();
        console.log( $( this ).text() );
      });
    ```
  - Asynchronous Programming is about what happens when part of your program runs now, and another part of your program runs later -- there's a gap between now and later where your program isn't actively executing. Asynchronous Programming is able to use that free time (gap) to execute other code. Any time you wrap a portion of code into a function and specify that it should be executed in response to some event (timer, mouse click, Ajax response, etc.), you are creating a later chunk of your code, and thus introducing asynchrony to your program.
  - in JS prior to ES6, you don’t have control over scheduling operations. So you don’t control what the order in which code executes. ES6 promises changes that. JS didn’t do/know anything about asynchronous code. That's because the event loop that acts as a queue (first-in, first-out) of code/functions, __waiting__ to be executed & allows asynchronous code wasn't a javascript mechanism.
  - The idea for Promises: What if instead of wrapping our code in a callback (the part of our code that we want to execute Later) & handing it over to another party, we could expect the third party to return us a capability to know when its task finishes, and then our code could decide what to do next.
  - A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
  - Promise.all(): When 2 values A & B, are needed in an operation & A is available now & B available later (through an async callback), the operation will fail because B is undefined at the moment it runs. To circumvent this using callbacks, you have to make both operations become available through async.
    - With Promises use Promise.all([ .. ]): it takes an array of promises, and returns a new promise that waits on them all to finish.
  - Async/Await is just syntax sugar for Promises ie A more elegant way to handle promises. `async` keyword sets up a function to use the `await` keyword. Async functions returns a promise & the await keyword says 'if a function returns a promise, then wait for it to resolve before moving on.'
  - React.js is just a of Javascript Library used to create regular HTML/CSS through the use of sth called components. In other words it's used to render the User Interface (UI) of modern web applications. Components are at the heart of react - everything in react is a component. React uses it's own language JSX that allows you to write HTML directly within Javascript.
    - A component is a representation of HTML using the react JSX language. 
  - `catch()` is short for `then(null, failureCallback)`.
  - Always return results, otherwise callbacks won't catch the result of a previous promise.
  - Error Propagation: Promises solve a fundamental flaw with the callback pyramid of doom, by catching all errors,
	even thrown exceptions and programming errors. A promise chain stops if there's an exception, looking down the chain for catch handlers instead
  - Common JS Modules:  a system implemented in Nodejs for sharing (requiring) code between different files. The ES6 version is `import`.
    - const express require("express"); // Common JS Modules
    - import express from 'express'     // ES6 style
  - Deploying Website to Heroku from the command line
   - How Promises solves the challenges with the callback pattern of async. for example 'Once a promise has fulfilled/resolved or rejected, it can not change'
  - Promise.resolve(): Its used to create a promise from a non-promise object. If you pass an immediate, non-Promise, non-thenable value to Promise.resolve(..) , you get a promise that's fulfilled with that value. The following code creates 2 identical promises.
  ``` javascript
		// p1 & p2 are identical
		var p1 = new Promise( function(resolve,reject){
			resolve( 42 );
		} );
		var p2 = Promise.resolve( 42 );
  ```
	- nodemon module is a CLI tool that automatically restarts the server anytime changes are made to a file.
	- HTTP is stateless by default: ie it doesn’t share information on 2 separate requests. so if a login request contained your login details, a 2nd request to view your profile page does not have any data (knowledge) on who the user is.
- Challenges
  - [YDKJS: Async & Perfomance](https://github.com/getify/You-Dont-Know-JS/blob/master/async%20&%20performance/README.md#you-dont-know-js-async--performance) is too abstract that you might get lost quickly but it's great to get a deeper understanding of Promises. 
  - difficulty understanding the passport oAuth process. something I already did with FCC :smh:


### Week Three
***
- What i did:
  - Applied for FCC JAMstack hackathon
  - Finished YDKJS: Async&Performance, chapter on Promises.
  - Following [Node with React Tutorial Project](https://github.com/intOppong/software_engineer_journey/blob/dev/tutorial_projects/README.md) using the MERN stack: 
		- Added MongoDB & Mongoose to Project to save user data from oAuth
		- Development & Production Keys, Generated react app using create-react-app
		- used `concurrently` npm module to start up 2 servers togheter
		- React Router Setup & installed Materialize UI
	- Completed FCC Tutorials on React & Redux
	- Read MDN docs on ES6 Classes
- What I Learnt
	- a beneficial side effect of wrapping Promise.resolve(..) around any function's return value (thenable or not) is that it's an easy way to normalize that function call into a well-behaving async task. If foo(42) returns an immediate value sometimes, or a Promise other times, Promise.resolve( foo(42) ) makes sure it's always a Promise result. And avoiding Zalgo makes for much better code.
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
			})
		 .then(function(val){
		  console.log( val );           // 'ydkjs' - resume operation
		 })
		 ```
	- `Promise.all([ .. ])` & `Promise.race[ .. ]` Patterns. The former takes an array of promises, and returns a new promise that waits on them all to finish regardless of the order. The main promise returned from Promise.all([ .. ]) will only be fulfilled if and when all its constituent promises are fulfilled else the promise is immediately rejected. The fulfillment message from Promise.all([ .. ]) is an array of all the fulfillment messages from the passed in promises in the same order as specified. Unlike `Promise.all([ .. ])`,  `Promise.race([ .. ])` waits for the first async to complete then returns just that one, ignoring the others. Both these Patterns passes each value in the array through Promise.resolve() which returns a promise.
	- A function's object ie function.prorotype has a read only `name` property indicates the function's name as specified when it was created or `anonymous` for functions created anonymously. 
	- A function itself can have properties listed on it just like the function.prototype object ie 
	```javascript
	 function Person() {console.log('I'm a function)}
	 Person.age = 10;
	 Person.prototype.age = 20;
	```
	- You shouldn't require mongoose models in multiple files. When running mongoose in a test env (running some mocha test) & require your models in multiple files, your model files will be required into the project multiple times & mongoose assumes you attempting to Load in multiple models of the same name. The solution is to: 
		- Require the model class in the entry file eg index.js. Once required, the model class then loads the schema into mongoose. Hence mongoose is alreadly aware of the model class, so pull the model out of mongoose using `mongoose.model(<modelName>)`
	- create-react-app (CRA) has it's own built-in server for running the client. CRA will bundle together your frontend files & produce static files for production so that the server will not be needed in production.
	- __Routing Stumbling Block:__ since CRA has it’s own server, relative links <a> will be added to the domain of the front-end server not our backend server & this can cause unwanted problems. For example, the sign in (eg `/auth/google`) routes are defined in the backend server & accessing the them from the client server will lead somewhere else since they both have different servers hence domains ie
		- backend domain: http://localhost:5000 -> route: `/auth/google`
		- frontend domain: http//localhost:3000 -> route: `/auth/google`
	-  __Solution:__ CRA has a built in proxy that can be configured to forwards requests from the client server to the backend server in development mode. This way you don't have to use absolute links in your html files
	- Learnt about the 3 different Types of react components: Stateless Functional Components, Stateless ES6 Class Components & Stateful Components
	- pasing state as props to child components
	- Component Lifecycle Methods/hooks: They're special methods that provide opportunities to perform actions at specific points in the lifecycle of a component. They include `componentWillMount()`, `componentDidMount()` etc. the lifecycle of a component.
- Challenges
	- It's difficult to understand passport's workflow
- Thoughts
	- I’m starting to like all this theoretical stuff from reading YDKJS Promises. Its becoming cool; I even liked reading about "what's proper name: resolve or fulfilled."

### Week Four
***
- What i did:
  - more on ES6 Classes: Extends & Super keywords
  - Going through Software Development Steps: defining the purpose of the next project, Who the users are, coming up with initial user stories, listing initial features, The User/Screen Flow through the app ie steps the user goes through to accomplish a task, among other things
  - Continued with Stephen Grider's [Node with React Tutorial Project](https://github.com/intOppong/software_engineer_journey/tree/dev/tutorial_projects): Redux Thunk, react-redux: connect, react-router: Link, Handling Payments with Stripe, Discussion about where to build the client side: Deployment Options, Survey form database setup, Setting up Sendgrid as Email Provider, Planning the Components Structure/Relationships for the survey form, Using Redux-Forms to create & manage the state of the Forms
  - Finished FCC React-Redux Lessons
- What I Learnt
	- [why do we have to bind prototype methods to class constructors in react?](https://medium.freecodecamp.org/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb)
	- `extends`: syntax sugar for establishing the [[Prototype]] delegation link between two function prototypes.
		- `Bar` extends `Foo`, means to link their [[Prototype]] ie `Bar.prototyp`e to `Foo.prototype`
		- additionally, the actual `Bar()` class/function is linked to `Foo()` class/method. this is useful to static properties
	- `super`: In the constructor, super automatically refers to the “parent constructor”. In methods, super means the parent's .prototype object.
		- you cannot access `this` until super(..) has been called
	- If no constructor is specified when a Child class extends a Parent, the Parent's constructor is called by default for the child constructor. ie a default constructor that calls the parent's constructor is placed there by default: `constructor() {super()}`
	- If a Constructor is specified, you are required to call  super() explicilty.
	- Even when using redux, you can still give your Components local state as & when needed.
	- React-Redux: redux & react were built independently so the react-redux library helps us connect the two. That is, to seamlessly integrate redux’s state management into a React application. The 2 helpers provided by react-redux are the `<Provider />` Component & `connect` method.
		- `<Provider />` is a React Component, that only serves the purpose of providing the store to it’s children (Your Application). The <Provider /> is given the store as a prop.
		- connect method, connects a Component (within the <Provider /> of course) to Redux Store, so the component can modify data (by dispatching action creators) & retrieve data (by obtaining the current state of the store)
	- Action Creators by default immediately return an action (an object) & the dispatch() function automatically sends the action to the reducers.
		- Redux Thunk is a middleware in the redux library that gives control of the dispatch() function to us (the developer) if an action creator returns a function instead of an action object, so we can decide when to dispatch the action - usually after some Asynchronous code.
	- Stripe's API, client side & server-side libraries
	- Sending emails to clients using an email provider.
	- Mongodb has a limit size of 4mb on each document. So even though you can nest related documents (like Comments `belongs to` Users), it's wise to separate them & link them using foreign keys. eg in mongoose you can add add relationship fields as such:
	```javascript
	  Comments({
	    content: String
	    date_created: Date
	    // a reference to the id field in the Users Collection
	    _user: {type: Schema.Type.ObjectId, ref: 'User'}  
	  })
	```
- Challenges
  - was going through the Software-dev steps & got stuck/confused on a lot of the DB & UI stuff 
  - mapDispatchToProps() gives us access to the dispatch function so you can dispatch the action at any time you want (immediately or later after an async operation). so do we need reduxThunk middleware when we use mapDispatchToProps ()?
  - from the FCC lessons: I understand that we need a Container & Presentational Component but I didn't really understand why we defined a container component by assigning the return value of connecting the Presentational Component. ie `const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);`
  - I tried to start lessons on nodeJs Server but it was way too advanced at the moment & it deviates from my priority of building a full stack app. All I need to know atm is Node-Express, React, MongoDb.



