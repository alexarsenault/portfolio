import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={`${styles.container} ${styles.post}`}>
      <Head>
        <title>Automated Home Irrigation System | Alex Arsenault</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Automated Home Irrigation System
        </h1>

        <p className={styles.description}>
          When the pandemic started my fiance and I found ourselves travelling back and forth between 
          Boston and DC for weeks at a time to see our families and keep ourselves from going insane.
          Aside from the 8 hour drive, a problem we ran into was how to keep our houseplants alive while 
          we were away.  Of course we could've asked a friend to come over and periodically water them, 
          but there had to be a unique engineering solution.
        </p>
        
        <p className={styles.description}>
          One day I was at a local electronics store browsing parts I could use to upgrade my PC when 
          I happened to notice a 9V DC water pump... for 9$. As soon as I saw that it hit me.  It had to 
          be super easy to write a script that could run on a raspberry pi which would actuate this 
          pump for a few seconds and water our plants!
        </p>

        <img src='pumpty/pump.jpg' className={styles.image}/>
        <span className={styles.caption}>Pump I used for this project.</span>

        <p className={styles.description}>
          I bought the motor immediately (can't beat that deal for $9) and came home and wrote up a 
          quick python script that would toggle a raspberry gpio pin for a few every 24 hours. The pump 
          was designed to be used with an adrunio and I only had a raspberry pi lying around.  So I 
          needed to come up with a switching circuit that would allow me to switch the pump on and off
          from a raspberry pi.  I scrounged through my box of miscellaneous electronic components, 
          breadboarded a quick switching circuit using an old NPN transitor I found laying around. 
          And voila, the automated irrigation system was alive!
        </p>

      <p className={styles.description}>
          Next I needed some way to distribute the water from the pump to the plants that needed 
          watering.  I found some cheap 8mm plastic tubing at Home Depot for $3.99, poked small holes 
          in the tubing where each plant would be, and then sealed the end of tube.  This would be the 
          hose attachement used to distributed the water that was being pumped.  After some trial and 
          error I was able to set the pump and hose up just right so that the water would come out just
          right.
        </p>

        <p className={styles.description}>
          But how would we know that our precious plant babies were thriving as we were away?  We
          didn't want to be at the edge of our seats wondering whether they were alive for weeks on end. 
          Luckily I had a camera attachment for my raspberry pi that connected up and wrote some 
          python code to automatically take a picture of our plants and send an email during each 
          watering session. The entire device setup can be seen below.
        </p>

        <img src='pumpty/pd1.jpg' className={styles.image}/>
        <span className={styles.caption}>Breadboarded switching circuit.</span>

        <p className={styles.description}>
          It was finally time to entrust the care of our plants to our homemade irrigation system. My 
          fiance was skeptical, but lo and behold our system worked beautifully.  Every day our plants 
          would be watered and we'd have photographical evidence sent to our emails as proof.  It would've 
          been easier to call a friend, but hey why not write some Python code and take advantage of 
          spare parts laying around?  Feel free to check out all the code in my repo <a href="https://github.com/alexarsenault/pd_2000" style={{color:"blue"}}>here</a>.
        </p>

        <img src='pumpty/pd3.jpg' className={styles.image} />
        <span className={styles.caption}>Hose setup.</span>

        <img src='pumpty/pd4.jpg' className={styles.image} />
        <span className={styles.caption}>More hose setup.</span>

        <img src='pumpty/pd5.png' className={styles.image} />
        <span className={styles.caption}>Action shot of water being dispensed.</span>


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
