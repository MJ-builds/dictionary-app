export default function Navbar() {
  return (
    <div className="flex justify-between items-center mb-8 min-w-[370px] md:min-w-full pt-5">
      <div>
        <img src="./assets/images/logo.svg" />
      </div>
      <div className="ml-auto">Dropdown</div>
      <div className="mx-5 text-[#E9E9E9]">|</div>
      <button className="mr-5">Button</button>
      <div>
        {/* this to be changed to dynamic depending on light/dark theme */}
        <img src="./assets/images/icon-moon.svg" />
      </div>
    </div>
  );
}