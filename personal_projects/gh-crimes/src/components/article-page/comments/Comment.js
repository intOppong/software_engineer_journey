import React from 'react';

import Icons from 'components/general/Icons/Icons';
import 'styles/Comment.css'

const comment = (props) => {

  return (
    <div class="Comment">
      <div class="media">
        <img class="mr-3" src="https://image.ibb.co/jw55Ex/def_face.jpg" alt="" />
        <div class="media-body">
          <p class="m-0 username"><strong>Najib</strong></p>
          <span class='text-muted small d-block mb-2'>1 minute ago</span>
          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>

          <div className='d-flex justify-content-between'>
            <Icons classes='icons-comment likable' items={['like', 'dislike']} text=' 2' link linkClasses='btn btn-default'/>
            <Icons classes='icons-comment reply' items={['reply']} text=' Reply' link linkClasses='btn btn-default border'/>
          </div>
        </div>
      </div>
      <div class="replies">
        <div class="media reply">
          <img class="mr-3" src="https://image.ibb.co/jw55Ex/def_face.jpg" alt="" />
          <div class="media-body">
            <p class="m-0 username"><strong>Reply</strong></p>
            <span class='text-muted small d-block mb-2'>1 minute ago</span>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
            <Icons classes='icons-comment likable' items={['like', 'dislike']} text=' 2' link linkClasses='btn btn-default'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default comment;
