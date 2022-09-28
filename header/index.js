import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Header() {
    return (
        <header className={styles.topnav}>
                <div className={styles.logo}>
                    <Image src="/PorseeWord.svg" width={183} height={46}></Image>
                </div>
                <Link href="#kitchen"><a className={styles.a}>Contact Us</a></Link>
                <Link href="/Service"><a className={styles.a}>Service</a></Link>
                <Link href="/"><a className={styles.a}>About</a></Link>
                <Link href="/"><a className={styles.a}>Home</a></Link>
        </header>
    );
}