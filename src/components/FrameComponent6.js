import styles from "./FrameComponent6.module.css";

const FrameComponent6 = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.instanceParent}>
            <div className={styles.parent}>
              <div className={styles.div}>01</div>
              <h1 className={styles.h1}>Мафия</h1>
            </div>
            <div className={styles.group}>
              <div className={styles.div1}>02</div>
              <h1 className={styles.h11}>Дон</h1>
            </div>
            <div className={styles.container}>
              <div className={styles.div2}>03</div>
              <h1 className={styles.h12}>Мирный</h1>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.div3}>04</div>
              <h1 className={styles.h13}>Шериф</h1>
            </div>
            <div className={styles.parent1}>
              <div className={styles.div4}>05</div>
              <h1 className={styles.h14}>Доктор</h1>
            </div>
            <div className={styles.parent2}>
              <div className={styles.div5}>06</div>
              <h1 className={styles.h15}>Маньяк</h1>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.parent3}>
              <div className={styles.div6}>КАКАЯ БЫВАЕТ МАФИЯ</div>
              <div className={styles.frameWrapper1}>
                <div className={styles.frameParent1}>
                  <button className={styles.activityWrapper}>
                    <img
                      className={styles.activityIcon}
                      alt=""
                      src="/activity.svg"
                    />
                  </button>
                  <button className={styles.lightningCircleContainedWrapper}>
                    <img
                      className={styles.lightningCircleContainedIcon}
                      alt=""
                      src="/lightningcirclecontained.svg"
                    />
                  </button>
                  <div className={styles.frameChild} />
                </div>
              </div>
              <div className={styles.div7}>
                <p className={styles.p}>{`Существует два вида мафии: `}</p>
                <ul className={styles.ul}>
                  <li className={styles.li}>{`классическая мафия `}</li>
                  <li>{`городская мафия. `}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper2}>
          <div className={styles.frameParent2}>
            <div className={styles.frameWrapper3}>
              <div className={styles.mafiaParent}>
                <div className={styles.mafia}>Mafia</div>
                <div
                  className={styles.loremIpsumDolor}
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `}</div>
              </div>
            </div>
            <div className={styles.scroll}>
              <div className={styles.scrollInner}>
                <div className={styles.groupDiv}>
                  <div className={styles.wrapper}>
                    <div className={styles.div8}>01</div>
                  </div>
                  <div className={styles.lineWrapper}>
                    <div className={styles.frameItem} />
                  </div>
                  <div className={styles.div9}>06</div>
                </div>
              </div>
              <div className={styles.wrapperGroup36674}>
                <img
                  className={styles.wrapperGroup36674Child}
                  loading="lazy"
                  alt=""
                  src="/group-36674.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6;
