import { useMemo } from "react";
import styles from "./FrameComponent81.module.css";

const FrameComponent8 = ({ image53, prop, prop1, propPadding, propHeight }) => {
  const groupDiv1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const image53IconStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.rectangleParent} style={groupDiv1Style}>
        <div className={styles.frameChild} />
        <img
          className={styles.image53Icon}
          loading="lazy"
          alt=""
          src={image53}
          style={image53IconStyle}
        />
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.parent}>
          <div className={styles.div}>{prop}</div>
          <div className={styles.div1}>
            <p className={styles.p}>Выдается за 100 завершенных игр</p>
            <p className={styles.p1}>{prop1}</p>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.groupWrapper}>
              <div className={styles.group}>
                <div className={styles.rectangle} />
              </div>
            </div>
            <div className={styles.div2}>0 / 100</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent8;
