import styles from "./ShapeCollection.module.css";

const ShapeCollection = () => {
  return (
    <div className={styles.shapeCollection}>
      <div className={styles.mafiaParent}>
        <h1 className={styles.mafia}>MAFIA</h1>
        <div className={styles.frameWrapper}>
          <div className={styles.colorPaletteParent}>
            <div className={styles.colorPalette}>
              <div className={styles.layoutManager} />
              <div className={styles.layoutManager1} />
            </div>
            <div className={styles.colorPaletteGroup}>
              <div className={styles.colorPalette1}>
                <div className={styles.sizeSliders} />
                <div className={styles.sizeSliders1} />
              </div>
              <div className={styles.transformationTools}>
                <div className={styles.proximityDetector} />
                <div className={styles.proximityDetector1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShapeCollection;
