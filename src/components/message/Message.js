import React, { useRef, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Button, Container } from '@mui/material';
import CommentBox from '../comentbox/CommentBox';
import SubMessage from './SubMessage';
import { useMainContext } from '../../context/Context';
import './message.css';

const showReply = React.createContext();
export function useOpenReply() {
  return useContext(showReply);
}

const Message = (props) => {
  const { setmessageUpdate } = useMainContext();
  const { User, Editable, UserMessage, Likes, Replies, userKey } = props;

  const likeIcons = useRef();
  const numLikes = useRef();
  const [arrowUp, setArrowup] = useState(false);
  const [openreply, setOpenreply] = useState(false);

  const deleteMessage = (e) => {
    e.preventDefault();
    fetch('/deletemesage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messageId: props.userKey }),
    }).then(() => {
      setmessageUpdate([2, props.userKey]);
    });
  };
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
    fetch('/updatelike', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messageId: props.userKey, likes: res }),
    });
  };

  return (
    <>
      <Container>
        <section className="messagecontainer">
          <img
            className="fa"
            alt="img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBXhl3XlzkvIajbwOZKtJWh1rsXQy-wXQ47MtUhwvgsc2OjLp4OQkdiLIlZuIYUox-ZSM&usqp=CAU"
          />
          <div className="messageuser">{User}</div>
          <div className="messagetext">{UserMessage}</div>
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
          <showReply.Provider value={ChangeOpenReply}>
            {openreply && <CommentBox userKey={userKey} />}
          </showReply.Provider>
          {Replies.length > 0 && (
            <section className="arrowreplies">
              <Button
                startIcon={arrowUp ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                type="button"
                onClick={changeArrow}
              >
                Views {Replies.length} Replies
              </Button>
            </section>
          )}

          {arrowUp && (
            <section className="submessagecontainer">
              {Replies.map((reply) => (
                <SubMessage
                  key={Math.random()}
                  parentKey={userKey}
                  subId={reply._id}
                  User={reply.user}
                  UserMessage={reply.message}
                  Likes={reply.likes}
                />
              ))}
            </section>
          )}
        </section>
      </Container>
    </>
  );
};

Message.propTypes = {
  User: PropTypes.string.isRequired,
  Editable: PropTypes.string.isRequired,
  UserMessage: PropTypes.string.isRequired,
  Likes: PropTypes.number.isRequired,
  userKey: PropTypes.number.isRequired,
  Replies: PropTypes.arrayOf(
    PropTypes.shape({
      User: PropTypes.string.isRequired,
      UserMessage: PropTypes.string.isRequired,
      Likes: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Message;
