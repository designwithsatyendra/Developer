import React, { useRef, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import CommentBox from '../comentbox/CommentBox';
import SubMessage from './SubMessage';

const showReply = React.createContext();
export function useOpenReply() {
  return useContext(showReply);
}

const Message = (props) => {
  const { User, Editable, UserMessage, Likes } = props;

  const likeIcons = useRef();
  const numLikes = useRef();
  const [arrowUp, setArrowup] = useState(false);
  const [openreply, setOpenreply] = useState(false);

  const deleteMessage = () => {};
  const ChangeOpenReply = () => {
    setOpenreply((current) => !current);
  };

  const changeArrow = () => {
    setArrowup((current) => !current);
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
        <showReply.Provider value={ChangeOpenReply}>{openreply && <CommentBox />}</showReply.Provider>
        <section className="arrowreplies">
          <Button startIcon={arrowUp ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />} type="button" onClick={changeArrow}>
            4 views replies
          </Button>
        </section>
        {arrowUp && (
          <section className="submessage">
            <SubMessage User="satyendra singh" UserMessage="please send me code" Likes={25} />
          </section>
        )}
      </section>
    </>
  );
};

Message.propTypes = {
  User: PropTypes.string.isRequired,
  Editable: PropTypes.string.isRequired,
  UserMessage: PropTypes.string.isRequired,
  Likes: PropTypes.string.isRequired,
};

export default Message;
