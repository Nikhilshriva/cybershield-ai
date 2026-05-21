"use client";

import { useState } from "react";

export default function AIChatbot() {

  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {

    setLoading(true);
    setReply("");

    const response = await fetch("/api/chat", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        message,
      }),
    });

    const reader = response.body.getReader();

    const decoder = new TextDecoder();

    while (true) {

      const { done, value } = await reader.read();

      if (done) break;

      const chunk = decoder.decode(value);

      setReply((prev) => prev + chunk);
    }

    setLoading(false);
  };

  return (

    <div className="fixed bottom-5 right-5 w-[370px] bg-zinc-900 border border-green-400 rounded-2xl p-5 z-50 shadow-2xl">

      <h2 className="text-green-400 text-xl font-bold mb-4">

        CyberShield AI

      </h2>

      <textarea
        className="w-full h-24 bg-black border border-zinc-700 rounded-xl p-3 outline-none resize-none"
        placeholder="Ask anything..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        onClick={sendMessage}
        disabled={loading}
        className="mt-4 bg-green-400 text-black px-6 py-3 rounded-xl font-bold w-full hover:scale-105 transition"
      >

        {loading ? "Thinking..." : "Send"}

      </button>

      <div className="mt-4 text-sm text-gray-300 whitespace-pre-wrap leading-relaxed max-h-[300px] overflow-y-auto">

        {reply}

      </div>

    </div>
  );
}