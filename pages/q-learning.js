import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={`${styles.container} ${styles.post}`}>
      <Head>
        <title>Q-Learning | Alex Arsenault</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Trading Stocks with Q-Learning
        </h1>

        <p className={styles.description}>
          In order to learn more about reinforcement learning, I decided I'd try to train a Q-Learning 
          agent to trade stocks.  One of the nice things about using 
          reinforcement learning to trade stocks vs. regression is that the agent makes the decisions for 
          you (as opposed to simply a prediction) about when to take an action and how long to hold a position,
          which takes the human element out of the loop. For someone like myself with not a lot of professional 
          trading experience, this is perfect. By using reinforcement learning, a policy can be learned 
          which makes decisions that optimizes rewards.
        </p>

        <p className={styles.description}>
          The main approach I took was to compare a trading policy based on a fixed set of rules 
          vs. a trading policy implemented using a trained Q-Learning agent.  The fixed rule approach was 
          implemented using a logical condition based on a set of commonly used technical indicators, while 
          the Q-Learning agent would be trained on those same indicators.  I'd use the same stock data to 
          train and evaluate both policies and assume that for the sake of simplicity, one 1 stock could be 
          included in my portfolio. 
        </p>

        <p className={styles.description}>
          The fixed rule strategy I created beat the benchmark portfolio for both in sample and out of sample
           periods,although not by much.  For both instances, only a few trades were made.  The plots below show 
          performance vs. benchmark and the different entry points.  Risk adjusted return was similar for 
          the in sample periods, but for the out of sample period, the strategy provided a significant 
          improvement over the benchmark.
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
