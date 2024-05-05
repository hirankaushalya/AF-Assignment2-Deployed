import React, { useState } from "react"; 
import { signInWithEmailAndPassword } from "firebase/auth"; // Import signInWithEmailAndPassword method from Firebase auth
import { auth } from "./firebase"; // Import Firebase authentication instance
import { toast } from "react-toastify";
import "../styles/loginAndRegister.css"; //import csss


function Login() {
  // State variables for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Sign in user with email and password
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/home"; // Redirect user to home page
      alert("User logged in Successfully");
    } catch (error) {
      console.log(error.message);
      alert(error.message); // Display error message
    }
  };

  
  return (
    <div className="auth-wrapper"> 
      <div className="auth-inner"> 
        {/* Login form */}
        <form onSubmit={handleSubmit}>
          <h3>Login</h3>

          {/* Email input */}
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password input */}
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Submit button */}
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          {/* Link to register page */}
          <p className="forgot-password text-right">
            New user <a href="/register">Register Here</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login; 