"use client"
import style from "./page.module.css";
import Image from 'next/image'
const Category = ({ params }) => {
    var mode = params.category
    
    if(mode==='Illustration'){
      return (
        <div className={style.main}>
          <h1 className={style.Ctitle}>{params.category}</h1>
        
          <div className={style.item} >
            <div className={style.content}>
              <h1 className={style.title}>Test</h1>
              <p className={style.desc}>
              Lorem ipsum dolor sit amet consecteturadipisicing elit. <br/>
              Perspiciatis fugiat, nemovel obcaecati itaquesi quasi<br/>
              autem,quisquam nostrum necessitatibus assumenda alias<br/>
              iure optio porro reprehenderit esse quaerat.tehd enim!</p>
              <button className={style.btn}>read more</button>
            </div>
            <div className={style.img}>
              <Image className={style.move} src="/application.jpg"  width={300} height={200}/>
            </div>
          </div>
    
          <div className={style.item}>
            <div className={style.content}>
              <h1 className={style.title}>Test</h1>
              <pre className={style.desc}>
              Lorem ipsum dolor sit amet consecteturadipisicing elit.<br/>
              Perspiciatis fugiat, nemovel obcaecati itaquesint,quasi<br/>
              autem, quisquam nostrum necessitatibus assumenda alias<br/>
              iure optio porro reprehenderit esse quaerat.tehd enim!</pre>
              <button className={style.btn}>read more</button>
            </div>
            <div className={style.img}>
              <Image className={style.move} src="/application2.jpg"  width={300} height={200}/>
            </div>
          </div>
    
    
        </div>
      );
    }else if(mode==='website'){
      return (
        <div>
          <h1 className={style.Ctitle}>{params.category}</h1>
        
          <div className={style.item}>
            <div className={style.content}>
              <h1 className={style.title}>Test</h1>
              <pre className={style.desc}>
              Lorem ipsum dolor sit amet consecteturadipisicing elit.<br/>
              Perspiciatis fugiat, nemovel obcaecati itaquesint,quasi<br/>
              autem, quisquam nostrum necessitatibus assumenda alias<br/>
              iure optio porro reprehenderit esse quaerat.tehd enim!</pre>
              <button className={style.btn}>read more</button>
            </div>
            <div className={style.img}>
              <Image className={style.move} src="/application3.jpg"  width={300} height={200}/>
            </div>
          </div>
    
    
          <div className={style.item}>
            <div className={style.content}>
              <h1 className={style.title}>Test</h1>
              <pre className={style.desc}>
              Lorem ipsum dolor sit amet consecteturadipisicing elit.<br/>
              Perspiciatis fugiat, nemovel obcaecati itaquesint,quasi<br/>
              autem, quisquam nostrum necessitatibus assumenda alias<br/>
              iure optio porro reprehenderit esse quaerat.tehd enim!</pre>
              <button className={style.btn}>read more</button>
            </div>
            <div className={style.img}>
              <Image className={style.move} src="/application4.jpg"  width={300} height={200}/>
            </div>
          </div>
    
        </div>
      );
    }else{
      return (
    <div>
      <h1 className={style.Ctitle}>{params.category}</h1>

      <div className={style.item}>
        <div className={style.content}>
          <h1 className={style.title}>Test</h1>
          <pre className={style.desc}>
          Lorem ipsum dolor sit amet consecteturadipisicing elit.<br/>
          Perspiciatis fugiat, nemovel obcaecati itaquesint,quasi<br/>
          autem, quisquam nostrum necessitatibus assumenda alias<br/>
          iure optio porro reprehenderit esse quaerat.tehd enim!</pre>
          <button className={style.btn}>read more</button>
        </div>
        <div className={style.img}>
          <Image className={style.move} src="/application5.jpg"  width={300} height={200}/>
        </div>
      </div>

      <div className={style.item}>
        <div className={style.content}>
          <h1 className={style.title}>Test</h1>
          <pre className={style.desc}>
          Lorem ipsum dolor sit amet consecteturadipisicing elit.<br/>
          Perspiciatis fugiat, nemovel obcaecati itaquesint,quasi<br/>
          autem, quisquam nostrum necessitatibus assumenda alias<br/>
          iure optio porro reprehenderit esse quaerat.tehd enim!</pre>
          <button className={style.btn}>read more</button>
        </div>
        <div className={style.img}>
          <Image className={style.move} src="/application6.jpg"  width={300} height={200}/>
        </div>
      </div>


    </div>
  );
    }
};

export default Category;
