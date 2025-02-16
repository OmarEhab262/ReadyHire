// import { useEffect, useRef } from "react";
// import { gapi } from "gapi-script";
// import google from "../assets/images/google.svg";
// const LoginWithGoogle = () => {
//   const clientId =
//     "942593425164-dml3ujlqifl0gmfienpm11l2cbn6qrer.apps.googleusercontent.com";
//   const buttonRef = useRef(null);

//   useEffect(() => {
//     const initClient = () => {
//       gapi.auth2.init({
//         client_id: clientId,
//         scope: "profile email",
//       });
//     };
//     gapi.load("client:auth2", initClient);
//   }, []);

//   const handleGoogleLogin = () => {
//     if (buttonRef.current) {
//       buttonRef.current.classList.add("animate-click");
//       setTimeout(() => {
//         buttonRef.current.classList.remove("animate-click");
//       }, 500);
//     }

//     const auth2 = gapi.auth2.getAuthInstance();
//     auth2.signIn().then((user) => {
//       console.log("Google User:", user.getBasicProfile().getName());
//       console.log("Email:", user.getBasicProfile().getEmail());
//       console.log("getBasicProfile:", user.getBasicProfile());
//       console.log("user", user);
//     });
//   };

//   return (
//     <button
//       type="button"
//       ref={buttonRef}
//       onClick={handleGoogleLogin}
//       className="border border-gray-500 w-[150px] flex items-center justify-center p-2 rounded-md pr-2"
//     >
//       <img className="w-8 h-8" src={google} alt="" />
//     </button>
//   );
// };

// export default LoginWithGoogle;
