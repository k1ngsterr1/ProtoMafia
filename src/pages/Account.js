import NavigationBar5 from "../components/NavigationBar5";
import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent9 from "../components/FrameComponent9";
import LoopControl from "../components/LoopControl";
import MSTFinder from "../components/MSTFinder";
import FrameComponent8 from "../components/FrameComponent8";
import Footer4 from "../components/Footer4";
import styles from "./Account.module.css";

const Account = () => {
  return (
    <div className={styles.account}>
      <div className={styles.inputHandler} />
      <NavigationBar5 />
      <main className={styles.accountInner}>
        <section className={styles.frameParent}>
          <FrameComponent10 />
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <FrameComponent9 group36689="/group-36689.svg" prop="Матчей" />
              <FrameComponent9
                group36689="/group-36689-1.svg"
                prop="Победы"
                propPadding="0px var(--padding-12xl)"
                propMinWidth="75px"
              />
              <FrameComponent9
                group36689="/group-36689-2.svg"
                prop="Серии побед"
                propPadding="0px var(--padding-35xl) 0px var(--padding-35xl-5)"
                propMinWidth="unset"
              />
              <div className={styles.frameDiv}>
                <div className={styles.dataProcessorParent}>
                  <div className={styles.dataProcessor} />
                  <b className={styles.b}>Б</b>
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.frameParent1}>
                    <div className={styles.wrapper}>
                      <div className={styles.div}>0</div>
                    </div>
                    <div className={styles.div1}>Средний бал</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.dataSplitter}>
              <div className={styles.functionApplier}>
                <div className={styles.div2}>Статистика по ролям</div>
                <div className={styles.variableHolder}>
                  <div className={styles.parent}>
                    <div className={styles.div3}>Роль</div>
                    <div className={styles.valueTree}>
                      <div className={styles.div4}>Сыграно</div>
                      <div className={styles.div5}>Поражений</div>
                      <div className={styles.div6}>Побед</div>
                    </div>
                  </div>
                  <LoopControl image52="/image-52@2x.png" />
                  <LoopControl
                    image52="/image-53@2x.png"
                    propPadding="var(--padding-7xs) var(--padding-6xs) 0px var(--padding-2xs)"
                    propAlignSelf="unset"
                    propHeight="120px"
                    propHeight1="114px"
                    propWidth="305px"
                  />
                  <LoopControl
                    image52="/image-54@2x.png"
                    propPadding="var(--padding-3xs) var(--padding-5xs) 0px"
                    propAlignSelf="unset"
                    propHeight="120px"
                    propHeight1="110px"
                    propWidth="310px"
                  />
                  <LoopControl
                    image52="/image-55@2x.png"
                    propPadding="var(--padding-xl) 0px 0px var(--padding-9xs)"
                    propAlignSelf="unset"
                    propHeight="120px"
                    propHeight1="100px"
                    propWidth="310px"
                  />
                </div>
              </div>
              <div className={styles.graphProcessor}>
                <div className={styles.div7}>
                  <p className={styles.p}>Распределение</p>
                  <p className={styles.p1}>ролей</p>
                </div>
                <div className={styles.connectionMaker}>
                  <div className={styles.pathFinder}>
                    <img
                      className={styles.neighborFinderIcon}
                      loading="lazy"
                      alt=""
                      src="/01.svg"
                    />
                  </div>
                  <div className={styles.distanceCalculator}>
                    <div className={styles.shortestPathFinder}>
                      <div className={styles.graphVisualizer}>
                        <div className={styles.dataGraph}>
                          <div className={styles.dataGraphChild} />
                        </div>
                        <div className={styles.div8}>Мирный</div>
                      </div>
                      <div className={styles.clusterMerger}>0%</div>
                    </div>
                    <div className={styles.shortestPathFinder1}>
                      <div className={styles.frameParent2}>
                        <div className={styles.ellipseWrapper}>
                          <div className={styles.frameChild} />
                        </div>
                        <div className={styles.div9}>Шериф</div>
                      </div>
                      <div className={styles.div10}>0%</div>
                    </div>
                    <div className={styles.shortestPathFinder2}>
                      <div className={styles.frameParent3}>
                        <div className={styles.ellipseContainer}>
                          <div className={styles.frameItem} />
                        </div>
                        <div className={styles.div11}>Мафия</div>
                      </div>
                      <div className={styles.div12}>0%</div>
                    </div>
                    <div className={styles.shortestPathFinder3}>
                      <div className={styles.frameParent4}>
                        <div className={styles.ellipseFrame}>
                          <div className={styles.frameInner} />
                        </div>
                        <div className={styles.div13}>Дон</div>
                      </div>
                      <div className={styles.div14}>0%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.clusterProcessor}>
              <div className={styles.connectedComponents}>
                <div className={styles.div15}>
                  Количество смертей в первую ночь
                </div>
                <div className={styles.graphColoring}>
                  <MSTFinder prop="за Мирного" group36690="/group-36690.svg" />
                  <MSTFinder
                    prop="за Шерифа"
                    group36690="/group-366911.svg"
                    propGap="40px"
                    propWidth="unset"
                  />
                  <MSTFinder
                    prop="за Мафию"
                    group36690="/group-36692.svg"
                    propGap="20px"
                    propWidth="232px"
                  />
                </div>
              </div>
            </div>
            <div className={styles.aStarFinder}>
              <div className={styles.floydWarshallFinder}>
                <div className={styles.bellmanFordFinder}>
                  <div className={styles.dinicMaxFlowFinder}>
                    <div className={styles.div16}>Достижения</div>
                  </div>
                  <div className={styles.dataHub}>
                    <div className={styles.shapeCollection}>
                      <div className={styles.rectangleParent}>
                        <div className={styles.rectangleDiv} />
                        <img
                          className={styles.image54Icon}
                          loading="lazy"
                          alt=""
                          src="/image-54@2x.png"
                        />
                      </div>
                      <div className={styles.shapeCollectionInner}>
                        <div className={styles.group}>
                          <div className={styles.div17}>Гений игры</div>
                          <div className={styles.div18}>
                            Выдается за 100 завершенных игр
                          </div>
                          <div className={styles.frameParent5}>
                            <div className={styles.groupWrapper}>
                              <div className={styles.group1}>
                                <div className={styles.rectangle} />
                              </div>
                            </div>
                            <div className={styles.div19}>0 / 100</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.shapeCollection1}>
                      <div className={styles.rectangleGroup}>
                        <div className={styles.frameChild1} />
                        <img
                          className={styles.image52Icon}
                          loading="lazy"
                          alt=""
                          src="/image-52@2x.png"
                        />
                      </div>
                      <div className={styles.shapeCollectionChild}>
                        <div className={styles.container}>
                          <div className={styles.div20}>Под прицелом</div>
                          <div className={styles.div21}>
                            Выдается за 100 завершенных игр за мирного
                          </div>
                          <div className={styles.frameParent6}>
                            <div className={styles.groupContainer}>
                              <div className={styles.group2}>
                                <div className={styles.rectangle1} />
                              </div>
                            </div>
                            <div className={styles.div22}>0 / 100</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent7}>
                  <FrameComponent8
                    image53="/image-53@2x.png"
                    prop="Страх мафии"
                    prop1="за шерифа"
                  />
                  <FrameComponent8
                    image53="/image-54@2x.png"
                    prop="Терминатор"
                    prop1="за мафию"
                    propPadding="var(--padding-3xs) var(--padding-5xs) 0px"
                    propHeight="110px"
                  />
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.lineParent}>
                <div className={styles.lineDiv} />
                <div className={styles.lineGroup}>
                  <div className={styles.frameChild2} />
                  <div className={styles.frameChild3} />
                  <div className={styles.lineContainer}>
                    <div className={styles.frameChild4} />
                    <div className={styles.lineParent1}>
                      <div className={styles.frameChild5} />
                      <div className={styles.frameChild6} />
                      <button className={styles.frameButton}>
                        <div className={styles.subtractParent}>
                          <img
                            className={styles.subtractIcon}
                            alt=""
                            src="/subtract.svg"
                          />
                          <div className={styles.frameChild7} />
                        </div>
                        <div className={styles.div23}>Показать еще</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer4 />
    </div>
  );
};

export default Account;
