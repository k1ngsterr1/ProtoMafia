import styles from "./FrameComponent5.module.css";

const FrameComponent5 = () => {
  return (
    <div className={styles.inner}>
      <div className={styles.parent}>
        <div className={styles.div}>ПРАВИЛА ИГРЫ МАФИЯ</div>
        <div className={styles.frameChild} />
        <div className={styles.div1}>
          <p className={styles.p}>
            Правила игры мафия предельно просты - игроки получают карты, на
            которых изображена та роль, за которую они будут играть.
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.p1}>
            Все игроки условно называются - "город", а каждый игрок за столом -
            горожанин. Город делится на 2 лагеря (клана) - клан Мафии и клан
            Честных жителей. По условиям игры мафия на протяжении всей игры
            будет запутывать мирных жителей, а те, в свою очередь, постараются
            найти и разоблачить лжецов.
          </p>
        </div>
        <div className={styles.div2}>
          Вся игра мафия делится на несколько этапов:
        </div>
        <div className={styles.gameIntroduction}>
          <div className={styles.gameplayType}>
            <div className={styles.image27Parent}>
              <img
                className={styles.image27Icon}
                loading="lazy"
                alt=""
                src="/image-27@2x.png"
              />
              <div className={styles.playerImages}>
                <div className={styles.playButton}>01</div>
                <div className={styles.div3}>Знакомство</div>
              </div>
            </div>
            <div className={styles.image27Group}>
              <img
                className={styles.image27Icon1}
                loading="lazy"
                alt=""
                src="/image-27-1@2x.png"
              />
              <div className={styles.group}>
                <div className={styles.div4}>02</div>
                <div className={styles.div5}>День</div>
              </div>
            </div>
            <div className={styles.image27Container}>
              <img
                className={styles.image27Icon2}
                loading="lazy"
                alt=""
                src="/image-27-2@2x.png"
              />
              <div className={styles.container}>
                <div className={styles.div6}>03</div>
                <div className={styles.div7}>Голосование</div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <img
                className={styles.image27Icon3}
                loading="lazy"
                alt=""
                src="/image-27@2x.png"
              />
              <div className={styles.parent1}>
                <div className={styles.div8}>04</div>
                <div className={styles.div9}>Ночь</div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.frameInner} />
            </div>
            <div className={styles.rectangleDiv} />
            <div className={styles.rectangleGroup}>
              <div className={styles.frameChild1} />
              <div className={styles.frameChild2} />
            </div>
          </div>
          <div className={styles.gameplayArea} />
          <div className={styles.lineParent}>
            <div className={styles.lineDiv} />
            <div className={styles.frameChild3} />
            <div className={styles.footerBottom}>
              <div className={styles.footerBottomChild} />
              <div className={styles.footerBottomItem} />
              <div className={styles.div10}>Играть</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
