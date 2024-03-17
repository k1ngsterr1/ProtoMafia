import InputProvider from "../components/InputProvider";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent21 from "../components/FrameComponent2";
import FrameComponent2 from "../components/FrameComponent";
import GroupComponent from "../components/GroupComponent";
import ShapeCollection from "../components/ShapeCollection";
import RotationUtils from "../components/RotationUtils";
import Footer1 from "../components/Footer";
import styles from "./Desktop.module.css";

const Desktop = () => {
  return (
    <div className={styles.desktop9}>
      <InputProvider />
      <h1 className={styles.mafia}>MAFIA</h1>
      <div className={styles.desktop9Child} />
      <div className={styles.div}>
        Клубная командная психологическая пошаговая ролевая игра
      </div>
      <img className={styles.desktop9Item} alt="" src="/group-36677@2x.png" />
      <div className={styles.actIOverview}>
        <div className={styles.actIOverviewChild} />
        <div className={styles.actIOverviewItem} />
        <div className={styles.actIOverviewInner} />
        <div className={styles.lineDiv} />
        <div className={styles.actIOverviewChild1} />
        <div className={styles.actIOverviewChild2} />
        <img className={styles.subtractIcon} alt="" src="/subtract1.svg" />
        <div className={styles.div1}>Играть</div>
      </div>
      <div className={styles.functionCall} />
      <div className={styles.functionCall1} />
      <div className={styles.functionCall2} />
      <div className={styles.functionCall3} />
      <div className={styles.functionCall4} />
      <div className={styles.functionCall5} />
      <div className={styles.desktop9Inner}>
        <div className={styles.frameParent}>
          <FrameComponent3 />
          <FrameComponent21 />
        </div>
      </div>
      <main className={styles.frameGroup}>
        <div className={styles.wrapper9191Parent}>
          <div className={styles.wrapper9191}>
            <img
              className={styles.icon}
              loading="lazy"
              alt=""
              src="/919-1@2x.png"
            />
          </div>
          <div className={styles.frameChild} />
          <img className={styles.frameItem} alt="" src="/group-36642.svg" />
          <img className={styles.subtractIcon1} alt="" src="/subtract-1.svg" />
        </div>
        <img className={styles.rectangleIcon} alt="" src="/rectangle1@2x.png" />
        <img
          className={styles.of11Icon}
          loading="lazy"
          alt=""
          src="/20210119-1-of-1-1@2x.png"
        />
        <img
          className={styles.lowKeyPortraitModernBusineIcon}
          loading="lazy"
          alt=""
          src="/lowkeyportraitmodernbusinessperson-1@2x.png"
        />
        <img className={styles.icon1} loading="lazy" alt="" src="/6-9@2x.png" />
      </main>
      <div className={styles.functionCall6} />
      <div className={styles.frameDiv}>
        <div className={styles.parent}>
          <h2 className={styles.h2}>
            Готовы окунуться в мир интриг, обмана и стратегических ходов против
            своих друзей?
          </h2>
          <h2 className={styles.h21}>
            Здесь вы можете не только наслаждаться игрой 'Мафия' в режиме онлайн
            с друзьями, но и организовывать игры оффлайн! Если вы предпочитаете
            классическое общение в живую, мы предлагаем возможность записаться
            на оффлайн игру.
          </h2>
          <div className={styles.lineParent}>
            <div className={styles.frameInner} />
            <div className={styles.frameContainer}>
              <div className={styles.lineWrapper}>
                <div className={styles.frameChild1} />
              </div>
              <div className={styles.frameChild2} />
              <div className={styles.lineGroup}>
                <div className={styles.frameChild3} />
                <div className={styles.frameChild4} />
                <button className={styles.subtractParent}>
                  <img
                    className={styles.subtractIcon2}
                    alt=""
                    src="/subtract-1.svg"
                  />
                  <div className={styles.div2}>Записаться</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.functionCall7} />
      <div className={styles.frameParent1}>
        <FrameComponent2 />
        <div className={styles.frameWrapper}>
          <GroupComponent />
        </div>
      </div>
      <div className={styles.functionCall8} />
      <div className={styles.desktop9Inner1}>
        <div className={styles.group}>
          <h2 className={styles.h22}>
            Готовы окунуться в мир интриг, обмана и стратегических ходов против
            своих друзей?
          </h2>
          <h2 className={styles.h23}>
            Готовы окунуться в мир интриг, обмана и стратегических ходов против
            своих друзей? Наша платформа предлагает вам уникальную возможность
            собрать свою команду и сыграть в любимую игру 'Мафия' прямо из
            уютного дома.
          </h2>
          <div className={styles.lineContainer}>
            <div className={styles.frameChild5} />
            <div className={styles.frameParent2}>
              <div className={styles.lineFrame}>
                <div className={styles.frameChild6} />
              </div>
              <div className={styles.frameChild7} />
              <div className={styles.lineParent1}>
                <div className={styles.frameChild8} />
                <div className={styles.frameChild9} />
                <button className={styles.subtractGroup}>
                  <img
                    className={styles.subtractIcon3}
                    alt=""
                    src="/subtract-1.svg"
                  />
                  <div className={styles.div3}>Играть</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ShapeCollection />
      <div className={styles.alignmentAssist}>
        <RotationUtils />
        <Footer1 />
      </div>
    </div>
  );
};

export default Desktop;
