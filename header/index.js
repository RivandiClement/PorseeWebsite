import styles from '../styles/Home.module.css'
import Image from 'next/image'
import {Link} from 'react-scroll'
import { useState } from 'react';

export default function Header() {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <header className="overflow-auto bg-cream-porsee">
            <Link href="/"><div className="float-left my-5 ml-7">
                <Image src="/PorseeWord.svg" id={styles.logoImg} width={183} height={46}></Image>
            </div></Link>
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
            <div className={`${active ? '' : 'hidden'} w-full lg:inline-flex lg:flex-grow lg:w-auto float-right text-xl text-purple-porsee`}>
                <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto box-border mr-5'>
                    <Link className="m-5 p-3 cursor-pointer" to="/">Home</Link>
                    <Link className="m-5 p-3 cursor-pointer" to="thirdbox" smooth={true} duration={400}>About</Link>
                    <Link className="m-5 p-3 cursor-pointer" to={styles.fourthbox} smooth={true} duration={400} offset={50}>Service</Link>
                    <Link className="m-5 p-3 cursor-pointer" to={styles.fifthbox} smooth={true} offset={400} duration={400}>Contact Us</Link>
                </div>
            </div>
        </header>
    );
}