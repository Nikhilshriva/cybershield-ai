"use client";

import { supabase } from "../lib/supabase";

export default function TestDB() {

  const addUser = async () => {

    const { error } =
      await supabase
        .from("users")
        .insert([
          {
            name: "Cyber User",
            email: "user@test.com",
          },
        ]);

    if (error) {

      console.log(error);

      alert("Database Error ❌");

    } else {

      alert("User Added 🚀");
    }
  };

  return (

    <button
      onClick={addUser}
      className="bg-green-400 text-black px-8 py-4 rounded-2xl font-bold"
    >

      Test Database

    </button>
  );
}