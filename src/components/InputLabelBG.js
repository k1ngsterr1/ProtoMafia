import { useMemo } from "react";
import styles from "./InputLabelBG.module.css";

const InputLabelBG = ({
  label,
  inputNamePlaceholder,
  propPadding,
  propWidth,
}) => {
  const inputLabelBGStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const labelStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.inputLabelBG} style={inputLabelBGStyle}>
      <div className={styles.labelParent}>
        <b className={styles.label} style={labelStyle}>
          {label}
        </b>
        <div className={styles.inputBox}>
          <div className={styles.bgSolid} />
          <div className={styles.bgBorder} />
          <input
            className={styles.inputName}
            placeholder={inputNamePlaceholder}
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default InputLabelBG;
