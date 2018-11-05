import React from 'react';

import 'styles/Aside.css';

const aside = (props) => {

  return (
    <aside className="Aside col-md-4">
      <ul className="list-unstyled shadow-sm">
        <li className="media">
          <a className='d-flex' href='/'>
            <img className="mr-3 border" src="https://i.imgur.com/8nR8qMK.png" alt="" />
            <div className="media-body">
              <h5 className="mt-0 mb-1 head">List-based media object</h5>
              <p>Cras sit amet nibh libero, in gravida nulla ...</p>
            </div>
          </a>
        </li>
        <li className="media">
          <a className='d-flex' href='/'>
            <img className="mr-3 border" src="https://i.imgur.com/gz3unZu.jpg" alt="" />
            <div className="media-body">
              <h5 className="mt-0 mb-1 head">List-based media object</h5>
              <p>Cras sit amet nibh libero, in gravida nulla ...</p>
            </div>
          </a>
        </li>
        <li className="media">
          <a className='d-flex' href='/'>
            <img className="mr-3 border" src="https://i.imgur.com/Po7ypyX.png" alt="" />
            <div className="media-body">
              <h5 className="mt-0 mb-1 head">List-based media object</h5>
              <p>Cras sit amet nibh libero, in gravida nulla ...</p>
            </div>
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default aside
