import Head from 'next/head'
import Header from "/header";
import Link from 'next/link'

export default function udangPage() {
    return (
        <>
            <Head>
                <title>Porsee | Padang Sauce Chicken Fillet</title>
                <link rel="icon" href="porseeIcon.svg" alt="icon"/>
            </Head>
            <Header></Header>
            <div className="pt-[92.5px]">
                <div className="bg-cream-porsee w-full h-screen text-purple-porsee lg:pl-20 md:pl-10 sm:pl-10 xs:pl-10">
                    <div className="w-full py-[2.5%]">
                        <Link href="/menu"><img src="/back.svg" className="float-left mr-2 cursor-pointer"></img></Link>
                        <p className="lg:text-3xl md:text-3xl sm:text-2xl">Our menu</p>
                    </div>
                    <div className="">
                        <img src="/udang-fsize.png" className="mr-[5%] float-left lg:w-[40%] md:w-[40%] sm:w-[40%] xs:w-[40%]"></img>
                    </div>
                    <div className="lg:ml-[5%]">
                        <p className="lg:text-5xl md:text-xl sm:text-base xs:text-xs">Chicken Fillet With <br></br> Padang Sauce</p>
                        <p className="text-[#2D2D2D] lg:text-xl md:text-base sm:text-xs xs:text-[8px] mt-[1.5%]">Fried shrimp top with padang sauce</p>
                    </div>
                </div>
            </div>
        </> 
    );
}