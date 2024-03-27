import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={`${styles.container} ${styles.post}`}>
      <Head>
        <title>Transformers and the Attention Revolution | Alex Arsenault</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Transformers and the Attention Revolution
        </h1>

        <p className={styles.description}>
          My wife and I recently just had our first child! So as hectic and "transform"-ative as it's been I've also had some time to reflect and
          dive a bit deeper into topics I find interesting.  One of those being the "self-attention" mechanism and transformers which leverage it.  
          After reading up on the topic, I wanted to share some of the interesting experimentation that I've been doing.  To me the most fascinating 
          aspect of transformers is the generality of the self-attention mechanism.  So far we've seen it popularized in the field
          of NLP with models like BERT and GPT.  However, the self-attention mechanism is not limited to NLP and can be 
          applied to a wide variety of problems.  Part of my movitation to experiment has been to explore the use of
          transformers in the context of continuous time series data and I'll share some of those results here.
        </p>

        <p className={styles.description}>
          So first off I want to give a shoutout to Peter Bloem for his excellent blog post on the topic of transformers and self attention.
          I've read the original paper by Vaswani et al. but have always found it a bit dense.  Peter's blog post does a great job of breaking down the
          key concepts and I highly recommend it.  You can find it <a href="https://peterbloem.nl/blog/transformers" style={{color:"blue"}}>here</a>.
          I also used some of the code from his blog post to help me get started with my own experimentation.
        </p>

        <p className={styles.description}>
          The first thing I wanted to do was to implement a simple transformer model to see how it would perform on the IMDB sentiment analysis dataset. I more or less
          used the code from Peter's blog leveraging the GPT-2 style self attention module. However I made my own tokenizer and had to rewrite the code to pull in the data
          since some of the code from Peter's blog was outdated. With these fixes and some light modifications and hyperparameter tuning I was able to get the model to
          achieve an accuracy of 86% on the test set. I was quite impressed with the results. Some of the key changes I made were:
          <ol className={`${styles.description} ${styles.steps}`}>
            <li>Implemented a sinusoidal positional encoding mechanism</li>
            <li>Deepened the network</li>
            <li>Added dropout to prevent overfitting</li>
            <li>Used a larger batch size</li>
          </ol>
        </p>

        <p className={styles.description}>
          Some of my  observations from this experiment were that the model was able to learn the task quite well given the simplicity of the model and
          limited training data.  I was also impressed with how quickly the model was able to train. One obser

        </p>

    </main>

    <footer className={styles.footer}>
        <Link href="https://www.linkedin.com/in/alex-arsenault-69941662/">
            <img src="/linkedin.svg" alt="" className={styles.logo} />
        </Link>
        <Link href="https://github.com/alexarsenault">
          <img src="/github.svg" alt="" className={styles.logo} />
        </Link>
        <Link href="mailto:alex.arsenault@gatech.edu">
          <img src="/mail.svg" alt="" className={styles.logo} />
        </Link>
      </footer>
    </div>
  )
}
