import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import createAuth0Client from "@auth0/auth0-spa-js";
import { useRouter } from "next/router";
// TODO: Add a rule that forces the user to be re-routed to the profile page
const DEFAULT_REDIRECT_CALLBACK = () => (
  window.history.replaceState({}, document.title, window.location.pathname)
);
export function ensureClient(client) {
  if (!client) {
    throw new Error("Auth0Client was not initialized");
  }

  return client;
}

export const Auth0Context = React.createContext({
  client: undefined,
  loginWithRedirect: () => {
    throw new Error("Auth0Client was not initialized");
  },
  logout: () => {
    throw new Error("Auth0Client was not initialized");
  },
  handlers: {

  }
});
export const useAuth0 = () => useContext(Auth0Context);
const Auth0Provider = ({
  children,
  onRedirectCallback,
  ...initOptions
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [user, setUser] = useState();
  const [accessToken, setAccessToken] = useState();
  const [client, setAuth0] = useState();
  const [loading, setLoading] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const { asPath } = useRouter();
  // TODO: Auth from social providers creates a profile automatically
  //  Auth from email redirects the user to the profile page.
  useEffect(() => {
    const initAuth0 = async () => {
      setLoading(true);
      try {
        const auth0FromHook = await createAuth0Client(initOptions);
        setAuth0(auth0FromHook);

        if ((window.location.search.includes("code=") && window.location.search.includes("state="))
        || (window.location.search.includes("error=") && window.location.search.includes("error_description="))
        ) {
          const { appState } = await auth0FromHook.handleRedirectCallback(asPath);
          onRedirectCallback(appState);
        }

        const _isAuthenticated = await auth0FromHook.isAuthenticated();

        setIsAuthenticated(_isAuthenticated);
        if (_isAuthenticated) {
          const [_user, _accessToken] = await Promise.all([auth0FromHook.getUser(), auth0FromHook.getTokenSilently()]);
          setUser(_user);
          setAccessToken(_accessToken);
        }
        setLoading(false);
      } catch ({ error, error_description: errorDescription }) {
        setLoading(false);
        // TODO: Understand the use of shallow
        const errorState = { url: "/oops", as: "/oops", options: { shallow: true, error, errorDescription }};
        onRedirectCallback(errorState);
      }
    };
    initAuth0();
  }, []);

  const loginWithPopup = async (params = {}) => {
    setPopupOpen(true);
    try {
      await client.loginWithPopup(params);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    } finally {
      setPopupOpen(false);
    }
    const _user = await client.getUser();
    setUser(_user);
    setIsAuthenticated(true);
  };

  const handleRedirectCallback = async () => {
    setLoading(true);
    await client.handleRedirectCallback();
    const _user = await client.getUser();
    setLoading(false);
    setIsAuthenticated(true);
    setUser(_user);
  };
    /**
   * When redirecting to the login page you'll end up in this state
   * where the login page is still loading.
   * You can render a message to show that the user is being redirected.
   */
  const onRedirecting = () => (
    <div>
      <h1>Signing you in</h1>
      <p>
        In order to access this page you will need to sign in.
        Please wait while we redirect you to the login page...
      </p>
    </div>
  );

  const value = {
    client,
    handlers: {
      onRedirecting
    },
    accessToken,
    isAuthenticated,
    user,
    loading,
    popupOpen,
    loginWithPopup,
    handleRedirectCallback,
    getIdTokenClaims: (...p) => client.getIdTokenClaims(...p),
    loginWithRedirect: (...p) => client.loginWithRedirect(...p),
    getTokenSilently: (...p) => client.getTokenSilently(...p),
    getTokenWithPopup: (...p) => client.getTokenWithPopup(...p),
    logout: (...p) => client.logout(...p),
  };

  return (
    <Auth0Context.Provider value={value}>
      {children}
    </Auth0Context.Provider>
  );
};

Auth0Provider.propTypes = {
  children: PropTypes.object.isRequired,
  onRedirectCallback: PropTypes.func,
};

Auth0Provider.defaultProps = {
  onRedirectCallback: DEFAULT_REDIRECT_CALLBACK
};

export default Auth0Provider;
