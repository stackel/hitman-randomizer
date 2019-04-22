import React from 'react';
import data from './data.json';
import Target from './Target';

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
        weapon: this.getRandom(map.weapons.concat(data.static_weapons)),
        disguise: this.getRandom(map.disguises.concat(data.static_disguises)),
      });
    });
    return targets;
  }

  getRandom = obj => obj[Math.floor(Math.random() * (obj.length))]

  render() {
    const { location, mission, targets } = this.state;

    const TargetComponents = targets.map(
      target => (
        <Target
          target={target.name}
          weapon={target.weapon}
          disguise={target.disguise}
        />
      ),
    );

    return (
      <div>
        <img src="res/bg.jpg" className="absolute vh-100 w-100 o-c" alt="hitman-loading-screen" />
        <div className="absolute">
          <div className="pl4 pt5">
            {TargetComponents}
            <div className="ph4">
              <h1 className="open-sans f1 white">{location}</h1>
              <h2 className="open-sans f2 white">{mission}</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
