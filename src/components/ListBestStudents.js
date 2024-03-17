import styles from "./ListBestStudents.module.css";

const ListBestStudents = () => {
  return (
    <div className={styles.listBestStudents}>
      <footer className={styles.monthDropdownParent}>
        <div className={styles.monthDropdown}>
          <div className={styles.footerParent}>
            <div className={styles.footer}>
              <div className={styles.div}>Ранг</div>
              <div className={styles.div1}>Игрок</div>
              <div className={styles.div2}>Балл</div>
              <div className={styles.div3}>Место</div>
            </div>
            <div className={styles.premiumIconParent}>
              <div className={styles.premiumIcon}>
                <div className={styles.scoreBall}>5</div>
                <div className={styles.downArrowSm}>
                  <div className={styles.downArrowSm1}>
                    <img
                      className={styles.icon}
                      loading="lazy"
                      alt=""
                      src="/icon1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.imageContainerParent}>
                <img
                  className={styles.imageContainerIcon}
                  loading="lazy"
                  alt=""
                  src="/ellipse-1226@2x.png"
                />
                <div className={styles.div4}>Диана Т.</div>
              </div>
              <div className={styles.spacer}>52 000</div>
              <div className={styles.noDataMessage}>4</div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.parent}>
                <div className={styles.div5}>3</div>
                <div className={styles.downArrowSm2}>
                  <div className={styles.downArrowSm3}>
                    <img
                      className={styles.icon1}
                      loading="lazy"
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.frameGroup}>
                <button className={styles.playersListParent}>
                  <div className={styles.playersList} />
                  <img
                    className={styles.image9Icon}
                    alt=""
                    src="/image-9@2x.png"
                  />
                </button>
                <div className={styles.fejol}>Fejol Т.</div>
              </div>
              <div className={styles.div6}>50 700</div>
              <div className={styles.div7}>5</div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.group}>
                <div className={styles.div8}>1</div>
                <div className={styles.downArrowSm4}>
                  <div className={styles.downArrowSm5}>
                    <img
                      className={styles.icon2}
                      loading="lazy"
                      alt=""
                      src="/icon1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.frameDiv}>
                <button className={styles.ellipseParent}>
                  <div className={styles.frameChild} />
                  <img className={styles.icon3} alt="" src="/8-17@2x.png" />
                </button>
                <div className={styles.qwertyA}>Qwerty A.</div>
              </div>
              <div className={styles.div9}>48 500</div>
              <div className={styles.div10}>6</div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.container}>
                <div className={styles.div11}>3</div>
                <div className={styles.downArrowSm6}>
                  <div className={styles.downArrowSm7}>
                    <img
                      className={styles.icon4}
                      loading="lazy"
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.frameParent2}>
                <button className={styles.ellipseGroup}>
                  <div className={styles.frameItem} />
                  <img
                    className={styles.image9Icon1}
                    alt=""
                    src="/image-9-1@2x.png"
                  />
                </button>
                <div className={styles.fejol1}>Fejol Т.</div>
              </div>
              <div className={styles.div12}>35 700</div>
              <div className={styles.div13}>7</div>
            </div>
            <div className={styles.frameParent3}>
              <div className={styles.parent1}>
                <div className={styles.div14}>1</div>
                <div className={styles.downArrowSm8}>
                  <div className={styles.downArrowSm9}>
                    <img
                      className={styles.icon5}
                      loading="lazy"
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.frameParent4}>
                <button className={styles.ellipseContainer}>
                  <div className={styles.frameInner} />
                  <img
                    className={styles.image9Icon2}
                    alt=""
                    src="/image-9@2x.png"
                  />
                </button>
                <div className={styles.fejol2}>Fejol Т.</div>
              </div>
              <div className={styles.div15}>32 600</div>
              <div className={styles.div16}>8</div>
            </div>
            <div className={styles.frameParent5}>
              <div className={styles.parent2}>
                <div className={styles.div17}>5</div>
                <div className={styles.downArrowSm10}>
                  <div className={styles.downArrowSm11}>
                    <img
                      className={styles.icon6}
                      loading="lazy"
                      alt=""
                      src="/icon1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.frameParent6}>
                <button className={styles.groupButton}>
                  <div className={styles.ellipseDiv} />
                  <img
                    className={styles.image9Icon3}
                    alt=""
                    src="/image-9@2x.png"
                  />
                </button>
                <div className={styles.fejol3}>Fejol Т.</div>
              </div>
              <div className={styles.div18}>28 500</div>
              <div className={styles.div19}>9</div>
            </div>
          </div>
        </div>
        <div className={styles.policyLink}>
          <div className={styles.settingsLinks}>
            <img className={styles.squareIcon} alt="" src="/square.svg" />
            <div className={styles.square}>
              <div className={styles.copyrightSymbol}>1</div>
            </div>
            <div className={styles.square1}>
              <div className={styles.div20}>2</div>
            </div>
            <div className={styles.square2}>
              <div className={styles.div21}>3</div>
            </div>
            <div className={styles.square3}>
              <div className={styles.div22}>4</div>
            </div>
            <div className={styles.square4}>
              <div className={styles.div23}>5</div>
            </div>
            <img className={styles.squareIcon1} alt="" src="/square-1.svg" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ListBestStudents;
