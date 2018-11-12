
# FCC Information Security & Quality Assurance Project:

## Content
- [Project 1](#metric-imperial-converter)
- [Project 2](#issue-tracker)
- [Project 3](#personal-library)
- [Project 4](#stock-price-checker)
- [Project 5](#anonymous-message-board)


# Metric Imperial Converter

Create a Metric/Imperial Converter

## User stories :

1. I will help prevent the client from trying to guess(sniff) the MIME type.
2. I will prevent cross-site scripting (XSS) attacks.
3. I can GET /api/convert with a single parameter containing an accepted number and unit and have it converted.
4. Hint: Split the input by looking for the index of the first character.
5. I can convert 'gal' to 'L' and vice versa. (1 gal to 3.78541 L)
6. I can convert 'lbs' to 'kg' and vice versa. (1 lbs to 0.453592 kg)
7. I can convert 'mi' to 'km' and vice versa. (1 mi to 1.60934 km)
8. If my unit of measurement is invalid, returned will be 'invalid unit'.
9. If my number is invalid, returned with will 'invalid number'.
10. If both are invalid, return will be 'invalid number and unit'.
11. I can use fractions, decimals or both in my parameter(ie. 5, 1/2, 2.5/6), but if nothing is provided it will default to 1.
12. My return will consist of the initNum, initUnit, returnNum, returnUnit, and string spelling out units in format {initNum} {initial_Units} converts to {returnNum} {return_Units} with the result rounded to 5 decimals.
13. All 16 unit tests are complete and passing.
14. All 5 functional tests are complete and passing.

#### Example usage:
- /api/convert?input=4gal
- /api/convert?input=1/2km
- /api/convert?input=5.4/3lbs
- /api/convert?input=kg

#### Example Return
- {initNum: 3.1, initUnit: 'mi', returnNum: 5.0000008, returnUnit: 'km', string: '3.1 miles converts to 5.00002 kilometers'}

# Issue Tracker

Create an Issue Tracker

## User stories :

1. Prevent cross site scripting(XSS attack).
2. I can POST /api/issues/{projectname} with form data containing required issue_title, issue_text, created_by, and optional assigned_to and status_text.
3. The object saved (and returned) will include all of those fields (blank for optional no input) and also include created_on(date/time), updated_on(date/time), open(boolean, true for open, false for closed), and \_id.
4. I can PUT /api/issues/{projectname} with a \_id and any fields in the object with a value to object said object. Returned will be 'successfully updated' or 'could not update '+\_id. This should always update updated_on. If no fields are sent return 'no updated field sent'.
5. I can DELETE /api/issues/{projectname} with a \_id to completely delete an issue. If no \_id is sent return '\_id error', success: 'deleted '+\_id, failed: 'could not delete '+\_id.
6. I can GET /api/issues/{projectname} for an array of all issues on that specific project with all the information for each issue as was returned when posted.
7. I can filter my get request by also passing along any field and value in the query(ie. /api/issues/{project}?open=false). I can pass along as many fields/values as I want.
8. All 11 functional tests are complete and passing.

#### Example usage:
- /api/issues/{project}
- /api/issues/{project}?open=true&assigned_to=Joe

#### Example Return
- [{"\_id":"5871dda29faedc3491ff93bb","issue_title":"Fix error in posting data","issue_text":"When we post data it has an error.","created_on":"2017-01-08T06:35:14.240Z","updated_on":"2017-01-08T06:35:14.240Z","created_by":"Joe","assigned_to":"Joe","open":true,"status_text":"In QA"},...]

# Personal Library

Create a Personal Library

## User stories :

1. Nothing from my website will be cached in my client as a security measure.
2. I will see that the site is powered by 'PHP 4.2.0' even though it isn't as a security measure.
3. I can post a title to /api/books to add a book and returned will be the object with the title and a unique \_id.
4. I can get /api/books to retrieve an aray of all books containing title, \_id, & commentcount.
5. I can get /api/books/{_id} to retrieve a single object of a book containing title, \_id, & an array of comments (empty array if no comments present).
6. I can post a comment to /api/books/{_id} to add a comment to a book and returned will be the books object similar to get /api/books/{_id}.
7. I can delete /api/books/{_id} to delete a book from the collection. Returned will be 'delete successful' if successful.
8. If I try to request a book that doesn't exist I will get a 'no book exists' message.
9. I can send a delete request to /api/books to delete all books in the database. Returned will be 'complete delete successful' if successful.
10. All 6 functional tests required are complete and passing.

# Stock Price Checker

Create a Stock Price Checker

## User stories :

1. Set the content security policies to only allow loading of scripts and css from your server.
2. I can GET /api/stock-prices with form data containing a Nasdaq stock ticker and recieve back an object stockData.
3. In stockData, I can see the stock(string, the ticker), price(decimal in string format), and likes(int).
4. I can also pass along field like as true(boolean) to have my like added to the stock(s). Only 1 like per ip should be accepted.
5. If I pass along 2 stocks, the return object will be an array with both stock's info but instead of likes, it will display rel_likes(the difference between the likes on both) on both.
6. A good way to receive current price is the following external API(replacing 'GOOG' with your stock): https://finance.google.com/finance/info?q=NASDAQ%3aGOOG
7. All 5 functional tests are complete and passing.

#### Example usage:
- /api/stock-prices?stock=goog
- /api/stock-prices?stock=goog&like=true
- /api/stock-prices?stock=goog&stock=msft
- /api/stock-prices?stock=goog&stock=msft&like=true

#### Example Return
- {"stockData":{"stock":"GOOG","price":"786.90","likes":1}}
- {"stockData":[{"stock":"MSFT","price":"62.30","rel_likes":-1},{"stock":"GOOG","price":"786.90","rel_likes":1}]}

# Anonymous Message Board

Create an Anonymous Message Board

## User stories :

1. Only allow your site to be loading in an iFrame on your own pages.
2. Do not allow DNS prefetching.
3. Only allow your site to send the referrer for your own pages.
4. I can POST a thread to a specific message board by passing form data text and delete_password to /api/threads/{board}.(Recomend res.redirect to board page /b/{board}) Saved will be \_id, text, created_on(date&time), bumped_on(date&time, starts same as created_on), reported(boolean), delete_password, & replies(array).
5. I can POST a reply to a thead on a specific board by passing form data text, delete_password, & thread\_id to /api/replies/{board} and it will also update the bumped_on date to the comments date.(Recomend res.redirect to thread page /b/{board}/{thread\_id}) In the thread's 'replies' array will be saved \_id, text, created_on, delete_password, & reported.
6. I can GET an array of the most recent 10 bumped threads on the board with only the most recent 3 replies from /api/threads/{board}. The reported and delete_passwords fields will not be sent.
7. I can GET an entire thread with all it's replies from /api/replies/{board}?thread\_id={thread\_id}. Also hiding the same fields.
8. I can delete a thread completely if I send a DELETE request to /api/threads/{board} and pass along the thread\_id & delete_password. (Text response will be 'incorrect password' or 'success')
9. I can delete a post(just changing the text to '[deleted]') if I send a DELETE request to /api/replies/{board} and pass along the thread\_id, reply\_id, & delete_password. (Text response will be 'incorrect password' or 'success')
10. I can report a thread and change it's reported value to true by sending a PUT request to /api/threads/{board} and pass along the thread\_id. (Text response will be 'success')
11. I can report a reply and change it's reported value to true by sending a PUT request to /api/replies/{board} and pass along the thread\_id & reply\_id. (Text response will be 'success')
12. Complete functional tests that wholely test routes and pass.

***

## What I Learnt
- Writing numbers with `e`: [link](https://javascript.info/number).
- Anything that can coerced into a number is considered a number by isNaN(). ie the parameter is coerced into a number before isNaN runs. example `isNaN(null) => false` ie null is a number. `isNaN(undefined) => true` ie undefined is not a number
- [Null vs Undefined](https://stackoverflow.com/questions/6604749/what-reason-is-there-to-use-null-instead-of-undefined-in-javascript): Null and undefined are essentially two different values that mean the same thing. My Preference is undefined. Here's Why
  - null is a data type but `typeof null` returns an `object` (this is a bug). This can cause issues in comparison statements.
  - an undefined varialbe (a declared variable without a value) has the value `undefined` by default so why change that.
  - null can be coerced to 0 & cause unexpected results. null = 0, undefined = NaN
- I think array.forEach() allows you to write your own custom handler to be executed for each array element like JS provides for you with filter(), map(), reduce()
- You have to place the port in the `MongoClient.connect` definition in order to access routes defined in `MongoClient`.
  ``` javascript
  mongo.connect(process.env.DATABASE, (err, db) => {
    // ROUTES
    app.get('/', (req, res) => {
      res.send('Homepage')
    })
    // PORT
    app.listen(3000, () => console.log("Listening on port 3000" ) );
  });
  ```
- When Creating a document using `InsertOne()` & it’s family, the newly inserted Document is passed as a parameter(say `result`) to the callback . It can be accessed on the `ops` property of the `result` object. ie `result.ops[0]`
- Various ways to check for an empty object. [Link](https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object).
- URL encoding: URL encoding converts characters into a format that can be transmitted over the Internet. URL encoding replaces unsafe ASCII characters (like spaces) & non-ASCII character sets with a "%" followed by two hexadecimal digits.[Link](https://www.w3schools.com/tags/ref_urlencode.asp)
- when using Helmet.js `contentSecurityPolicy` add the "unsafe-inline" keyword to the respective `directive` properties to allow inline scripts & css to execute. Example:
  ```JavaScript
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", 'https://code.jquery.com'],
      styleSrc: ["'self'", "'unsafe-inline'"]
    }
  ```
- Data passed to the `get` request through the jquery-ajax is accessed on the `req.query` object.
- Any variables of same name are grouped into an array in the `query` object. Example   
```JavaScript
  // Given the url
  'example.com?stock=goog&stock=msft&like=true'

  req.query.stock // returns: ['goog', 'msft']
```
- CORS (Cross Origin Requests): a specification that enables truly open access across domain boundaries.
  - Why Cors: Currently, client-side scripts (e.g., JavaScript) are prevented from accessing much of the Web of Linked Data due to "same origin" restrictions implemented in all major Web browsers.
  - “Same Origin” Policy allows ajax request only to make request to resources within the same origin
- An introduction to making API Calls. [Link](https://www.taniarascia.com)
  - NOTE: __`this.responseText` contains the actual API response but `this.response` works too on the client but not on the server from my experience.__
- How to access a (last) property's value in an object
  ```JavaScript
    var obj = { 'a' : 'apple', 'b' : 'banana', 'c' : 'carrot' };
    obj[Object.keys(obj)[Object.keys(obj).length - 1]];
  ```
- Learnt about the MongoDB update Result Object. [Link](https://www.w3schools.com/nodejs/nodejs_mongodb_update.asp)
- New way of using Closure: Call the child function from the parent function as the parent function is executing - _didn’t think of that_. Always thought the child function has to be called after the parent function is done executing.
  ```javascript
    var parent = function() {
      var a = 'A';
      console.log('parent', a);
      child();                    // called from within parent function
      function child () {
        console.log('child', a);
      }
    }
    parent();
  ```

## Challenges
- Even Though the functional tests passed, I don't feel I did it right.
- Issue Tracker Project
  - At the start of the project, I couldn't access my routes in `MongoConnect.connect()`.
  - During the project, it took a while to figure out that I had to retrieve the existing document to be updated & compare it with the user modified document before updating.
- Personal Library Project
- Stock Price Checker Project
  - It was difficult to get the api call to work from server-side. Not knowing I only had to change `this.response` to `this.responseText`
  - The stock collection I created had some weird default indexes which prevented me from saving multiple documents.
- Anonymous Message Board Project
  - mongoDB update operator $[<identifier>] wasn't working in my project. Not knowing I was using earlier version of mongo (2.2). $[] requires version 3.x

My Thoughts
- As of Issue Tracker Project, I just wanted to finish the InfoSec projects & that’s making me rush through the coding process leading to more bugs & hence more time spent on the project.
- I’m gonna comment (pseudocode) every part of my code because I’m __"Lazy"__ & I think that’s a good thing. It’ll make reading, searching & debugging the code easier. As a programmer you are supposed to make your (& others) job easier. And also Good Comments means you understand the code.
