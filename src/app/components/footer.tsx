"use client ";
import { FlipWords } from "@/components/ui/flip-words";

import FooterButtons from "./footrButtons";

export default function Footer() {
    const words= ['Made with Motion' , 'Made by Meeth']
  return (
    <div className=" pt-[50px]">
      <div className="">Connect</div>
      <div className=" pt-[30px] ">
        <div className="text-neutral-500">
          Contact me{" "}
          <a href="" className="hover:text-white text-neutral-4 00 transition">
            <u>meeth2036@gmail.com</u>
          </a>
        </div>
      </div>
      <FooterButtons/>
      <div>
        <div>
            <FlipWords words={words} className="text-neutral-500 text-[10px] pb-3"/>
        </div>
      </div>
    </div>
  );
}
