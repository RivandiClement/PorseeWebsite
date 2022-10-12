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
                <div className="bg-cream-porsee w-full lg:h-[680px] md:h-[510px] sm:h-[380px] xs:h-[285px] text-purple-porsee lg:pl-20 md:pl-10 sm:pl-10 xs:pl-10">
                    <div className="w-full py-[2.5%]">
                        <img src="/back.svg" className="float-left mr-2"></img>
                        <p className="lg:text-3xl md:text-3xl sm:text-2xl">Our menu</p>
                    </div>
                <Link href="/"><div class="w-1/3 rounded-xl shadow-lg cursor-pointer">
                    <img class="w-full rounded-t-xl" src="/udang.png" alt="Sunset in the mountains"></img>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Padang Sauce Chicken Fillet</div>
                        <p class="text-gray-700 text-base">Crispy chicken fillet with padang sauce top with corn</p>
                    </div>
                        <div class="px-6 pt-4 pb-2">
                            <img class="float-left mr-2" src="/time.png"></img>
                            <p>10 min</p>
                        </div>
                    </div></Link>
                </div>
            </div>
        </> 
    );
}