import { useMemo } from "react";
import styles from "./LoopControl.module.css";

const LoopControl = ({
  image52,
  propPadding,
  propAlignSelf,
  propHeight,
  propHeight1,
  propWidth,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const rectangleDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      height: propHeight,
    };
  }, [propAlignSelf, propHeight]);

  const image52IconStyle = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  const dataFlowManagerStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.loopControl}>
      <div className={styles.rectangleParent} style={groupDivStyle}>
        <div className={styles.frameChild} style={rectangleDivStyle} />
        <img
          className={styles.image52Icon}
          loading="lazy"
          alt=""
          src={image52}
          style={image52IconStyle}
        />
      </div>
      <div className={styles.dataFlowManager} style={dataFlowManagerStyle}>
        <div className={styles.dataMapper}>
          <div className={styles.dataSorter}>0</div>
          <div className={styles.dataValidator}>100%</div>
          <div className={styles.functionSequencer}>0%</div>
        </div>
      </div>
    </div>
  );
};

export default LoopControl;
