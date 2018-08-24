# Daily Log

### Monday
- What i did
  - read mongodb node driver's docs on [CRUD](http://mongodb.github.io/node-mongodb-native/3.1/tutorials/crud/)
  - read mdn's doc on Javascript [Destructuring Assignments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- What i learnt
  - Multiple interesting ways to use Object Destructuring. Example: Nested Object & Array Destructuring
    ```javascript
      var people = [
        {name: 'Mike',family: [{mother: 'Jane',father: 'Harry',sister: 'Samantha'}],other: {age: 35}},
        {name: 'Tom',family: [{mother: 'Norah',father: 'Richard',brother: 'Howard'}],other: {age: 25}}
      ];
      
      for (var {name: n, family: [{father: f}], other: {age: a}} of people) {
        console.log('Name: ' + n + ', Age: ' + a + ', Father: ' + f);
      }
    ```
  - findAndModify(), findAndRemove & update() are deprecated from node Driver
- Challenges
  - Don't understand why this destructuring code works. It wasn't in the mdn docs
    ```javascript
      const obj = { a: 5, b: 6, c: 7  };
      const picked = (({ a, c }) => ({ a, c }))(obj);
      console.log(picked); // { a: 5, c: 7 }
    ```
- Thoughts
  - 

### Tuesday
- What i did
  - started doing FCC Lectures on Regex.
- What i learnt
  - Regular expressions just checks if the pattern is in the given string. It does not return the matched string if any. Use  `match()` to return the matched part of the string & `test()` to check if the pattern matched anything in our string.
- Challenges.
  - Does each pattern start the search from the beginning of the string or continue from where the last pattern found it's match.
- Thoughts
  -

### Wednesday
- What i did
  - Continued FCC lectures on Regex.
- What i learnt & Challenges
  - 
- Thoughts
  - 

### Thursday
- What i did
  - Finished FCC lectures on Regex
  - Watched a regex tutorial on [youtube](https://www.youtube.com/watch?v=sa-TUpSx1JA)
- What i learnt & Challenges
  - Groups: 1) allow us to group several different character/patterns & match them as one
  ```javascript
    let str = 'https://www.google.com http://coreyms.com https://youtube.com https://www.nasa.gov'
     /https?:\/\/(www\.)?\w+\.\w+/  // The whole 'www.' is optional not just one character.
  ```
  - Capture Groups: allows us to capture & USE information from a group. each Captured group have numbers assigned to them.
  `\0` is the default & represents everything that was captured ie the entire match. `\1`, `\2` and so on represents each grouped pattern. The match() returns an array which contains all the groups in an array with their index corresponding to their group numbers.
  ```javascript
    let str = 'Camp Nou'
    let regex = /([a-zA-Z]+)\s([a-zA-Z]+)/
    str.match(regex)                        // [0: 'Camp Nou', 1: Camp, 2: Nou]
    str.replace(regex, '$2 $1')             // returns: Nou Camp
  ```
  - [Lookarounds (lookahead & lookbehind)](http://rexegg.com/regex-lookarounds.html): It's just an assertion that checks that a character or string follows, or precedes (exists) at a specific position in the string. Lookarounds does not match/return it - using match() on a regex of lookarounds will return an empty string. __NOTE: At the end of a lookaround, the regex engine hasn't moved on the string.__ Lookarounds can be arranged in any order. It doesn't matter which condition we check first. Example: This lookahead validates a password & matches it at the end.
``` javascript
 /^(?=\w{6,10}$)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]{3,})(?=\D*\d{1,})\w{6,10}/ 
   /*
   - The password must have between six and ten word characters. 
   - It must include at least one lowercase character
   - It must include at least three uppercase characters
   - It must include at least one digit
   */
```


### Friday
- What i did
  - 
- What i learnt & Challenges
  - 
