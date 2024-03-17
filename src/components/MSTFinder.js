import { useMemo } from "react";
import styles from "./MSTFinder.module.css";

const MSTFinder = ({ prop, group36690, propGap, propWidth }) => {
  const edgeWeigherStyle = useMemo(() => {
    return {
      gap: propGap,
      width: propWidth,
    };
  }, [propGap, propWidth]);

  return (
    <div className={styles.mSTFinder}>
      <div className={styles.edgeWeigher} style={edgeWeigherStyle}>
        <div className={styles.div}>{prop}</div>
        <div className={styles.div1}>0 смертей</div>
      </div>
      <div className={styles.breadthFirstSearcher}>
        <img
          className={styles.breadthFirstSearcherChild}
          loading="lazy"
          alt=""
          src={group36690}
        />
        <div className={styles.dijkstraFinder}>0%</div>
      </div>
    </div>
  );
};

export default MSTFinder;
