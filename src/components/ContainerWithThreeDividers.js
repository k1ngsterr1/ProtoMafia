import styles from "./ContainerWithThreeDividers.module.css";

const ContainerWithThreeDividers = () => {
  return (
    <div className={styles.containerWithThreeDividers}>
      <div className={styles.listOfTheBestStudentsWrapper}>
        <div className={styles.listOfThe}>List of the Best students</div>
      </div>
      <div className={styles.div}>
        <img className={styles.child} alt="" src="/group-36688.svg" />
        <div className={styles.frameParent}>
          <div className={styles.subtractParent}>
            <img className={styles.subtractIcon} alt="" src="/subtract.svg" />
            <div className={styles.frameChild} />
          </div>
          <div className={styles.wrapper}>
            <div className={styles.div1}>Март 15, 2024</div>
          </div>
          <img
            className={styles.chevronDownIcon}
            alt=""
            src="/chevrondown.svg"
          />
        </div>
      </div>
      <div className={styles.div2}>
        <img className={styles.item} alt="" src="/group-36688.svg" />
        <div className={styles.parent}>
          <div className={styles.div3}>Поиск по имени...</div>
          <div className={styles.subtractGroup}>
            <img className={styles.subtractIcon1} alt="" src="/subtract.svg" />
            <div className={styles.containerWithCircles} />
            <img
              className={styles.icon24pxSearch}
              alt=""
              src="/icon--24px--search.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerWithThreeDividers;
