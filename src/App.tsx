import "./styles/theme.css";
import "./styles/global.css";

import Heading from "./components/Heading";
import Container from "./components/Container";

function App() {
  return (
    <>
      <Container>
        <Heading>LOGO</Heading>
      </Container>
      <Container>
        <Heading>MENU</Heading>
      </Container>
    </>
  );
}

export default App;
