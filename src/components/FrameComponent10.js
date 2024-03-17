import styles from "./FrameComponent10.module.css";

const FrameComponent10 = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle@2x.png"
          />
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <button className={styles.carbondiagramParent}>
                  <img
                    className={styles.carbondiagramIcon}
                    alt=""
                    src="/carbondiagram.svg"
                  />
                  <div className={styles.div}>Статистика</div>
                </button>
                <div className={styles.materialSymbolshistoryParent}>
                  <img
                    className={styles.materialSymbolshistoryIcon}
                    loading="lazy"
                    alt=""
                    src="/materialsymbolshistory.svg"
                  />
                  <div className={styles.div1}>История игр</div>
                </div>
                <div className={styles.phwalletParent}>
                  <img
                    className={styles.phwalletIcon}
                    loading="lazy"
                    alt=""
                    src="/phwallet.svg"
                  />
                  <div className={styles.div2}>Кошелек</div>
                </div>
                <div className={styles.iconoirsecurityPassParent}>
                  <img
                    className={styles.iconoirsecurityPass}
                    loading="lazy"
                    alt=""
                    src="/iconoirsecuritypass.svg"
                  />
                  <div className={styles.div3}>{`Безопасность `}</div>
                </div>
              </div>
              <div className={styles.materialSymbolslogoutParent}>
                <img
                  className={styles.materialSymbolslogoutIcon}
                  loading="lazy"
                  alt=""
                  src="/materialsymbolslogout.svg"
                />
                <div className={styles.div4}>Выйти</div>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.memojiParent}>
                <img
                  className={styles.memojiIcon}
                  loading="lazy"
                  alt=""
                  src="/memoji@2x.png"
                />
                <div className={styles.grommetIconsmoneyParent}>
                  <img
                    className={styles.grommetIconsmoney}
                    alt=""
                    src="/grommeticonsmoney.svg"
                  />
                  <div className={styles.div5}>1000 на балансе</div>
                </div>
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.onigiriParent}>
                  <h1 className={styles.onigiri}>onigiri</h1>
                  <div className={styles.c}>c нами с 14.03.24</div>
                  <button className={styles.mdirankParent}>
                    <img
                      className={styles.mdirankIcon}
                      alt=""
                      src="/mdirank.svg"
                    />
                    <div className={styles.div6}>1 ранг</div>
                  </button>
                </div>
                <img className={styles.phpenIcon} alt="" src="/phpen.svg" />
              </div>
            </div>
          </div>
          <h1 className={styles.h1}>Статистика</h1>
        </div>
        <div className={styles.frameWrapper1}>
          <div className={styles.parent}>
            <div className={styles.div7}>Все</div>
            <div className={styles.div8}>Онлайн</div>
            <div className={styles.div9}>Оффлайн</div>
            <div className={styles.div10}>Турниры</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent10;
