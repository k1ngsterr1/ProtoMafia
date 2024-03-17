import styles from "./Footer.module.css";

const Footer1 = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.canvasConfiguration}>
        <div className={styles.workspaceSettings}>
          <img
            className={styles.socialIcons}
            loading="lazy"
            alt=""
            src="/social-icons.svg"
          />
        </div>
        <div className={styles.workspaceSettings1}>
          <img
            className={styles.socialIcons1}
            alt=""
            src="/social-icons-1.svg"
          />
        </div>
        <div className={styles.workspaceSettings2}>
          <img
            className={styles.socialIcons2}
            alt=""
            src="/social-icons-2.svg"
          />
        </div>
        <div className={styles.workspaceSettings3}>
          <img
            className={styles.socialIcons3}
            alt=""
            src="/social-icons-3.svg"
          />
        </div>
      </div>
      <div className={styles.mafshowkz}>©2024 mafshow.kz</div>
      <div className={styles.parent}>
        <div className={styles.div}>Контакты :+7 (705) 666 57 94</div>
        <div className={styles.div1}>Условия использование</div>
        <div className={styles.cookie}>Настройки cookie</div>
      </div>
      <div className={styles.group}>
        <div className={styles.div2}>Политика конфиденциальности</div>
        <div className={styles.div3}>Условия использование</div>
        <div className={styles.cookie1}>Настройки cookie</div>
      </div>
    </footer>
  );
};

export default Footer1;
