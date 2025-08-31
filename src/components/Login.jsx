import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setIsLoading(true);
    
    // Giriş animasyonu için kısa bekleme
    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        localStorage.setItem('userToken', 'logged-in');
        localStorage.setItem('userData', JSON.stringify({ username, role: 'Admin' }));
        navigate("/dashboard");
      } else {
        alert("Hatalı kullanıcı adı veya şifre!");
        setIsLoading(false);
      }
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    },
    loginCard: {
      width: "420px",
      maxWidth: "90vw",
      padding: "40px",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      borderRadius: "20px",
      backgroundColor: "white",
      textAlign: "center",
      position: "relative",
      overflow: "hidden"
    },
    decorativeElement: {
      position: "absolute",
      top: "-50px",
      right: "-50px",
      width: "100px",
      height: "100px",
      background: "linear-gradient(45deg, #667eea, #764ba2)",
      borderRadius: "50%",
      opacity: "0.1"
    },
    logo: {
      fontSize: "48px",
      marginBottom: "16px",
      background: "linear-gradient(45deg, #667eea, #764ba2)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text"
    },
    title: {
      fontSize: "28px",
      fontWeight: "700",
      color: "#1f2937",
      marginBottom: "8px",
      letterSpacing: "-0.5px"
    },
    subtitle: {
      fontSize: "16px",
      color: "#6b7280",
      marginBottom: "32px"
    },
    formGroup: {
      marginBottom: "20px",
      textAlign: "left"
    },
    label: {
      display: "block",
      fontSize: "14px",
      fontWeight: "500",
      color: "#374151",
      marginBottom: "6px"
    },
    input: {
      width: "100%",
      padding: "14px 16px",
      fontSize: "16px",
      border: "2px solid #e5e7eb",
      borderRadius: "12px",
      backgroundColor: "#f9fafb",
      color: "#1f2937",
      boxSizing: "border-box",
      transition: "all 0.3s ease",
      outline: "none"
    },
    inputFocus: {
      borderColor: "#667eea",
      backgroundColor: "white",
      transform: "translateY(-1px)"
    },
    button: {
      width: "100%",
      padding: "14px",
      fontSize: "16px",
      fontWeight: "600",
      color: "white",
      background: isLoading 
        ? "linear-gradient(45deg, #9ca3af, #6b7280)" 
        : "linear-gradient(45deg, #667eea, #764ba2)",
      border: "none",
      borderRadius: "12px",
      cursor: isLoading ? "not-allowed" : "pointer",
      transition: "all 0.3s ease",
      transform: "translateY(0)",
      boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)"
    },
    buttonHover: {
      transform: "translateY(-2px)",
      boxShadow: "0 8px 25px rgba(102, 126, 234, 0.6)"
    },
    footer: {
      marginTop: "32px",
      padding: "20px 0",
      borderTop: "1px solid #f3f4f6",
      color: "#9ca3af",
      fontSize: "14px"
    },
    loadingSpinner: {
      display: "inline-block",
      width: "20px",
      height: "20px",
      border: "2px solid rgba(255,255,255,0.3)",
      borderTop: "2px solid white",
      borderRadius: "50%",
      animation: "spin 1s linear infinite",
      marginRight: "8px"
    }
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
      
      <div style={styles.loginCard}>
        <div style={styles.decorativeElement}></div>
        
        <div style={styles.logo}>🍽️</div>
        <h1 style={styles.title}>Hoş Geldiniz</h1>
        <p style={styles.subtitle}>Rezervasyon yönetim paneline giriş yapın</p>

        <div style={styles.formGroup}>
          <label style={styles.label}>Kullanıcı Adı</label>
          <input
            type="text"
            placeholder="admin"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyPress={handleKeyPress}
            onFocus={(e) => {
              e.target.style.borderColor = "#667eea";
              e.target.style.backgroundColor = "white";
              e.target.style.transform = "translateY(-1px)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#e5e7eb";
              e.target.style.backgroundColor = "#f9fafb";
              e.target.style.transform = "translateY(0)";
            }}
            style={styles.input}
            disabled={isLoading}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Şifre</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={handleKeyPress}
            onFocus={(e) => {
              e.target.style.borderColor = "#667eea";
              e.target.style.backgroundColor = "white";
              e.target.style.transform = "translateY(-1px)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#e5e7eb";
              e.target.style.backgroundColor = "#f9fafb";
              e.target.style.transform = "translateY(0)";
            }}
            style={styles.input}
            disabled={isLoading}
          />
        </div>

        <button
          onClick={handleLogin}
          onMouseEnter={(e) => {
            if (!isLoading) {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 8px 25px rgba(102, 126, 234, 0.6)";
            }
          }}
          onMouseLeave={(e) => {
            if (!isLoading) {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 15px rgba(102, 126, 234, 0.4)";
            }
          }}
          style={styles.button}
          disabled={isLoading}
        >
          {isLoading && <span style={styles.loadingSpinner}></span>}
          {isLoading ? "Giriş yapılıyor..." : "Giriş Yap"}
        </button>

        <div style={styles.footer}>
          <p>Rezervasyon Yönetim Sistemi v1.0</p>
        </div>
      </div>
    </div>
  );
}

export default Login;