"use client";

import st1 from "../public/images/1.jpg";
import Image from "next/image";
import Button from "./Button";

function First() {
  return (
    <div className="relative">
      <div>
        <Image
          src={st1}
          alt="Lotto Image"
          width={9999}
          height={99990}
          className="w-full h-[100vh] object-cover bg-red-700"
        />
      </div>
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 mb-4 ">
        <Button />
      </div>
    </div>
  );
}

export default First;
