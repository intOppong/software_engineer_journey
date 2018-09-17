# Weekly Log

### Overview
- Week 1
  - summary: No coding, Planning, & getting my crypto routine back on track. Wanted my next project to be crypto based but didn't happen
- Week 2
  - summary:

### Week 1
- What I did:
  - finding my Next Project: Wanted it to be crypto based but my crypto project seemed too big with no clear targets & a friend asked me to help with a News/Blog for his twitter account so I decided to go  
  - working on my crypto portfolio.
  - Searching for TP thats a good fit: React, Node, Express
- What I Learnt
  - 
- Challenges
  - 

### Week 2
- What I did:
  - reading jquery docs on Events & AJAX. Then later watched a video on [Why not to use jquery?](https://www.youtube.com/watch?v=pk3tsynNZ0w). :angry: But  I’ve already learnt the alternative: vanilla JS :satisfied:
  - reading [YDKJS: Async & Perfomance](https://github.com/getify/You-Dont-Know-JS/blob/master/async%20&%20performance/README.md#you-dont-know-js-async--performance) to understand the what & why of Promises.
  - Watched some video tutorials on Promises & async/wait. [link1](https://www.youtube.com/watch?v=PoRJizFvM7s), [link2](https://www.youtube.com/watch?v=QO4NXhWo_NM&index=1&list=PLRqwX-V7Uu6bKLPQvPRNNE65kBL62mVfx) 
  - Started following FCC's [react](https://learn.freecodecamp.org/front-end-libraries/react) tutorials.
  - Found a [Tutorial Project](https://www.udemy.com/node-with-react-fullstack-web-development/) to follow as a guide for my next Project
  - read MDN's Tutorials on [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  - Started Following Stephen Grider's [Node with React](https://www.udemy.com/node-with-react-fullstack-web-development/?siteID=a1o1REVAqJg-SH5_dN_AYT64vuTm1wD2.A&LSNPUBID=a1o1REVAqJg) Tutorial Project.
    - setup a new express/node app
    - Deployed website to Heroku 
    - started google oAuth 
- What I Learnt & Challenges
  - [Why AJAX was needed in the first place](http://learn.jquery.com/ajax/)
  - JSON with Padding (JSONP) is a work around develop to circumvent the Same-Origin Policy & make ajax request to other domains
  - Cross Origin Resource Sharing (CORS) is a more recent & standardized technology, used by browsers to allow Ajax requests to different domains
  the `success` option in the ajax config object & `.done()` method on the returned xmlHttpRequest Object serves the same purpose.
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

### Week 3
- What i did:
  - 
- What I Learnt & Challenges
  - 

### Week 4
- What i did:
  - 
- What I Learnt
  - 
- Challenges
  - 
- My Thoughts
  - 
