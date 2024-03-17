import { useMemo } from "react";
import styles from "./FrameComponent91.module.css";

const FrameComponent9 = ({ group36689, prop, propPadding, propMinWidth }) => {
  const dataMergeStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const div1Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.frameParent}>
      <img
        className={styles.frameChild}
        loading="lazy"
        alt=""
        src={group36689}
      />
      <div className={styles.outputCollector}>
        <div className={styles.logicGateway}>
          <div className={styles.dataMerge} style={dataMergeStyle}>
            <div className={styles.errorHandler}>0</div>
          </div>
          <div className={styles.div} style={div1Style}>
            {prop}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent9;
