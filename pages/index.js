import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Alex Arsenault
        </h1>

        <p className={styles.description} style={{ maxWidth: "800px"}}>
          <img src="headshot.png" style={{width: "150px", float: "left", borderRadius: "50%", marginRight: "28px"}} /> I'm Alex placeholder.  I'm Alex placeholder.  I'm Alex placeholder.  I'm Alex placeholder.  I'm Alex placeholder. 
        </p>

        <h2 className={styles.subtitle} style={{ marginTop: "3rem" }}>
          Projects
        </h2>
        <div className={styles.grid}>
          <a href="/irrigation-system" className={styles.card}>
            <h3> Pumpty Dumpty 2000 &rarr;</h3>
            <p>Automated house plant irrigation system using python and raspberry pi.</p>
          </a>

          <a href="/ml-ds" className={styles.card}>
            <h3>Machine Learning and Data Science &rarr;</h3>
            <p>Exploring macine learning techniques using various kaggle data sets.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Reinforcement Learning Trading Algorithm &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>High Precision Attitude Determination Using GPS &rarr;</h3>
            <p>
              Coming soon!
            </p>
          </a>
        </div>

        {/* <h2 className={styles.subtitle} style={{ marginTop: "3rem"}}>
          Blog Posts
        </h2>
        <div className={styles.grid}>
          <a href="/irrigation-system" className={styles.card}>
            <h3>Post 1 &rarr;</h3>
            <p>Lorem ipsum</p>
          </a>

          <a href="/ml-ds" className={styles.card}>
            <h3>Post 2 &rarr;</h3>
            <p>Lorem ipsum</p>
          </a>
          <a href="/ml-ds" className={styles.card}>
            <h3>Post 2 &rarr;</h3>
            <p>Lorem ipsum</p>
          </a>
          <a href="/ml-ds" className={styles.card}>
            <h3>Post 2 &rarr;</h3>
            <p>Lorem ipsum</p>
          </a>
          </div> */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <a href="https://www.linkedin.com/in/alex-arsenault-69941662/">
              <img src="/linkedin.svg" alt="" className={styles.logo} />
          </a>
          <a href="https://github.com/alexarsenault">
            <img src="/github.svg" alt="" className={styles.logo} />
          </a>
          <a href="mailto:alex.arsenault@gatech.edu">
            <img src="/mail.svg" alt="" className={styles.logo} />
          </a>
        </a>
      </footer>
    </div>
  )
}
