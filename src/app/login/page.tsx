"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation"; // Use next/navigation for App Router
import Link from "next/link";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null); // Clear previous errors

    try {
      const result = await signIn("credentials", {
        redirect: false, // Handle redirect manually after checking result
        username,
        password,
      });

      if (result?.error) {
        setError("Invalid username or password"); // Show generic error
        console.error("Sign-in error:", result.error); // Log detailed error
      } else if (result?.ok) {
        // Sign-in successful
        router.push("/"); // Redirect to homepage or dashboard
      } else {
        // Handle other potential states if needed
        setError("An unexpected error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Sign-in exception:", error);
      setError("An error occurred during sign-in. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="p-8 bg-white rounded shadow-md w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        {error && (
          <p className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm">
            {error}
          </p>
        )}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
            placeholder="Your username"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
            placeholder="Your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Login
        </button>
        {/* Optional: Add link to sign-up page later */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-blue-600 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
