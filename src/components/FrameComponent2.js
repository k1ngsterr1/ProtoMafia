import styles from "./FrameComponent2.module.css";

const FrameComponent21 = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/rectangle-4@2x.png"
          />
          <div className={styles.frameGroup}>
            <img className={styles.frameItem} alt="" src="/group-36681.svg" />
            <h2 className={styles.h2}>
              <p className={styles.p}>Классическая</p>
              <p className={styles.p1}>Мафия</p>
            </h2>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <img
              className={styles.frameInner}
              alt=""
              src="/group-36681-1.svg"
            />
            <h2 className={styles.h21}>
              <p className={styles.p2}>Городская</p>
              <p className={styles.p3}>Мафия</p>
            </h2>
          </div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-4-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent21;
