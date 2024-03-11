"use client";
import styles from "./style.module.scss";
import { useState, useRef, useEffect } from "react";
import Nav from "./Nav/Nav";
import logo from "../../public/logo.png";
import Link from "next/link";

import React from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsActive(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <>
      <div ref={ref as React.RefObject<HTMLDivElement>}>
        <div className={styles.header}>
          <Link href="/">
            <div className={styles.logo}>
              <Image className={styles.img} src={logo} alt="logo" />
              <h1 className={styles.font}>SAF Media</h1>
            </div>
          </Link>
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className={styles.button}
          >
            <div
              className={`${styles.burger} ${
                isActive ? styles.burgerActive : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
};

export default Header;
