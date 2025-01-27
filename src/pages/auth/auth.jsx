import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../../components/auth/login";
import app_api from "../../config/config";

const Auth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [itkAdminKey, setItkKey] = useState(
    localStorage.getItem("itkAdminKey")
  );

  const performLogin = (values) => {
    setLoading(true);
    app_api
      .post("/auth/login", values)
      .then((res) => {
        setLoading(false);
        setError(null);
        // setmoldToken(res.data)
        localStorage.setItem("itkAdminKey", JSON.stringify(res.data));
        console.log(res.data)
        navigate("/dashboard");
      })
      .catch((err) => {
        setLoading(false);
        setError(err?.response?.data?.message || "error logging in");
      });
  };

  useEffect(() => {
    localStorage.getItem("itkAdminKey") && navigate("/dashboard");
  }, [itkAdminKey]);

  return (
    <div>
      <Login loading={loading} error={error} login={performLogin} />
    </div>
  );
};

export default Auth;
