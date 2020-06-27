import React from "react";
import ContentLoader from "react-content-loader";

export const Loader = (props: any) => (
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
