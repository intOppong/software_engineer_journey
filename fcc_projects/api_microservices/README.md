
# FCC API & Microservices Project:

## Content
* [Project 1](#timestamp-microservice)
* [Project 2](#request-header-parser)
* [Project 3](#url-shortener)
* [Project 4](#exercise-tracker)
* [Project 5](#file-metadata)
* [What I Learnt](#what-i-learnt)
* [Challenges](#challenges)


# Timestamp Microservice

Create a Timestamp API

## User stories :

1. The API endpoint is `GET [project_url]/api/timestamp/:date_string?`
2. A date string is valid if can be successfully parsed by `new Date(date_string)` (JS) . Note that the unix timestamp needs to be an **integer** (not a string) specifying **milliseconds**. In our test we will use date strings compliant with ISO-8601 (e.g. `"2016-11-20"`) because this will ensure an UTC timestamp.
3. If the date string is **empty** it should be equivalent to trigger `new Date()`, i.e. the service uses the current timestamp.
4. If the date string is **valid** the api returns a JSON having the structure
`{"unix": <date.getTime()>, "utc" : <date.toUTCString()> }`
e.g. `{"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}`.
5. If the date string is **invalid** the api returns a JSON having the structure `{"unix": null, "utc" : "Invalid Date" }`. It is what you get from the date manipulation functions used above.

#### Example usage:
* https://my-fcc-timestamp-challenge.glitch.me/api/timestamp/2018-07-09
* https://my-fcc-timestamp-challenge.glitch.me/api/timestamp/1531094400000

#### Example output:
* { unix: 1531094400000, utc: "Mon, 09 Jul 2018 00:00:00 GMT" }

# Request Header Parser
Create a Request Header Parser API

### User stories:
1. I can get the IP address, preferred languages (from header `Accept-Language`) and system infos (from header `User-Agent`) for my device.

#### Example usage:
* [base_url]/api/whoami

#### Example output:
* `{"ipaddress":"::ffff:127.0.0.1","language":"en-US,en;q=0.9,th;q=0.8,la;q=0.7","software":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36"}`

# Url Shortener
Create a Url Shortener API

### User stories:
1. I can POST a URL to `[project_url]/api/shorturl/new` and I will receive a shortened URL in the JSON response. Example : `{"original_url":"www.google.com","short_url":1}`
2. If I pass an invalid URL that doesn't follow the valid `http(s)://www.example.com(/more/routes)` format, the JSON response will contain an error like `{"error":"invalid URL"}`. *HINT*: to be sure that the submitted url points to a valid site you can use the function `dns.lookup(host, cb)` from the `dns` core module.
3. When I visit the shortened URL, it will redirect me to my original link.

#### Creation Example:

POST [project_url]/api/shorturl/new - body (urlencoded) :  url=https://www.google.com

#### Usage:

[this_project_url]/api/shorturl/3

#### Will redirect to:

http://forum.freecodecamp.com

# Exercise Tracker
Create an Exercise Tracker API

### User stories:
1. I can create a user by posting form data username to /api/exercise/new-user and returned will be an object with username and id
2. I can get an array of all users by getting api/exercise/users with the same info as when creating a user.
I can add an exercise to any user by posting form data userId(id), description, duration, and optionally date to /api/exercise/add. If no date supplied it will use current date. Returned will the the user object with also with the exercise fields added.
3. I can retrieve a full exercise log of any user by getting /api/exercise/log with a parameter of userId(id). Return will be the user object with added array log and count (total exercise count).
4. I can retrieve part of the log of any user by also passing along optional parameters of from & to or limit. (Date format yyyy-mm-dd, limit = int)

# File Metadata
Create a file metadata API

### User stories:
1. I can submit a form that includes a file upload.
2. The from file input field has the "name" attribute set to "upfile". We rely on this in testing.
3. When I submit something, I will receive the file name and size in bytes within the JSON response

### Usage
- Go to the main page, and upload a file using the provided form.

### Hint
- To handle the file uploading you should use the [multer](https://www.npmjs.com/package/multer) npm package.

***

## What I Learnt
* `typeof` returns a string so be careful of comparison statements involving `typeof`
    ``` javascript
    var str = undefined
    ( typeof str === undefined ) // false
    ( typeof str === "undefined" ) // true
   ```
* A note on URL string parameter. The addition of a `?` at the end of the parameter allows the request is forwarded even if the parameter string is empty
  ``` javascript
    https://freecodecamp.com/timestamp/:string    // cannot forward request when string is empty
    https://freecodecamp.com/timestamp/:string?  // forward request even if string is empty
  ```
* Async with Callbacks (Callback Hell): Most of the database methods are async so I had to keep placing more async methods within another because i had to make sure one particular code runs before another resulting in a whole lot of nesting. It's a mess.
  ``` javascript
    // validate url before saving
    dns.lookup('url', (err, address) => {
	    // count the number of document in the db collection to get auto_increment value before saving it
	    ShortUrl.count({}, function (err, count) {
		    // save document to database
	      shortUrl.save((err, data) => {
	    	  // find document & return it
	        ShortUrl.findOne({}, (err, data) => {

	        });
	      });
	    });
    });
  ```
* Learnt a couple of JS string methods: split(), search(), match()
* dns.lookup() expect a parsed url of this format `freecodecamp.com` OR `www.freecodecamp.com` else it returns an error
  * http(s)://www.freecodecamp.com, www.freecodecamp.com/home results in an error
* How MongoDB handles unique index: If a document does not have a value for the indexed field in a unique index, the index will store a null value for this document. Because of the unique constraint, MongoDB will only permit one document that lacks the indexed field. If there is more than one document without a value for the indexed field or is missing the indexed field, the index build will fail with a duplicate key error. [link](https://stackoverflow.com/questions/24430220/e11000-duplicate-key-error-index-in-mongodb-mongoose)
* Javascript Object Deconstruction: used to get a subset of an object's properties.
  ```javascript
    let obj = { a: 5, b: 6, c: 7  };
    let picked = (({ a, c }) => ({ a, c }))(obj);
    console.log(picked)   // {a: 4, c: 7}
  ```
* Mongoose SchemaType Mixed & Array:
  * Arrays implicitly have a default value of [] (empty array). && empty arrays is equivalent to the Mixed type
  * Mixed types won’t persist when you save/create them unless you add .markmodified() to alert mongoose.
* Some Modules I used
  * [accept](https://github.com/jshttp/accepts): used it to access the request header.
  * [dns](https://nodejs.org/api/dns.html): It's a core node module. Used the dns.lookup() method to check if the submitted url points to a valid site.


## Challenges
* took at while to find a way to count documents in a collection Model.count() works.
* Multiple Async with callbacks is a headache to figure out.
* In the exercise Tracker Project
  * Array of objects did not persist, even after adding .markmodified() as the doc specified. maybe i’m using the wrong  version.
  * In previous projects db collections were created just fine, but now I have to add a unique property to any one of the schematypes for the collection to be created in the database. Created a new dabatabse & it has the same issue
