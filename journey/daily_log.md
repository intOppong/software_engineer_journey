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
  - 
- What i learnt & Challenges
  - 
- 


### Friday
- What i did
  - 
- What i learnt & Challenges
  - 
