import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-inherit text-white flex gap-5 text-sm tracking-widest">
      <Link href="/">HOME</Link>
      <Link href="/headphones">HEADPHONES</Link>
      <Link href="/speakers">SPEAKERS</Link>
      <Link href="/earphones">EARPHONES</Link>
    </nav>
  );
};

export default Navbar;
