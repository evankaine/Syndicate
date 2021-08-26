import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { deleteTip, getAllTips, putTip, postTip } from '../services/tips';
import { getAllLegends, getOneLegend } from '../services/legends';
import Legends from '../screens/Legends';
import LegendDetail from "../screens/LegendDetail"

export default function MainContainer(props) {
  const [legends, setLegends] = useState([]);
  const [tips, setTips] = useState([]);
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

  useEffect(() => {
    const fetchTips = async () => {
      const contentList = await getAllTips();
      setTips(contentList);
    };
    fetchTips();
  }, []);

  const handleCreate = async (formData) => {
    const tipData = await postTip(formData);
    setTips((prevState) => [...prevState, tipData]);
    history.push('/legends/:id');
  };

  const handleUpdate = async (id, formData) => {
    const tipData = await putTip(id, formData);
    setTips((prevState) =>
      prevState.map((content) => {
        return content.id === Number(id) ? tipData : content;
      })
    );
    history.push('/legends/id');
  };

  const handleDelete = async (id) => {
    await deleteTip(id);
    setTips((prevState) => prevState.filter((content) => content.id !== id));
  };

  return (
    <div>
      <Switch>

        <Route path='/legends/:id'>
          <LegendDetail tips={tips}/>
        </Route>
        
        <Route path='/'>
          <Legends legends={legends}/>
        </Route>
        
      </Switch>
    </div>
  );
}

