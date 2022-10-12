import Image from 'next/image'
import {Link as ScLink} from 'react-scroll'
import Link from 'next/link'
import { useState } from 'react';

export default function Header() {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <header className="bg-cream-porsee fixed w-full shadow-xl">
            <div className="float-left my-5 lg:ml-20 md:ml-10 sm:ml-10 xs:ml-10">
            <Link href="/"><a><Image src="/PorseeWord.svg" width={183} height={46}></Image></a></Link>
            </div>
            <button className='inline-flex p-7 lg:hidden text-purple-porsee ml-auto outline-none hover:text-violet-300 hover:transition duration-200 ease-linear float-right' onClick={handleClick}>
                <svg
                    className='w-8 h-8'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                    />
                </svg>
            </button>
            <div className={`${active ? '' : 'hidden'} w-full lg:inline-flex lg:flex-grow lg:w-auto float-right text-base text-purple-porsee`}>
                <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto box-border mr-10'>
                    <Link href="/menu"><a className="m-5 p-3 cursor-pointer">Our Menu</a></Link>
                    <a className="m-5 p-3 cursor-pointer" href="/#thirdbox">About</a>
                    <ScLink className="m-5 p-3 cursor-pointer" to="fourthbox" smooth={true} duration={400} offset={-90}>Service</ScLink>
                    <ScLink className="m-5 p-3 cursor-pointer" to="fifthbox" smooth={true} duration={400}>Contact Us</ScLink>
                </div>
            </div>
        </header>
    );
}