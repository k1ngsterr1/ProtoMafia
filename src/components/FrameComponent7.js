import styles from "./FrameComponent7.module.css";

const FrameComponent7 = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.loginWrapper}>
            <h1 className={styles.login}>Login</h1>
          </div>
          <div className={styles.toGetStarted}>
            To get started, you need to sign in here.
          </div>
        </div>
      </div>
      <div className={styles.bgParent}>
        <div className={styles.bg} />
        <div className={styles.frameContainer}>
          <div className={styles.labelParent}>
            <b className={styles.label}>Email</b>
            <div className={styles.inputBox}>
              <div className={styles.bgSolid} />
              <div className={styles.bgBorder} />
              <input
                className={styles.inputName}
                placeholder="i.e. john@mail.com"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className={styles.forgotPasswordInput}>
          <div className={styles.rememberMeCheckboxParent}>
            <div className={styles.rememberMeCheckbox}>
              <div className={styles.labelWrapper}>
                <b className={styles.label1}>Password</b>
              </div>
              <div className={styles.forgotPassword}>Forgot password?</div>
            </div>
            <div className={styles.inputBox1}>
              <div className={styles.bgSolid1} />
              <div className={styles.bgBorder1} />
              <div className={styles.inputName1}>********</div>
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.bgWrapper}>
            <input className={styles.bg1} type="checkbox" />
          </div>
          <div className={styles.rememberMe}>Remember me</div>
        </div>
        <div className={styles.rememberMeCheckmark}>
          <div className={styles.button1}>
            <div className={styles.rectangle} />
            <b className={styles.buttonName}>Sign In</b>
          </div>
        </div>
      </div>
      <div className={styles.dontHaveAnAccounWrapper}>
        <div className={styles.dontHaveAnContainer}>
          <span>{`Don’t have an account? `}</span>
          <span className={styles.createAnAccount}>Create an account</span>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent7;
