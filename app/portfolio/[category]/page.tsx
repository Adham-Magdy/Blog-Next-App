import React from "react";
import styles from "./page.module.css";
import Button from "@/app/components/Button/Button";
import Image from "next/image";

const Category = ({ params }: any) => {
  // const {params} = useParams();
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            sunt, provident voluptates earum placeat cumque officiis, dolores,
            sit labore quia minus quos perferendis fuga similique. Nisi nam
            aliquid eius eum.
          </p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            }
            fill={true}
            alt=""
            className={styles.img}
          />
        </div>
      </div>
      {/* Second */}
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex tenetur
            quia aperiam nihil, minus repellat quam exercitationem eaque iste
            saepe vel dolorum architecto. Beatae nemo itaque dolores quibusdam
            quisquam quam?
          </p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            }
            fill={true}
            alt=""
            className={styles.img}
          />
        </div>
      </div>
      {/* Third */}
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex tenetur
            quia aperiam nihil, minus repellat quam exercitationem eaque iste
            saepe vel dolorum architecto. Beatae nemo itaque dolores quibusdam
            quisquam quam?
          </p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            }
            fill={true}
            alt=""
            className={styles.img}
          />
        </div>
      </div>
      {/* Fourth */}
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex tenetur
            quia aperiam nihil, minus repellat quam exercitationem eaque iste
            saepe vel dolorum architecto. Beatae nemo itaque dolores quibusdam
            quisquam quam?
          </p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            }
            fill={true}
            alt=""
            className={styles.img}
          />
        </div>
      </div>
      {/* Fives */}
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex tenetur
            quia aperiam nihil, minus repellat quam exercitationem eaque iste
            saepe vel dolorum architecto. Beatae nemo itaque dolores quibusdam
            quisquam quam?
          </p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            }
            fill={true}
            alt=""
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
