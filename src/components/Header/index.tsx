/* eslint-disable react/jsx-no-comment-textnodes */
import styles from "./styles.module.scss"
import Image from "next/image"

export function Header(){
  return(
    <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
            <img src="/assets/images/logo.svg" alt="ig.news"  />

            <nav>
                <a href="#">Home</a>
                <a href="#">Posts</a>
            </nav>
        </div>
    </header>
  )
}