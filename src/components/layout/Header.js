import React from "react";
import { Link } from "@material-ui/core";

export const Header = () => {
  return (
    <div>
      <Link href="https://hanklu.tw">
        <img
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/red-apple_1f34e.png"
          alt="apple"
          height="30px"
        />
        <img
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/pie_1f967.png"
          alt="pie"
          height="30px"
        />
      </Link>
      {"   "}
      <a
        className="github-button"
        href="https://github.com/kehanlu"
        data-size="large"
        aria-label="Follow @kehanlu on GitHub"
      >
        Follow
      </a>
    </div>
  );
};
