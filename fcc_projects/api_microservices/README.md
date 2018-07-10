
# FCC API & Microservices Project:

## Content
* [What I Learnt](#what-i-learnt)
* [Project 1](#project-1)

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

# Project 1: Timestamp Microservice

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
