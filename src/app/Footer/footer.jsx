import style from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={style.container}>
      <Link  className={style.para} href={"/www.google.com"}><p>@ copyright footer component</p></Link>
      <div className={style.image}>
      <Link href={"/www.watsapp.com"}><Image src="/watsapp.png" alt="image"  height={20} width={20}/></Link>
      <Link href={"/www.facebook.com"}><Image src="/facebook.png" alt="image" height={20} width={20}/></Link>
      <Link href={"/www.twitter.com"}><Image src="/twitter.png" alt="image" height={20} width={20}/></Link>
      <Link href={"/www.instagram.com"}><Image src="/insta.png" alt="image" height={20} width={20}/></Link>
      </div>
    </div>
  )
}

export default Footer
 