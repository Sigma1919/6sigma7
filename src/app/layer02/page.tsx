import Link from "next/link";
export default function Layer2Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#13b2fb] to-[#fefefe] text-white">
         <Link href="/">
            <div className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded shadow-xl/30">
            Yardy
            </div>
          </Link>
    </main>
    
  );
}

