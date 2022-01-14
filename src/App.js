import logo from "./logo.svg";
import "./App.css";
import { Wrapper } from "./components/wrapper";
import { RouterList } from "./routers";

function App() {
  return (
    <Wrapper>
      <RouterList />
    </Wrapper>
  );
}

export default App;
