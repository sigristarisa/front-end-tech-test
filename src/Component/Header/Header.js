import { ReactComponent as HeaderLogo } from "../../assets/header.svg";
import "./Header.css";

const Header = () => {
  return (
    <header className='align-items_center'>
      <div className='header-logo_container'>
        <HeaderLogo className='header-logo' />
      </div>
    </header>
  );
};

export default Header;
