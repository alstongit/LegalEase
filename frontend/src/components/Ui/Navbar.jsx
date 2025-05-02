import React, { useState, useEffect } from "react";
import { FileSearch, Sun, Moon } from "lucide-react";
import { SignInButton, SignOutButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const { user, isSignedIn } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="bg-white text-black p-2 rounded-md flex items-center justify-center">
            <FileSearch size={18} />
          </div>
          <span className="text-xl font-semibold tracking-tight text-white">
            LegalEase
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-white/80 hover:text-white transition"
          >
            Features
          </a>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-transparent hover:bg-white/10 transition"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {isSignedIn ? (
            <>
              <span className="text-white/80">{user.fullName || user.username}</span>
              <SignOutButton>
                <button className="bg-white text-black px-4 py-2 rounded-md hover:scale-105 transition">
                  Logout
                </button>
              </SignOutButton>
            </>
          ) : (
            <>
              <SignInButton mode="modal">
                <button className="border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition">
                  Login
                </button>
              </SignInButton>
              <SignInButton mode="modal">
                <button className="bg-white text-black px-4 py-2 rounded-md hover:scale-105 transition">
                  Get Started →
                </button>
              </SignInButton>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
