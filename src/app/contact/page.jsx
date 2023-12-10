"use client"
import Image from 'next/image'
import { useContext } from 'react';
import style from "./page.module.css";
import { ThemeContext } from '../../context/ThemeContext';
const contact = () => {
  const {toggle,mode} = useContext(ThemeContext);
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1>Let's be in Touch</h1>
      </div>
      <div className={style.contact}>
        <div className={style.image}>
        <Image  className={style.move} src={'/contact.jpg'} width={400} height={300}></Image>
        </div>
        <div>
          <form className={style.form} action="">
            <input type="text" placeholder='name' className={style.input} style={mode ==="light"?{border:"2px solid black"}:{border:"2px solid white"}}/>
            <input type="text" placeholder='email' className={style.input}style={mode ==="light"?{border:"2px solid black"}:{border:"2px solid white"}} />
            <textarea placeholder='message' className={style.area} name="textarea" id="1" cols="30" rows="5" style={mode ==="light"?{border:"2px solid black"}:{border:"2px solid white"}}/>
            <button className={style.submit} type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default contact;
