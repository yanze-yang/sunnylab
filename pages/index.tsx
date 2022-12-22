import Head from "next/head";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Index-page/HeroSection";
import { IntroSection } from "../components/Index-page/IntroSection";
import Draw from "../components/Draw";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main>
        <Navbar />
        <Draw />
        <HeroSection />
        <IntroSection />
      </main>
    </>
  );
}
