"use client";
import React, { FormEvent, FormEventHandler, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [err, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // access input values
    const name = e.target[0].value;
    const email = e.target[0].value;
    const password = e.target[0].value;

    try {
       // fetch request to post data
    const res = fetch("/api/auth/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        name,email,password
      })

    });
      // if user has been created
      (await res).status === 201 && router.push("/dashboard/login?success =Account has been created");

    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className={styles.container}>
      <form className={styles.registerForm} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          required
          className={styles.input}
        />
        <input
          type="email"
          placeholder="email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="password"
          required
          className={styles.input}
        />
        <button className={styles.btnRegister}>Register</button>
      </form>
      {/* display error message */}
      {err && "Something went wrong!"}
      <Link href={"/dashboard/login"} className={styles.account}>
        Login with an existing account
      </Link>
    </div>
  );
};

export default Register;
