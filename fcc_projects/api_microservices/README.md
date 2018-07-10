
# FCC API & Microservices Project:

## Content
* [What I Learnt](#what-i-learnt)
* [Project 1](#timestamp-microservice)
* [Project 2](#request-header-parser-microservice)

## What I Learnt
* Managing Packages with npm
* NodeJs with ExpressJs
  * Routing
  * Middleware
  * Creating an API
* Managing a MongoDB with Mongoose
* More Javascript
  * Date Object

## Challenges
*

## My Thoughts
*

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
