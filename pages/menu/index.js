import Head from 'next/head'
import Header from "/header";
import Link from 'next/link'

export default function MenuPage() {
    return (
        <>
            <Head>
                <title>Porsee | Our Menu</title>
                <link rel="icon" href="porseeIcon.svg" alt="icon"/>
            </Head>
            <Header></Header>
            <div className="pt-[92.5px]">
                <div className="bg-cream-porsee w-full h-screen text-purple-porsee lg:pl-20 md:pl-10 sm:pl-10 xs:pl-10">
                    <div className="w-full">
                        <p className="lg:text-5xl md:text-3xl sm:text-2xl py-[2.5%]">Our menu</p>
                    </div>
                <Link href="/menu/udang"><div class="w-1/3 rounded-xl shadow-lg cursor-pointer">
                    <img class="w-full rounded-t-xl" src="/udang.png" alt="Sunset in the mountains"></img>
                    <div class="px-6 py-4">
                        <div class="font-bold lg:text-xl md:text-base sm:text-xs xs:text-[8px] mb-2">Chicken Fillet With Padang Sauce</div>
                        <p class="text-gray-700 lg:text-base md:text-xs sm:text-[8px]">Crispy chicken fillet with padang sauce</p>
                    </div>
                        <div class="px-6 pt-4 pb-2">
                            <img class="float-left mr-2 mt-[0.5%]" src="/time.png"></img>
                            <p className="">10 min</p>
                        </div>
                    </div></Link>
                </div>
            </div>
        </> 
    );
}