import React from "react";
import styles from "./section.module.css";
import classNames from "classnames";
import btn_arrow from "../../assets/btn_arrow.svg";
import RectangleImg1 from "../../assets/RectangleImg1.jpg";
import RectangleImg2 from "../../assets/RectangleImg2.jpg";
import RectangleImg3 from "../../assets/RectangleImg3.jpg";
import RectangleImg4 from "../../assets/RectangleImg4.jpg";
import RectangleImg5 from "../../assets/RectangleImg5.jpg";
import RectangleImg6 from "../../assets/RectangleImg6.jpg";
import CardComp from "../cardsComp/card";

const MainSection = () => {
  return (
    <div
      className={classNames({
        // [styles.container]: true,
        [styles.mainCont]: true,
        [styles.mainCont_bg]: true,
      })}

    >
      <div className={styles.headingTextCont}>
        <p>Empowering the Digital Era:</p>
        <p> Decentarlizing Entertainment</p>
      </div>

      <div className={styles.messageTextCont}>
        <p>
          Join the world’s first DePIN: Revolutionizing Content Streaming with
          faster, Safer and Cheaper Access
        </p>

        <button className={styles.commingSoonBtn}>
          <span>Comming soon</span>
          <img src={btn_arrow} alt="btn_arrow" />
        </button>
      </div>

      <div className={styles.imagesCont}>
        <img src={RectangleImg1} alt="Image1" className={styles.image1} />
        <img src={RectangleImg2} alt="Image2" className={styles.image2} />
        <img src={RectangleImg3} alt="Image3" className={styles.image3} />
        <img src={RectangleImg4} alt="Image4" className={styles.image4} />
        <img src={RectangleImg5} alt="Image4" className={styles.image5} />
        <img src={RectangleImg6} alt="Image4" className={styles.image6} />
      </div>

      <div className={styles.cardsCont}>
         <CardComp  text = "No. of Node Operators" count= "2000"/>
         <CardComp  text = "Data Transferred in TB" from = "last 30 days" count= "12,000"/>
      </div>
    </div>
  );
};

export default MainSection;
