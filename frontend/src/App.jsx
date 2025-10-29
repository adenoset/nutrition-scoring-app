import { useState } from 'react';
import Calculator from './components/Calculator';
import ScoreDisplay from './components/ScoreDisplay';
import './App.css';

function App() {
  const [scoreResult, setScoreResult] = useState(null);

  return (
    <div className="app">
      <header className="app-header">
        <h1>🍎 Nutrition Scoring App</h1>
        <p>Calculez le score nutritionnel de vos aliments</p>
      </header>
      
      <main className="app-main">
        <Calculator onScoreCalculated={setScoreResult} />
        {scoreResult && <ScoreDisplay result={scoreResult} />}
      </main>
      
      <footer className="app-footer">
        <p>Powered by FastAPI & React.js</p>
      </footer>
    </div>
  );
}

export default App;
