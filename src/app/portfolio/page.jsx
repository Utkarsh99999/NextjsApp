import style from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className={style.container}>

      <h3>Choose from Gallery</h3>

      <div className={style.items}>

        <div className={style.item}>
          <Link href={"/portfolio/illustrations"} >
            <Image src={'/p2.jpg'} width={200} height={280}></Image>
            <p className={style.titles}>Illusrations</p>
          </Link>
        </div>

        <div className={style.item}>
          <Link href={"/portfolio/website"} >
            <Image src={'/watsapp.png'} width={200} height={280}></Image>
            <p className={style.titles}>Website</p>
          </Link>
        </div>

        <div className={style.item}>
          <Link href={"/portfolio/application"} >
            <Image src={'/contact.jpg'} width={200} height={280}></Image>
            <p className={style.titles}>Application</p>
          </Link>
        </div>

      </div>
    </div>
  );
};

