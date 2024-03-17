import styles from "./GroupComponent.module.css";

const GroupComponent = () => {
  return (
    <div className={styles.lineParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameItem} />
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <button className={styles.activityWrapper}>
            <img className={styles.activityIcon} alt="" src="/activity.svg" />
          </button>
          <div className={styles.lineWrapper}>
            <div className={styles.frameInner} />
          </div>
          <button className={styles.lightningCircleContainedWrapper}>
            <img
              className={styles.lightningCircleContainedIcon}
              alt=""
              src="/lightningcirclecontained.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
