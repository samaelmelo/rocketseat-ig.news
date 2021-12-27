import  Head  from "next/head"

import styles from "./styles.module.scss"

export default function Posts(){
  return(
    <>
      <Head>
        <title>Posts | Ignews </title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href='#'>
            <time>12 de Março de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis quasi quas sed repudiandae ex officia, veritatis id modi sapiente dignissimos assumenda porro architecto ad! Mollitia consectetur quisquam eligendi minima asperiores!</p>
          </a>
          <a href='#'> 
            <time>12 de Março de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis quasi quas sed repudiandae ex officia, veritatis id modi sapiente dignissimos assumenda porro architecto ad! Mollitia consectetur quisquam eligendi minima asperiores!</p>
          </a>
          <a href='#'>
            <time>12 de Março de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis quasi quas sed repudiandae ex officia, veritatis id modi sapiente dignissimos assumenda porro architecto ad! Mollitia consectetur quisquam eligendi minima asperiores!</p>
          </a>
          <a href='#'>
            <time>12 de Março de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis quasi quas sed repudiandae ex officia, veritatis id modi sapiente dignissimos assumenda porro architecto ad! Mollitia consectetur quisquam eligendi minima asperiores!</p>
          </a>
        </div>
      </main>
    </>
  )
}