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
            <a href="/"><div className={styles.div}>Главная</div></a>
            <a href="/1"><div className={styles.div1}>Об игре</div></a>
            <a href="/OnlineApp"><div className={styles.div2}>Онлайн мафия</div></a>
            <div className={styles.div3}>Расписание</div>
            <a href="/2"><div className={styles.div4}>Рейтинг</div></a>
            <div className={styles.arithmeticOperator}>+7 700 100 11 11</div>
          </div>
          <div className={styles.logicOperator}>
            <div className={styles.icons}>
              <Select
                className={styles.iconsChild}
                virtual={false}
                showArrow={false}
              >{` `}</Select>
              <a href="/signup"><img
                className={styles.userIcon}
                loading="lazy"
                alt=""
                src="/user.svg"
              /></a>
            </div>
          </div>
        </header>
        <img className={styles.image6Icon} alt="" src="/image-6@2x.png" />
        <h1 className={styles.mafia}>Mafia</h1>
        <a href="/OnlineApp"><div className={styles.div5}>Играть</div></a>
      </div>
    </div>
  );
};

export default InputProvider;
