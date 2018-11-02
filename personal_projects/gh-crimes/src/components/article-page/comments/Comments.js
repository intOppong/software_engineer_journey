import React from 'react';

import Comment from './Comment';
import Wrapper from 'hoc/Wrapper';

const comments = (props) => {
  return (
    <Wrapper>
      <Comment />
      <Comment />
    </Wrapper>
  )
}

export default comments;
