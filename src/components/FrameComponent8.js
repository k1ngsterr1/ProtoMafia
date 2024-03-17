import FrameComponent1 from "./FrameComponent9";
import styles from "./FrameComponent8.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.containerWithChevronInner}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <FrameComponent1
              ellipse1225="/ellipse-1225@2x.png"
              icon="/icon1.svg"
              prop="Данияр К."
              prop1="87 500 балл"
            />
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/ellipse-1225-1@2x.png"
              />
              <div className={styles.frameContainer}>
                <div className={styles.downArrowSmParent}>
                  <div className={styles.downArrowSm}>
                    <div className={styles.downArrowSm1}>
                      <img className={styles.icon} alt="" src="/icon1.svg" />
                    </div>
                  </div>
                  <div className={styles.div}>Дильназ Ш.</div>
                  <img
                    className={styles.iconpremium}
                    loading="lazy"
                    alt=""
                    src="/iconpremium.svg"
                  />
                </div>
                <div className={styles.div1}>187 500 балл</div>
              </div>
            </div>
            <FrameComponent1
              ellipse1225="/ellipse-1225-2@2x.png"
              icon="/icon.svg"
              prop="Артур К."
              prop1="68 500 балл"
              propBoxShadow="2px 2px 6px rgba(0, 0, 0, 0.05), 2px 2px 6px rgba(0, 0, 0, 0.05)"
              propMinWidth="76px"
            />
          </div>
        </div>
        <div className={styles.vectorParent}>
          <img className={styles.frameItem} alt="" src="/rectangle-318.svg" />
          <img className={styles.frameInner} alt="" src="/rectangle-319.svg" />
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-318.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
