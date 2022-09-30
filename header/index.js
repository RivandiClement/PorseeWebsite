import styles from '../styles/Home.module.css'
import Image from 'next/image'
import {Link} from 'react-scroll'

export default function Header() {
    return (
        <header className={styles.topnav}>
            <Link href="/"><div className={styles.logo}>
                <Image src="/PorseeWord.svg" id={styles.logoImg} width={183} height={46}></Image>
            </div></Link>
            <Link className={styles.menu} to={styles.fifthbox} smooth={true} offset={400} duration={400}>Contact Us</Link>
            <Link className={styles.menu} to={styles.fourthbox} smooth={true} duration={400}>Service</Link>
            <Link className={styles.menu} to={styles.thirdbox} smooth={true} duration={400}>About</Link>
            <Link className={styles.menu} to="/">Home</Link>
        </header>
    );
}