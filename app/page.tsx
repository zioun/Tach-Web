import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <h1 className="bg-[#6A9E68] text-center py-3 text-white font-medium">
        🎉 Limited Time Offer: Get a $200 bonus deposit when you activate your
        TACH account!* Become a Premium Carrier today.
      </h1>
      <div className="h-[800px] bg-[url('https://tachusa.com/_next/image?url=%2Fassets%2Fimages%2Fwebp%2Fhero-bg-new.webp&w=3840&q=85')] bg-cover bg-center">
        <nav className="container mx-auto flex justify-between pt-10">
          <img
            className="w-[150px] h-[40px]"
            src="https://tachusa.com/_next/image?url=%2Fassets%2Fimages%2Fwebp%2Fnav-logo.webp&w=160&q=75"
            alt=""
          />
          <div className="text-white flex gap-10 mt-2">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">FAQs</a>
            <a href="#">Articles</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="flex gap-5 border h-10 justify-center items-center">
            <button className=" border text-white rounded-[5px] px-5 py-3">Login</button>
            <button className=" border-[#6A9E68] rounded-[5px] px-5 py-3 text-white bg-[#6A9E68]">Join TACH</button>
          </div>
        </nav>
        <div className="container mx-auto pt-[200px]">
          <h1 className="text-7xl text-white font-bold">Less downtime.</h1>
          <h1 className="text-7xl text-[#BAFFB7] font-bold mt-5">More revenue.</h1>
          <p className="mt-5 text-white text-2xl max-w-[500px]">The only financial services platform designed specifically for independent carriers.</p>
          <div className="mt-10">
            <input className="border border-white text-white pl-[50px] py-5 rounded pr-[400px]" type="text" placeholder="What's your MC number?" />
            <button className=" px-10 py-3 rounded-2xl -ml-60 bg-white">See If You Qualify</button>
          </div>
        </div>
      </div>
    </div>
  );
}
