# Daily Log

### Monday
- What i did
  - applied for FCC JAMstack hackathon
  - cont learning Promises. YDKJS: Async
  - continued TP
    - Added MongoDB & Mongoose to Project to save user data from oAuth
- What i learnt
  - a beneficial side effect of wrapping Promise.resolve(..) around any function's return value (thenable or not) is that it's an easy way to normalize that function call into a well-behaving async task. If foo(42) returns an immediate value sometimes, or a Promise other times, Promise.resolve( foo(42) ) makes sure it's always a Promise result. And avoiding Zalgo makes for much better code.
  - You shouldn't require mongoose models in multiple files. When running mongoose in a test env (running some mocha test) & require your models in multiple files, your model files will be required into the project multiple times & mongoose assumes you attempting to Load in multiple models of the same name. The solution is to: 
    - Require the model class in the entry file eg index.js. Once required, the model class then loads the schema into mongoose. Hence mongoose is alreadly aware of the model class, so pull the model out of mongoose using `mongoose.model(<modelName>)`
    
- Challenges
  - It's difficult to understand passport's workflow
- Thoughts
  - 

### Tuesday
- What i did
  - 
- What i learnt
  - 
- Challenges.
  - 
- Thoughts
  - 

### Wednesday
- What i did
  - 
- What I learnt & Challenges
  - 
- Thoughts
  - 

### Thursday
- What i did
  -  
- What i learnt & Challenges
  - 
- Challenges
  - 
  


### Friday
- What i did
  - 
- What i learnt & Challenges
 
  
 
