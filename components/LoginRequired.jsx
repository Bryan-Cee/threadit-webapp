import React, { useEffect, useContext } from "react";
import { parse } from "query-string";
import { Auth0Context, useAuth0 as useAuth } from "../auth/AuthController";

function getComponentName(ChildComponent) {
  return ChildComponent.displayName || ChildComponent.name || "Component";
}

function getReturnTo() {
  if (window && window.location) {
    return {
      returnTo: {
        pathname: window.location.pathname,
        query: parse(window.location.search)
      }
    };
  }

  return { };
}

function tryGetInitialPropsMethod(child) {
  const nextPage = child;
  return nextPage && nextPage.getInitialProps;
}

export function withWrapper(ChildComponent, name, render) {
  const WrappedComponent = (props) => render(props);
  (WrappedComponent).displayName = `${name}(${getComponentName(
    ChildComponent
  )})`;

  // Helper for Next.js support (getInitialProps)
  const getInitialProps = tryGetInitialPropsMethod(ChildComponent);
  if (getInitialProps) {
    const WrappedComponentNext = WrappedComponent;
    WrappedComponentNext.getInitialProps = async (args) => getInitialProps(args);
  }

  return WrappedComponent;
}

export function withLoginRequired(ChildComponent) {
  return withWrapper(ChildComponent, "withLoginRequired", ({ path, ...rest }) => {
    const { isLoading, isAuthenticated, onRedirectCallback } = useAuth();
    const context = useContext(Auth0Context);

    useEffect(() => {
      if (!onRedirectCallback || isLoading || isAuthenticated) {
        return;
      }

      onRedirectCallback({ appState: getReturnTo() });
    }, [isLoading, isAuthenticated, onRedirectCallback, path]);

    return isAuthenticated === true
      ? (<ChildComponent {...rest} />) : ((context.handlers.onRedirecting && context.handlers.onRedirecting()) || null);
  });
}
