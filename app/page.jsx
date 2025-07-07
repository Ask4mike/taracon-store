"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import MainBanner from "@/app/components/Mainbanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="mt-10 container">
          <MainBanner/>
        </div>
      </main>
      <Footer />
    </>
  );
}
