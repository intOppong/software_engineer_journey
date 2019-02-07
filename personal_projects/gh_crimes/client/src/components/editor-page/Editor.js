import React, { Component } from 'react';
import { Editor as Tinymce } from '@tinymce/tinymce-react';

import axios from 'axios';

class Editor extends Component {
  state = {
    title: '',
    body: ''
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value })
  }
  handleBodyChange = (e) => {
    this.setState({ body: e.target.getContent() })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    }
    console.log(post.body);
    axios.post('/api/article/create', post)
      .then( res => {
        console.log(res.status);
      })
      .catch( err => console.log('AXIOS:', err))
  }

  render () {
return (
<div className='Editor'>
  <form onSubmit={this.handleSubmit}>
    <div className='form-group'>
      <input
        value={this.state.title}
        name='title'
        placeholder='Title'
        onChange={this.handleTitleChange}
        class='form-control' />
    </div>
    <div className='form-group'>
      <Tinymce
        initialValue="<p>This is the initial content of the editor</p>"
        init={{
          height: 400,
          block_formats: 'Paragraph=p;Header 2=h2;Header 3=h3;Preformatted=pre',
          plugins: [
            'advlist autolink lists link image charmap print preview anchor textcolor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table contextmenu paste code help wordcount emoticons'
          ],
          toolbar: `insert | undo redo |  formatselect | bold italic backcolor  |
            alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |
            removeformat  | fontsizeselect | blockquote | emoticons | code`,
          menubar: false,
        }}
        onChange={this.handleBodyChange}
        />
    </div>
    <button className='btn btn-primary'>Create</button>
  </form>
  <div >
    {/*<h1>{this.state.post.title}</h1>*/}

    {/*<div class='Content'>{this.state.post.body}</div>*/}
  </div>
</div>
    )
  }
}

export default Editor;
