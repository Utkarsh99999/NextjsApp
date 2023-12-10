import style from "./page.module.css";

const layout = ({children}) => {
  console.log(children.category)
  return (
    <div className={style.out}>
      {console.log(children.category)}
      <p className={style.title}>Our Works</p>
      {children}
    </div>
  );
};

export default layout;
