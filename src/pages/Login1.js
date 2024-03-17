import NavigationBar3 from "../components/NavigationBar3";
import FrameComponent7 from "../components/FrameComponent7";
import styles from "./Login1.module.css";

const Login = () => {
  return (
    <div className={styles.login}>
      <NavigationBar3 />
      <section className={styles.loginInner}>
        <FrameComponent7 />
      </section>
    </div>
  );
};

export default Login;
