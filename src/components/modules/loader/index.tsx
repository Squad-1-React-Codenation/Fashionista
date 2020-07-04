import React from "react";
import ContentLoader from "react-content-loader";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const LoaderCard = (props: any) => (
  <ContentLoader
    className="home_loader"
    speed={2}
    width={300}
    height={450}
    viewBox="0 0 300 450"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="114" y="424" rx="0" ry="0" width="80" height="15" />
    <rect x="60" y="396" rx="0" ry="0" width="200" height="20" />
    <rect x="13" y="8" rx="0" ry="0" width="300" height="380" />
  </ContentLoader>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const LoaderProduct = (props: any) => (
  <ContentLoader
    speed={2}
    width={1100}
    height={800}
    viewBox="0 0 1100 800"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="6" y="8" rx="0" ry="0" width="627" height="788" />
    <rect x="650" y="15" rx="0" ry="0" width="250" height="30" />
    <rect x="650" y="55" rx="0" ry="0" width="250" height="20" />
    <rect x="650" y="95" rx="0" ry="0" width="100" height="10" />
    <rect x="650" y="110" rx="0" ry="0" width="34" height="34" />
    <rect x="690" y="110" rx="0" ry="0" width="34" height="34" />
    <rect x="730" y="110" rx="0" ry="0" width="34" height="34" />
    <rect x="650" y="160" rx="0" ry="0" width="295" height="40" />
  </ContentLoader>
);
