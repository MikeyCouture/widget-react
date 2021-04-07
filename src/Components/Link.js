import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = () => {};

  return (
    <a onClick={onClick} className={className} href={href} href="">
      {children}
    </a>
  );
};

export default Link;
