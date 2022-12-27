import React from 'react';
import './style.css';

const Loading = () => {
  return (
    <>
      <div className="maincontainer">
        <div className="container">
          <div className="ring" />
          <div className="ring" />
          <div className="ring" />
          <span className="loading">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Loading;
