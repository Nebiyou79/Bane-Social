import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            If you're always trying to be normal,
            you will never know how amazing you 
            can be.
          </p>
          <p>
          Social media is not a media. The key is to listen, engage, and build relationships.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <Link to="/">
              <button onClick={handleLogin}>Login</button>
            </Link>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
