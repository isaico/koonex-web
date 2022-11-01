// import "./Loader.css"

export const Loader = () => {
  return (
    
    <div className="absolute bg-primary w-screen h-full flex justify-center items-center transition-opacity ease-in-out duration-100">
        <div className="w-7 h-7 rounded-full bg-secondary mx-4 animate-loader  d1"></div>
        <div className="w-7 h-7 rounded-full bg-secondary mx-4 animate-loader -delay-75 d2"></div>
        <div className="w-7 h-7 rounded-full bg-secondary mx-4 animate-loader  delay-100 d3"></div>
    </div>
    
  );
};
