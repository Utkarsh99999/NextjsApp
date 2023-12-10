"use client";
import React from "react";
import Link from "next/link";
import style from "./page.module.css";
import Darkmode from "../darkmode/darkmode";

const Navbar = () => {
  const links = [
    {
      id: 1,
      title: "HOME",
      url: "/",
    },
    {
      id: 2,
      title: "BLOG",
      url: "/blog",
    },
    {
      id: 3,
      title: "ABOUT",
      url: "/about",
    },
    {
      id: 4,
      title: "PORTFOLIO",
      url: "/portfolio",
    },
    {
      id: 5,
      title: "CONTACT",
      url: "/contact",
    },
  ];

  return (
    <div className={style.container}>
      <div className={style.logo}>
        <Link className={style.a} href={`/`}>
          lamamia
        </Link>
      </div>

      <div className={style.links}>
        <div>
          <Darkmode />
        </div>
        {links.map((link) => (
          <Link className={style.a} key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}

        <Link href={"/"}>
          <button className={style.logout}>LogOut</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
