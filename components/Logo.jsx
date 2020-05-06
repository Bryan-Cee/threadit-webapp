/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Link from "next/link";
import classes from "../styles/Header.scss";

const ThreaditLogo = () => (
  <Link href="/">
    <a className={classes.logo}>
      <img
        src="/img/logo.svg"
        alt="threadit-logo"
        className={classes.logoPic}
      />
      <span>Threadit</span>
    </a>
  </Link>

);

export default ThreaditLogo;
