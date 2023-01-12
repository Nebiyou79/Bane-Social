import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Neba Social.</h1>
          <p>
          You as a brand have to be completely confident about your position, because you will get criticism. You will have a negative reaction. If you didn’t get a negative reaction, that means you’re standing neutral and you have no point of view. Who wants to participate in that?
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <Link to="/">
            <button>Register</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
