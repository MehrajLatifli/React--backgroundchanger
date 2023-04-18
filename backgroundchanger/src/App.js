
import './App.css';
import { BackgroundProvider } from './components/Context API/context';
import Backgrounds from './components/Context API/Backgrounds';


function App() {
  return (
    <div className="App">


        <div>

          <BackgroundProvider>
            <Backgrounds></Backgrounds>
          </BackgroundProvider>

         </div>




    </div>
  );
}

export default App;
