import "./App.css";
import { RecoilRoot } from "recoil";
import FontButton from "./components/RecoilExample/FontButton";
import Text from "./components/RecoilExample/Text";
import CharacterCounter from "./components/RecoilExample/CharacterCounter.jsx";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <FontButton />
        <Text />
        <CharacterCounter />
      </RecoilRoot>
    </div>
  );
}

export default App;
