import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <h1 className="bg-[#6A9E68] text-center py-3 text-white font-medium">
        🎉 Limited Time Offer: Get a $200 bonus deposit when you activate your
        TACH account!* Become a Premium Carrier today.
      </h1>
      <div className="h-[800px] bg-[url('https://tachusa.com/_next/image?url=%2Fassets%2Fimages%2Fwebp%2Fhero-bg-new.webp&w=3840&q=85')] bg-cover bg-center flex">
        <nav className="container mx-auto flex justify-between mt-10">
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
          <div className="flex gap-10 border h-10 justify-center items-center">
            <button className="p-2 border-2 text-white">Login</button>
            <button className="p-2 border-2 text-white">Join TACH</button>
          </div>
        </nav>
      </div>
    </div>
  );
}
