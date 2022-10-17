import Head from 'next/head'
import Header from "../header";
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import bg from '../public/baru.jpg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Porsee</title>
        <link rel="icon" href="porseeIcon.svg" alt="icon"/>
      </Head>
      <Header></Header>
      <div className="pt-[92.5px]">
        <div id="firstbox" className="bg-cover bg-cream-porsee w-full lg:h-[680px] md:h-[510px] sm:h-[380px] xs:h-[285px] text-purple-porsee" style={{ backgroundImage: "url(/baru.jpg)"}}>
          <div className="lg:pt-[5%] xs:pt-[15%] h-full flex flex-col justify-center items-center">
            <p className="tracking-widest leading-loose text-center text-purple-porsee font-black lg:text-5xl md:text-3xl sm:text-2xl font-['Gayathri']">Preparing and Portioning <br></br>to Ease Your Life</p>
            <div className="lg:w-5/12 md:w-5/12 sm:w-5/12 xs:w-7/12 ml-[10%]">
              <p className="lg:text-base md:text-sm xs:text-xs mt-[5%] lg:w-10/12 md:w-10/12 sm:w-10/12 xs:w-10/12">Stay updated!<br></br> Receive our latest news and promos.</p>
              <form action="#" method="post">
                <input className="w-1/2 bg-white text-purple-porsee lg:text-sm md:text-xs sm:text-[10px] xs:text-[8px] lg:py-[2%] md:py-[2%] sm:py-[2%] xs:py-[2%] lg:px-[2%] md:px-[2%] sm:px-[2%] xs:px-[2%] lg:mt-7 md:mt-6 sm:mt-5 xs:mt-4 rounded-[16px]"
                  type="email"
                  id="roll"
                  name="roll"
                  placeholder="Email Address"
                  required
                />
                <button className="w-1/5 border-none bg-purple-porsee text-cream-porsee lg:text-sm md:text-xs sm:text-[10px] xs:text-[8px] lg:py-[2%] md:py-[2%] sm:py-[2%] xs:py-[2%] lg:mt-7 md:mt-6 sm:mt-5 xs:mt-4 text-center rounded-[16px] cursor-pointer mx-[5%]" type="button">Submit</button>
              </form>
            </div>
          </div>
          <div className="">
            {/* <img className="rounded-[1.25rem] lg:w-10/12 md:w-10/12 sm:w-10/12 xs:w-10/12 lg:ml-auto lg:mr-auto md:ml-auto md:mr-auto sm:ml-auto sm:mr-auto xs:ml-auto xs:mr-auto" src="/kitchen.jpg"></img> */}
          </div>
        </div>
        <div id="thirdbox" className="bg-purple-porsee lg:h-[320px] md:h-[220px] sm:h-[180px] xs:h-[140px]">
          <p className="text-white lg:text-[40px] md:text-[24px] sm:text-[18px] xs:text-[16px] text-center lg:ml-16 lg:mr-16 md:ml-28 md:mr-28 sm:ml-20 sm:mr-20 xs:ml-6 xs:mr-6 lg:pt-10 md:pt-6 sm:pt-6 xs:pt-4">We are delivering freshest groceries everyday, ready for you to cook wherever you are!</p>
          <div className="flex justify-center align-center">
            <button className="border-none bg-cream-porsee text-purple-porsee lg:text-lg md:text-base sm:text-sm xs:text-xs lg:py-6 md:py-5 sm:py-4 xs:py-3 lg:px-10 md:px-9 sm:px-8 xs:px-7 lg:mt-7 md:mt-6 sm:mt-5 xs:mt-4 xs:ml-auto xs:mr-auto text-center inline-block rounded-[32px] cursor-pointer" type="button">Read More</button>
          </div>
        </div>
        <div id="fourthbox" className="bg-cream-porsee lg:h-[680px] md:h-[540px] sm:h-[400px] xs:h-[320px]">
          <p className="text-purple-porsee lg:text-[46px] md:text-[28px] sm:text-[22px] xs:text-[20px] text-center lg:ml-16 lg:mr-16 md:ml-28 md:mr-28 sm:ml-20 sm:mr-20 xs:ml-6 xs:mr-6 lg:pt-10 md:pt-6 sm:pt-6 xs:pt-4">Why are we better than other services?</p>
          <p className="text-purple-porsee lg:text-[24px] md:text-[18px] sm:text-[14px] xs:text-[12px] text-center lg:pt-5 md:pt-4 sm:pt-2 xs:pt-2">We offer features and freedom for you to choose</p>
          <div className="flex h-2/6 lg:flex-row md:flex-row sm:flex-row xs:flex-row justify-center align-center lg:mb-5 md:mb-3 sm:mb-3 xs:mb-1">
            <div className="bg-white lg:w-2/5 md:w-2/5 sm:w-2/5 xs:w-2/5 lg:h-full md:h-full sm:h-full xs:h-4/5 rounded-xl inline-block lg:m-5 md:m-3 sm:m-3 xs:m-3">
              <div className="w-2/5 h-full float-left flex flex-col justify-center items-center">
                <img className="lg:w-[96px] lg:h-[96px] md:w-[72px] md:h-[72px] sm:w-[48px] sm:h-[48px] xs:w-[36px] xs:h-[36px]" src="/commitment.svg"></img>
              </div>
              <div className="w-3/5 h-full float-right flex flex-col justify-center items-left">
                <p className="lg:text-xl md:text-base sm:text-xs xs:text-[8px] text-purple-porsee">No Commitment</p>
                <p className="lg:text-base md:text-xs sm:text-[8px] xs:text-[6px] lg:mt-3 lg:mr-6 md:mt-3 md:mr-6 sm:mt-3 sm:mr-6 xs:mt-1 xs:mr-3">Buy meal set without commiting to buy<br></br> for a month or even 2 days only.</p>
              </div>
            </div>

            <div className="bg-white lg:w-2/5 md:w-2/5 sm:w-2/5 xs:w-2/5 lg:h-full md:h-full sm:h-full xs:h-4/5 rounded-xl inline-block lg:m-5 md:m-3 sm:m-3 xs:m-3">
              <div className="w-2/5 h-full float-left flex flex-col justify-center items-center">
                <img className="lg:w-[96px] lg:h-[96px] md:w-[72px] md:h-[72px] sm:w-[48px] sm:h-[48px] xs:w-[36px] xs:h-[36px]" src="/vegetable.svg"></img>
              </div>
              <div className="w-3/5 h-full float-right flex flex-col justify-center items-left">
                <p className="lg:text-xl md:text-base sm:text-xs xs:text-[8px] text-purple-porsee">Fresh Ingredients Everyday</p>
                <p className="lg:text-base md:text-xs sm:text-[8px] xs:text-[6px] lg:mt-3 lg:mr-6 md:mt-3 md:mr-6 sm:mt-3 sm:mr-6 xs:mt-1 xs:mr-3">We choose not to stock our groceries<br></br> for a long period, but re-stock everyday.</p>
              </div>
            </div>
          </div>
          <div className="flex h-2/6 lg:flex-row md:flex-row sm:flex-row xs:flex-row justify-center align-center lg:mb-5 md:mb-3 sm:mb-3 xs:mb-1">
            <div className="bg-white lg:w-2/5 md:w-2/5 sm:w-2/5 xs:w-2/5 lg:h-full md:h-full sm:h-full xs:h-4/5 rounded-xl inline-block lg:m-5 md:m-3 sm:m-3 xs:m-3">
              <div className="w-2/5 h-full float-left flex flex-col justify-center items-center">
                <img className="lg:w-[96px] lg:h-[96px] md:w-[72px] md:h-[72px] sm:w-[48px] sm:h-[48px] xs:w-[36px] xs:h-[36px]" src="/portion.svg" width={96} height={96}></img>
              </div>
              <div className="w-3/5 h-full float-right flex flex-col justify-center items-left">
                <p className="lg:text-xl md:text-base sm:text-xs xs:text-[8px] text-purple-porsee">Pre-processing and Portioning</p>
                <p className="lg:text-base md:text-xs sm:text-[8px] xs:text-[6px] lg:mt-3 lg:mr-6 md:mt-3 md:mr-6 sm:mt-3 sm:mr-6 xs:mt-1 xs:mr-3">We will preprocess and portion your ingredients, so you don’t need to cut your vegetables anymore.</p>
              </div>
            </div>
            <div className="bg-white lg:w-2/5 md:w-2/5 sm:w-2/5 xs:w-2/5 lg:h-full md:h-full sm:h-full xs:h-4/5 rounded-xl inline-block lg:m-5 md:m-3 sm:m-3 xs:m-3">
              <div className="w-2/5 h-full float-left flex flex-col justify-center items-center">
                <img className="lg:w-[96px] lg:h-[96px] md:w-[72px] md:h-[72px] sm:w-[48px] sm:h-[48px] xs:w-[36px] xs:h-[36px]" src="/play.svg" width={96} height={96}></img>
              </div>
              <div className="w-3/5 h-full float-right flex flex-col justify-center items-left">
                <p className="lg:text-xl md:text-base sm:text-xs xs:text-[8px] text-purple-porsee">Video Step-by-Step Process</p>
                <p className="lg:text-base md:text-xs sm:text-[8px] xs:text-[6px] lg:mt-3 lg:mr-6 md:mt-3 md:mr-6 sm:mt-3 sm:mr-6 xs:mt-1 xs:mr-3">We provide a step-by-step video process, so not only a written guidance but also video, to make your cooking much more easier.</p>
              </div>
            </div>
          </div>
        </div>
        <div id="fifthbox" className="bg-purple-porsee lg:h-[540px] md:h-[420px] sm:h-[340px] xs:h-[180px]">
          <div className="">
            <p className="text-white lg:text-5xl md:text-4xl sm:text-3xl pt-[5%] pl-[7.5%]">Preparing and Portioning <br></br>to Ease Your Life</p>
          </div>
          <div className="flex h-2/6 lg:flex-col md:flex-col sm:flex-col xs:flex-row lg:justify-center md:justify-center sm:justify-center xs:justify-left align-center">
            <div className="inline-block pl-[7.5%] lg:mt-20 lg:mb-10 md:mt-10 md:mb-5 sm:mt-10 sm:mb-5 xs:mt-5 xs:mb-1">
              <div className="float-left flex flex-col justify-center items-center lg:mr-20 md:mr-10 sm:mr-10 xs:mr-5">
                <img className="lg:w-[76px] lg:h-[64px] md:w-[52px] md:h-[44px] sm:w-[44px] sm:h-[36px] xs:w-[36px] xs:h-[30px]" src="/wa.png"></img>
              </div>
              <div className="w-3/5 h-full flex flex-col justify-center items-left">
                <p className="lg:text-xl md:text-base sm:text-sm xs:text-[8px] text-white">Whatsapp</p>
              </div>
            </div>
            <div className="inline-block pl-[7.5%] lg:mt-0 lg:mb-0 md:mt-0 md:mb-0 sm:mt-0 sm:mb-0 xs:mt-5 xs:mb-3">
              <div className="float-left flex flex-col justify-center items-center lg:mr-20 md:mr-10 sm:mr-10 xs:mr-0">
                <img className="lg:w-[80px] lg:h-[80px] md:w-[56px] md:h-[56px] sm:w-[48px] sm:h-[48px] xs:w-[36px] xs:h-[36px]" src="/tiktok.png"></img>
              </div>
              <div className="w-3/5 h-full flex flex-col justify-center items-left lg:ml-0 md:ml-0 sm:ml-0 xs:ml-1">
                <p className="lg:text-xl md:text-base sm:text-sm xs:text-[8px] text-white">TikTok</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


