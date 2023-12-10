import Image from "next/image";
import style from "./page.module.css";
import Link from "next/link";
export default function Home() {
  
  return (
    <div className={style.container}>
      <div className={style.div1}>
        <h1 className={style.text}>Lorem, ipsum dolor sit amet consectetur</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <Link href={"/portfolio"}><button className={style.btn}>See Our Works</button></Link>
      </div>
      <div className={style.image} >
      <Image className={style.move} src={"/p1.jpg"} width={400} height={300}/>
      </div>
        
    </div>
  );
}
