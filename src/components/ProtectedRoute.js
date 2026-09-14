import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }) => {
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const userName = params.get("userName");

    if (userName) {
      localStorage.setItem("userName", userName);
      window.history.replaceState({}, "", "/");
    }

    setChecking(false);
  }, []);

  if (checking) {
    return null;
  }

  const savedUser = localStorage.getItem("userName");

  if (!savedUser) {
    window.location.href = "https://frontend-zerodha1.vercel.app/login";
    return null;
  }

  return children;
};

export default ProtectedRoute;