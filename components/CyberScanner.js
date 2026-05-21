"use client";

import { useState } from "react";

export default function CyberScanner() {

  const [url, setUrl] = useState("");

  const [result, setResult] =
    useState("");

  const scanWebsite = () => {

    if (!url) {

      setResult(
        "Please enter a website URL."
      );

      return;
    }

    const threats = [
      "No threats detected ✅",
      "Suspicious activity found ⚠️",
      "Malware detected 🚨",
      "SSL certificate secure 🔒",
      "Potential phishing risk ⚠️",
    ];

    const randomResult =
      threats[
        Math.floor(
          Math.random() * threats.length
        )
      ];

    setTimeout(() => {

      setResult(randomResult);

    }, 1500);
  };

  return (

    <section className="py-32 px-10 bg-black text-white">

      <h2 className="text-5xl font-black text-center mb-16 text-green-400">

        Cybersecurity Scanner

      </h2>

      <div className="max-w-3xl mx-auto bg-zinc-900 border border-green-400 rounded-3xl p-10">

        <input
          type="text"
          placeholder="Enter website URL..."
          value={url}
          onChange={(e) =>
            setUrl(e.target.value)
          }
          className="w-full bg-black border border-zinc-700 rounded-2xl p-5 outline-none text-lg"
        />

        <button
          onClick={scanWebsite}
          className="mt-6 w-full bg-green-400 text-black py-4 rounded-2xl font-black text-lg hover:scale-105 transition"
        >

          Scan Website

        </button>

        <div className="mt-10 bg-black border border-zinc-800 rounded-2xl p-6 min-h-[120px]">

          <p className="text-green-400 text-xl font-bold mb-4">

            Scan Result

          </p>

          <p className="text-gray-300 text-lg">

            {result}

          </p>

        </div>

      </div>

    </section>
  );
}