import React, { Fragment } from "react";
import { Styled } from "theme-ui";

export default () => (
  <Fragment>
    I'm{" "}
    <Styled.a href="http://twitter.com/thebitcrafter">Szymon Graczyk</Styled.a>.
    <br />
    <small>technical leader | frontend developer | wannabe streamer</small>
  </Fragment>
);
