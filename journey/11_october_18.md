# October 2018 Progress 

## Content
* [Goals](#goals)
* [Week One](#week-one)
* [Week Two](#week-two)
* [Week Three](#week-three)
* [Week Four](#week-four)
* [Week Four](#week-five)
* [My Thoughts](#my-thoughts)

### October 2018 Overview
***
- improved my learning method to focus only on learning what I need to learn about a topic. I do this by coming up with questions & answering (learning) just that & no more.
- Begun work on my personal (production level) project: [gh-crimes](https://github.com/intOppong/software_engineer_journey/tree/dev/personal_projects/gh-crimes)
- Morale
  - I’m maturing. I now firmly know that I have to desire/grit/commitment to succeed & not give up. Now I need to improve my Discipline & Consistency to grow exponentially.
  - Information only turns into knowledge when you can apply it - Building out the components on my own is more difficult than I expected.

## Goals
***
**October 2018 run from 30th September to 3rd November 2018. ie *"5 weeks"***

* Process Oriented Goals:
- Work Everyday averaging 13 Pomodoros a day & 10 Pomodoros on days where life duties call (eg: going to the bank, helping 
family with work etc). 
- __Sidenote__: Using Saturday's work time for weekly planning & Self Improvement.

    | | No. of Working Days | Total Pomodoros | Average Pomodoro
    | --- | --- | --- | --- |
    | Full Days | 14 days | 255 | 18.3 |
    | Half Days | 8 days | 81 | 10.1 |
    | Total |  22 out of 25 days | 336 |  **13.4** |

### Week One
***
- What I did:
  - Completed Stephen Grider's TP: react router: withRouter, localTunnel, saving webhook data, fetching list of surveys into redux & react.
  - Reading MongoDB docs on Data Modeling & Indexing
  - Started following [Academing's React Tutorial Project](https://www.udemy.com/react-the-complete-guide-incl-redux/)
  - improved my learning method to focus only on learning what I need to learn about a topic. I do this by coming up with questions & answering (learning) just that & no more.
- What I Learnt & Challenges
  - redux-form's destroyOnMount option dump form data from memory when the Component is unmounted ie no longer shown
  on the screen.
  - Webhooks: it’s basically where One Server communicates some data to another server because of some event that occurred on the first one.
  - localTunnel is service that links your localhost to the outside web. It helps with web hooks in development environments
  - Data modeling is designing/setting-up your database (Collections & Documents) so it'll be well optimized & easy to work with & maintain. Some things to consider when designing a data model includes:
    - How your application will use the database. eg if your app needs are mainly read operations to a collection, adding indexes to support common queries can improve performance.
    - Characteristics of the Database Engine such as the max size of a record. This helps in deciding whether to use denormalization or not.
- Challenges
  - felt frustrated with my learning method. I needed to know something about indexing but not everything. The docs was like a dump of knowledge I didn't need. And that quickly gets overwhelming & makes you feel like you can't do this - this is not for you. Another Case study is when I was learning Promises, I learnt other subtopics like .finally() that I didn't need to know at that time.
    - I think I need to learn only what I need to know at any point in time. I need to come up with questions & find the answers to just those questions ( ie learn).
  - Dont fully understand these yet
    - You can use the arrow function syntax in a react Based Class but not in vanilla ES6 Classes. The assignment Operator throws a syntax error in vanilla ES6 classes.
    - Also You don't have to bind an arrow function to the constructor of the class to use the class as it's "this" binding.
- My Thoughts
  - reading mongoDB docs on Indexing wasn't timely so I didn't really understand/like it. This lead me to adjust my learning method. Overall it was a consistent week regardless of my mood. This shows maturity & perseverance.

### Week Two
***
- What I did:
  - following [Academing's React Tutorial Project](https://www.udemy.com/react-the-complete-guide-incl-redux/)
    - Deeper Dive into Components & React Internals,
    - Reaching Out to the Web (Http_Ajax) with axios,
    - Routing
    - Building a real app: the Burger Builder
- What I Learnt
  - Higher Order Components - HOC: They are used to Wrap Other Components & apply some behavior to them 
  - Component Lifecycle methods
  - How react updates the DOM using Virtual DOM.
  - Axios - Interceptors: are functions defined globally that's executed for every request/response from & to your app regardless of where they were defined.
- Challenges
  - creating an axios error handler as a higher order component. was just a little more challenging
- My thoughts
  - started to appreciate why we use css modules. Don't know if it's necessary though.
  - A developer’s life is all about finding solutions to issues…thats how we all learn. don’t expect to be spoon-fed like the TPs show you.
  - TP is taking too long, need to start working on my personal project. At the end thats what learning is all about to be able to build stuff on your own.
  
### Week Three
***
- What I did:
  - Nothing: I was stressed & couldn't get over it which led to wasting the whole week. I need to work on my Stress Management.

### Week Four
***
- What I did:
  - Getting my mindset back on track. figuring out what to do next after 1 week of absence.
  - Following Burger-Builder [react TP](https://github.com/intOppong/software_engineer_journey/tree/dev/tutorial_projects):
    - done with forms & form validation
  - Begun Working on personal project: [gh-crimes](https://github.com/intOppong/software_engineer_journey/tree/dev/personal_projects/gh-crimes)
    - setup project & structuring directories & component structure
    - coding the Header Component.
    - coding the Home-page Components: News Component
- What I Learnt
  - 
- Challenges
  - Information only turns into knowledge when you can apply it - Building out the components on my own is more difficult than I expected.
- My thoughts
  - 

### Week Five
***
- What I did:
  - decided to follow new [TP: Medium Clone](https://github.com/intOppong/software_engineer_journey/blob/dev/tutorial_projects/README.md) because it's closely related to my project
    - completed the backend
    - frontend was a disaster for me.
  - Working on personal project: [gh-crimes](https://github.com/intOppong/software_engineer_journey/tree/dev/personal_projects/gh-crimes)
    - restructured dir
    - worked on database model/schema, article CRUD
    - worked on Article & Editor Components
- What I Learnt
  - got introduced to & implemented react-quill.
- My thoughts
  - Following the Medium Clone TP was not the best decision for the frontend but helped with me the backend
  - The medium Clone TP is a lot of copy & paste code, which makes it difficult to understand. it's not well explained. But it's a good clone.

