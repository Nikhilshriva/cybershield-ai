"use client";

import { supabase }
from "../lib/supabase";

export default function TestDB() {

  const addUser = async () => {

    const { data, error } =
      await supabase
        .from("users")
        .insert([
          {
            name: "Cyber User",
            email: "user@test.com",
          },
        ]);

    console.log(data);
    console.log(error);

    if (error) {

      alert("Database Error ❌");

    } else {

      alert("User Added Successfully 🚀");
    }
  };

  return (

    <button
      onClick={addUser}
      className="bg-green-400 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
    >

      Test Database

    </button>
  );
}