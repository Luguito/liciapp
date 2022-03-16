import { useRouter } from "next/router";
const withAuth = (WrappedComponent) => {
  const availablesRoutes = {
    'BE:LICI': ['/proyecto', '/proyecto/details/[id]', '/usuario', '/', '/empresa'],
    'BE:COMPANY': ['/proyecto', '/proyecto/details/[id]', '/empresa', '/hojas-de-vida', '/hojas-de-vida/create','/'],
    'BE:ADMIN': ['/proyecto', '/proyecto/nuevo', '/proyecto/edit/[id]', '/proyecto/details/[id]', '/usuario', '/hojas-de-vida', '/hojas-de-vida/create','/']
  }
  return (props) => {
    // checks whether we are on client / browser or server.
    if (typeof window !== "undefined") {
      const Router = useRouter();
      const accessToken = localStorage.getItem("token");
      if (localStorage.getItem('user')) {
        const permissions = JSON.parse(localStorage.getItem('user'))?.licenses[0];
        // If user try to get access to route where he dont have permission we redirect to error page
        if (!availablesRoutes[permissions].includes(Router.route)) {
          Router.replace("/401")
        }
      }
      // If there is no access token we redirect to "/" page.
      if (!accessToken) {
        Router.replace("/login");
        return null;
      }

      return <WrappedComponent {...props} />
    }

    // If we are on server, return null
    return null;
  };
};

export default withAuth;