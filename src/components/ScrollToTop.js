import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .top-btn {
    font-size: 2.4rem;
    width: 2rem;
    height: 3rem;
    border-radius: 2px;
    position: fixed;
    background: #f8bd09e8;
    bottom: 5rem;
    right: 0.2rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: white;
    &--icon {
      font-size: 25px;
      animation: gototop 1.2s linear infinite alternate-reverse;
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

// eslint-disable-next-line arrow-body-style
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const listenToScroll = () => {
    const heightToHidden = 20;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);
  return (
    <>
      <Wrapper>
        {isVisible && (
          <div className="top-btn">
            <FaArrowUp className="top-btn--icon" onClick={goToBtn} />
          </div>
        )}
      </Wrapper>
    </>
  );
};

export default ScrollToTop;
