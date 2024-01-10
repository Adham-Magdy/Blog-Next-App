import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>©2024 Adham. All rights reserved.
      <div className={styles.imgContainer}>
       <Image src={"/1.png"} width={15} height={15} className={styles.icon} alt="facebook" />
       <Image src={"/2.png"} width={15} height={15} className={styles.icon} alt="facebook" />
       <Image src={"/3.png"} width={15} height={15} className={styles.icon} alt="facebook" />
       <Image src={"/4.png"} width={15} height={15} className={styles.icon} alt="facebook" />
      </div>
      </div>
    </>
  );
};

export default Footer;
