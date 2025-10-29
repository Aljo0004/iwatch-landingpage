import HeaderMenu from "./HeaderMenu";
import HeaderLogo from "./HeaderLogo";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
  return (
    <div className="header">
        <HeaderLogo />
      <HeaderMenu />
        <HeaderSearch />
    </div>
  );
};

export default Header;
