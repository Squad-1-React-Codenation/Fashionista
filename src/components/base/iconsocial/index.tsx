import React from "react";

type SocialIconsType = {
  height: number;
  width: number;
};

export const Instagram = ({ height, width }: SocialIconsType) => {
  return (
    <a
      href="https://www.instagram.com/app_undefined/?hl=pt-br"
      target="_blank"
      rel="noreferrer"
    >
      <img src="/insta.png" alt="Instagram" height={height} width={width} />
    </a>
  );
};

export const Facebook = ({ height, width }: SocialIconsType) => {
  return (
    <img src="/facebook.png" alt="Facebook" height={height} width={width} />
  );
};

export const Twiter = ({ height, width }: SocialIconsType) => {
  return (
    <img src="/black-twitter.png" alt="Twitter" height={height} width={width} />
  );
};
