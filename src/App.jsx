import { useEffect, useState } from 'react';
import { getTeams } from './api';

function App() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getTeams().then(setTeams);
  }, []);
  console.log(teams);
  return (
    <div>
      <h1>Soccer Teams</h1>
      <ul>
        {teams.map((team) => (
          <li key={team.id}>
            {team.Name} - {team.Team}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
