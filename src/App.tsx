import "./styles/theme.css";
import "./styles/global.css";

import Container from "./components/Container";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import CountDown from "./components/CountDown";
import DefaultInput from "./components/DefaultInput";
import Cycles from "./components/Cycles";
import DefaultButton from "./components/DefaultButton";
import { PlayCircleIcon } from "lucide-react";

function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form action="" className="form">
          {/* Div de input da tarefa */}
          <div className="formRow">
            <DefaultInput
              id="meuInput"
              labelText="task"
              type="text"
              placeholder="Digite algo"
            />
          {/* Div de  da tarefa */}
          </div>
          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          {/* Div de ciclos da tarefa */}
          <div className="formRow">
            <Cycles />
          </div>
          <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon />} color="green"/>
          </div>
        </form>
      </Container>
    </>
  );
}

export default App;
