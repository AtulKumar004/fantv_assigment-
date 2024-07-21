import classNames from "classnames";
import React from "react";
import styles from "./midSection.module.css";
import globeImage from "../../assets/globle.svg";
import userImage1 from "../../assets/userImage1.jpg";
import userImage2 from "../../assets/userImage2.jpg";
import userImage3 from "../../assets/userImage3.jpg";
import userImage4 from "../../assets/userImage4.jpg";
import userImage5 from "../../assets/userImage5.jpg";
import userImage6 from "../../assets/userImage6.jpg";
import userImage7 from "../../assets/userImage7.jpg";
import userImage8 from "../../assets/userImage8.jpg";
import userImage9 from "../../assets/userImage9.jpg";
import userImage10 from "../../assets/userImage10.jpg";
import userImage11 from "../../assets/userImage11.jpg";
import Elipse1 from "../../assets/Elipse1.svg";
import Elipse2 from "../../assets/Elipse2.svg";
import Elipse3 from "../../assets/Elipse3.svg";
import Elipse4 from "../../assets/Elipse4.svg";
import Elipse5 from "../../assets/Elipse5.svg";
import Elipse6 from "../../assets/Elipse6.svg";
import Elipse7 from "../../assets/Elipse7.svg";
import CardComp from "../cardsComp/mid_sec_card";

export default function MidSection() {
  return (
    <div
      className={classNames({
        // [styles.container]: true,
        [styles.mainCont]: true,
      })}
    >
      <div className={styles.headingTextCont}>
        <p className={styles.heading_one}>
          FanCloud CDN network revolutionizes video infrastructure with
          community-driven Innovation
        </p>
        <p className={styles.heading_two}>
          FanCloud pioneers a new era of connectivity with its decentralised
          content delivery network (dCDN), leveraging a global network of
          community-powered nodes. By harnessing a decentralised architecture,
          dCDN drastically reduces data transfer and compute costs while
          enhancing load time. Join FanCloud’s dCDN network and experience the
          future of seamless, secure and community- driven consumption
        </p>
      </div>

      <div className={styles.globeSection_cont}>
        <div className={styles.globeImage_cont}>
          <img src={globeImage} alt="globeImage" className= {styles.gridImage} />
          <img
            src={userImage8}
            alt="userImage8"
            className={classNames({
              [styles.userImage]: true,
              [styles.userImage8]: true,
            })}
          />

          <img
            src={userImage1}
            alt="userImage1"
            className={classNames({
              [styles.userImage]: true,
              [styles.userImage1]: true,
            })}
          />
          <img
            src={userImage2}
            alt="userImage2"
            className={classNames({
              [styles.userImage]: true,
              [styles.userImage2]: true,
            })}
          />
          <img
            src={userImage3}
            alt="userImage3"
            className={classNames({
              [styles.userImage]: true,
              [styles.userImage3]: true,
            })}
          />
          <img
            src={userImage4}
            alt="userImage4"
            className={classNames({
              [styles.userImage]: true,
              [styles.userImage4]: true,
            })}
          />
          <img
            src={userImage5}
            alt="userImage5"
            className={classNames({
              [styles.userImage]: true,
              [styles.userImage5]: true,
            })}
          />
          <img
            src={userImage6}
            alt="userImage6"
            className={classNames({
              [styles.userImage]: true,
              [styles.userImage6]: true,
            })}
          />
          <img
            src={userImage7}
            alt="userImage7"
            className={classNames({
              [styles.userImage]: true,
              [styles.userImage7]: true,
            })}
          />
          <img
            src={userImage9}
            alt="userImage7"
            className={classNames({
              [styles.userImage]: true,
              [styles.userImage9]: true,
            })}
          />
          <img
            src={userImage10}
            alt="userImage7"
            className={classNames({
              [styles.userImage]: true,
              [styles.userImage10]: true,
            })}
          />
          <img
            src={userImage11}
            alt="userImage11"
            className={classNames({
              [styles.userImage]: true,
              [styles.userImage11]: true,
            })}
          />
          <img
            src={Elipse1}
            alt="Elipse1"
            className={classNames({
              [styles.userImage]: true,
              [styles.Elipse1]: true,
            })}
          />
          <img
            src={Elipse2}
            alt="Elipse2"
            className={classNames({
              [styles.userImage]: true,
              [styles.Elipse2]: true,
            })}
          />
          <img
            src={Elipse3}
            alt="Elipse3"
            className={classNames({
              [styles.userImage]: true,
              [styles.Elipse3]: true,
            })}
          />
          <img
            src={Elipse4}
            alt="Elipse3"
            style={{ position: "absolute" }}
            className={classNames({
              [styles.Elipse4]: true,
            })}
          />
          <img
            src={Elipse5}
            alt="Elipse3"
            style={{ position: "absolute" }}
            className={classNames({
              [styles.Elipse5]: true,
            })}
          />
          <img
            src={Elipse6}
            alt="Elipse6"
            style={{ position: "absolute" }}
            className={classNames({
              [styles.Elipse6]: true,
              [styles.userImage]: true,
            })}
          />
          <img
            src={Elipse7}
            alt="Elipse7"
            style={{ position: "absolute" }}
            className={classNames({
              [styles.Elipse7]: true,
              [styles.userImage]: true,
            })}
          />
        </div>
      </div>

      <div className={styles.cardsContainer}>
        <CardComp
          heading="Content Nodes"
          discrep="Content Nodes, Earn rewards for supplying their GPU, Storage and bandwidth for dCDN"
          bgColor = "#6B61FF"
        />
        <CardComp
          heading="Orchestrators"
          discrep="Orchestrators will be responsible for connecting the client with the content node for seamless streaming. Traffic distribution will be based on multiple factors like job type, performance"
          bgColor = "#FE9BF3"
          commingSoonFlag = {true}
          color = "#1E1E1E"
        />
        <CardComp
          heading="Validators"
          discrep="Validators will be responsible for validating the execution of dCDN Network. Validators will earn rewards from Staking and earn a cut on the executions validated."
         
          bgColor = "#ADFFE4"
          commingSoonFlag = {true}
          commingSoonTagFlag = {2}
               color = "#1E1E1E"
        />

      </div>
    </div>
  );
}
