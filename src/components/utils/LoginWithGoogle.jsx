import { useEffect } from "react";
import { gapi } from "gapi-script";

const LoginWithGoogle = () => {
  const clientId =
    "942593425164-dml3ujlqifl0gmfienpm11l2cbn6qrer.apps.googleusercontent.com";

  useEffect(() => {
    const initClient = () => {
      gapi.auth2.init({
        client_id: clientId,
        scope: "profile email",
      });
    };
    gapi.load("client:auth2", initClient);
  }, []);

  const handleGoogleLogin = () => {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signIn().then((user) => {
      console.log("Google User:", user.getBasicProfile().getName());
      console.log("Email:", user.getBasicProfile().getEmail());
      console.log("getBasicProfile:", user.getBasicProfile());
      console.log("user", user);
    });
  };
  return (
    <button
      onClick={handleGoogleLogin}
      className="bg-red-500 text-white px-4 py-2"
    >
      Login with Google
    </button>
  );
};

export default LoginWithGoogle;
