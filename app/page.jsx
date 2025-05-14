"use client";
import Header from "@/app/Homepage/Header";
import Footer from "@/app/Homepage/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <h1 className="underline">
          This is the main content of the application
        </h1>
      </main>
      <Footer />
    </>
  );
}
