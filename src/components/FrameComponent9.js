import { useMemo } from "react";
import styles from "./FrameComponent9.module.css";

const FrameComponent1 = ({
  ellipse1225,
  icon,
  prop,
  prop1,
  propBoxShadow,
  propMinWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      boxShadow: propBoxShadow,
    };
  }, [propBoxShadow]);

  const divStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.ellipseParent} style={frameDivStyle}>
      <img
        className={styles.frameChild}
        loading="lazy"
        alt=""
        src={ellipse1225}
      />
      <div className={styles.frameParent}>
        <div className={styles.downArrowSmParent}>
          <div className={styles.downArrowSm}>
            <div className={styles.downArrowSm1}>
              <img className={styles.icon} loading="lazy" alt="" src={icon} />
            </div>
          </div>
          <div className={styles.div} style={divStyle}>
            {prop}
          </div>
        </div>
        <div className={styles.div1}>{prop1}</div>
      </div>
    </div>
  );
};

export default FrameComponent1;
