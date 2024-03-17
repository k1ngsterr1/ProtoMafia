import NavigationBar1 from "../components/NavigationBar1";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import Footer3 from "../components/Footer2";
import styles from "./Frame1.module.css";

const Frame = () => {
  return (
    <div className={styles.div}>
      <div className={styles.image4} />
      <h1 className={styles.mafia}>MAFIA</h1>
      <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
      <div className={styles.navigationBarParent}>
        <NavigationBar1 />
        <FrameComponent6 />
      </div>
      <FrameComponent5 />
      <main className={styles.contactFooterParent}>
        <div className={styles.contactFooter} />
        <div className={styles.privacyPolicy} />
        <div className={styles.contactFooter1} />
        <section className={styles.termsOfUse}>
          <div className={styles.cookiesSettings} />
          <img
            className={styles.termsOfUseChild}
            alt=""
            src="/group-366421.svg"
          />
          <div className={styles.cookiesSettings1} />
          <img className={styles.image19Icon} alt="" src="/image-19@2x.png" />
          <img
            className={styles.termsOfUseItem}
            loading="lazy"
            alt=""
            src="/group-36676.svg"
          />
          <div className={styles.cookiesSettings2} />
          <div className={styles.cookiesSettings3} />
          <div className={styles.cookiesSettings4} />
          <div className={styles.cookiesSettings5} />
          <div className={styles.cookiesSettings6} />
          <div className={styles.cookiesSettings7} />
          <div className={styles.cookiesSettings8} />
          <div className={styles.cookiesSettings9} />
          <div className={styles.cookiesSettings10} />
          <div className={styles.termsOfUseInner} />
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group-36637.svg"
          />
          <img
            className={styles.arrowIcon}
            loading="lazy"
            alt=""
            src="/arrow-1.svg"
          />
          <img
            className={styles.termsOfUseChild1}
            loading="lazy"
            alt=""
            src="/arrow-2.svg"
          />
          <div className={styles.wrapperSubtractShape}>
            <img
              className={styles.subtractShapeIcon}
              loading="lazy"
              alt=""
              src="/919-11@2x.png"
            />
          </div>
          <img
            className={styles.subtractIcon}
            loading="lazy"
            alt=""
            src="/subtract.svg"
          />
          <div className={styles.backgroundFooter} />
        </section>
      </main>
      <Footer3 />
      <img
        className={styles.backgroundShapeIcon}
        alt=""
        src="/rectangle@2x.png"
      />
    </div>
  );
};

export default Frame;
