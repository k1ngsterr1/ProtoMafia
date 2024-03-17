import FrameComponent11 from "./FrameComponent1";
import styles from "./FrameComponent.module.css";

const FrameComponent2 = () => {
  return (
    <div className={styles.frameParent}>
      <FrameComponent11
        mdiaccount="/mdiaccount.svg"
        prop="24 256"
        prop1="Игрока"
      />
      <FrameComponent11
        mdiaccount="/mdigun.svg"
        prop="85,900 "
        prop1="Матчей"
        propWidth="109px"
      />
      <div className={styles.tablerbrandMailgunParent}>
        <img
          className={styles.tablerbrandMailgunIcon}
          loading="lazy"
          alt=""
          src="/tablerbrandmailgun.svg"
        />
        <b className={styles.b}>100 000</b>
        <div className={styles.div}>Турниров</div>
      </div>
    </div>
  );
};

export default FrameComponent2;
