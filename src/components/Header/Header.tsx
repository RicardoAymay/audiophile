import Image from "next/image";
import cart from "../../../assets/shared/desktop/icon-cart.svg";
import Navbar from "@/components/Navbar/Navbar";
import { Button1 } from "@/components/Buttons/Buttons";
import mark2headphones from "../../../assets/home/desktop/image-hero.jpg";
import logo from "../../../assets/shared/desktop/logo.svg";

const Header = () => {
  return (
    <header className="bg-neutral-900 flex w-screen flex-col min-h-96 relative">

        <div className="max-w-[1440px] h-full flex flex-col mx-auto mt-0 w-10/12 relative">
          <div className="max-w-[1440px] h-20 flex mx-auto mt-0 items-center justify-between w-full absolute z-10 border-b-[1px] border-b-[#979797]">
            <h1 className="text-white font-black text-2xl text-pretty">
              <Image src={logo} alt="audiophile" />
            </h1>
            <Navbar />
            <Image src={cart} alt="Access your cart" />
          </div>
          
          <div className="w-full h-auto min-h-40 flex">
            <div className="w-3/12 h-auto flex flex-col gap-y-5 absolute z-10 mt-40 ">
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
                src={mark2headphones}
                alt="XX99 Mark II Headphones"
              />
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header