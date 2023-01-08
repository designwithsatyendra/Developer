import React, { useState, useEffect } from 'react';
import Message from './components/message/Message';

const MessageScroll = () => {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    console.log('I am useeffect');
    fetch('/getdata', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ limitNum: 10 }),
    }).then((res) =>
      res.jason().then((comments) => {
        setMessage(comments);
      })
    );
  }, []);

  return (
    <>
      <Message User="satyendra singh" Editable={false} UserMessage="please send me code" Likes={25} />
      <div className="bottomBar">
        <div className="loader" />
      </div>
    </>
  );
};

export default MessageScroll;
