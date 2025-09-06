import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginHeader from "../../components/login/LoginHeader";
import LoginForm from "../../components/login/LoginForm";
import LoginFooter from "../../components/login/LoginFooter";
import "../../styles/custom.css";  

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        localStorage.setItem("userToken", "logged-in");
        localStorage.setItem("userData", JSON.stringify({ username, role: "Admin" }));
        navigate("/dashboard");
      } else {
        alert("Hatalı kullanıcı adı veya şifre!");
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="decorative-element"></div>

        <LoginHeader />

        <LoginForm
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          isLoading={isLoading}
          handleLogin={handleLogin}
        />

        <LoginFooter />
      </div>
    </div>
  );
}

export default LoginPage;
