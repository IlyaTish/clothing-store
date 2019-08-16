import React from "react";

import "./ButtonPrimary.styles.sass";

const ButtonPrimary = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button className={`${ isGoogleSignIn ? "btn--google" : "" } btn`} {...otherProps}>
    {children}
  </button>
);

export default ButtonPrimary;