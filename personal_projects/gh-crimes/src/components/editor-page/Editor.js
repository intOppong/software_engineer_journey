import React, { Component } from 'react';
import ReactQuill from 'react-quill';
  import 'react-quill/dist/quill.snow.css';
// import renderHTML from 'react-render-html';
import ReactHtmlParser from 'react-html-parser';

class Editor extends Component {
  state = {
    title: '',
    body: '',
    post: {}
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value })
  }
  handleBodyChange = (e) => {
    this.setState({ body: e })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    }
    console.log(post.body)
    this.setState({post: post})
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
            <ReactQuill
              modules={Editor.modules}
              formats={Editor.formats}
              value={this.state.body}
              placeholder='Write your article'
              onChange={this.handleBodyChange} />
          </div>
          <button className='btn btn-primary'>Create</button>
        </form>
        <div >
          <h1>{this.state.post.title}</h1>

          <div class='Content'>{ReactHtmlParser(this.state.post.body)}</div>
        </div>
      </div>
    )
  }
}

Editor.modules = {
  toolbar: [
    [{header: '2'}],
    [{size: []}],
    ['bold', 'italic', 'underline','strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}],
    ['link', 'image', 'video'],
    ['code-block'],
    ['clean']
  ]
};

Editor.formats = [
  'header',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'link',
  'image',
  'video',
  'code-block'
]

export default Editor;
