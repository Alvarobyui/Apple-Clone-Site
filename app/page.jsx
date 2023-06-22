import Image from "next/image";

export default function Home() {
  return (
    <div className="contenedor-home flex flex-col gap-1 items-center justify-center mt-8">
      <h1 className="text-5xl font-bold">MacBook Air 15"</h1>
      <h2 className="text-2xl">Impressively big. Impossibly thin</h2>
      <div className="flex gap-4">
        <span className="text-sky-400 text-2xl">Learn more</span>
        <span className="text-sky-400 text-2xl">Buy</span>
      </div>
      <Image src={"/macBook.png"} alt="mac icon " width={1000} height={500} />
    </div>
  );
}
