import styles from "./Footer3.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.borderColor}>
        <div className={styles.paddingValue}>
          <img
            className={styles.socialIcons}
            loading="lazy"
            alt=""
            src="/social-icons.svg"
          />
        </div>
        <div className={styles.paddingValue1}>
          <img
            className={styles.socialIcons1}
            loading="lazy"
            alt=""
            src="/social-icons-1.svg"
          />
        </div>
        <div className={styles.paddingValue2}>
          <img
            className={styles.socialIcons2}
            loading="lazy"
            alt=""
            src="/social-icons-2.svg"
          />
        </div>
        <div className={styles.paddingValue3}>
          <img
            className={styles.socialIcons3}
            loading="lazy"
            alt=""
            src="/social-icons-3.svg"
          />
        </div>
      </div>
      <div className={styles.mafshowkz}>©2024 mafshow.kz</div>
      <div className={styles.contactAndPolicy}>
        <div className={styles.div}>Контакты :+7 (705) 666 57 94</div>
        <div className={styles.div1}>Условия использование</div>
        <div className={styles.cookie}>Настройки cookie</div>
      </div>
      <div className={styles.contactAndPolicy1}>
        <div className={styles.div2}>Политика конфиденциальности</div>
        <div className={styles.div3}>Условия использование</div>
        <div className={styles.cookie1}>Настройки cookie</div>
      </div>
    </div>
  );
};

export default Footer;
