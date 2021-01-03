import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={`${styles.container} ${styles.post}`}>
      <Head>
        <title>Titanic Dataset | Alex Arsenault</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Machine Learning with Titanic Data
        </h1>

        <p className={styles.description}>
          I thought it'd be interesting to play around with some datasets using some basic ML techniques 
          from the Scikit and Seaborns python libraries. In the past I've found some great datasets from 
          Kaggle, so I figured that would be a good place to start.  After poking around I found a pretty 
          cool dataset/challenge that seems to be pretty popular on the site.  The data set is a partial 
          list of members onboard the Titanic along with some info about them and  whether or not they 
          survived.  The goal of the challenge is to build a model to predict whether the remaining 
          passengers survived.
        </p>

        <p className={styles.description}>
          My first thought was to use one of the most basic and reliable techniques I know, k Nearest 
          Neighbors.  In my first attempt, I cleaned up the data, did some exploration of it, and then
          trained a kNN model using the cleaned data. Using Seaborn to plot some predicted survival 
          percentage vs. age and class revealed some interesting and perhaps expected information. 
          Overall this kNN technique scored a 68% on out of sample data when using a gridsearch to 
          optimize hyperparameter selection. You can check out the code here.
        </p>

        <p className={styles.description}>
          Next, it was time to test out my other trusted ML algorithm, Random Forest.  I used the same 
          techniques to clean the data, trained a Random Forest regression model and found that it 
          performed a bit better than kNN.  I was able to get the model to predict about 79% of out 
          of sample data points correctly.  My thought is that 4 out of 5 predictions being correct 
          isn't too shabby for such a quick and dirty analysis.  Feel free to check out the code here.
        </p>

        <p className={styles.description}>
          Looking at the plots of predicted survival percentage vs age and class was interesting. Especially 
          the plot for class. It was almost like the data was telling a grim story about the reality of 
          the Titanic disaster.  First class is a luxury that many people can't afford but if you were on
          board the Titanic, your life may have depended on it.  Overall, the scikit and seaborn libraries 
          worked great.  I was able to build relatively good models and generate some nice looking plots in 
          just a few lines of code.  See some of my plots below and checkout my repo here.
        </p>

        <img src='ml_ds/class_vs_age_vs_survival.png' className={styles.image} />
        <span className={styles.caption}>This is a caption</span>

        <img src='ml_ds/sex_vs_age_vs_survival.png' className={styles.image} />
        <span className={styles.caption}>This is a caption</span>

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
