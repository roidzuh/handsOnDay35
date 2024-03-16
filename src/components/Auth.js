import { useDispatch } from "react-redux";
import classes from "./Auth.module.css";
import { login } from "./Features/authSlice";

const Auth = () => {
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    if (!e.target[0].value || !e.target[1].value)
      return alert("isi dulu Email & Password");

    dispatch(login());
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleLogin}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
