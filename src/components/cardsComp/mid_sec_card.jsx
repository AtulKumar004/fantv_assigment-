import React from "react";
import btnArrow from "../../assets/btn_arrow_2.svg";
import styles from "./min_card.module.css";
import classNames from "classnames";
function CardComp({
  heading,
  discrep,
  bgColor,
  commingSoonFlag = false,
  commingSoonTagFlag = 1,
  color= "#EDF0FF"
}) {
  return (
    <div className={styles.cardCont} style={{ backgroundColor: `${bgColor}` }}>
      <div className={styles.headingCont}>
        <div className={styles.headingText} style = {{ color : `${color}` }}>{heading}</div>

        <p className={styles.headingDisc} style = {{ color : `${color}` }}>{discrep}</p>
      </div>

      <div className={styles.footer}>
        {!commingSoonFlag && (
          <button className={styles.deployBtn}>
            <span>Deploy</span>
            <img src={btnArrow} alt="btnArrow" />
          </button>
        )}

        {commingSoonFlag && (
          <p className={classNames({
            [styles.commingSoon_tag] : true,
            [styles.commingSoon_tag_1] : commingSoonTagFlag === 1,
            [styles.commingSoon_tag_2] : commingSoonTagFlag === 2,
          })}>Cooming soon</p>
        )}
      </div>
    </div>
  );
}

export default CardComp;
