import React, { useRef, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { Button } from '@mui/material';
import SubCommentBox from '../comentbox/subcommentbox/SubCommentBox';

const showReply = React.createContext();
export function useOpenReply() {
  return useContext(showReply);
}

const SubMessage = (props) => {
  const { User, Editable, UserMessage, Likes } = props;

  const likeIcons = useRef();
  const numLikes = useRef();
  const [openreply, setOpenreply] = useState(false);

  const deleteMessage = () => {};
  const ChangeOpenReply = () => {
    setOpenreply((current) => !current);
  };

  // like
  let toggleLike = false;
  let res = Likes;
  const likeComment = () => {
    toggleLike = !toggleLike;
    if (toggleLike) {
      res += 1;
      likeIcons.current.style.color = '#4688de';
    } else {
      res -= 1;
      likeIcons.current.style.color = 'gray';
    }
    numLikes.current.innerHTML = res;
  };

  return (
    <>
      <section className="messagecontainer">
        {<AccountCircleIcon />}
        <div className="messageuser">{User}</div>
        <div className="messageuser">{UserMessage}</div>
        <section className="messageiconscontainer">
          <ThumbUpIcon ref={likeIcons} onClick={likeComment} />
          <div ref={numLikes}>{Likes}</div>
          <ThumbDownAltIcon />
          {!Editable ? (
            <Button type="button" onClick={ChangeOpenReply}>
              Reply
            </Button>
          ) : (
            <Button type="button" onClick={deleteMessage}>
              Delete
            </Button>
          )}
        </section>
        <showReply.Provider value={ChangeOpenReply}>{openreply && <SubCommentBox />}</showReply.Provider>
      </section>
    </>
  );
};

SubMessage.propTypes = {
  User: PropTypes.string.isRequired,
  Editable: PropTypes.string.isRequired,
  UserMessage: PropTypes.string.isRequired,
  Likes: PropTypes.string.isRequired,
};

export default SubMessage;
