import React from 'react';

interface SmoothScrollAnchorProps {
  targetId: string;
  children: React.ReactNode;
  styles: string;
}

const SmoothScrollAnchor: React.FC<SmoothScrollAnchorProps> = ({ targetId, children, styles }) => {

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        behavior: 'smooth',
        top: targetElement.offsetTop,
      });
    }
  };

  return (
    <a href={`#${targetId}`} onClick={handleClick} className={styles}>
      {children}
    </a>
  );
};

export default SmoothScrollAnchor;