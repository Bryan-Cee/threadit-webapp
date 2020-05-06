/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { useAuth0 } from "../auth/AuthController";

export const PrivateRoute = ({ path, title }) => {
  const { isAuthenticated, loading } = useAuth0();
  return !loading && isAuthenticated && (
    <Link href={path}>
      <a style={{ color: "white" }}>{title}</a>
    </Link>
  );
};

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export const PublicRoute = ({ path, title }) => {
  const { loading } = useAuth0();
  return !loading && (
    <Link href={path}>
      <a style={{ color: "white" }}>{title}</a>
    </Link>
  );
};

PublicRoute.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
