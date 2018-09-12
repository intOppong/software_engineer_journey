# Daily Log

### Monday
- What i did
  - reading jquery docs on Events & AJAX. Then later watched a video on [Why not to use jquery?](https://www.youtube.com/watch?v=pk3tsynNZ0w). :angry: But  I’ve already learnt the alternative: vanilla JS :satisfied:
  - reading [YDKJS: Async & Perfomance](https://github.com/getify/You-Dont-Know-JS/blob/master/async%20&%20performance/README.md#you-dont-know-js-async--performance) to understand the what & why of Promises.
- What i learnt
  - [Why AJAX was needed](http://learn.jquery.com/ajax/)
  - JSON with Padding (JSONP) is a work around develop to circumvent the Same-Origin Policy & make ajax request to other domains
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
- Challenges
  - 
- Thoughts
  - 

### Tuesday
- What i did
  - Reading about Promises from [YDKJS: Async & Perfomance](https://github.com/getify/You-Dont-Know-JS/blob/master/async%20&%20performance/README.md#you-dont-know-js-async--performance), & a a [video tutorial](https://www.youtube.com/watch?v=QO4NXhWo_NM)
- What i learnt
  - The idea for Promises: What if instead of wrapping our code in a callback (the part of our code that we want to execute Later) & handing it over to another party, we could expect the third party to return us a capability to know when its task finishes, and then our code could decide what to do next.
  - A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
  - Promise.all(): When 2 values A & B, are needed in an operation & A is available now & B available later (through an async callback), the operation will fail because B is undefined at the moment it runs. To circumvent this using callbacks, you have to make both operations become available through async.
    - With Promises use Promise.all([ .. ]): it takes an array of promises, and returns a new promise that waits on them all to finish.
- Challenges.
  - 
- Thoughts
  - The book is too abstract but is great to get a deeper understanding of Promises. So I'll add a more practical Tutorial to it.

### Wednesday
- What i did
  - 
- What i learnt & Challenges
  - 
- Thoughts
  - 

### Thursday
- What i did
  - 
- What i learnt & Challenges
  - 


### Friday
- What i did
  - 
- What i learnt & Challenges
  - 
