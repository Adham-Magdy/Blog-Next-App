import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";

async function getData(id:any){
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
    cache:'no-store'
  });

  if(!res.ok){
    return notFound();
  }
  return res.json();
}

const BlogPost = async ({params}:any) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {data.title}
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            aliquam ea provident eaque similique ratione in sapiente error autem
            commodi obcaecati suscipit ipsa iste laboriosam, excepturi, culpa,
            architecto natus labore.
          </p>
          <div className={styles.author}>
            <Image
              src={
                "https://images.pexels.com/photos/19748574/pexels-photo-19748574/free-photo-of-a-man-walking-down-the-street-with-a-suitcase.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Adham Magdy</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/13247769/pexels-photo-13247769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ipsa neque! Vitae architecto nemo dignissimos, nostrum fugiat, sed pariatur ipsam quod maxime doloribus recusandae error, molestias ab reiciendis exercitationem non?
        <br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repudiandae distinctio aliquid mollitia sint modi tempora sequi, optio voluptatem ducimus recusandae cupiditate similique, corporis culpa provident nostrum unde, iure repellendus.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, quod vitae ad aut repellat incidunt neque consectetur eius ea officia, dignissimos suscipit voluptatum molestiae mollitia harum, provident temporibus? Neque, laboriosam?
        
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
