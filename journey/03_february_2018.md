# February 2018 Progress

## Content
* [Goals](#goals)
* [Week One](#week-one)
* [Week Two](#week-two)
* [Week Three](#week-three)
* [Week Four](#week-four)
* [My Thoughts](#my-thoughts)

### February 2018 Overview
***
* Studied a lot of new materials
* Working on [Project Three: Tower of Hanoi Solver](https://github.com/intOppong/software_engineer_journey/tree/master/projects_from_guide/project_three_tower_of_hanoi).
* Lost momentum eventually. *I somehow always lose momentum. I guess it's because I'm doing this alone & not communicating 
with anyone*
* I can complete a lot of tasks if I'm able to stay consistent.

## Goals
**February 2018 run from 4th February to 3rd March 2018. ie *"4 weeks"***

* Result Oriented Goals:
    * Complete Projects: Tower of Hanoi :x:
    * Begin Project: FCC Simon Game. :x: 
    * **Outstretched Goal**: Complete FCC Simon Game. :x:
* Process Oriented Goals:
Work Everyday averaging 10 Pomodoros a day & at least 5 Pomodoros on days where life duties call (eg: going to the hospital, helping family with work etc).

    | | No. of Working Days | Total Pomodoros | Average Pomodoro
    | --- | --- | --- | --- |
    | Full Days | 11 days | 149 | 13.5 |
    | Half Days | 6 days | 49 | 8.1|
    | Total |  4 out of 25 days | 198 |  **9.9** |
* Once per month: do two or more of the following [as per the guide](https://github.com/intOppong/software_engineer_journey/blob/master/faq.md)
    * Write up a comprehensive blog post or markdown entry in a repository detailing the high points of what you learned that month. :white_check_mark:
    * Livestream what you're working on for an hour. Or, lend a hand to someone who needs help by screen-sharing and walking them through it. :x:
    * Do any of these :white_check_mark:
      * Watch [this video](https://www.youtube.com/watch?v=4NIb9l3imAo) and [this video](https://www.youtube.com/watch?v=Eg5-tdAwclo) - on interviewing :white_check_mark:
      * Read this - on crafting a resume
      * Do one lesson from [CUST104: Business Communications](https://learn.saylor.org/course/view.php?id=345)

### Week One
***
* What I Did
  * Wrote readme for project two, worked on project two’s bugs
  * Trying out ways to make height relative/responsive to width of the element without javascript.
* What I Learnt
  * Technique to make height responsive to width: the width & the height of the element should be determined by padding only. Padding is used to set the width of the element.
    * Use Border box as the box sizing & set the width & padding to the same size. 
      ```css
        .div {
          box-sizing: border-box;
          width: 100px;
          padding: 50px; /* padding === width */
        }
      ```
* Challenges I Faced
  * Made height responsive to width but line height has some issues.

### Week Two
***
* What I Did
    * Finished with project two.
    * Started & Finished the [Tutorial Project](https://github.com/intOppong/software_engineer_journey/tree/master/tutorial_projects): 
    (Snake game) for next [Project](https://github.com/intOppong/software_engineer_journey/tree/master/projects_from_guide/project_three_tower_of_hanoi)
    (Tower of Hanoi Solver). I identified the skills I needed to learn (focus on) to do the third project: 
      * Javascript: for programming the Logic
      * HTML5 canvas: for animation
      * DOM: to access & modify the HTML document.
    * Started learning Javascript using YDKJS seires.
      * NOTE: *I read the first 4 books in November before i started the journey so I had a head start but i needed revision*
* What I Learnt
  * How line height is rendered - half leading. *Link to [article](http://jsfiddle.net/joshnh/udt3e/)*
  * I Understood vertical align more. *Link to [article](https://css-tricks.com/what-is-vertical-align/)* 
  * I learnt/revised various programming concepts such as Data types, Type Conversion, Scope, Variable declaration & Definition, Loops: for in, for…of, Arrays, 
  Functions.
* Challenges I Faced
  * I couldn’t get the project description text to be perfectly centered in project div element. 
  * Lots of jQuery errors during the snake Tutorial Project
    
### Week Three
***
* What I Did
  * learning JS: Behavioral Delegation.
  * Started & Finished: YDKJS this & Object Prototype.
  * Started learning HTML5 Canvas.
  * watched CS50 week 9 lecture on Javascript & DOM & jQuery.
  * started learning about the DOM: reading DOM Manipulation, MDN, W3school.
  * started [Project Three: Tower of Hanoi Solver](https://github.com/intOppong/software_engineer_journey/tree/master/projects_from_guide/project_three_tower_of_hanoi).
* What I Learnt
  * In JavaScript, the [[Prototype]] mechanism links objects to other objects. There are no abstract mechanisms like “classes,” 
  no matter how much you try to convince yourself otherwise. To simulate Classes, you’ll need the function.prototypes (which 
  are really just object properties in the function) of various functions to link together. So why not use regular objects.
  * Class mental models vs Delegation (OLOO) mental models.
    * Classes: use same/shared names for methods to override parent methods on child methods. Extend the capabilities of the 
    child class by adding more properties/methods
    * Delegation: doesn’t want you to override because shadowing can be an issue (i.e. it might override the wrong method or create 
    the method on a completely different object in the prototype chain) so it’s best to use a different more descriptive names 
    for methods. That's also good for Information/implementation hiding.
  * Making [animations](https://www.youtube.com/watch?v=vxljFhP2krI&index=4&list=PLpPnRKq7eNW3We9VdCfx9fprhqXHwTPXL) with the canvas.
  * Various ways to use the DOM to access/modify HTML content
* Challenges I Faced
  * Difficult to understand the Class Simulation in Javascript: function & function.prototype & constructors etc.
  * Difficulty in understand the DOM Nodes. Right from reading YDKJS this&Object Prototype,  I was looking to understand how the node 
  Objects are linked to Function Prototypes & Constructors instead all the tutorials talked about was node Objects as instances of some “class” (interface).
 
### Week Four
***
* What I Did
  * Finished writing the pseudocode for Project three.
  * Started coding the Logic for the project.
  * Set up github pages to host my frontEnd projects.
* What I learnt & Challenges I faced
  * How to host frontEnd projects on online(github).
  * I've detailed it in the project's [readme](https://github.com/intOppong/software_engineer_journey/blob/master/projects_from_guide/project_three_tower_of_hanoi/README.md)

### My Thoughts
***
* I don’t see the relevance of having -0 & 0. Then having the comparison statements say they are the same - It’s conversion to string reports them as the same.
* I don’t like that JS assumes the users intention. 
  * Example: it coerce a string value key to a number value for arrays because the user wanted to use a number value not a 
  string. ie arr["5"] == arr[5]
  *  if it's for the user’s good then in the code below, the object, not the global scope should be the "this binding" for the 
  function call because the user wanted to use the object
    ```javascript
      var a = “Global scope”
      
      function foo() { console.log(this.a) }

      obj { 
        a: “Object scope,
        foo: foo
      }

      var bar = ob1.foo
      bar() // “global scope” 
  ```
* If you don’t already understand the how Class Inheritance from the traditional OOP works (new & constructors etc) , Javascript 
Objects will be confusing because it’s built to be better than traditional Object Programming but yet has quirks that makes you 
think it’s the old way. 
* I think JS is all about Object (including function-objects & function prototypes) & creating Links between them.
* I love how simple closures/modules make implementation hiding.
  ```javascript
    function moduleOne() {
      var name = "lord Oppong";
      var age = 25;

      function Person() {
          console.log(name);
          console.log(age);
      }

      return {
          whoThis: Person,
      }
    }
    var foo = moduleOne(); 
    foo.whoThis();	// the module function Person() is hidden from the User.
  ```
  * The power of the Canvas is limited to Imagination.
  * CS50 lecture videos may be overwhelming but the point isn’t to teach the details of the topic. The lecture shows the capabilities 
  of the language or tool. It gives a pretty good overview of what the language/tool can do.
  * it was difficult to find a tutorial that explained DOM the way i wanted. A combination of MDN articles, the book - DOM Enlightenment 
  & googling helped me understand it. *i think*
  * I was going through w3school’s DOM tutorials & it was easy to grasp. It’s better to start with easier stuff first before 
  diving deep & trying to understand the WHYs. eg: read w3school’s DOM tutorials before reading MDN & DOM Enlightenment book.
  * Write & test the pseudocode on some data, let it work there before you think about coding.
    * if you trying to figure out the logic while coding you get confused easily because you’d be thinking of the actual logic + the 
    coding intricacies such as variable state, recursion or loops etc.
  * Put every small task in a function. else you get confused quickly when reading the code.


