import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center  bg-red-500">
      <div className="flex items-center justify-center gap-2">
        <h1 className="font-semibold text-red-200 animate__animated animate__fadeIn">
          404 - Page Not Found
        </h1>
      </div>
      <Link
        to={"/"}
        className="text-lg font-medium bg-white p-3 rounded-md  hover:text-blue-800 transition-all duration-300 ease-in-out transform hover:scale-105  animate__animated animate__fadeIn animate__delay-1s"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
