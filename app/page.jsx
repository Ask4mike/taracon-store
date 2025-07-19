"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import MainBanner from "@/app/components/Mainbanner";
import Categories from "./components/Categories";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="mt-10 container">
          <MainBanner/>
          <Categories/>
        </div>
      </main>
      <Footer />
    </>
  );
}
