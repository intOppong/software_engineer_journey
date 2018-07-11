
# FCC API & Microservices Project:

## Content
* [Project 1](#timestamp-microservice)
* [Project 2](#request-header-parser-microservice)
* [Project 3](#url-shortener-microservice)
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

# Request Header Parser Microservice
Create a Request Header Parser

### User stories:
1. I can get the IP address, preferred languages (from header `Accept-Language`) and system infos (from header `User-Agent`) for my device.

#### Example usage:
* [base_url]/api/whoami

#### Example output:
* `{"ipaddress":"::ffff:127.0.0.1","language":"en-US,en;q=0.9,th;q=0.8,la;q=0.7","software":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36"}`

# Url Shortener Microservice
Create a Url Shortener

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
    https://freecodecamp.com/timestamp/:sttring?  // forward request even if string is empty
  ```
* Some Modules I used
  * [accept](https://github.com/jshttp/accepts): used it to access the request header.
  * [dns](https://nodejs.org/api/dns.html): It's a core node module. Used the dns.lookup() method to check if the submitted url points to a valid site.
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


## Challenges
* took at while to find a way to count documents in a collection Model.count() works.
* Multiple Async with callbacks is a headache to figure out.
    
    
    
