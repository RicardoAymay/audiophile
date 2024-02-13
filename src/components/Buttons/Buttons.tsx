import Image from "next/image";
import arrow from "../../../assets/starter-code/assets/shared/desktop/icon-arrow-right.svg";
export const Button1 = () => {
  return (
    <button className="border border-primary-brown-mid font-semibold bg-primary-brown-mid text-white h-10 tracking-wider px-5 hover:bg-primary-beige hover:border-primary-beige transition ">
      SEE PRODUCT
    </button>
  );
};

export const Button2 = () => {
  return (
    <button className="border border-black bg-white hover:bg-black hover:text-white transition px-5 font-bold h-10 tracking-wider">
      SEE PRODUCT
    </button>
  );
};

export const Button3 = () => {
  return (
    <button className="bg-white w-20 flex font-bold items-center justify-center overflow-hidden">
      <p className="text-primary-audio-dark opacity-50 hover:text-primary-brown-mid hover:opacity-100 transition">SHOP</p>
      <Image src={arrow} alt="arrow" className="relative right-[-16.5px]"/>
    </button>
  );
};
