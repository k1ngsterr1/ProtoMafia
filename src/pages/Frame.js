import NavigationBar1 from "../components/NavigationBar1";
import FrameComponent4 from "../components/FrameComponent4";
import Footer2 from "../components/Footer1";
import styles from "./Frame.module.css";

const Frame = () => {
  return (
    <div className={styles.div}>
      <div className={styles.navigationBarParent}>
        <NavigationBar1 />
        <FrameComponent4 />
      </div>
      <div className={styles.mafiaLogoShape}>
        <div className={styles.mafiaLogoShapeChild} />
        <div className={styles.mafiaLogoShapeItem} />
        <main className={styles.mafiaParent}>
          <section className={styles.mafia}>MAFIA</section>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle@2x.png"
          />
        </main>
      </div>
      <Footer2 />
    </div>
  );
};

export default Frame;
