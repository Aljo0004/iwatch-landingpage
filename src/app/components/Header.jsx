import HeaderMenu from "./HeaderMenu";
import HeaderLogo from "./HeaderLogo";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
  return (
    <div className="col-span-full w-full flex flex-row items-center place-self-start justify-between">
        <HeaderLogo />
      <HeaderMenu />
        <HeaderSearch />
    </div>
  );
};

export default Header;
