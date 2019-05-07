import React from 'react';
import PropTypes from 'prop-types';

const Comment = (props) => {
  return (
    <li className='comment-item'>
      <p>{props.comment.author}</p>
      <p>{props.comment.text}</p>
    </li>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired
};

export default Comment;
