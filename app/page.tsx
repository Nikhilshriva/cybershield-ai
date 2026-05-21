"use client";

import {
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

import Hero3D from "../components/Hero3D";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import Stats from "../components/Stats";
import Cursor from "../components/Cursor";
import Navbar from "../components/Navbar";
import Particles from "../components/Particles";
import ThemeToggle from "../components/ThemeToggle";
import StorySection from "../components/StorySection";
import AdvancedFeatures from "../components/AdvancedFeatures";
import Glow from "../components/Glow";
import SecuritySection from "../components/SecuritySection";
import TrustBadges from "../components/TrustBadges";
import FloatingCTA from "../components/FloatingCTA";
import GridBackground from "../components/GridBackground";
import LiveTicker from "../components/LiveTicker";
import DashboardPreview from "../components/DashboardPreview";
import MotionSection from "../components/MotionSection";
import Dashboard from "../components/Dashboard";
import CyberScanner from "../components/CyberScanner";

import TestDB from "../components/TestDB";
import Loader from "../components/Loader";
import MouseTrail from "../components/MouseTrail";
import StickySection from "../components/StickySection";
import GlassCard from "../components/GlassCard";
import AIChatbot from "../components/AIChatbot";

export default function Home() {

  return (

    <main className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* EFFECTS */}
      <Loader />
      <Cursor />
      <MouseTrail />
      <Particles />
      <Glow />
      <GridBackground />
      <ThemeToggle />
      <FloatingCTA />

      {/* NAVBAR */}
      <Navbar />

      {/* AUTH */}
      <div className="fixed top-5 right-5 z-50 flex gap-4">

        <SignInButton />

        <SignUpButton />

        <UserButton />

      </div>

      {/* HERO */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 relative z-10">

        {/* LEFT */}
        <div className="max-w-2xl">

          <p className="uppercase tracking-[0.3em] text-green-400 mb-4">

            AI CYBERSECURITY PLATFORM

          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-tight">

            Cyber
            <span className="text-green-400">
              Shield
            </span>

          </h1>

          <p className="mt-8 text-xl text-gray-400 leading-relaxed">

            Futuristic AI-powered cybersecurity
            platform with real-time monitoring,
            AI threat detection, smart automation,
            and enterprise-level protection systems.

          </p>

          {/* BUTTONS */}
          <div className="flex gap-6 mt-10 flex-wrap">

            

            <TestDB />

          </div>

          {/* STATS */}
          <div className="flex gap-10 mt-14 flex-wrap">

            <div>

              <h2 className="text-4xl font-black text-green-400">

                99.9%

              </h2>

              <p className="text-gray-500 mt-2">

                Threat Detection

              </p>

            </div>

            <div>

              <h2 className="text-4xl font-black text-green-400">

                24/7

              </h2>

              <p className="text-gray-500 mt-2">

                Live Monitoring

              </p>

            </div>

            <div>

              <h2 className="text-4xl font-black text-green-400">

                AI

              </h2>

              <p className="text-gray-500 mt-2">

                Smart Protection

              </p>

            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="w-full md:w-[550px] h-[550px]">

          <Hero3D />

        </div>

      </section>

      {/* LIVE TICKER */}
      <LiveTicker />

      {/* FEATURES */}
      <Features />

      {/* ADVANCED FEATURES */}
      <AdvancedFeatures />

      {/* GLASS CARD */}
      

      {/* STORY */}
      <StorySection />

      {/* STICKY */}
      <StickySection />

      {/* SECURITY */}
      <SecuritySection />

      {/* TRUST BADGES */}
      <TrustBadges />

      {/* MOTION */}
      <MotionSection />

      {/* STATS */}
      <Stats />

      {/* DASHBOARD PREVIEW */}
      <DashboardPreview />

      {/* FULL DASHBOARD */}
      <Dashboard />

      {/* CYBER SCANNER */}
      <CyberScanner />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* PRICING */}
      <Pricing />

      {/* AI CHATBOT */}
      <AIChatbot />

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-10 text-center text-gray-500 relative z-10">

        © 2026 CyberShield. All rights reserved.

      </footer>

    </main>
  );
}