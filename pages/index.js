import Head from 'next/head'
import Header from "../header";
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Porsee</title>
        <link rel="icon" href="porseeIcon.svg" alt="icon"/>
      </Head>
      <Header></Header>
      <div className={styles.firstbox}>
        <div className={styles.left}>
          <p>Preparing and Portioning <br></br>to Ease Your Life</p>
        </div>
        <div className={styles.right}>
          <p>We prepared your foodstuffs and portion it, so you can cook <br></br>without worry</p>
          <button type="button">Get Started</button>
        </div>
        <div className={styles.image1}>
          <Image id={styles.kitchen} src="/kitchen.jpg" width={1200} height={400}></Image>
        </div>
      </div>
      <div className={styles.secondbox}>

      </div>
      <section className={styles.thirdbox}>
        <p>We are delivering freshest groceries everyday, ready for you to cook wherever you are!</p>
        <div className={styles.thirdboxButton}>
          <button type="button">Read More</button>
        </div>
      </section>
      <div className={styles.fourthbox}>
        <p id={styles.firstStnc}>Why are we better than other services?</p>
        <p id={styles.secondStnc}>We offer features and freedom for you to choose</p>
        <div className={styles.TopCard}>
          <div id={styles.topLeftCard}>
            <div id={styles.topLeftImg}>
              <Image id={styles.commitment} src="/commitment.svg" width={96} height={96}></Image>
            </div>
            <div id={styles.topLeftPar}>
              <p id={styles.topLeftPar1}>No Commitment</p>
              <p id={styles.topLeftPar2}>Buy meal set without commiting to buy<br></br> for a month or even 2 days only.</p>
            </div>
          </div>

          <div id={styles.topRightCard}>
            <div id={styles.topRightImg}>
                <Image id={styles.vegetable} src="/vegetable.svg" width={96} height={96}></Image>
            </div>
            <div id={styles.topRightPar}>
              <p id={styles.topRightPar1}>Fresh Ingredients Everyday</p>
              <p id={styles.topRightPar2}>We choose not to stock our groceries<br></br> for a long period, but re-stock everyday.</p>
            </div>
          </div>
        </div>
        <div className={styles.BottomCard}>
          <div id={styles.bottomLeftCard}>
            <div id={styles.bottomLeftImg}>
              <Image id={styles.portion} src="/portion.svg" width={96} height={96}></Image>
            </div>
            <div id={styles.bottomLeftPar}>
              <p id={styles.bottomLeftPar1}>Pre-processing and Portioning</p>
              <p id={styles.bottomLeftPar2}>We will preprocess and portion your ingredients, so you don’t need to cut your vegetables anymore.</p>
            </div>
          </div>
          <div id={styles.bottomRightCard}>
            <div id={styles.bottomRightImg}>
                <Image id={styles.play} src="/play.svg" width={96} height={96}></Image>
            </div>
            <div id={styles.bottomRightPar}>
              <p id={styles.bottomRightPar1}>Video Step-by-Step Process</p>
              <p id={styles.bottomRightPar2}>We provide a step-by-step video process, so not only a written guidance but also video, to make your cooking much more easier.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.fifthbox}>
        <div className={styles.mainText}>
          <p>Preparing and Portioning <br></br>to Ease Your Life</p>
        </div>
        {/* <ul>
          <li>
            <p>whatsapp</p>
          </li>
        </ul> */}
      </div>
    </>
  );
}


