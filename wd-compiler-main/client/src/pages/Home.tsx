import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Spline from "../components/Spline.tsx"
import Footer from "../components/Footer.tsx";

export default function Home() {
  const navigate = useNavigate();
  const [typedText, setTypedText] = useState("");
  const text = "Compile HTML, CSS, and JavaScript on the go and share it with your friends.";

  useEffect(() => {
    let index = 0; 
    const interval = setInterval(() => {
      setTypedText((prev) => text.substring(0, index + 1));
      index++;
      if (index === text.length) clearInterval(interval);
    }, 70);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      
      
      <div className="w-full h-[calc(80dvh-40px)] text-white flex justify-center items-center flex-col gap-4">

      {/* Animated Title */}
      <h1 className="text-4xl md:text-6xl font-bold tracking-widest font-['Fira_Code'] bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
      Online Code Compiler!
    </h1>
    <div className="absolute inset-0 -z-10 opacity-40 md:opacity-100">
        <Spline />
      
      </div>

      {/* Description */}
      <p className="text-gray-400 text-center p-3 animate-fadeIn font-['Fira_Code']">
       {typedText}
      </p>
    
   
</div>

  
     
  
      <div className="mt-20 bg-black h-auto">
     
      <section className="w-full max-w-6xl py-0 mx-auto text-center mt-28">
  <h2 className="text-4xl font-bold mb-10 text-blue-400 uppercase tracking-wide">
    Projects Built Using Our Compiler
  </h2>
  <div className="grid md:grid-cols-3 gap-8">
    {[
      "https://i.pinimg.com/736x/1d/8a/11/1d8a11b5f270c95cf3d5178b5dc88f17.jpg",
      "/images/project2.png",
      "/images/project3.png",
    ].map((src, index) => (
      <div
        key={index}
        className="relative group overflow-hidden rounded-lg shadow-lg border border-gray-700 bg-gray-900 p-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
      >
        {/* Glowing border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-50 transition duration-500"></div>

        {/* Image */}
        <img
          src={src}
          alt={`Project ${index + 1}`}
          className="rounded-lg w-full h-60 object-cover transition duration-300 group-hover:opacity-90"
        />

       
      </div>
    ))}
  </div>
</section>

  

      <div className="flex justify-center mt-10 bg-black">
        <button
          onClick={() => navigate("/Compiler")}
          className="relative px-8 py-4 text-white bg-black rounded-lg border-2 border-transparent hover:border-green-400 transition-all duration-300 shadow-lg overflow-hidden"
        >
          <span className="absolute inset-0 border-2 border-green-400 animate-pulse rounded-lg"></span>
          <span className="relative z-10">Start Coding</span>
        </button>
      </div>
      </div>
      {/* Features Section */}
      <div className="bg-black">
   <section className="py-16 px-5 mt-15 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto animate-fadeIn">
        {[
          { title: "Multi-Language Support", desc: "Run code in multiple languages like Html, JavaScript, and more." },
          { title: "Instant Execution", desc: "Get real-time results with fast code execution." },
          { title: "Cloud-Based", desc: "No installations needed—run your code directly in the browser." },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105 hover:bg-white/10 hover:backdrop-blur-lg hover:border hover:border-white/20 font-['Fira_Code']"
          >
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="mt-2 opacity-80">{feature.desc}</p>
          </div>
        ))}
       
      </section>
   </div>
   
  
<Footer/>
    </div>
  );
}
