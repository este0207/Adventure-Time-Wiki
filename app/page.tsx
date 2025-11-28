'use client';

import Header from "./components/header";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <div
        className="test bg-white/30 p-8 rounded-lg max-w-5xl mx-auto backdrop-blur-md shadow-lg"
        style={{
          opacity: 0,
          animation: 'fadeIn 1s ease 1s forwards'
        }}
      >
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, accusamus?</p>
        
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
