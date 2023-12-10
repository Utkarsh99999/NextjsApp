import style from "./page.module.css";
import Image from "next/image";

const Blog = () => {
  return (
    <div className={style.container}>

      <div className={`${style.image} ${style.move}`}>
        <Image src={"/falt.jpg"} width={1200} height={300} />
        <div className={style.timage}>
          <h1>This is the image on the text</h1>
          <p>This is the image on the text</p>
        </div>
      </div>

      <div className={style.text}>

        <div className={style.TD}>
          <span className={style.t}>Title1</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit cum.
            <br />
            Est,aperiam neque. Libero incidunt quasi illum voluptate,animi
            <br />
            Ratione veniam nesciunt doloribus itaque laboriosam quas totam,
            <br />
          </p>
          <br />
          <p>
            est deleniti, animi pariatur, rem culpa saepe sed molestias ut
            <br />
            sunt verosimilique in! Rem in, quod eius ipsam est numquam ill
            <br />
            deserunt quos? que in! Rem in, quod eius ipsam est numquam ill
            <br />
          </p>
          <br />
          <p>
            est deleniti, animi pariatur, rem culpa saepe sed molestias ut
            <br />
            sunt verosimilique in! Rem in, quod eius ipsam est numquam ill
            <br />
            deserunt quos? que in! Rem in, quod eius ipsam est numquam ill
            <br />
          </p>

        </div>

        <div className={style.TD}>
        <span className={style.t}>Title2</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit cum.
            <br />
            Est,aperiam neque. Libero incidunt quasi illum voluptate,animi
            <br />
            Ratione veniam nesciunt doloribus itaque laboriosam quas totam,
            <br />
          </p>
          <br />
          <p>
            est deleniti, animi pariatur, rem culpa saepe sed molestias ut
            <br />
            sunt verosimilique in! Rem in, quod eius ipsam est numquam ill
            <br />
            deserunt quos? que in! Rem in, quod eius ipsam est numquam ill
            <br />
          </p>

          <br />
          <p>
            est deleniti, animi pariatur, rem culpa saepe sed molestias ut
            <br />
            sunt verosimilique in! Rem in, quod eius ipsam est numquam ill
            <br />
            deserunt quos? que in! Rem in, quod eius ipsam est numquam ill
            <br />
          </p>
        </div>

      </div>
    </div>
  );
};

export default Blog;
