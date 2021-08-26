import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { getAllLegends, getOneLegend } from '../services/legends';
import Legends from '../screens/Legends';

export default function MainContainer(props) {
  const [legends, setLegends] = useState([]);
  const { currentUser } = props;
  const history = useHistory();

  useEffect(() => {
    const fetchLegends = async () => {
      const legendList = await getAllLegends();
      setLegends(legendList);
    };
    fetchLegends();
  }, []);
  console.log(legends)

  return (
    <div>
        <Switch>
          <Route path='/'>
            <Legends
              legends={legends}
            />
          </Route>
        </Switch>
    </div>
  );
}

