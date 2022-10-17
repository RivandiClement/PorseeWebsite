import { useRouter } from "next/router";
import Head from 'next/head'
import Header from "/header";

export default function MenuDetail() {
    const router = useRouter();
    const {id} = router.query;
    return (
        <>
        <Head>
            <title>Our Menu | {id}</title>
            <link rel="icon" href="porseeIcon.svg" alt="icon"/>
        </Head>
        <Header></Header>
        </>
    );
}   