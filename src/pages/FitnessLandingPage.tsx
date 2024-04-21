import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FitnessLandingPage.module.css";

const FitnessLandingPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFitnessLandingPageContainerClick = useCallback(() => {
    window.location.href = "mailto:a145421121@@gmail.com";
  }, []);

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onExercisesClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='popularExercisesSection']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTrainers1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='trainers']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onPricingClick = useCallback(() => {
    // Please sync "Page 2" to the project
  }, []);

  const onLoginClick = useCallback(() => {
    // Please sync "Page 2" to the project
  }, []);

  const onButtonClick = useCallback(() => {
    // Please sync "Page 2" to the project
  }, []);

  const onButton1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='popularExercisesSection']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButton2Click = useCallback(() => {
    // Please sync "Page 2" to the project
  }, []);

  const onButton3Click = useCallback(() => {
    // Please sync "Page 2" to the project
  }, []);

  return (
    <div
      className={styles.fitnesslandingpage}
      onClick={onFitnessLandingPageContainerClick}
    >
      <div className={styles.navbar}>
        <div className={styles.nav}>
          <button className={styles.logo} onClick={onLogoClick}>
            WORKOUT
          </button>
          <div className={styles.menuright}>
            <div className={styles.menulinks}>
              <button className={styles.exercises} onClick={onExercisesClick}>
                EXERCISES
              </button>
              <button className={styles.exercises} onClick={onTrainers1Click}>
                TRAINERS
              </button>
              <button className={styles.exercises} onClick={onPricingClick}>
                PRICING
              </button>
              <button className={styles.login} onClick={onLoginClick}>
                LOGIN
              </button>
            </div>
            <button className={styles.hamburgerIcon}>
              <img className={styles.group2Icon} alt="" src="/group2.svg" />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.herosection}>
        <div className={styles.herotext}>
          <div className={styles.newcallout}>
            <div className={styles.newcalloutChild} />
            <div className={styles.newcalloutItem} />
            <div className={styles.new}>NEW</div>
            <div className={styles.highIntensityWorkout}>
              High Intensity workout to burn calories
            </div>
          </div>
          <div className={styles.herocta}>
            <div className={styles.title}>
              <p className={styles.cardio}>{`Cardio `}</p>
              <p className={styles.cardio}>Exercise</p>
            </div>
            <div className={styles.subtitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className={styles.buttonrow}>
              <button className={styles.button} onClick={onButtonClick}>
                <div className={styles.getStarted}>Get Started</div>
              </button>
              <button className={styles.button1} onClick={onButton1Click}>
                <div className={styles.getStarted}>Preview</div>
              </button>
            </div>
          </div>
        </div>
        <img className={styles.heroimageIcon} alt="" src="/vector@2x.png" />
      </div>
      <div
        className={styles.popularexercisessection}
        data-scroll-to="popularExercisesSection"
      >
        <div className={styles.popularexercises}>
          <div className={styles.title1}>
            <div className={styles.popularExercises}>Popular Exercises</div>
            <div className={styles.seeMoreExercises}>SEE MORE EXERCISES</div>
          </div>
          <div className={styles.exercisecards}>
            <div className={styles.column1}>
              <div className={styles.exercisecard}>
                <img
                  className={styles.cardimageIcon}
                  alt=""
                  src="/cardimage@2x.png"
                />
                <div className={styles.text}>
                  <div className={styles.titles}>
                    <div className={styles.popularExercises}>Treadmill</div>
                    <div
                      className={styles.subtitles}
                    >{`250 est calories `}</div>
                  </div>
                  <div className={styles.duration}>
                    <img
                      className={styles.durationChild}
                      alt=""
                      src="/rectangle-10.svg"
                    />
                    <div className={styles.div}>58:24</div>
                  </div>
                </div>
              </div>
              <div className={styles.exercisecard}>
                <img className={styles.imageIcon} alt="" src="/image@2x.png" />
                <div className={styles.text}>
                  <div className={styles.titles}>
                    <div className={styles.popularExercises}>Running</div>
                    <div
                      className={styles.subtitles}
                    >{`250 est calories `}</div>
                  </div>
                  <div className={styles.duration}>
                    <img
                      className={styles.durationChild}
                      alt=""
                      src="/rectangle-10.svg"
                    />
                    <div className={styles.div}>58:24</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.column1}>
              <div className={styles.exercisecard2}>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="/cardimage1@2x.png"
                />
                <div className={styles.text}>
                  <div className={styles.titles}>
                    <div className={styles.popularExercises}>Stretching</div>
                    <div
                      className={styles.subtitles}
                    >{`250 est calories `}</div>
                  </div>
                  <div className={styles.duration}>
                    <img
                      className={styles.durationChild}
                      alt=""
                      src="/rectangle-10.svg"
                    />
                    <div className={styles.div}>58:24</div>
                  </div>
                </div>
              </div>
              <div className={styles.exercisecard}>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="/group-6@2x.png"
                />
                <div className={styles.text}>
                  <div className={styles.titles}>
                    <div className={styles.popularExercises}>Lifting</div>
                    <div
                      className={styles.subtitles}
                    >{`250 est calories `}</div>
                  </div>
                  <div className={styles.duration}>
                    <img
                      className={styles.durationChild}
                      alt=""
                      src="/rectangle-10.svg"
                    />
                    <div className={styles.div}>58:24</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.column1}>
              <div className={styles.exercisecard2}>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="/group-61@2x.png"
                />
                <div className={styles.text}>
                  <div className={styles.titles}>
                    <div className={styles.popularExercises}>Yoga</div>
                    <div
                      className={styles.subtitles}
                    >{`250 est calories `}</div>
                  </div>
                  <div className={styles.duration}>
                    <img
                      className={styles.durationChild}
                      alt=""
                      src="/rectangle-10.svg"
                    />
                    <div className={styles.div}>58:24</div>
                  </div>
                </div>
              </div>
              <div className={styles.exercisecard}>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="/group-62@2x.png"
                />
                <div className={styles.text}>
                  <div className={styles.titles}>
                    <div className={styles.popularExercises}>Pushup</div>
                    <div
                      className={styles.subtitles}
                    >{`250 est calories `}</div>
                  </div>
                  <div className={styles.duration}>
                    <img
                      className={styles.durationChild}
                      alt=""
                      src="/rectangle-10.svg"
                    />
                    <div className={styles.div}>58:24</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.trainers1} data-scroll-to="trainers">
        <div className={styles.trainerscta}>
          <div className={styles.ctaframe}>
            <div className={styles.background} />
            <div className={styles.title5}>
              <h2 className={styles.workoutProgramMadeContainer}>
                <p className={styles.cardio}>Workout</p>
                <p className={styles.cardio}>Program</p>
                <p className={styles.cardio}>Made</p>
                <p className={styles.cardio}>For You</p>
              </h2>
              <img className={styles.splashIcon} alt="" src="/splash.svg" />
            </div>
            <div className={styles.description}>
              <div className={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
                consectetur adipiscing.
              </div>
              <button className={styles.button2} onClick={onButton2Click}>
                <div className={styles.getStarted1}>Get Started</div>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.trainersimages}>
          <div className={styles.desktop}>
            <div className={styles.trainer3}>
              <img
                className={styles.trainer3Child}
                alt=""
                src="/group-142@2x.png"
              />
              <div className={styles.samanthaWilliam}>Samantha William</div>
              <div className={styles.trainer}>Trainer</div>
            </div>
            <div className={styles.trainer2}>
              <img
                className={styles.trainer3Child}
                alt=""
                src="/group-147@2x.png"
              />
              <div className={styles.samanthaWilliam}>Karen Summer</div>
              <div className={styles.trainer}>Trainer</div>
            </div>
            <div className={styles.trainer11}>
              <img
                className={styles.trainer1Child}
                alt=""
                src="/group-146@2x.png"
              />
              <div className={styles.jonathanWise}>Jonathan Wise</div>
              <div className={styles.trainer4}>Trainer</div>
            </div>
          </div>
          <div className={styles.tablet}>
            <div className={styles.trainer31}>
              <img
                className={styles.trainer3Item}
                alt=""
                src="/group-1471@2x.png"
              />
              <div className={styles.karenSummer1}>Karen Summer</div>
              <div className={styles.trainer5}>Trainer</div>
            </div>
            <div className={styles.trainer21}>
              <img
                className={styles.trainer2Item}
                alt=""
                src="/group-1461@2x.png"
              />
              <div className={styles.jonathanWise1}>Jonathan Wise</div>
              <div className={styles.trainer6}>Trainer</div>
            </div>
            <div className={styles.trainer12}>
              <img
                className={styles.trainer1Item}
                alt=""
                src="/group-1421@2x.png"
              />
              <div className={styles.samanthaWilliam1}>Samantha William</div>
              <div className={styles.trainer7}>Trainer</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.categoriessection}>
        <div className={styles.popularexercises}>
          <div className={styles.category}>
            <div className={styles.div6}>01</div>
            <div className={styles.action}>
              <div className={styles.titles3}>
                <div className={styles.title6}>Workout at Home</div>
                <div className={styles.courses}>15 videos</div>
              </div>
              <img className={styles.arrowIcon} alt="" src="/arrow@2x.png" />
            </div>
          </div>
          <img className={styles.separatorIcon} alt="" src="/separator.svg" />
          <div className={styles.category}>
            <div className={styles.div6}>02</div>
            <div className={styles.action}>
              <div className={styles.titles3}>
                <div className={styles.title6}>Stay Strong and Fit</div>
                <div className={styles.courses}>48 videos</div>
              </div>
              <img className={styles.arrowIcon} alt="" src="/arrow@2x.png" />
            </div>
          </div>
          <img className={styles.separatorIcon} alt="" src="/separator.svg" />
          <div className={styles.category}>
            <div className={styles.div6}>03</div>
            <div className={styles.action}>
              <div className={styles.titles3}>
                <div className={styles.title6}>High Intensity</div>
                <div className={styles.courses}>48 videos</div>
              </div>
              <img className={styles.arrowIcon} alt="" src="/arrow@2x.png" />
            </div>
          </div>
          <img className={styles.separatorIcon} alt="" src="/separator.svg" />
          <div className={styles.category}>
            <div className={styles.div6}>04</div>
            <div className={styles.action}>
              <div className={styles.titles3}>
                <div className={styles.title6}>Simple Workout</div>
                <div className={styles.courses}>48 videos</div>
              </div>
              <img className={styles.arrowIcon} alt="" src="/arrow@2x.png" />
            </div>
          </div>
          <img className={styles.separatorIcon} alt="" src="/separator.svg" />
          <div className={styles.category}>
            <div className={styles.div6}>05</div>
            <div className={styles.action}>
              <div className={styles.titles3}>
                <div className={styles.title6}>Burn Calories</div>
                <div className={styles.courses}>48 videos</div>
              </div>
              <img className={styles.arrowIcon} alt="" src="/arrow@2x.png" />
            </div>
          </div>
          <img className={styles.separatorIcon} alt="" src="/separator.svg" />
        </div>
      </div>
      <div className={styles.subscribe}>
        <div className={styles.subscribeform}>
          <div className={styles.title11}>Get the Newsletter</div>
          <form className={styles.form} id="formID">
            <input className={styles.input} placeholder="Email" type="text" />
            <button
              className={styles.button3}
              type="submit"
              form="formID"
              onClick={onButton3Click}
            >
              <div className={styles.getStarted1}>Subscribe</div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FitnessLandingPage;
