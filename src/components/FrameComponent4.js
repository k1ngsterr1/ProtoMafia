import "antd/dist/antd.min.css";
import { Select } from "antd";
import styles from "./FrameComponent4.module.css";

const FrameComponent4 = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.lobbySearchBarParent}>
        <div className={styles.lobbySearchBar}>
          <div className={styles.frameParent}>
            <div className={styles.memojiParent}>
              <img
                className={styles.memojiIcon}
                loading="lazy"
                alt=""
                src="/memoji@2x.png"
              />
              <div className={styles.lobbyStatusIndicator}>
                <img
                  className={styles.grommetIconsmoney}
                  loading="lazy"
                  alt=""
                  src="/grommeticonsmoney.svg"
                />
                <div className={styles.div}>1000 на балансе</div>
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.onigiriParent}>
                <h1 className={styles.onigiri}>onigiri</h1>
                <div className={styles.c}>c нами с 14.03.24</div>
                <button className={styles.mdirankParent}>
                  <img
                    className={styles.mdirankIcon}
                    alt=""
                    src="/mdirank.svg"
                  />
                  <div className={styles.div1}>1 ранг</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.parent}>
              <div className={styles.div2}>Игр</div>
              <div className={styles.div3}>0</div>
            </div>
            <div className={styles.group}>
              <div className={styles.div4}>Побед</div>
              <div className={styles.div5}>0</div>
            </div>
            <div className={styles.container}>
              <div className={styles.div6}>Балл</div>
              <div className={styles.div7}>0</div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.div8}>Вам доступно 3 бесплатных игры.</div>
            <img
              className={styles.checkBrokenIcon}
              loading="lazy"
              alt=""
              src="/checkbroken.svg"
            />
          </div>
        </div>
        <div className={styles.frameWrapper1}>
          <div className={styles.frameParent1}>
            <div className={styles.frameParent2}>
              <div className={styles.frameWrapper2}>
                <div className={styles.parent1}>
                  <h1 className={styles.h1}>Лобби</h1>
                  <button className={styles.frameButton}>
                    <div className={styles.socialMediaIconContainerParent}>
                      <div className={styles.socialMediaIconContainer}>
                        <div className={styles.div9}>Поиск лобби</div>
                      </div>
                      <img
                        className={styles.icon24pxSearch}
                        alt=""
                        src="/icon--24px--search1.svg"
                      />
                    </div>
                  </button>
                </div>
              </div>
              <div className={styles.div10}>
                <img className={styles.child} alt="" src="/group-36688.svg" />
                <button className={styles.createGameBtnParent}>
                  <div className={styles.createGameBtn}>
                    <img
                      className={styles.subtractIcon}
                      alt=""
                      src="/subtract.svg"
                    />
                    <div className={styles.createGameBtnChild} />
                  </div>
                  <div className={styles.div11}>Создать игру</div>
                  <img className={styles.plus01Icon} alt="" src="/plus01.svg" />
                </button>
              </div>
            </div>
            <div className={styles.frameParent3}>
              <div className={styles.parent2}>
                <div className={styles.div12}>Название игры</div>
                <Select
                  className={styles.gameDetailsHeader}
                  virtual={false}
                  showArrow={false}
                >{` `}</Select>
                <Select
                  className={styles.gameDetailsHeader1}
                  virtual={false}
                  showArrow={false}
                >{` `}</Select>
                <div className={styles.div13}>Кол-во игроков</div>
              </div>
              <div className={styles.contactInfoBar}>
                <div className={styles.div14}>7852ыыва</div>
                <div className={styles.wrapper}>
                  <div className={styles.div15}>Классическая</div>
                </div>
                <div className={styles.contactInfoBarInner}>
                  <button className={styles.liveWrapper}>
                    <div className={styles.live}>Live</div>
                  </button>
                </div>
                <div className={styles.div16}>10 / 10</div>
              </div>
              <div className={styles.contactInfoBar1}>
                <div className={styles.div17}>7852ыыва</div>
                <div className={styles.frame}>
                  <div className={styles.div18}>Классическая</div>
                </div>
                <div className={styles.contactInfoBarChild}>
                  <button className={styles.liveContainer}>
                    <div className={styles.live1}>Live</div>
                  </button>
                </div>
                <div className={styles.div19}>10 / 8</div>
              </div>
              <div className={styles.contactInfoBar2}>
                <div className={styles.div20}>7852ыыва</div>
                <div className={styles.wrapper1}>
                  <div className={styles.div21}>Классическая</div>
                </div>
                <div className={styles.contactInfoBarInner1}>
                  <button className={styles.liveFrame}>
                    <div className={styles.live2}>Live</div>
                  </button>
                </div>
                <div className={styles.div22}>10 / 5</div>
              </div>
              <div className={styles.contactInfoBar3}>
                <div className={styles.div23}>7852ыыва</div>
                <div className={styles.wrapper2}>
                  <div className={styles.div24}>Классическая</div>
                </div>
                <div className={styles.contactInfoBarInner2}>
                  <button className={styles.liveWrapper1}>
                    <div className={styles.live3}>Live</div>
                  </button>
                </div>
                <div className={styles.div25}>10 / 1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
