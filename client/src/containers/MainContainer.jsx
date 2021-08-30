import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { deleteTip, getAllTips, putTip, postTip, addTipToLegend } from '../services/tips';
import { getAllLegends, getOneLegend } from '../services/legends';
import Legends from '../screens/Legends';
import LegendDetail from "../screens/LegendDetail"
import TipCreate from "../screens/TipCreate"
import Landing from '../layouts/Landing';

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

  const handleCreate = async (formData, legendId) => {
    const tipData = await postTip(formData, legendId);
    setTips((prevState) => [...prevState, tipData]);
    addTipToLegend(legendId, tipData.id)
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

      <Route path='/legends/:id/new'>
          <TipCreate currentUser={currentUser} legends={legends} handleCreate={handleCreate} />
        </Route>

        <Route path='/legends/:id'>
          <LegendDetail tips={tips}/>
        </Route>
        
        <Route path='/legends'>
          <Legends legends={legends} />
        </Route>

        <Route path='/'>
          <Landing />
        </Route>
      </Switch>
    </div>
  );
}

