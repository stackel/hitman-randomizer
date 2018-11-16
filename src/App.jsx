import React from 'react';
import './App.css';
import data from './data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    const map = this.getRandom(data.maps);
    const targets = this.getTargets(map);

    this.state = {
      location: map.location,
      mission: map.mission.name,
      targets,
    };
  }

  getTargets = (map) => {
    const targets = [];
    map.mission.targets.forEach((target) => {
      targets.push({
        name: target,
        weapon: this.getRandom(map.weapons),
        disguise: this.getRandom(map.disguises),
      });
    });
    return targets;
  }

  getRandom = obj => obj[Math.floor(Math.random() * (obj.length - 1))]

  render() {
    const { location, mission, targets } = this.state;
    return (
      <div>
        <pre>{JSON.stringify(location, null, 4)}</pre>
        <pre>{JSON.stringify(mission, null, 4)}</pre>
        <pre>{JSON.stringify(targets, null, 4)}</pre>
      </div>
    );
  }
}

export default App;
