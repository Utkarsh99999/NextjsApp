import { useContext } from 'react';
import style from './dark.module.css'
import { ThemeContext } from '../../context/ThemeContext';
const Darkmode = () => {
  const {toggle,mode} = useContext(ThemeContext);
  return (
    <div className={style.container} onClick={toggle}>
      <div className={style.icon}></div>
      <div className={style.icon}></div>
      <div className={style.button} style={mode ==="light"?{left:"4px"}:{right:"4px"}}></div>
    </div>
  )
}

export default Darkmode;
