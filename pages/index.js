import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alex Arsenault Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Alex Arsenault
        </h1>

        <div className={styles.description} style={{ maxWidth: "800px"}}>
          <img src="headshot.png" style={{width: "150px", float: "left", borderRadius: "50%", marginRight: "28px"}} /> 
          I'm Alex Arsenault.  I've spent the past eight years building analytics, hardware, and software for space systems. Love everything 
          python, science, engineering, and space! Below is a sampling of some personal projects I've worked on!
        </div>

        <div className={styles.subtitle} style={{ marginTop: "3rem" }}>
          Projects
        </div>
        <div className={styles.grid}>
          
          <Link href="/fifa-notebook" className={styles.card}>
            <h3> Simulating Fifa World Cup &rarr;</h3>
            <p>Model outcomes of games and simulate the World Cup results.</p>
          </Link>

          <Link href="/irrigation-system" className={styles.card}>
            <h3> Automated Home Irrigation System &rarr;</h3>
            <p>Automated plant watering system using python and raspberry pi.</p>
          </Link>

          <Link href="/ml-ds-titanic" className={styles.card}>
            <h3>Machine Learning with Titanic Data &rarr;</h3>
            <p>Exploring a Titanic dataset using scikit and seaborn.</p>
          </Link>

          <Link
            href="/q-learning"
            className={styles.card}
          >
            <h3>Reinforcement Learning and Stock Trading &rarr;</h3>
            <p>Training a Q-learning agent to trade stocks.</p>
          </Link>

          <Link
            href="/ml-ds-housing"
            className={styles.card}
          >
            <h3>Machine Learning with Housing Data &rarr;</h3>
            <p>Predicting home prices using regression.</p>
          </Link>

          <Link
            href="/attitude-determination"
            className={styles.card}
          >
            <h3>High Precision Attitude Determination Using GPS &rarr;</h3>
            <p>
              Using a hexagonal receiver platform to determine precise GPS positioning.
            </p>
          </Link>
        </div>

      </main>

      <footer className={styles.footer}>
        <a href="https://www.linkedin.com/in/alex-arsenault-69941662/">
            <img src="/linkedin.svg" alt="" className={styles.logo} />
        </a>
        <a href="https://github.com/alexarsenault">
          <img src="/github.svg" alt="" className={styles.logo} />
        </a>
        <a href="mailto:alex.arsenault@gatech.edu">
          <img src="/mail.svg" alt="" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
