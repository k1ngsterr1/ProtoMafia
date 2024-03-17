import NavigationBar1 from "../components/NavigationBar1";
import FrameComponent from "../components/FrameComponent8";
import ContainerWithThreeDividers from "../components/ContainerWithThreeDividers";
import ListBestStudents from "../components/ListBestStudents";
import Footer from "../components/Footer3";
import styles from "./Frame2.module.css";

const Frame = () => {
  return (
    <div className={styles.div}>
      <div className={styles.mainFigmaComponent} />
      <h1 className={styles.mafia}>MAFIA</h1>
      <NavigationBar1 />
      <div className={styles.containerWithChevron}>
        <div className={styles.containerWithChevronInner}>
          <div className={styles.parent}>
            <h3 className={styles.h3}>Таблица лидеров</h3>
            <h2 className={styles.h2}>Этот месяц</h2>
          </div>
        </div>
        <FrameComponent />
        <div className={styles.containerWithThreeDividersParent}>
          <ContainerWithThreeDividers />
          <ListBestStudents />
        </div>
      </div>
      <main className={styles.footerContainerParent}>
        <img
          className={styles.footerContainerIcon}
          alt=""
          src="/rectangle@2x.png"
        />
        <section className={styles.header}>
          <div className={styles.logoAndTitle} />
          <img
            className={styles.chevronDownIcon}
            loading="lazy"
            alt=""
            src="/chevrondown-1.svg"
          />
          <img className={styles.headerChild} alt="" src="/rectangle-321.svg" />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Frame;
