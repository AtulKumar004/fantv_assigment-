import React from "react";
import shine from "../../assets/shine.svg";
import styles from "./card.module.css"
function CardComp( {text , count , from}) {
  return (
    <div className= {styles.cardCont}>
      <div className= {styles.headingCont}>
        <span className= {styles.headingText}>{text}
          {from &&  <span style={{ fontSize: "1.6rem", marginLeft: "0.4rem" }}>
            ({from})
          </span> }
        </span>
        <span>
          <img src={shine} alt="shine" />
        </span>
      </div>

      <div className= {styles.countes}>
        {count}
      </div>
    </div>
  );
}

export default CardComp;
