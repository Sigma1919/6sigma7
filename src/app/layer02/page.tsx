import Link from "next/link";
export default function Layer2Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#13b2fb] to-[#fefefe] text-white flex gap-7
    ">
         
         <div className="card bg-base-100 w-96 shadow-xl/30">
          <figure>
            <img
              src="https://sm.ign.com/ign_nordic/cover/c/clash-roya/clash-royale_nten.jpg"
              alt="Shoes" />
          </figure>
         <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
          <div className="card-actions justify-end">
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded shadow-xl/20">Buy Now</button>
          </div>
        </div>
        </div>
         
         

         <Link href="/">
            <div className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded shadow-xl/30">
            Yardy
            </div>
          </Link>

          
    </main>
    
  );
}

