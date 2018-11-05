import React, { Component, PropTypes } from "react";
import { Button } from "antd";

const Cv = ({ name }) => {
  return (
    <div>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="danger">Danger</Button>
    </div>
  );
};

Cv.propTypes = {
  //   name: PropTypes.string.isRequired
};

export default Cv;
