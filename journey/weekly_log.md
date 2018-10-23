# Weekly Log

### Overview
- Week 1 summary: reading mongoDB docs on Indexing wasn't timely so I didn't really understand/like it. This lead me to adjust my learning method. Overall it was a consistent week regardless of my mood. This shows maturity & perseverance.
- Week 2 summary: A developer’s life is all about googling/finding solutions to issues…thats how we all learn. don’t expect to be spoon-fed like the TPs show you.
	- TP is taking too long, need to start working on my personal project. At the end thats what learning is all about to be able to build stuff on your own.
- Week 3 summary: I was stressed & couldn't get over it which led to wasting the whole week. I need to work with others ASAP


### Week 1
- What i did:
  - Completed Stephen Grider's TP: react router: withRouter, localTunnel, saving webhook data, fetching list of surveys into redux & react.
  - Reading MongoDB docs on Data Modeling & Indexing
  - Started following a TP based on teaching React
  - improved my learning method to focus only on learning what I need to learn about a topic. I do this by coming up with questions & answering (learning) just that & no more.
- What I Learnt
	- redux-form's destroyOnMount option dump form data from memory when the Component is unmounted ie no longer shown
  on the screen.
  - Webhooks: it’s basically where One Server communicates some data to another server because of some event that occurred on the first one.
  - localTunnel is service that links your localhost to the outside web. It helps with web hooks in development environments
	- Data modeling is designing/setting-up your database (Collections & Documents) so it'll be well optimized & easy to work with & maintain. Some things to consider when designing a data model includes:
    - How your application will use the database. eg if your app needs are mainly read operations to a collection, adding indexes to support common queries can improve performance.
    - Characteristics of the Database Engine such as the max size of a record. This helps in deciding whether to use denormalization or not.
  - Documents should be structured based on relationship between data. Documents can be structured in 2 main ways: Embedding Documents (denormalized) or using References (normalized)
  - Schema & Validation: You do not need schemas to create documents in mongodb. Documents in the same collection can have different schemas. In practice, however, the documents in a collection share a similar structure, and you can enforce document validation rules for a collection during update and insert operations.
	  - To specify validation rules when creating a new collection, use `db.createCollection()` with the validator option. 
	  - To add document validation to an existing collection, use NOTE collMod command with the NOTE  validator option.
  - Things to Consider when designing your data model (document structure) in mongodb. They include:
	  - Find out how the app is going to retrieve (read/access) data from the database. For example, Given a Users & Posts documents, use Embedded document structure if the app frequently retrieve a Post in the context of a User. However if the app retrieves Posts in it's own context, then use references.
	  - Embed fields that needs to be updated atomically.
  - Types of indexes.
  - Indexing is basically sorting.
  - JSX is not valid JS so it gets compiled / converted to React.createElement() which is vanillar JS 
   ```javascript
     // JSX
     const JSX = (
       <div className="myDiv">
         <h1>FCC</h1>
       </div>
     )
    
     // javascript
     React.createElement('div', {className: 'myDiv'}, React.createElement('h1', null, 'FCC'))
   ```
- Challenges
  - felt frustrated with my learning method. I needed to know something about indexing but not everything. The docs was like a dump of knowledge I didn't need. And that quickly gets overwhelming & makes you feel like you can't do this - this is not for you. Another Case study is when I was learning Promises, I learnt other subtopics like .finally() that I didn't need to know at that time.
    - I think I need to learn only what I need to know at any point in time. I need to come up with questions & find the answers to just those questions ( ie learn).
  - Dont fully understand these yet
	  - You can use the arrow function syntax in a react Based Class but not in vanilla ES6 Classes. The assignment Operator throws a syntax error in vanilla ES6 classes.
    - Also You don't have to bind an arrow function to the constructor of the class to use the class as it's "this" binding.
- My Thoughts

### Week 2
- What i did:
	- following [Academing's React Tutorial Project] (https://www.udemy.com/react-the-complete-guide-incl-redux/)
		- Deeper Dive into Components & React Internals,
		- Reaching Out to the Web (Http_Ajax) with axios,
		- Routing - Multipage Feeling in a Single Apage Application 
		- Building a real app: the Burger Builder
- What I Learnt
	- Higher Order Components - HOC: They are used to Wrap Other Components & apply some behavior to them 
  - 2 Approaches to writing HOC
    - creating an actual Component to wrap other components eg. libraries like Redux’s <Provider/>, Radium's <StyleRoot /> etc
    - creating the HOC as a regular Javascript function that returns the wrapped component with the new behaviour/logic eg. Libraries like Redux's connect() & reducThunk()
  - Component Lifecycle methods
  - How react updates the DOM using Virtual DOM.
  - when rendering multiple elements they must always have a parent element wrapper, usually a div tag. But you can circumvent this in 2 ways
    - Add elements in an array & return the array. Array of elements don’t need a wrapper.
    - Use a HOC that serves the sole purpose of returning its children. so the HOC serves as the wrapper & not a div element
  - Axios - Interceptors: are functions defined globally that's executed for every request/response from & to your app regardless of where they were defined.
  - Intro to Firebase
- Challenges
	- creating an axios error handler as a higher order component. was just a little more challenging
- My Thoughts
	- started to appreciate why we use css modules. Don't know if it's necessary though.
	
### Week 3
- What i did:
  - Nothing

### Week 4
- What i did:
  - 
- What I Learnt
	- 
- Challenges
  - 
- My Thoughts

