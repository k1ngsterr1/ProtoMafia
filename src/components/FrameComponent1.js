import { useMemo } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent11 = ({ mdiaccount, prop, prop1, propWidth }) => {
  const bStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.mdiaccountParent}>
      <img
        className={styles.mdiaccountIcon}
        loading="lazy"
        alt=""
        src={mdiaccount}
      />
      <b className={styles.b} style={bStyle}>
        {prop}
      </b>
      <div className={styles.div}>{prop1}</div>
      <div className={styles.supportWrapper}>
        <div className={styles.support}>support</div>
      </div>
    </div>
  );
};

export default FrameComponent11;
