import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Counter from './components/Counter';
import Counter2 from './components/Counter2';
import CounterContextProvider from './counterContext';

function App() {
  return (
    <CounterContextProvider>
      <BrowserRouter>

      <Routes>
        <Route path='/' element={<Counter />}/>
        <Route path='/counter' element={<Counter2 />}/>
      
      </Routes>

</BrowserRouter>
    </CounterContextProvider>
    
  );
}

export default App;
