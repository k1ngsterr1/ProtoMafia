import NavigationBar4 from "../components/NavigationBar";
import InputLabelBG from "../components/InputLabelBG";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.signup}>
      <NavigationBar4 />
      <section className={styles.inputBoxBG}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.inputNameParent}>
              <div className={styles.inputName}>
                <h1 className={styles.signUp}>Sign up</h1>
              </div>
              <div className={styles.toGetStarted}>
                To get started, you need to sign up here.
              </div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.bgParent}>
              <div className={styles.bg} />
              <InputLabelBG
                label={`First & Last Name`}
                inputNamePlaceholder="i.e. John Doe"
              />
              <InputLabelBG
                label="Email"
                inputNamePlaceholder="i.e. john@mail.com"
                propPadding="0px var(--padding-12xs)"
                propWidth="88px"
              />
              <div className={styles.inputLabelBG}>
                <div className={styles.labelParent}>
                  <b className={styles.label}>Password</b>
                  <div className={styles.inputBox}>
                    <div className={styles.bgSolid} />
                    <div className={styles.bgBorder} />
                    <div className={styles.inputName1}>********</div>
                  </div>
                </div>
              </div>
              <InputLabelBG
                label="Confirm Password"
                inputNamePlaceholder="********"
                propPadding="0px var(--padding-12xs) var(--padding-8xs)"
                propWidth="unset"
              />
              <div className={styles.inputradio01Wrapper}>
                <div className={styles.inputradio01}>
                  <div className={styles.checkmarkSymbol}>
                    <div className={styles.rememberMeLabel}>
                      <div className={styles.bg1} />
                      <img
                        className={styles.checkSmallIcon}
                        loading="lazy"
                        alt=""
                        src="/checksmall.svg"
                      />
                    </div>
                  </div>
                  <div
                    className={styles.rememberMe}
                  >{`I agree to the Terms & conditions`}</div>
                </div>
              </div>
              <div className={styles.buttonContainer}>
                <div className={styles.button1}>
                  <div className={styles.rectangle} />
                  <b className={styles.buttonName}>Create an account</b>
                </div>
              </div>
            </div>
            <div className={styles.helpLink}>
              <div className={styles.alreadyHaveAn}>
                Already have an account? Sign in now
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
