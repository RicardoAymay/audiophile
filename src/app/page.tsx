import Image from "next/image";
import cart from "../../assets/shared/desktop/icon-cart.svg";
import Navbar from "@/components/Navbar/Navbar";
import { Button1 } from "@/components/Buttons/Buttons";
import headphones from "../../assets/home/desktop/image-hero.jpg";
export default function Home() {
  return (
    <>
      <header className="bg-black flex w-screen min-h-80 flex-col">

        <div className="max-w-[1440px] h-auto flex flex-col mx-auto mt-0 w-10/12">
          <div className="max-w-[1440px] h-20 flex mx-auto mt-0 items-center justify-between w-full">
            <h1 className="text-white font-black text-2xl text-pretty">
              audiophile
            </h1>
            <Navbar />
            <Image src={cart} alt="Access your cart" />
          </div>
          <hr className="border-solid border-primary-audio-dark"></hr>
          <div className="w-full h-auto min-h-40 flex">
            <div className="w-4/12 h-auto">
              <p className="text-white opacity-35 tracking-[.45em]">
                NEW PRODUCT
              </p>
              <h2 className="text-white text-5xl uppercase">
                XX99 Mark II Headphones
              </h2>
              <p className="text-white opacity-35">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
              <Button1 />
            </div>

            <div className="flex flex-1">
              <Image
                src={headphones}
                alt="XX99 Mark II Headphones"
              />
            </div>
          </div>
        </div>

      </header>
      <main className="max-w-[1440px] mx-auto mt-0"></main>
    </>
  );
}
