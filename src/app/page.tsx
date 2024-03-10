import Header from "@/components/Header/Header";
import ProductSection from "@/components/ProductSection/ProductSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-[1440px] w-11/12 mx-auto mt-0">
        <ProductSection />
      </main>
    </>
  );
}
