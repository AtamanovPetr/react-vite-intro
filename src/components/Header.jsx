import { useState, useEffect } from "react";
import logo from "/favicon.svg";

export default function Header() {
  // const [now, setNow] = useState(new Date());

  // setInterval(() => setNow(new Date()), 1000);

  const name = "Result";

  return (
    <header className="h-[50px] flex justify-between items-center px-8 border-b border-[#ccc] bg-[#fafafa]">
      <img src={logo} alt={name} />
      {/* <span>Время сейчас: {now.toLocaleTimeString()}</span> */}
    </header>
  );
}
