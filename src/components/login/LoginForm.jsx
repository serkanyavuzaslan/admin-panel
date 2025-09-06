import LoginInput from "./LoginInput";

function LoginForm({ username, setUsername, password, setPassword, isLoading, handleLogin }) {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="login-form">
      <LoginInput
        label="Kullanıcı Adı"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyPress={handleKeyPress}
        disabled={isLoading}
      />

      <LoginInput
        label="Şifre"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onKeyPress={handleKeyPress}
        disabled={isLoading}
      />

      <button className={`button ${isLoading ? "loading" : ""}`} onClick={handleLogin} disabled={isLoading}>
        {isLoading && <span className="loading-spinner"></span>}
        {isLoading ? "Giriş yapılıyor..." : "Giriş Yap"}
      </button>
    </div>
  );
}

export default LoginForm;
