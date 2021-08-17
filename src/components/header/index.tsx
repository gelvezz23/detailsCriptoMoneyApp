import { Button, HeaderWrapper } from "./styles";
function Header() {
  return (
    <HeaderWrapper>
      <ul>
        <li>
          <Button to="/" primary={true}>
            Inicio
          </Button>

          <Button to="/filters">Filtrar</Button>
        </li>
      </ul>
    </HeaderWrapper>
  );
}

export default Header;
