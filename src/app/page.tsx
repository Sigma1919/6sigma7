import Link from "next/link";

const mockUrls = ["https://fw0wnoftze.ufs.sh/f/kvrkefQ2ZQ5RguKtwBL1U1ZC4wrRpXlfmMgIk3cjK8LuqAYT"]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));


export default function HomePage() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#13b2fb] to-[#fefefe] text-white">
			<div className="flex flex-wrap gap-4">{
      mockImages.map((image) => (
        <div key ={image.id} className="w-48">
          <img src={image.url} alt="image" />
        </div>
      ))
    }
    </div>
    <Link href="layer02">
        <div className="btn bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded shadow-xl/30">
          Yardy
        </div>


        
    </Link>
		</main>
	); 
}

