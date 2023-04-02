import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Overall } from './overall';



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Overall />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
