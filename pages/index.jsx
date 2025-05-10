// pages/index.jsx
import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <div className="font-sans text-white bg-gray-900 scroll-smooth relative">
      <Head>
        <title>Next Level Web</title>
        <meta name="description" content="Criação de sites, UX, UI, SEO e Automações Web" />
      </Head>
      <Header />
      <main className="pt-32 sm:pt-24">
        <Hero />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
