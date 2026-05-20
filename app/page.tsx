"use client";

import {
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

import Hero3D from "../components/Hero3D";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* Clerk Auth Buttons */}
      <div className="fixed top-5 right-5 z-50 flex gap-4">

        <SignInButton />

        <SignUpButton />

        <UserButton />

      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10">

        {/* LEFT SIDE */}
        <div className="z-10 max-w-2xl">

          <h1 className="text-6xl md:text-8xl font-black leading-tight">

            Cyber
            <span className="text-green-400">
              Shield
            </span>

          </h1>

          <p className="mt-6 text-xl text-gray-400">

            Premium AI-powered cybersecurity platform
            with futuristic UI, 3D visuals, and enterprise-grade protection.

          </p>

          <div className="flex gap-6 mt-10">

            <button className="bg-green-400 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">

              Get Started

            </button>

            <button className="border border-green-400 px-8 py-4 rounded-2xl hover:bg-green-400 hover:text-black transition">

              Learn More

            </button>

          </div>

        </div>

        {/* RIGHT SIDE 3D */}
        <div className="w-full md:w-[500px] h-[500px]">

          <Hero3D />

        </div>

      </section>

    </main>
  );
}