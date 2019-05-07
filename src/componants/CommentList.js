import React from 'react';
import Comment from './Comment.js';
import PropTypes from 'prop-types';

  const CommentList = (props) => {

  const commentItem = props.comments.map((comment) => {
    return <Comment comment={comment} key={comment.id}/>;
  });

  return (
    <div className='comment-list'>
      <ul>
        {commentItem}
      </ul>
    </div>
  );

}

CommentList.defaultProps = {
  comments: []
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired
};

export default CommentList;
