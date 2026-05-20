"use client";

import { useState } from "react";

export default function AIChatbot() {

  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const sendMessage = async () => {

    const res = await fetch("/api/chat", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        message,
      }),
    });

    const data = await res.json();

    setReply(data.reply);
  };

  return (

    <div className="fixed bottom-5 right-5 w-[350px] bg-zinc-900 border border-green-400 rounded-2xl p-5 z-50">

      <h2 className="text-green-400 text-xl font-bold mb-4">
        AI Assistant
      </h2>

      <textarea
        className="w-full h-24 bg-black border border-zinc-700 rounded-xl p-3 outline-none"
        placeholder="Ask anything..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        onClick={sendMessage}
        className="mt-4 bg-green-400 text-black px-6 py-3 rounded-xl font-bold w-full"
      >
        Send
      </button>

      <div className="mt-4 text-sm text-gray-300 whitespace-pre-wrap">

        {reply}

      </div>

    </div>
  );
}