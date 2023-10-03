import { Logo } from "./logo";
import { Navbar } from "./navbar";


export const Header = () => {
  return (
    <div className="headerContainer">
      <Logo />
      <Navbar />
    </div>
  );
};
