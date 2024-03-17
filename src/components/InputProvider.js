import "antd/dist/antd.min.css";
import { Select } from "antd";
import styles from "./InputProvider.module.css";

const InputProvider = () => {
  return (
    <div className={styles.inputProvider}>
      <div className={styles.outputReceiver}>
        <header className={styles.navigationBar}>
          <div className={styles.mafiashowTime}>
            <p className={styles.mafiashow}>MAFIASHOW</p>
            <p className={styles.time}>TIME</p>
          </div>
          <div className={styles.variableHolder}>
            <div className={styles.div}>Главная</div>
            <div className={styles.div1}>Об игре</div>
            <div className={styles.div2}>Онлайн мафия</div>
            <div className={styles.div3}>Расписание</div>
            <div className={styles.div4}>Рейтинг</div>
            <div className={styles.arithmeticOperator}>+7 700 100 11 11</div>
          </div>
          <div className={styles.logicOperator}>
            <div className={styles.icons}>
              <Select
                className={styles.iconsChild}
                virtual={false}
                showArrow={false}
              >{` `}</Select>
              <img
                className={styles.userIcon}
                loading="lazy"
                alt=""
                src="/user.svg"
              />
            </div>
          </div>
        </header>
        <img className={styles.image6Icon} alt="" src="/image-6@2x.png" />
        <h1 className={styles.mafia}>Mafia</h1>
        <div className={styles.div5}>Играть</div>
      </div>
    </div>
  );
};

export default InputProvider;
