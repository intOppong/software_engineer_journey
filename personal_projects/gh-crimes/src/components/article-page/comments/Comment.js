import React, { Component } from 'react';

import Icons from 'components/general/Icons/Icons';
import 'styles/Comment.css'

class Comment extends Component {
  state = {
    showReplyIcon: true
  }

  replyIconHandler = () => {
    this.setState({
      showReplyIcon: false
    })
  }

  cancelReplyHandler = () => {
    this.setState({
      showReplyIcon: true
    })
  }

  render () {
    let replyIcon = ''
    let replyForm = ''
    if (this.state.showReplyIcon) {
      replyIcon = <Icons
        wrapperClasses='icons-comment'
        iconClasses='btn btn-outline-primary' items={['reply']}
        text=' Reply' clicked={this.replyIconHandler}/>
    } else {
      replyForm = (
        <div>
          <div className="form-group">
            <label for=""></label>
            <textarea className="form-control" rows="3"></textarea>
          </div>
          <button type="button submit" className="btn btn-sm btn-primary mr-1">Reply</button>
          <button type="button" className="btn btn-sm btn-danger" onClick={this.cancelReplyHandler}>Cancel</button>
        </div>
      )
    }

    return (
      <div className="Comment shadow">
        <div className="media singleComment">
          <img className="mr-3" src="https://image.ibb.co/jw55Ex/def_face.jpg" alt="" />
          <div className="media-body">
            <p className="m-0 username"><strong>Najib</strong></p>
            <span className='text-muted small d-block mb-2'>1 minute ago</span>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>

            <div className='d-flex justify-content-between'>
              <Icons
                wrapperClasses='icons-comment'
                items={['like', 'dislike']} text=' 2'
                link iconClasses='btn'/>
              {replyIcon}
            </div>
            {replyForm}
          </div>
        </div>
        <div className="replies">
          <div className="media reply">
            <img className="mr-3" src="https://image.ibb.co/jw55Ex/def_face.jpg" alt="" />
            <div className="media-body">
              <p className="m-0 username"><strong>Reply</strong></p>
              <span className='text-muted small d-block mb-2'>1 minute ago</span>
              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
              <Icons wrapperClasses='icons-comment' items={['like', 'dislike']} text=' 2' link iconClasses='btn'/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default Comment;
