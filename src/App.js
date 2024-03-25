import Soldat from "./classes/soldat";
import Medecin from "./classes/medecin";
import Artilleur from "./classes/artilleur";
import Sniper from "./classes/sniper";
import InputTeam from '../src/components/inputcomponent'

function App() {
  const soldat1 = new Soldat("Guillaume", "leformal", "france", "bleu")
  const medecin1 = new Medecin("Gustave", "leformal", "guys?", "bleu")
  const artilleur1 = new Artilleur("nico", "lavoine", "afrique", "rouge")
  const sniper1 = new Sniper("leee", "eeee", "rouge")

  console.log("soldat", soldat1)
  console.log("medecin", medecin1)
  console.log("artilleur", artilleur1)
  console.log("sniper", sniper1)
  

  return (
    <div className="App">
      <InputTeam/>
    </div>
  );
}

export default App;
