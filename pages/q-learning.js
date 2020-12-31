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
          Q-Learning Trading Agent Evaluation
        </h1>

        <p className={styles.description}>
          Placeholder text.
        </p>
        <p class="c24 c48 title" id="h.fxylkjlls42"><span class="c14 c46">CS7646 - Project 8 - Strategy Evaluation</span></p>
    <p class="c31 c24 subtitle" id="h.giykyz77g52r"><span>Alex Arsenault</span><span><br /></span><span class="c16"><a class="c29" href="mailto:aarsenault3@gatech.edu">aarsenault3@gatech.edu</a></span></p>
    <p class="c22 c24 c31 subtitle" id="h.n66o6qrwcytg"><span class="c0"></span></p>
    <p class="c1 c21"><span class="c38">Abstract&mdash;</span><span>This project aims to explore and evaluate both a manual rules based trading strategy and a reinforcement learning based strategy which is implemented using Q-Learning.</span></p>
    <h1 class="c19 c22 c24" id="h.vgkhfrewdxk0"><span class="c26 c47"></span></h1>
    <h1 class="c24 c37" id="h.xu33jds1qamy"><span>1</span><span>&nbsp;INTRODUCTION</span></h1>
    <p class="c19"><span class="c0">There are a number of different strategies that can be used to make trading decisions. &nbsp;A powerful data based approach is reinforcement learning. &nbsp;By using reinforcement learning, a policy can be learned which makes decisions that optimizes rewards. &nbsp;This is in contrast to regression, or classification learners which aim to simply predict a future value. &nbsp;In this lab technical indicators are used to compare a manual rules based strategy and a Q-Learning based strategy.</span></p>
    <p class="c19 c22"><span class="c0"></span></p>
    <h1 class="c37 c24" id="h.tdz57k5xvjb1"><span>2</span><span class="c8">&nbsp;INDICATOR OVERVIEW</span></h1>
    <h2 class="c12" id="h.lcccjai7udqs"><span class="c8">2.1 Price/Simple Moving Average Ratio (PSR)</span></h2>
    <p class="c1"><span>Simple moving average (SMA) is a basic statistical technique that can be used to evaluate the trend of a stock over time. &nbsp;To compute SMA, a window size is chosen and the average stock value in that window is computed. &nbsp;This averaging window is then &lsquo;slid&rsquo; across time to the end of the targeted period. &nbsp;A 20 day lookback window was chosen since that is a commonly used value. &nbsp; </span><span>In order to normalize SMA, the stock price is divided</span><span class="c0">&nbsp;by SMA to compute Price/SMA Ratio (PSR). &nbsp;This results in a value that is greater than 1 if the stock price is above it&rsquo;s 20 day moving average and a metric that&rsquo;s less than 1 if the price is below it&rsquo;s 20 day moving average.</span></p>
    <h2 class="c12" id="h.tqh3xq6g3ty"><span class="c8">2.2 Bollinger Band Percentage (BBP)</span></h2>
    <p class="c1"><span class="c0">Bollinger bands are two standard deviation bands above and below a stock&rsquo;s SMA that represent a range for which to evaluate the statistical significance of a price deviation from the SMA. &nbsp;For example, if the stock price deviates outside of the range defined by the bands and then starts moving back towards the SMA, then it is likely that the price will continue moving back towards the SMA. &nbsp;A single metric that captures the essence of this theory is Bollinger Band Percentage (BBP), which is defined as the amount the current price is deviated away from the SMA divided by the distance away from the SMA that the closest Bollinger Band is. &nbsp;If BBP is greater than 1, the price is above the upper Bollinger Band and if it&rsquo;s less than 0, the price is below the lower Bollinger Band. &nbsp;A lookback window of 20 days was used since this is a commonly used industry value.</span></p>
    <h2 class="c12" id="h.et0i3us9zafe"><span class="c8">2.3 On Balance Volume Modified (OBVM)</span></h2>
    <p class="c1"><span class="c0">On balance volume (OBV) is an indicator that&rsquo;s used to quantify buying or selling pressure for a particular asset, which may influence price. &nbsp;It is essentially an accumulation of volume over time. &nbsp;The theory behind using OBV as a technical indicator is that rising OBV can indicate buying pressure, while declining OBV can indicate selling pressure. &nbsp; A slightly more complex way to quantify this idea is by using On Balance Volume Modified (OBVM), which is an indicator that was recently published by Vitali Apirine, in which a new signal is generated called the &lsquo;main line&rsquo;, which is the regular OBV signal smoothed out using an exponential moving average [1]. &nbsp;A second line is also introduced which represents a slower exponential moving average called the &lsquo;signal line&rsquo;.</span></p>
    <p class="c19 c22"><span class="c0"></span></p>
    <h1 class="c1 c24" id="h.orw7gll29egq"><span>3</span><span class="c8">&nbsp;MANUAL STRATEGY</span></h1>
    <p class="c1"><span class="c0">For the manual rules based strategy, &lsquo;sell&rsquo;, &lsquo;buy&rsquo;, and &lsquo;hold&rsquo; opportunities were determined using combined information from each of the technical indicators. &nbsp;Each individual indicator and the combined indicator strategy used for this analysis are summarized below.</span></p>
    <h2 class="c12" id="h.7civgphofj1"><span>3</span><span>.1 PSR</span></h2>
    <p class="c1"><span>When a stock&rsquo;s price is lower than its SMA (PSR &lt; 1), this may be an indication that it&rsquo;s current price is lower than it&rsquo;s true value and may be an opportunity to buy. &nbsp;Conversely, when the price is higher than SMA (PSR &gt; 1), it may be an indication that the current price is higher than the stock&rsquo;s true value indicating a selling opportunity.</span></p>
    <h2 class="c12" id="h.gshubfweylbb"><span>3.2 BBP</span></h2>
    <p class="c1"><span class="c0">When a stock&rsquo;s BBP is greater than 1.0, it means that the price of the stock is above the upper Bollinger Band. &nbsp;If BBP then begins to decrease, then the theory is that it will continue to retreat back towards the middle of the bands. &nbsp;This may indicate a selling opportunity. &nbsp;If the BBP is less than 0, it means that the price of the stock is below the lower Bollinger Band. &nbsp;If BBP then increases then the theory is that it will continue to increase towards the middle of the bands. &nbsp;This may be a buying opportunity.</span></p>
    <h2 class="c12" id="h.7wbpfqrssvul"><span class="c8">3.3 OBVM Ratio</span></h2>
    <p class="c1"><span>OBVM ratio is defined as the ratio of a stock&rsquo;s OBVM main line to the OBVM signal line. &nbsp;</span><span>When a stock&rsquo;s OBVM ratio is greater than 0, it means that the main line is above the signal line, which is suggestive of increasing volume and may lead to an increase in price, presenting a potential buy opportunity. &nbsp;When OBVM ratio is less than 0, it means that the main line is below the signal line, which suggests decreasing volume, which may lead to a decrease in price, presenting a possible selling opportunity.</span></p>
    <h2 class="c12" id="h.4yaql76f1q57"><span class="c8">3.4 Combined Indicator</span></h2>
    <p class="c1"><span>The initial attempt to combine these indicators was to logically &lsquo;AND&rsquo; all of the buying conditions and selling conditions. &nbsp;If all the indicators were suggestive of a buying or selling opportunity then the maximum amount of stock would either be purchased or sold given the limitations of the simulation (in the case of all simulations in this analysis, allowable positions were: 1000 shares long, 1000 shares short, and 0 shares of the target stock &lsquo;JPM&rsquo;). &nbsp;The problem with this strategy is that it was rare that all of the indicators agreed with each other about selling or buying opportunities. &nbsp;In order to get the manual rules based approach to actually generate trades, the requirements on the technical indicator thresholds needed to be relaxed. &nbsp;After manually experimenting with a number of different threshold values via trial and error, the final combination of thresholds were chosen for buy/sell signals as shown in the pseudocode below. &nbsp;If neither of the buy/sell conditions were met, then no action was taken.</span></p>
    <p class="c19 c28"><span class="c32">if (PSR &gt; 1.0) AND (BBP &lt; 0.2) AND (BBP is increasing) AND (OBVM ratio &gt; 0.0):</span></p>
    <p class="c19 c28"><span class="c32">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Buy as much stock as possible</span></p>
    <p class="c19 c28"><span class="c44">else if (PSR &lt; 1.0) AND </span><span class="c50">(</span><span class="c32">BBP &gt; 0.8) AND (BBP is decreasing) AND (OBVM ratio &lt; 0.0):</span></p>
    <p class="c19 c28"><span class="c32">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sell as much stock as possible</span></p>
    <p class="c19 c28"><span class="c32">else:</span></p>
    <p class="c19 c28"><span class="c32">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Do nothing</span></p>
    <p class="c1"><span class="c0">The main difference in this combined indicator is that the BBP thresholds were relaxed for both buying and selling. &nbsp;By relaxing these thresholds, trades were made that beat the benchmark in terms of overall return and Sharpe ratio (risk adjusted return) for both the in sample and out of sample periods. &nbsp;Since the threshold requirements for BBP were only marginally reduced, the combined indicator still ensures that the current price has at least somewhat deviated towards the correct side of the SMA and has begun to move back towards the middle of the bands. &nbsp;Even with these relaxed thresholds, the manual strategy only produced two trades for the in sample period and one trade for the out of sample period. &nbsp;Both in sample period and out of sample period performance are plotted in Figures 1 and 2. &nbsp;Benchmark performance is also shown, which in this case is considered to be buying and holding 1000 shares of the target stock (&lsquo;JPM&rsquo;) over the course of the testing period. &nbsp;Performance metrics of the manual strategy portfolio and benchmark are also shown in Tables 1 and 2.</span></p>
    <p class="c1 c22"><span class="c0"></span></p>
    <p class="c7"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 408.00px; height: 306.97px;"><img alt="" src="images/image5.png" style="width: 408.00px; height: 306.97px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
    <p class="c13"><span class="c38 c11">Figure 1 &mdash;</span><span class="c14 c11">Manual strategy vs. benchmark (in sample)</span></p>
    <p class="c9"><span class="c14 c11"></span></p>
    <p class="c7"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 404.16px; height: 304.32px;"><img alt="" src="images/image3.png" style="width: 404.16px; height: 304.32px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
    <p class="c13"><span class="c11 c38">Figure 2 &mdash;</span><span class="c11">Manual strategy vs. benchmark (out of sample)</span></p>
    <p class="c1 c22"><span class="c0"></span></p>
    <a id="t.30813b42e03a521c3a3ef5cbb9d8d1e771eebfa2"></a><a id="t.0"></a>
    <table class="c15">
      <tbody>
        <tr class="c53">
          <td class="c43" colspan="1" rowspan="1">
            <p class="c2"><span class="c17">Metric</span></p>
          </td>
          <td class="c33" colspan="1" rowspan="1">
            <p class="c2"><span class="c17">Portfolio (in-sample)</span></p>
          </td>
          <td class="c23" colspan="1" rowspan="1">
            <p class="c2"><span class="c17">Benchmark (in-sample)</span></p>
          </td>
          <td class="c27" colspan="1" rowspan="1">
            <p class="c2"><span class="c17">Portfolio (out-sample)</span></p>
          </td>
          <td class="c5" colspan="1" rowspan="1">
            <p class="c2"><span class="c17">Benchmark (out-sample)</span></p>
          </td>
        </tr>
        <tr class="c49">
          <td class="c43" colspan="1" rowspan="1">
            <p class="c39"><span class="c6">Avg. Daily Returns</span></p>
          </td>
          <td class="c33" colspan="1" rowspan="1">
            <p class="c2"><span class="c6">0.038 %</span></p>
          </td>
          <td class="c23" colspan="1" rowspan="1">
            <p class="c2"><span class="c6">0.139 %</span></p>
          </td>
          <td class="c27" colspan="1" rowspan="1">
            <p class="c2"><span class="c6">0.013 %</span></p>
          </td>
          <td class="c5" colspan="1" rowspan="1">
            <p class="c2"><span class="c6">-0.012 %</span></p>
          </td>
        </tr>
        <tr class="c4">
          <td class="c43" colspan="1" rowspan="1">
            <p class="c39"><span class="c6">Std Dev. Daily Returns</span></p>
          </td>
          <td class="c33" colspan="1" rowspan="1">
            <p class="c2"><span class="c6">1.429 %</span></p>
          </td>
          <td class="c23" colspan="1" rowspan="1">
            <p class="c2"><span class="c6">5.209 %</span></p>
          </td>
          <td class="c27" colspan="1" rowspan="1">
            <p class="c2"><span class="c6">0.773 %</span></p>
          </td>
          <td class="c5" colspan="1" rowspan="1">
            <p class="c2"><span class="c6">2.259 %</span></p>
          </td>
        </tr>
        <tr class="c4">
          <td class="c43" colspan="1" rowspan="1">
            <p class="c39"><span class="c6">Cumulative Returns</span></p>
          </td>
          <td class="c33" colspan="1" rowspan="1">
            <p class="c2"><span class="c6">14.932 %</span></p>
          </td>
          <td class="c23" colspan="1" rowspan="1">
            <p class="c2"><span class="c6">3.197 %</span></p>
          </td>
          <td class="c27" colspan="1" rowspan="1">
            <p class="c2"><span class="c6">5.275 %</span></p>
          </td>
          <td class="c5" colspan="1" rowspan="1">
            <p class="c2"><span class="c6">-20.406 %</span></p>
          </td>
        </tr>
        <tr class="c20">
          <td class="c43" colspan="1" rowspan="1">
            <p class="c39"><span class="c6">Sharpe Ratio</span></p>
          </td>
          <td class="c33" colspan="1" rowspan="1">
            <p class="c2"><span class="c6">0.419</span></p>
          </td>
          <td class="c23" colspan="1" rowspan="1">
            <p class="c2"><span class="c6">0.424 &nbsp;</span></p>
          </td>
          <td class="c27" colspan="1" rowspan="1">
            <p class="c2"><span class="c6">0.267</span></p>
          </td>
          <td class="c5" colspan="1" rowspan="1">
            <p class="c2"><span class="c6">-0.139</span></p>
          </td>
        </tr>
      </tbody>
    </table>
    <p class="c9"><span class="c11 c26"></span></p>
    <p class="c13"><span class="c38 c11">Table 1 &mdash;</span><span class="c11 c14">Portfolio vs. benchmark metrics</span></p>
    <p class="c1"><span class="c0">As shown in the figures and table above, the manual trading strategy outperforms the benchmark in terms of cumulative returns for both the in sample and out of sample period. &nbsp;There is also significantly less risk in the manual strategy portfolio in both periods, which is indicated by lower standard deviation of daily returns. &nbsp;The combined indicator used in the manual strategy seems to be successful at predicting buying and selling opportunities because it must have a consensus between all three individual indicators.</span></p>
    <p class="c1"><span class="c0">There is significantly higher cumulative returns and Sharpe ratio for the manual strategy during the in sample period than for the out of sample period. &nbsp;This may be because the individual indicator thresholds were manually tuned based on the performance of the strategy during the in-sample period and thus a different set of thresholds may actually work better for the out of sample period. &nbsp;Another explanation may be the fact that the benchmark stock &lsquo;JPM&rsquo; performed better during the in-sample period, and since the manual trading strategy seems to execute only a few trades throughout the testing period, returns may be somewhat correlated to the overall performance of the benchmark. </span></p>
    <p class="c19"><span>One flaw with this manual approach may be the fact that since so few trades are executed, </span><span class="c42">if</span><span class="c0">&nbsp;those trades happen to be a bad bet then it is likely to have a significant effect on overall portfolio performance. &nbsp;In other words, the manual strategy seems to be dependent on the success of only a few decisions. &nbsp;This strategy, while appearing to be effective in this test scenario may not be a good one for other periods of time or for different stocks due to lack of risk distribution over trade execution space.</span></p>
    <h1 class="c19 c22 c24" id="h.rc0na58be9eb"><span class="c8"></span></h1>
    <p class="c1 c22"><span class="c0"></span></p>
    <h1 class="c1 c24" id="h.52xeatme819o"><span>4</span><span class="c8">&nbsp;STRATEGY LEARNER</span></h1>
    <p class="c1"><span class="c0">In order to frame this trading problem as a learning problem, an attempt was made to model it as a deterministic Markov Decision Process (MDP). &nbsp;In order to do this, the relevant information was broken down into states, actions, and rewards. &nbsp;The Q-Learning algorithm aims to update a Q-table (a function of state, and action) through the process of exploration and observation as described below. &nbsp;Once the Q-table is sufficiently trained, it can be used to take actions based on the current state that maximizes future rewards.</span></p>
    <ol class="c35 lst-kix_r296zm45zlyn-0 start" start="1">
      <li class="c1 c25"><span class="c0">Q-table is initialized to all 0&rsquo;s</span></li>
      <li class="c1 c25"><span class="c0">Current state, s, is observed</span></li>
      <li class="c1 c25"><span class="c0">Select some action, a, and execute it</span></li>
      <li class="c1 c25"><span class="c0">Observe the immediate reward, r, and the new state, s&rsquo;</span></li>
      <li class="c1 c25"><span class="c0">Q-table is updated according to Eq. 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li>
      <li class="c1 c25"><span class="c0">State is updated and steps 2-6 are repeated until total reward converges</span></li>
    </ol>
    <p class="c41"><img src="images/image1.png" /><span class="c51">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Eq. 1</span></p>
    <p class="c1"><span class="c0">In this analysis, states were considered to be an abstraction of the current technical indicator values, and current portfolio position at that time. &nbsp;In order to quantify these states, the indicator values were each discretized into 10 equal sized buckets using the pandas &lsquo;qcut&rsquo; function. &nbsp;Then, for each step in time the combination of bucket numbers associated with each technical indicator and current portfolio position was mapped to a single integer value using a mapping function defined by the logic below. </span></p>
    <p class="c52 c22"><span class="c3"></span></p>
    <p class="c52"><span class="c3">current_state = &nbsp;indicator1_bucket * (ndim1*ndim2*ndim3) +</span></p>
    <p class="c52"><span class="c3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; indicator2_bucket * (ndim2*ndim3) + </span></p>
    <p class="c45"><span class="c3">&nbsp; indicator3_bucket * (ndim3) + </span></p>
    <p class="c45"><span class="c3">&nbsp; Indicator4_bucket</span></p>
    <p class="c45 c22"><span class="c3"></span></p>
    <p class="c1"><span class="c0">In the pseudocode above, indicator1 was current action, indicator2 was OBVM ratio, indicator3 was BBP, and indicator4 was PSR. &nbsp;The values ndim1, ndim2, ndim3, and ndim4 refer to the size of the state, OBVM ratio, BBP, and PSR dimensions respectively (3, 10, 10, and 10). &nbsp;This discretization process can be thought of as mapping coordinates of a 4-D hypercube into a 1-D space. &nbsp;In market simulation, three possible actions were considered to be possible: take a long position, take a short position, or hold the current position. &nbsp;Rewards were considered to be the daily return of the portfolio as a result of the current position. &nbsp;For example, if a long position is taken and the price of the stock goes up, then the reward is positive and is computed as the value of the shares held multiplied by the percentage increase in stock price. &nbsp;Rewards for short positions are computed similarly, however for short positions decreases in stock price lead to positive rewards. &nbsp;The hyper-parameters used for the Q-Learner and their chosen values were:</span></p>
    <ul class="c35 lst-kix_x0q8zaag73c8-0 start">
      <li class="c1 c25"><span>&#9082;</span><span class="c0">&nbsp;(learning rate): 0.2 - Specifies how much new Q-values are weighted vs. old ones during the Q-table update process.</span></li>
      <li class="c1 c25"><span class="c0">&#x1d6fe; (discount factor): 0.9 - How much much future rewards are valued vs. immediate rewards during Q-table update process.</span></li>
      <li class="c1 c25"><span class="c0">Random action rate (rar): 0.98 - How often are random actions taken during exploration phase.</span></li>
      <li class="c1 c25"><span class="c0">Random action decay rate (radr): 0.999 - How quickly do we transition out of the random action (exploration) phase.</span></li>
      <li class="c1 c25"><span class="c0">Dyna: 200 - How many dyna iterations are used in an attempt to learn a model of the environment.</span></li>
    </ul>
    <p class="c1"><span class="c0">These parameters were chosen based on the observed success of the learning application in Project 7, where a Q-Learning agent using these hyperparameters was able to successfully navigate a number of different mazes. &nbsp;When training the QLearner agent, due to time constraints, the maximum number of training epochs was set at 30. &nbsp;However, it was determined experimentally that the policy tended to converge before reaching 15 epochs, so convergence checking logic was implemented in the code to stop the training loop if it was determined that at least 15 epochs had been run and there had been less than 5% change in cumulative returns from the previous epoch.</span></p>
    <h1 class="c19 c22 c24" id="h.funwu82s5382"><span class="c8"></span></h1>
    <h1 class="c1 c24" id="h.ygov7abadcah"><span class="c8">5. EXPERIMENT 1</span></h1>
    <p class="c1"><span class="c0">In this experiment, performance of the manual strategy and the learner strategy are compared for the stock &lsquo;JPM&rsquo; during the in-sample period, which is January 1, 2008 to December 31, 2009 . &nbsp;For all simulations, the assumptions are made that commission for trades is 9.95, impact is 0.005, and valid positions that any portfolio can take are 1000 shares long, 1000 shares short, or 0 shares. &nbsp;Trade commission was subtracted directly from portfolio cash as a flat value, while the impact penalty was applied as a cash loss equal to the percentage of current trade value. &nbsp;The strategy learner was trained on the in-sample data with the parameters described in section 4, and the manual trading strategy used a set of rules described in section 3. &nbsp;My hypothesis going into this experiment was that the strategy learner would outperform the manual learner, and the manual learner would outperform the benchmark. &nbsp;Since the strategy learner model was trained on the same data that it is being tested with, higher performance was to be expected. &nbsp;Since testing the learner strategy with in sample data is effectively cheating, I would expect the strategy learner to be more successful than the manual strategy every time, although there will always be some variation in the results of the strategy learner due to the randomness of the exploration phase of training the model.</span></p>
    <p class="c7"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 408.00px; height: 306.00px;"><img alt="" src="images/image2.png" style="width: 408.00px; height: 306.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
    <p class="c13"><span class="c38 c11">Figure 3 &mdash;</span><span class="c11">Learner vs. manual vs. benchmark portfolio (in sample) </span></p>
    <p class="c19"><span class="c0">The figure above shows that the learner portfolio significantly outperformed the benchmark and the manual rules based portfolio with the learner portfolio yielding returns nearly double the others. &nbsp;One might expect this result not only because the Q-Learner agent is better at determining buy/sell opportunities than human intuition (especially because I don&rsquo;t have much trading experience), but also because it was trained specifically on this data as well. &nbsp;It&rsquo;s reasonable to expect that under these circumstances (evaluating a machine learning model on in-sample data) the learner strategy will perform exceptionally well and beat both the manual rules based strategy and the benchmark portfolio.</span></p>
    <p class="c19 c22"><span class="c0"></span></p>
    <p class="c19 c22"><span class="c0"></span></p>
    <h1 class="c1 c24" id="h.389pieu6jw2b"><span class="c8">6. EXPERIMENT 2</span></h1>
    <p class="c1"><span>In experiment 2, the performance of the strategy learner is evaluated under differing impact scenarios. &nbsp;Impact is a cash penalty that is imposed on the portfolio as a percentage of any trade value that is executed. &nbsp;This impact penalty emulates the effect that making a trade has on market prices. &nbsp;My hypothesis is that increasing the percentage of the impact penalty in the simulation will significantly worsen the performance of the strategy learner, because impact always works against any action that the learner takes. </span></p>
    <p class="c7"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 408.00px; height: 306.00px;"><img alt="" src="images/image4.png" style="width: 408.00px; height: 306.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
    <p class="c13"><span class="c38 c11">Figure 4 &mdash;</span><span class="c11">Learner vs. manual vs. benchmark portfolio (in sample) </span></p>
    <p class="c1"><span class="c0">The figure above shows 4 simulations that were run on the same period of time with the Q-Learner trader and for varying impact values of 0.0, 0.005, 0.025, and 0.050. &nbsp;It is clear that increasing impact drastically hurts portfolio performance in terms of cumulative returns and risk adjusted reward (Sharpe ratio). &nbsp;Table 3 shows metrics for all runs and their decreasing performance as the impact penalty increases.</span></p>
    <p class="c1 c22"><span class="c0"></span></p>
    <a id="t.8847a6977af3bbe453ab607d9fdc387d123bb18c"></a><a id="t.1"></a>
    <table class="c15">
      <tbody>
        <tr class="c4">
          <td class="c40" colspan="1" rowspan="1">
            <p class="c2"><span class="c17">Impact Value</span></p>
          </td>
          <td class="c10" colspan="1" rowspan="1">
            <p class="c2"><span class="c17">Cumulative Returns</span></p>
          </td>
          <td class="c30" colspan="1" rowspan="1">
            <p class="c2"><span class="c17">Sharpe Ratio</span></p>
          </td>
        </tr>
        <tr class="c4">
          <td class="c40" colspan="1" rowspan="1">
            <p class="c2"><span class="c6">0.0</span></p>
          </td>
          <td class="c10" colspan="1" rowspan="1">
            <p class="c2"><span class="c6">111.29 %</span></p>
          </td>
          <td class="c30" colspan="1" rowspan="1">
            <p class="c2"><span class="c6">2.04</span></p>
          </td>
        </tr>
        <tr class="c4">
          <td class="c40" colspan="1" rowspan="1">
            <p class="c2"><span class="c6">0.005</span></p>
          </td>
          <td class="c10" colspan="1" rowspan="1">
            <p class="c2"><span class="c6">67.76 %</span></p>
          </td>
          <td class="c30" colspan="1" rowspan="1">
            <p class="c2"><span class="c6">1.48</span></p>
          </td>
        </tr>
        <tr class="c4">
          <td class="c40" colspan="1" rowspan="1">
            <p class="c2"><span class="c6">0.025</span></p>
          </td>
          <td class="c10" colspan="1" rowspan="1">
            <p class="c2"><span class="c6">-124.72 %</span></p>
          </td>
          <td class="c30" colspan="1" rowspan="1">
            <p class="c2"><span class="c6">0.65</span></p>
          </td>
        </tr>
        <tr class="c4">
          <td class="c40" colspan="1" rowspan="1">
            <p class="c2"><span class="c6">0.050</span></p>
          </td>
          <td class="c10" colspan="1" rowspan="1">
            <p class="c2"><span class="c6">-592.11 %</span></p>
          </td>
          <td class="c30" colspan="1" rowspan="1">
            <p class="c2"><span class="c6">0.74</span></p>
          </td>
        </tr>
      </tbody>
    </table>
    <p class="c9"><span class="c26 c11"></span></p>
    <p class="c13"><span class="c38 c11">Figure 3 &mdash;</span><span class="c11">Learner vs. manual vs. benchmark portfolio (in sample)</span></p>
    <div>
      <p class="c22 c36"><span class="c0"></span></p>
    </div>
    </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
