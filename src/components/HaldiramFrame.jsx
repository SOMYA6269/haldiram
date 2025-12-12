const HaldiramFrame = ({ children }) => {
  return (
    <div className="relative border border-[#d7b98a] rounded-xl p-1"
         style={{ borderWidth: "2px" }}>
      
      {/* Top-left swirl */}
      <span className="absolute -top-2 left-4 w-5 h-5 border-t-2 border-l-2 border-[#d7b98a] rounded-tl-xl"></span>

      {/* Top-right swirl */}
      <span className="absolute -top-2 right-4 w-5 h-5 border-t-2 border-r-2 border-[#d7b98a] rounded-tr-xl"></span>

      {/* Bottom-left swirl */}
      <span className="absolute -bottom-2 left-4 w-5 h-5 border-b-2 border-l-2 border-[#d7b98a] rounded-bl-xl"></span>

      {/* Bottom-right swirl */}
      <span className="absolute -bottom-2 right-4 w-5 h-5 border-b-2 border-r-2 border-[#d7b98a] rounded-br-xl"></span>

      <div className="bg-white rounded-lg">{children}</div>
    </div>
  );
};

export default HaldiramFrame;
