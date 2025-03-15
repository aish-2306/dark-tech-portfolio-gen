
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";

const NotFound = () => {
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className={`min-h-screen flex items-center justify-center ${theme === 'light' ? 'bg-gray-100' : 'bg-tech-dark'}`}>
      <div className="text-center">
        <h1 className={`text-4xl font-bold mb-4 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>404</h1>
        <p className={`text-xl ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} mb-4`}>Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
