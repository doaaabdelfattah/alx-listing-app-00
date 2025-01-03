import React from "react";
import Image from "next/image";
import SearchBar from "./SearchBar";
import Button from "@/components/common/Button";

const MainHeader = () => {
  return (
    <div className="flex justify-between items-center gap-6 min-h-[88px] px-5 border-b border-primary-border py-5">
      <div className="hidden md:block">
        <Image src="/assets/alxLogo.svg" width={80} height={80} alt="logo" />
      </div>
      <SearchBar />
      <div className="gap-2 hidden desktop:flex">
        <Button label="Sign in" className="green_btn" onClick={() => {}} />
        <Button label="Sign up" className="outline_btn" onClick={() => {}} />
      </div>

      <div className="flex desktop:hidden">
        <Image
          src="/assets/icons/profile-pic2.svg"
          onClick={() => {}}
          alt="profile"
          width={50}
          height={50}
          className="rounded-full bg-primary-green cursor-pointer"
        />
      </div>
    </div>
  );
};

export default MainHeader;
