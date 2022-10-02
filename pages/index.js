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
      <div className="bg-purple-porsee w-full lg:h-[440px] md:h-[330px] sm:h-[220px] xs:h-[175px] text-white">
        <div className="lg:w-7/12 md:w-7/12 sm:w-7/12 xs:w-5/12 float-left">
          <p className="lg:mt-20 md:mt-10 sm:mt-5 xs:mt-5 lg:ml-28 md:ml-14 sm:ml-7 xs:ml-7 lg:text-5xl md:text-3xl">Preparing and Portioning <br></br>to Ease Your Life</p>
        </div>
        <div className="lg:w-5/12 md:w-5/12 sm:w-5/12 xs:w-7/12 float-right h-[200px] lg:mb-12 md:mb-0 sm:-mb-12 xs:-mb-16">
          <p className="lg:text-base md:text-sm xs:text-xs lg:mt-16 md:mt-8 sm:mt-4 xs:mt-4 lg:w-10/12">We prepared your foodstuffs and portion it, so you can cook without worry</p>
          <button className="border-none bg-cream-porsee text-purple-porsee lg:text-lg md:text-base sm:text-sm xs:text-xs lg:py-6 md:py-5 sm:py-4 xs:py-3 lg:px-10 md:px-9 sm:px-8 xs:px-7 lg:mt-7 md:mt-6 sm:mt-5 xs:mt-4 lg:ml-0 md:ml-0 xs:ml-10 text-center inline-block rounded-[32px] cursor-pointer" type="button">Get Started</button>
        </div>
        <div className="">
          <img className="rounded-[1.25rem] lg:w-10/12 md:w-10/12 sm:w-10/12 xs:w-10/12 lg:ml-auto lg:mr-auto md:ml-auto md:mr-auto sm:ml-auto sm:mr-auto xs:ml-auto xs:mr-auto" src="/kitchen.jpg"></img>
        </div>
      </div>
      <div className="bg-cream-porsee lg:h-[240px] md:h-[180px] sm:h-[160px] xs:h-[110px]">

      </div>
      <div id='thirdbox' className="bg-purple-porsee lg:h-[320px] md:h-[220px] sm:h-[180px] xs:h-[140px]">
        <p className="text-white lg:text-[40px] md:text-[24px] sm:text-[18px] xs:text-[16px] text-center lg:ml-16 lg:mr-16 md:ml-28 md:mr-28 sm:ml-20 sm:mr-20 xs:ml-6 xs:mr-6 lg:pt-10 md:pt-6 sm:pt-6 xs:pt-4">We are delivering freshest groceries everyday, ready for you to cook wherever you are!</p>
        <div className="flex justify-center align-center">
          <button className="border-none bg-cream-porsee text-purple-porsee lg:text-lg md:text-base sm:text-sm xs:text-xs lg:py-6 md:py-5 sm:py-4 xs:py-3 lg:px-10 md:px-9 sm:px-8 xs:px-7 lg:mt-7 md:mt-6 sm:mt-5 xs:mt-4 lg:ml-0 md:ml-0 xs:ml-10 text-center inline-block rounded-[32px] cursor-pointer" type="button">Read More</button>
        </div>
      </div>
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


