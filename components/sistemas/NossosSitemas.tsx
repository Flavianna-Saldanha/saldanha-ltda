import Image from "next/image";

export default function NossosSitemas() {
	return (
		<div className="container m-auto">
			<div className="">
				<h1 
					className="
						w-48 mt-10 font-bold tracking-tight uppercase bg-black text-white text-end pr-3
						lg:w-72 lg:text-xl
						dark:bg-[#D9D9D9] dark:text-black
						">
					Nossos Sistemas
				</h1>
				<Image 
					src={"/assets/LINHAS.png"}
					alt="LINHAS"
					width={65}
					height={300}
					className="
						relative -top-8 -z-10 left-36
						lg:left-59 lg:w-20 lg:-top-9
						"
				/>
			</div>
			
		</div>
	)
}
