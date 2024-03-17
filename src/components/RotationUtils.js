import styles from "./RotationUtils.module.css";

const RotationUtils = () => {
  return (
    <div className={styles.rotationUtils}>
      <div className={styles.scalingFunctions}>
        <h1 className={styles.h1}>Мы и вы</h1>
        <div className={styles.skewTransforms}>
          <h3 className={styles.h3}>Узнать об игре</h3>
          <div className={styles.blendingModes}>
            <img className={styles.icon} alt="" src="/icon-1.svg" />
          </div>
        </div>
      </div>
      <div className={styles.fillingStyles}>
        <div className={styles.strokeProperties}>
          <img
            className={styles.image32Icon}
            loading="lazy"
            alt=""
            src="/image-32@2x.png"
          />
          <div className={styles.div}>«Мафия» на корпоративе</div>
        </div>
        <div className={styles.strokeProperties1}>
          <img
            className={styles.image32Icon1}
            alt=""
            src="/image-32-1@2x.png"
          />
          <div className={styles.div1}>Новые знакомства с людьми</div>
        </div>
        <div className={styles.strokeProperties2}>
          <img
            className={styles.image32Icon2}
            alt=""
            src="/image-32-2@2x.png"
          />
          <div className={styles.div2}>увлекательные игры</div>
        </div>
      </div>
    </div>
  );
};

export default RotationUtils;
