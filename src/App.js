import './App.css';
import ProfilPhoto from "./Profile/ProfilPhoto";
import FullName from "./Profile/FullName";
import Adress from "./Profile/Adress";
function App() {
  return (
    <div className="App">
      
      <>
        <div className="picture">
          <ProfilPhoto />
        </div>
        <div className="info">
          <FullName />
          <Adress />
        </div>

      </>


    </div>
  );
}

export default App;
