import React from 'react';
import ShakespeareInfo from './components/ShakespeareInfo';
import WorkList from './components/WorkList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Біографія Вільяма Шекспіра</h1>
      </header>
      <ShakespeareInfo />
      <WorkList />
    </div>
  );
}

export default App;
