import React from 'react';

const signInWith = (props) => {

  return (
    <div className='card-body'>
      <div className="card-subtitle mb-3 mt-2 text-muted">Sign In With: </div>
      <div className='icons-signin'>
        <a href="/api/auth/google" className='card-link' style={{width:'inline-flex'}}>
          <i className="fab fa-google"></i></a>
      </div>
    </div>
  )
}

export default signInWith;
