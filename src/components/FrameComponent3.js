import styles from "./FrameComponent3.module.css";

const FrameComponent3 = () => {
  return (
    <div className={styles.parent}>
      <h1 className={styles.h1}>Об игре</h1>
      <div className={styles.frameWrapper}>
        <div className={styles.group}>
          <h3 className={styles.h3}>Узнать об игре</h3>
          <div className={styles.frameContainer}>
            <div className={styles.iconWrapper}>
              <img
                className={styles.icon}
                loading="lazy"
                alt=""
                src="/icon2.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
