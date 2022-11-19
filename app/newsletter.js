"use client";

import React, { useRef, useState } from "react";

export default function Subscribe() {
  const inputEl = useRef(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const subscribe = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      setError(error);
      setSuccess("");
      return;
    }

    inputEl.current.value = "";
    setError("");
    setSuccess("Gelukt! 🎉 Je bent nu ingeschreven voor onze nieuwsbrief.");
  };

  return (
    <form onSubmit={subscribe}>
      <div className='md:flex'>
        <input
          id='email-input'
          name='email'
          placeholder='jouw@email.nl'
          ref={inputEl}
          required
          type='email'
          className='w-full h-12 px-6 outline-none border rounded-t-lg md:rounded-tr-none md:rounded-l-lg text-center md:text-left'
        />
        <button
          type='submit'
          className='bg-emerald-700 hover:bg-emerald-800 transition-colors text-white w-full md:w-auto whitespace-nowrap h-12 px-6 rounded-b-lg md:rounded-bl-none md:rounded-r-lg'
        >
          {"Schrijf in"}
        </button>
      </div>
      <p className={`mt-4 text-sm text-red-700 ${error ? "block" : "hidden"}`}>
        {error}
      </p>
      <p
        className={`mt-4 text-sm text-emerald-700 ${
          success ? "block" : "hidden"
        }`}
      >
        {success}
      </p>
    </form>
  );
}
