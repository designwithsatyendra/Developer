import React from 'react';
import { Typography } from '@mui/material';

const TopHeader = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          width: '100%',
          bottom: '0px',
          zIndex: '999',
          overflow: 'hidden',
          height: '52px',
          position: 'relative',
          // marginTop: '-4%',
        }}
      >
        <div
          style={{
            width: '40px',
            backgroundColor: '#2b83ea',
            clipPath: `polygon(0 0,0% 100%, 100% 100%)`,
            zIndex: '999',
            marginTop: '-0px',
          }}
        />
        <div
          style={{
            width: '200px',
            marginLeft: '-35px',
            backgroundColor: '#c4ddf9',
            clipPath: `polygon(0px 0px, 15% 0, 32% 100%, 17% 100%)`,
          }}
        />
        <div
          style={{
            width: '220px',
            marginLeft: '-170px',
            backgroundColor: '#e7f1fd',
            clipPath: `polygon(0px 0px, 82% 0px, 100% 100%, 15% 100%)`,
          }}
        />
        <div
          style={{
            width: '240px',
            marginLeft: '-42px',
            backgroundColor: '#f3f8fe',
            clipPath: 'polygon(0px 0px, 82% 0px, 100% 100%, 15% 100%)',
          }}
        />
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: ' 999',
            width: '700px',
            justifyContent: 'center',
          }}
        >
          <Typography variant="body1">SUPER BLOGS</Typography>
        </div>
        <div
          style={{
            width: '55%',
            clipPath: `polygon(0px 0px, 82% 0px, 100% 100%,
  15% 100%)`,
          }}
        />
        <div
          style={{
            width: '240px',
            marginRight: '-42px',
            backgroundColor: '#f3f8fe',
            clipPath: `polygon(0px 0px, 82% 0px, 100% 100%,
  15% 100%)`,
          }}
        />
        <div
          style={{
            width: '220px',
            marginRight: '-42px',
            backgroundColor: '#e7f1fd',
            clipPath: `polygon(0px 0px, 82% 0px, 100% 100%,
  18% 100%)`,
          }}
        />
        <div
          style={{
            width: '200px',
            marginRight: '-170px',
            backgroundColor: '#c4ddf9',
            clipPath: `polygon(0px 0px, 15% 0, 35% 100%, 20%
  100%)`,
          }}
        />
        <div
          style={{
            width: '40px',
            backgroundColor: '#2b83ea',
            clipPath: `polygon(0 0, 100% 100%, 100% 0)`,
            zIndex: '999',
          }}
        />
      </div>
    </>
  );
};

export default TopHeader;
