import { useState } from "react";
import "./Login.css";

function Login({ onLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !password.trim()) return;
    onLogin({ name, email, phone, remember });
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Welcome Back</h1>
        <p>Sign in to continue shopping with GrabGo.</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="John Doe"
            required
          />

          <label htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            required
          />

          <label htmlFor="phone">Phone number</label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="(123) 456-7890"
          />

          <label className="remember-label">
            <input
              type="checkbox"
              checked={remember}
              onChange={(event) => setRemember(event.target.checked)}
            />
            Remember me
          </label>

          <button type="submit" className="login-button">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
