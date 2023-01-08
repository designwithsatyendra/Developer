import React, { useRef, useState } from 'react';

const TopCommentBox = () => {
  const message = useRef(null);
  const [showCommentLine, setshowCommentLine] = useState(false);
  const [showButtons, setshowButtons] = useState(false);
  const [enablebtn, setenablebtn] = useState(true);
  const commentFocus = () => {
    setshowCommentLine(true);
    setshowButtons(true);
  };
  const commentFocusout = () => {
    setshowCommentLine(false);
  };
  const commentStrok = (e) => {
    const currMessage = e.target.value;
    if (currMessage) {
      setenablebtn(false);
    } else {
      setenablebtn(true);
    }
  };
  const sendComment = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div>TopCommentBox</div>
      <section className="section">
        <input
          type="text"
          placeholder="add comment"
          ref={message}
          //   autoFocus={props.autoFocus}
          onFocus={commentFocus}
          onBlur={commentFocusout}
          onKeyUp={commentStrok}
        />
        {showCommentLine && <div className="comentline" />}
        {showButtons && (
          <>
            <button type="button" className="commentButton" disabled={enablebtn} onClick={sendComment}>
              Comment
            </button>
            <button
              type="button"
              className="cancelbutton"
              onClick={() => {
                setshowButtons(false);
                message.current.value = '';
              }}
            >
              Cancel
            </button>
          </>
        )}
      </section>
    </>
  );
};

export default TopCommentBox;
