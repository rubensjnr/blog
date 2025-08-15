import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header>
      <Link
        className="flex
        text-4xl/normal font-extrabold py-8 
        sm:text-5xl/normal sm:py-10
        md:text-6xl/normal md:py-11
        lg:text-7xl/normal lg:py-12"
        href={`#`}
      >
        The Blog
      </Link>
    </header>
  );
}

export default Header;
