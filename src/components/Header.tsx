"use client";

import svgReactLogo from "../assets/react.svg";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex items-center justify-center mt-5">
      <div className="flex flex-row items-center justify-center gap-2 text-2xl font-bold">
        <h1 className="font-bold text-dark">TO-DO List App with</h1>
        <Image
          src={svgReactLogo}
          alt=""
          width={28}
          height={28}
          className="react-animate hover:size-10 transition-all"
        />
      </div>
    </div>
  );
};

export default Header;
