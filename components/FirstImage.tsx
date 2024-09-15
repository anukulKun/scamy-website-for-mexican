"use client"


import st1 from "../public/images/12.png"

import Image from 'next/image'


function First() {




  return (

    <div>
      <Image
          src={st1}
          alt="Lotto Image"
          width={9999}
          height={99990}
          className="bg-red-700"
        />
    </div>
  );
}

export default First
