import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Q Learning | Alex Arsenault</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Q-Learning Trading Agent Evaluation
        </h1>

        <p className={styles.description}>
          Placeholder text.
        </p>

        CS7646 - Project 8 - Strategy Evaluation
Alex Arsenault
aarsenault3@gatech.edu

<p>Abstract—This project aims to explore and evaluate both a manual rules based trading strategy and a reinforcement learning based strategy which is implemented using Q-Learning.</p>

<h2>1 INTRODUCTION</h2>
<p>There are a number of different strategies that can be used to make trading decisions.  A powerful data based approach is reinforcement learning.  By using reinforcement learning, a policy can be learned which makes decisions that optimizes rewards.  This is in contrast to regression, or classification learners which aim to simply predict a future value.  In this lab technical indicators are used to compare a manual rules based strategy and a Q-Learning based strategy.</p>

<h2>2 INDICATOR OVERVIEW</h2>
2.1 Price/Simple Moving Average Ratio (PSR)
Simple moving average (SMA) is a basic statistical technique that can be used to evaluate the trend of a stock over time.  To compute SMA, a window size is chosen and the average stock value in that window is computed.  This averaging window is then ‘slid’ across time to the end of the targeted period.  A 20 day lookback window was chosen since that is a commonly used value.   In order to normalize SMA, the stock price is divided by SMA to compute Price/SMA Ratio (PSR).  This results in a value that is greater than 1 if the stock price is above it’s 20 day moving average and a metric that’s less than 1 if the price is below it’s 20 day moving average.
2.2 Bollinger Band Percentage (BBP)
Bollinger bands are two standard deviation bands above and below a stock’s SMA that represent a range for which to evaluate the statistical significance of a price deviation from the SMA.  For example, if the stock price deviates outside of the range defined by the bands and then starts moving back towards the SMA, then it is likely that the price will continue moving back towards the SMA.  A single metric that captures the essence of this theory is Bollinger Band Percentage (BBP), which is defined as the amount the current price is deviated away from the SMA divided by the distance away from the SMA that the closest Bollinger Band is.  If BBP is greater than 1, the price is above the upper Bollinger Band and if it’s less than 0, the price is below the lower Bollinger Band.  A lookback window of 20 days was used since this is a commonly used industry value.
2.3 On Balance Volume Modified (OBVM)
On balance volume (OBV) is an indicator that’s used to quantify buying or selling pressure for a particular asset, which may influence price.  It is essentially an accumulation of volume over time.  The theory behind using OBV as a technical indicator is that rising OBV can indicate buying pressure, while declining OBV can indicate selling pressure.   A slightly more complex way to quantify this idea is by using On Balance Volume Modified (OBVM), which is an indicator that was recently published by Vitali Apirine, in which a new signal is generated called the ‘main line’, which is the regular OBV signal smoothed out using an exponential moving average [1].  A second line is also introduced which represents a slower exponential moving average called the ‘signal line’.

3 MANUAL STRATEGY
For the manual rules based strategy, ‘sell’, ‘buy’, and ‘hold’ opportunities were determined using combined information from each of the technical indicators.  Each individual indicator and the combined indicator strategy used for this analysis are summarized below.
3.1 PSR
When a stock’s price is lower than its SMA (PSR < 1), this may be an indication that it’s current price is lower than it’s true value and may be an opportunity to buy.  Conversely, when the price is higher than SMA (PSR > 1), it may be an indication that the current price is higher than the stock’s true value indicating a selling opportunity.
3.2 BBP
When a stock’s BBP is greater than 1.0, it means that the price of the stock is above the upper Bollinger Band.  If BBP then begins to decrease, then the theory is that it will continue to retreat back towards the middle of the bands.  This may indicate a selling opportunity.  If the BBP is less than 0, it means that the price of the stock is below the lower Bollinger Band.  If BBP then increases then the theory is that it will continue to increase towards the middle of the bands.  This may be a buying opportunity.
3.3 OBVM Ratio
OBVM ratio is defined as the ratio of a stock’s OBVM main line to the OBVM signal line.  When a stock’s OBVM ratio is greater than 0, it means that the main line is above the signal line, which is suggestive of increasing volume and may lead to an increase in price, presenting a potential buy opportunity.  When OBVM ratio is less than 0, it means that the main line is below the signal line, which suggests decreasing volume, which may lead to a decrease in price, presenting a possible selling opportunity.
3.4 Combined Indicator
The initial attempt to combine these indicators was to logically ‘AND’ all of the buying conditions and selling conditions.  If all the indicators were suggestive of a buying or selling opportunity then the maximum amount of stock would either be purchased or sold given the limitations of the simulation (in the case of all simulations in this analysis, allowable positions were: 1000 shares long, 1000 shares short, and 0 shares of the target stock ‘JPM’).  The problem with this strategy is that it was rare that all of the indicators agreed with each other about selling or buying opportunities.  In order to get the manual rules based approach to actually generate trades, the requirements on the technical indicator thresholds needed to be relaxed.  After manually experimenting with a number of different threshold values via trial and error, the final combination of thresholds were chosen for buy/sell signals as shown in the pseudocode below.  If neither of the buy/sell conditions were met, then no action was taken.
if (PSR > 1.0) AND (BBP < 0.2) AND (BBP is increasing) AND (OBVM ratio > 0.0):
    Buy as much stock as possible
else if (PSR < 1.0) AND (BBP > 0.8) AND (BBP is decreasing) AND (OBVM ratio < 0.0):
    Sell as much stock as possible
else:
    Do nothing
The main difference in this combined indicator is that the BBP thresholds were relaxed for both buying and selling.  By relaxing these thresholds, trades were made that beat the benchmark in terms of overall return and Sharpe ratio (risk adjusted return) for both the in sample and out of sample periods.  Since the threshold requirements for BBP were only marginally reduced, the combined indicator still ensures that the current price has at least somewhat deviated towards the correct side of the SMA and has begun to move back towards the middle of the bands.  Even with these relaxed thresholds, the manual strategy only produced two trades for the in sample period and one trade for the out of sample period.  Both in sample period and out of sample period performance are plotted in Figures 1 and 2.  Benchmark performance is also shown, which in this case is considered to be buying and holding 1000 shares of the target stock (‘JPM’) over the course of the testing period.  Performance metrics of the manual strategy portfolio and benchmark are also shown in Tables 1 and 2.


Figure 1 —Manual strategy vs. benchmark (in sample)


Figure 2 —Manual strategy vs. benchmark (out of sample)

Metric
Portfolio (in-sample)
Benchmark (in-sample)
Portfolio (out-sample)
Benchmark (out-sample)
Avg. Daily Returns
0.038 %
0.139 %
0.013 %
-0.012 %
Std Dev. Daily Returns
1.429 %
5.209 %
0.773 %
2.259 %
Cumulative Returns
14.932 %
3.197 %
5.275 %
-20.406 %
Sharpe Ratio
0.419
0.424  
0.267
-0.139

Table 1 —Portfolio vs. benchmark metrics
As shown in the figures and table above, the manual trading strategy outperforms the benchmark in terms of cumulative returns for both the in sample and out of sample period.  There is also significantly less risk in the manual strategy portfolio in both periods, which is indicated by lower standard deviation of daily returns.  The combined indicator used in the manual strategy seems to be successful at predicting buying and selling opportunities because it must have a consensus between all three individual indicators.
There is significantly higher cumulative returns and Sharpe ratio for the manual strategy during the in sample period than for the out of sample period.  This may be because the individual indicator thresholds were manually tuned based on the performance of the strategy during the in-sample period and thus a different set of thresholds may actually work better for the out of sample period.  Another explanation may be the fact that the benchmark stock ‘JPM’ performed better during the in-sample period, and since the manual trading strategy seems to execute only a few trades throughout the testing period, returns may be somewhat correlated to the overall performance of the benchmark. 
One flaw with this manual approach may be the fact that since so few trades are executed, if those trades happen to be a bad bet then it is likely to have a significant effect on overall portfolio performance.  In other words, the manual strategy seems to be dependent on the success of only a few decisions.  This strategy, while appearing to be effective in this test scenario may not be a good one for other periods of time or for different stocks due to lack of risk distribution over trade execution space.


4 STRATEGY LEARNER
In order to frame this trading problem as a learning problem, an attempt was made to model it as a deterministic Markov Decision Process (MDP).  In order to do this, the relevant information was broken down into states, actions, and rewards.  The Q-Learning algorithm aims to update a Q-table (a function of state, and action) through the process of exploration and observation as described below.  Once the Q-table is sufficiently trained, it can be used to take actions based on the current state that maximizes future rewards.
Q-table is initialized to all 0’s
Current state, s, is observed
Select some action, a, and execute it
Observe the immediate reward, r, and the new state, s’
Q-table is updated according to Eq. 1    
State is updated and steps 2-6 are repeated until total reward converges
Q[s,a] = Q[s,a] +⍺(r(s,a) + *argmax(Q[s',a])-Q[s,a])        Eq. 1
In this analysis, states were considered to be an abstraction of the current technical indicator values, and current portfolio position at that time.  In order to quantify these states, the indicator values were each discretized into 10 equal sized buckets using the pandas ‘qcut’ function.  Then, for each step in time the combination of bucket numbers associated with each technical indicator and current portfolio position was mapped to a single integer value using a mapping function defined by the logic below. 

current_state =  indicator1_bucket * (ndim1*ndim2*ndim3) +
          indicator2_bucket * (ndim2*ndim3) + 
  indicator3_bucket * (ndim3) + 
  Indicator4_bucket

In the pseudocode above, indicator1 was current action, indicator2 was OBVM ratio, indicator3 was BBP, and indicator4 was PSR.  The values ndim1, ndim2, ndim3, and ndim4 refer to the size of the state, OBVM ratio, BBP, and PSR dimensions respectively (3, 10, 10, and 10).  This discretization process can be thought of as mapping coordinates of a 4-D hypercube into a 1-D space.  In market simulation, three possible actions were considered to be possible: take a long position, take a short position, or hold the current position.  Rewards were considered to be the daily return of the portfolio as a result of the current position.  For example, if a long position is taken and the price of the stock goes up, then the reward is positive and is computed as the value of the shares held multiplied by the percentage increase in stock price.  Rewards for short positions are computed similarly, however for short positions decreases in stock price lead to positive rewards.  The hyper-parameters used for the Q-Learner and their chosen values were:
⍺ (learning rate): 0.2 - Specifies how much new Q-values are weighted vs. old ones during the Q-table update process.
𝛾 (discount factor): 0.9 - How much much future rewards are valued vs. immediate rewards during Q-table update process.
Random action rate (rar): 0.98 - How often are random actions taken during exploration phase.
Random action decay rate (radr): 0.999 - How quickly do we transition out of the random action (exploration) phase.
Dyna: 200 - How many dyna iterations are used in an attempt to learn a model of the environment.
These parameters were chosen based on the observed success of the learning application in Project 7, where a Q-Learning agent using these hyperparameters was able to successfully navigate a number of different mazes.  When training the QLearner agent, due to time constraints, the maximum number of training epochs was set at 30.  However, it was determined experimentally that the policy tended to converge before reaching 15 epochs, so convergence checking logic was implemented in the code to stop the training loop if it was determined that at least 15 epochs had been run and there had been less than 5% change in cumulative returns from the previous epoch.

5. EXPERIMENT 1
In this experiment, performance of the manual strategy and the learner strategy are compared for the stock ‘JPM’ during the in-sample period, which is January 1, 2008 to December 31, 2009 .  For all simulations, the assumptions are made that commission for trades is 9.95, impact is 0.005, and valid positions that any portfolio can take are 1000 shares long, 1000 shares short, or 0 shares.  Trade commission was subtracted directly from portfolio cash as a flat value, while the impact penalty was applied as a cash loss equal to the percentage of current trade value.  The strategy learner was trained on the in-sample data with the parameters described in section 4, and the manual trading strategy used a set of rules described in section 3.  My hypothesis going into this experiment was that the strategy learner would outperform the manual learner, and the manual learner would outperform the benchmark.  Since the strategy learner model was trained on the same data that it is being tested with, higher performance was to be expected.  Since testing the learner strategy with in sample data is effectively cheating, I would expect the strategy learner to be more successful than the manual strategy every time, although there will always be some variation in the results of the strategy learner due to the randomness of the exploration phase of training the model.

Figure 3 —Learner vs. manual vs. benchmark portfolio (in sample) 
The figure above shows that the learner portfolio significantly outperformed the benchmark and the manual rules based portfolio with the learner portfolio yielding returns nearly double the others.  One might expect this result not only because the Q-Learner agent is better at determining buy/sell opportunities than human intuition (especially because I don’t have much trading experience), but also because it was trained specifically on this data as well.  It’s reasonable to expect that under these circumstances (evaluating a machine learning model on in-sample data) the learner strategy will perform exceptionally well and beat both the manual rules based strategy and the benchmark portfolio.


6. EXPERIMENT 2
In experiment 2, the performance of the strategy learner is evaluated under differing impact scenarios.  Impact is a cash penalty that is imposed on the portfolio as a percentage of any trade value that is executed.  This impact penalty emulates the effect that making a trade has on market prices.  My hypothesis is that increasing the percentage of the impact penalty in the simulation will significantly worsen the performance of the strategy learner, because impact always works against any action that the learner takes. 

Figure 4 —Learner vs. manual vs. benchmark portfolio (in sample) 
The figure above shows 4 simulations that were run on the same period of time with the Q-Learner trader and for varying impact values of 0.0, 0.005, 0.025, and 0.050.  It is clear that increasing impact drastically hurts portfolio performance in terms of cumulative returns and risk adjusted reward (Sharpe ratio).  Table 3 shows metrics for all runs and their decreasing performance as the impact penalty increases.

Impact Value
Cumulative Returns
Sharpe Ratio
0.0
111.29 %
2.04
0.005
67.76 %
1.48
0.025
-124.72 %
0.65
0.050
-592.11 %
0.74

Figure 3 —Learner vs. manual vs. benchmark portfolio (in sample)

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
