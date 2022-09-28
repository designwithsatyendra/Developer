import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .top-btn {
    font-size: 0.9rem;
    background: #f8bd09e8;
    border-radius: 3px;
    padding: 5px;
    height: 10rem;
    position: fixed;
    bottom: 15rem;
    right: 0.2rem;
    width: 2rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.5s ease 0s;
    color: white;

    & {
      animation: gototop 1.2s linear infinite alternate-reverse;
      font-weight: 600;
    }
    @keyframes gototop {
      0% {
        transform: translateY(-0.2rem);
      }
      100% {
        transform: translateY(0.3rem);
      }
    }
  }
`;

const Support = () => (
  <>
    <NavLink to="/">
      <Wrapper>
        <div className="top-btn">
          <div className="buttom-btn">
            <span style={{ color: '#000080' }}>S</span>
            <br />
            <span style={{ color: '#000080' }}>U</span>
            <br />
            <span>P</span>
            <br />
            <span>P</span>
            <br />
            <span style={{ color: '#138808' }}>O</span>
            <br />
            <span style={{ color: '#138808' }}>T</span>
            <br />
          </div>
        </div>
      </Wrapper>
    </NavLink>
  </>
);

export default Support;
