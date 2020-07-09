import React from "react";

type SocialIconsType = {
  height: number;
  width: number;
};

export const Instagram = ({ height, width }: SocialIconsType) => {
  return (
    <a
      data-testid="instagram"
      href="https://www.instagram.com/app_undefined/?hl=pt-br"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/img/insta.png" alt="Instagram" height={height} width={width} />
    </a>
  );
};

export const Facebook = ({ height, width }: SocialIconsType) => {
  return (
    <a
      data-testid="facebook"
      href="https://www.facebook.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/img/facebook.png"
        alt="Facebook"
        height={height}
        width={width}
      />
    </a>
  );
};

export const Twitter = ({ height, width }: SocialIconsType) => {
  return (
    <a
      data-testid="twitter" 
      href="https://twitter.com/" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <img
        src="/img/black-twitter.png"
        alt="Twitter"
        height={height}
        width={width}
      />
    </a>
  );
};
