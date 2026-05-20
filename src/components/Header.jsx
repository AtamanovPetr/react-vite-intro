import logo from "/favicon.svg";
export default function Header() {
  const now = new Date();
  const name = "Result";
  return (
    <header className="h-[50px] flex justify-between items-center px-8 border-b border-[#ccc] bg-[#fafafa]">
      <img src={logo} alt={name} />
      {/* <h3 className="m-0 font-bold">Result Nikita</h3> */}
      <span>Время сейчас: {now.toLocaleTimeString()}</span>
    </header>
  );
}
