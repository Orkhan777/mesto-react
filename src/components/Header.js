import headerLogo from "../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <img
        src={headerLogo}
        alt="Логотип Место"
        className="Логотип Место Россия"
      />
    </header>
  );
}

export default Header;
