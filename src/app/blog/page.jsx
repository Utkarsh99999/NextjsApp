import Image from "next/image";
import style from "./page.module.css";

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
 

const About = async() => {
  const data =  await getData();
  return (
    <div className={style.main}>
  
  {data.map((item)=>(
      <div className={style.container}>
        <div className={style.img}>
          <Image
            className={style.move}
            src="/application5.jpg"
            width={400}
            height={200}
          />
        </div>

        <div className={style.content}>
          <p className={style.title}>{item.title}</p>
          <div>{item.body} </div> 
          <button className={style.btn}>Rade more</button>
        </div>
      </div>
        ))}
    </div>
   
  );
};

export default About;
