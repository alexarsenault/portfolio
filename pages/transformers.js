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
          My wife and I recently just had our first child! So as hectic as it's been I've also had some time to 
          dive a bit deeper into some topics I find interesting.  One of those being the recent revolution of the
          "self-attention" mechanism and transformers which leverage it.  I've been reading up quite a bit on this topic 
          and wanted to share some of the interesting experimentation that I've been doing.  To me the most fascinating 
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
          The first thing I wanted to do was to implement a simple transformer model to see how it would perform on the IMDB sentiment analysis dataset.
          Basically I wanted to try to recreate the results from Peter's blog. I had to update some of the code related to the data preprocessing 
          and tokenization but was able to pretty easily train a transformer model to achieve around 70% accuracy on the test set.  I was pretty happy with
          this result but I wanted to push the envelope a bit more and see if I could improve the performance. After some experimentation, I ended up
          making the following changes to the original model from the blog:
          <ol className={`${styles.description} ${styles.steps}`}>
            <li>Implemented a learned positional encoding mechanism (apparently this is what the authors of BERT did)</li>
            <li>Deepened the network</li>
            <li>Added dropout to prevent overfitting</li>
            <li>Used a larger batch size</li>
          </ol>

        </p>

        <img src='q_learning/manual_strategy_in_sample_returns.png' className={styles.image} />
        <span className={styles.caption}>Manual fixed strategy in sample performance.</span>

        <img src='q_learning/manual_strategy_out_sample_returns.png' className={styles.image} />
        <span className={styles.caption}>Manual fixed strategy out of sample performance.</span>

        <p className={styles.description}>
          In order to use reinforcement learning for trading, the problem needed to be framed  as a deterministic 
          Markov Decision Process (MDP).  In order to do this, the relevant information was broken down into 
          states, actions, and rewards.  Q-Learning aims to update a Q-table (a function of 
          state, and action) through the process of exploration and observation as described below.  Once 
          the Q-table is sufficiently trained, it can be used to take actions based on the current state 
          that maximizes future rewards.
        </p>

        <ol className={`${styles.description} ${styles.steps}`}>
          <li>Q-table is initialized to all 0’s</li>
          <li>Current state, s, is observed</li>
          <li>Select some action, a, and execute it</li>
          <li>Observe the immediate reward, r, and the new state, s’</li>
          <li>Q-table is updated according to Eq. 1   </li> 
          <li>State is updated and steps 2-6 are repeated until total reward converges</li>
        </ol>

        <p className={`${styles.description} ${styles.equation}`}>
          Q[s,a] = Q[s,a] + ⍺(r(s,a) + *argmax(Q[s',a])-Q[s,a])        Eq. 1
        </p>

        <p className={styles.description}>
          In this analysis, states were considered to be an abstraction of the technical indicator values, 
          and current portfolio position at that time.  In order to quantify these states, the indicator 
          values were each discretized into 10 equal sized buckets using the pandas ‘qcut’ function.  
          Then, for each step in time the combination of bucket numbers associated with each technical 
          indicator and current portfolio position was mapped to a single integer value using a mapping 
          function.
        </p>

        <p className={styles.description}>
          In this market simulation, three possible actions were considered to be possible: take a long 
          position, take a short position, or hold the current position.  Rewards were considered to be 
          the daily return of the portfolio as a result of the current position.  For example, if a long 
          position is taken and the price of the stock goes up, then the reward is positive and is computed 
          as the value of the shares held multiplied by the percentage increase in stock price.  Rewards 
          for short positions are computed similarly, however for short positions decreases in stock price 
          lead to positive rewards.  The hyper-parameters used for the Q-Learner and their chosen values were:
        </p>

        <ul className={`${styles.description} ${styles.steps}`}>
          <li>⍺ (learning rate): 0.2 - Specifies how much new Q-values are weighted vs. old ones during 
            the Q-table update process. </li>
          <li>𝛾 (discount factor): 0.9 - How much much future rewards are valued vs. immediate rewards 
            during Q-table update process. </li>
          <li>Random action rate (rar): 0.98 - How often are random actions taken during exploration phase. </li>
          <li>Random action decay rate (radr): 0.999 - How quickly do we transition out of the random 
            action (exploration) phase. </li>
          <li>Dyna: 200 - How many dyna iterations are used in an attempt to learn a model of the environment. </li>
        </ul>

        <p className={styles.description}>
          Once trained, the Q-Learning approach actually performed pretty well (at least for in sample data).
          You can see the plot of Q-Learning performance vs. fixed rule strategy vs. benchmark below.  For 
          out of sample data, the Q-Learning performance was pretty inconsistent, so you probably shouldn't 
          bet your life savings on this technique!  Overall, it was pretty cool to build a Q-Learning agent 
          and see it perform so well for the in sample period.  I'm currently working on bolstering this 
          approach using a deep Q-Learning techniques where the transition and reward functions are 
          approximated using neural networks.  Maybe with this approach and some added complexity I might be able 
          to see some real performance on out of sample data!  Feel free to check out all the code in my 
          repository <a href="https://github.com/alexarsenault/q_learning_trader" style={{color:"blue"}}>here</a>.
        </p>

        <img src='q_learning/learner_vs_manual_portfolio.png' className={styles.image} />
        <span className={styles.caption}>Comparison of fixed strategy vs. Q-Learning vs. benchmark.</span>

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
