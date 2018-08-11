
# FCC Information Security & Quality Assurance Project:

## Content
- [Project 1](#metric-imperial-converter)
- [Project 2](#issue-tracker)
- [Project 3](#personal-library)


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

## Challenges
- Issue Tracker Project
  - At the start of the project, I couldn't access my routes in `MongoConnect.connect()`.
  - During the project, it took a while to figure out that I had to retrieve the existing document to be updated & compare it with the user modified document before updating.
  - Even Though the functional tests passed, I don't feel I did it right.
- Personal Library Project
  - Like with the Issue Tracker project, functional test is a problem
