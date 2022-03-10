import { useRouter } from "next/router";
const withAuth = (WrappedComponent) => {
  const availablesRoutes = {
    'BE:LICI': ['/proyecto', '/proyecto/details/[id]','/usuario'],
    'BE:COMPANY': ['/proyecto', '/empresa', '/hojas-de-vida', '/'],
    'BE:ADMIN': ['/proyecto', '/proyecto/nuevo', '/proyecto/edit/[id]','/usuario', '/hojas-de-vida', '/']
  }
  return (props) => {
    // checks whether we are on client / browser or server.
    if (typeof window !== "undefined") {
      const Router = useRouter();
      const accessToken = localStorage.getItem("token");
      const permissions = JSON.parse(localStorage.getItem('user')).licenses[0];

      // If there is no access token we redirect to "/" page.
      if (!accessToken) {
        Router.replace("/login");
        return null;
      }
      // If user try to get access to route where he dont have permission we redirect to error page
      if (!availablesRoutes[permissions].includes(Router.route)) {
        Router.replace("/400")
      }

      return <WrappedComponent {...props} />
    }

    // If we are on server, return null
    return null;
  };
};

export default withAuth;