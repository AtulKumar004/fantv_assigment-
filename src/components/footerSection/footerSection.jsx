import React from "react";
import styles from "./footerSection.module.css";

export default function FooterSection() {
  return (
    <div className={styles.FooterSection_cont}>
      <p className={styles.footerText1}>The transition CDN-dCDN</p>
      <p className={styles.footerText2}>
        FanCloud pioneers a new era of connectivity with its decentralised
        content delivery network (dCDN), leveraging a global network of
        community-powered nodes. By harnessing a decentralised architecture,
        dCDN drastically reduces data transfer and compute costs while enhancing
        load time. Join FanCloud’s dCDN network and experience the future of
        seamless, secure and community- driven consumption
      </p>
    </div>
  );
}
