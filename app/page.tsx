"use client";

import {
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

import Hero3D from "../components/Hero3D";
import AIChatbot from "../components/AIChatbot";

export default function Home() {

  return (

    <main className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* Clerk Auth Buttons */}
      <div className="fixed top-5 right-5 z-50 flex gap-4">

        <SignInButton />

        <SignUpButton />

        <UserButton />

      </div>

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,255,150,0.15),transparent_60%)] pointer-events-none" />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 relative z-10">

        {/* LEFT SIDE */}
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

            Protect your business with futuristic AI-powered
            cybersecurity solutions, real-time monitoring,
            advanced threat detection, and intelligent automation.

          </p>

          <div className="flex gap-6 mt-10 flex-wrap">

            <button className="bg-green-400 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300">

              Get Started

            </button>

            <button className="border border-green-400 px-8 py-4 rounded-2xl hover:bg-green-400 hover:text-black transition-all duration-300">

              Learn More

            </button>

          </div>

          {/* Stats */}
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

        {/* RIGHT SIDE 3D */}
        <div className="w-full md:w-[550px] h-[550px]">

          <Hero3D />

        </div>

      </section>

      {/* Features Section */}
      <section className="py-32 px-10 relative z-10">

        <h2 className="text-5xl font-black text-center mb-20">

          Advanced Security Features

        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-green-400 transition">

            <h3 className="text-2xl font-bold text-green-400 mb-4">

              AI Threat Detection

            </h3>

            <p className="text-gray-400 leading-relaxed">

              Real-time AI engine that monitors and detects
              suspicious activity instantly.

            </p>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-green-400 transition">

            <h3 className="text-2xl font-bold text-green-400 mb-4">

              Cloud Protection

            </h3>

            <p className="text-gray-400 leading-relaxed">

              Enterprise-grade cloud security infrastructure
              with end-to-end encryption.

            </p>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-green-400 transition">

            <h3 className="text-2xl font-bold text-green-400 mb-4">

              Smart Automation

            </h3>

            <p className="text-gray-400 leading-relaxed">

              Automated incident response powered by
              intelligent AI systems.

            </p>

          </div>

        </div>

      </section>

      {/* Pricing Section */}
      <section className="py-32 px-10 relative z-10">

        <h2 className="text-5xl font-black text-center mb-20">

          Pricing Plans

        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-900 border border-zinc-800 p-10 rounded-3xl">

            <h3 className="text-3xl font-black mb-6">

              Starter

            </h3>

            <p className="text-5xl font-black text-green-400">

              $19

            </p>

            <p className="text-gray-500 mt-2">

              per month

            </p>

          </div>

          <div className="bg-green-400 text-black p-10 rounded-3xl scale-105">

            <h3 className="text-3xl font-black mb-6">

              Pro

            </h3>

            <p className="text-5xl font-black">

              $49

            </p>

            <p className="mt-2">

              per month

            </p>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-10 rounded-3xl">

            <h3 className="text-3xl font-black mb-6">

              Enterprise

            </h3>

            <p className="text-5xl font-black text-green-400">

              $99

            </p>

            <p className="text-gray-500 mt-2">

              per month

            </p>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-10 text-center text-gray-500 relative z-10">

        © 2026 CyberShield. All rights reserved.

      </footer>

      {/* AI Chatbot */}
      <AIChatbot />

    </main>
  );
}