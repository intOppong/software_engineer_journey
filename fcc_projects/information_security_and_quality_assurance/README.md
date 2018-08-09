
# FCC Information Security & Quality Assurance Project:

## Content
- [Project 1](#metric-imperial-converter)


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

***

## What I Learnt
- Writing numbers with `e`: [link](https://javascript.info/number).
  - Anything that can coerced into a number is considered a number by isNaN(). ie the parameter is coerced into a number before isNaN runs. example `isNaN(null) => false` ie null is a number. `isNaN(undefined) => true` ie undefined is not a number
  - [Null vs Undefined](https://stackoverflow.com/questions/6604749/what-reason-is-there-to-use-null-instead-of-undefined-in-javascript): Null and undefined are essentially two different values that mean the same thing. My Preference is undefined. Here's Why
    - null is a data type but `typeof null` returns an `object` (this is a bug). This can cause issues in comparison statements.
    - an undefined varialbe (a declared variable without a value) has the value `undefined` by default so why change that.
    - null can be coerced to 0 & cause unexpected results. null = 0, undefined = NaN
  - I think array.forEach() allows you to write your own custom handler to be executed for each array element like JS provides for you with filter(), map(), reduce()


## Challenges
-
