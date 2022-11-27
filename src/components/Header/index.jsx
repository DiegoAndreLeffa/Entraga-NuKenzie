import Logo from "../../imgs/Nu Kenzie (1).svg";
import "./style.css";

export function Header({ isLoggedIn, setIsLoggedIn }) {
  function logout() {
    setIsLoggedIn(false);
  }

  return (
    <>
      <header className="header">
        <img src={Logo} alt="" />

        <button onClick={logout}>Inicio</button>
      </header>
    </>
  );
}
