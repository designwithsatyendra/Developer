import React, { useRef, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

import { Button, Container } from '@mui/material';
import SubCommentBox from '../comentbox/subcommentbox/SubCommentBox';
import { useMainContext } from '../../context/Context';
import './message.css';

const showReply = React.createContext();
export function useOpenReply() {
  return useContext(showReply);
}

const SubMessage = (props) => {
  const { setmessageUpdate } = useMainContext();
  const { User, Editable, UserMessage, Likes } = props;

  const likeIcons = useRef();
  const numLikes = useRef();
  const [openreply, setOpenreply] = useState(false);

  const deleteMessage = (e) => {
    e.preventDefault();
    fetch('/deletesubmessageuser', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messageId: props.parentKey, subId: props.subId }),
    }).then(() => {
      setmessageUpdate([2, props.parentKey]);
    });
  };
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
    fetch('/updateSublike', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messageId: props.parentKey, subId: props.subId, likes: res }),
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
            {!props.user === 'super user' ? (
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
            {openreply && <SubCommentBox parentkey={props.parentkey} />}
          </showReply.Provider>
        </section>
      </Container>
    </>
  );
};

SubMessage.propTypes = {
  User: PropTypes.string.isRequired,
  Editable: PropTypes.string.isRequired,
  UserMessage: PropTypes.string.isRequired,
  Likes: PropTypes.number.isRequired,
};

export default SubMessage;
