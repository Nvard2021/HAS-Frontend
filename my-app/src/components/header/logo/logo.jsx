import React from "react";
import PropTypes from "prop-types"
import "./logo.css"

function Logo(props) {
  const { imageSrc } = props;

  return (
      <img src={imageSrc}/>
  );
}
Logo.propTypes = {
  imageSrc: PropTypes.string.isRequired
};

export default Logo;