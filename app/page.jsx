"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <h1 className="underline font-light">
          This is the main content of the application
        </h1>
      </main>
      <Footer />
    </>
  );
}
