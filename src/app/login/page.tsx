"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert("Invalid Email or Password");
      return;
    }

    localStorage.setItem(
      "crmUser",
      JSON.stringify(data.user)
    );

    router.push("/dashboard");
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* LEFT SIDE */}
      <div className="hidden lg:flex flex-col items-center justify-center bg-[#0B2545] text-white">

        <Image
          src="/logo.png"
          alt="PGS Tile Mart"
          width={500}
          height={500}
          priority
          className="w-[500px] max-w-[80%] object-contain"
        />

        <h1 className="mt-8 text-3xl font-bold">
          PGS CRM
        </h1>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center bg-[#F3F1F7] p-8">

        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

          <h2 className="mb-8 text-center text-3xl font-bold">
            Login to PGS CRM
          </h2>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 h-12 w-full rounded-lg border px-4"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12 w-full rounded-lg border px-4 pr-12"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-4 top-3"
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>

          <div className="mt-3 flex justify-end">
            <button
              type="button"
              className="text-sm text-white"
            >
              Forgot Password?
            </button>
          </div>

          <button
            onClick={handleLogin}
            className="mt-5 h-12 w-full rounded-lg bg-[#0B2545] font-bold text-white"
          >
            Login
          </button>

          <p className="mt-5 text-center text-xs text-gray-500">
            By clicking continue, you agree to our
            Terms of Service and Privacy Policy
          </p>

          
         
        </div>

      </div>
    </div>
  );
}