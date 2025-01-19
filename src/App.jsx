import { useEffect, useState } from 'react';
import { getTeams } from './api';
import LandingPage from './components/LandingPage';

function App() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getTeams().then(setTeams);
  }, []);

  return <LandingPage />;
}

export default App;
