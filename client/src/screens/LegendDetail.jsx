import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneLegend } from '../services/legends';


export default function FoodDetail(props) {
  const [legend, setLegend] = useState(null);
  const [selectedLegend, setSelectedLegend] = useState('');
  const { id } = useParams();
  const { tips } = props;

  useEffect(() => {
    const fetchFoodItem = async () => {
      const legendData = await getOneLegend(id);
      setLegend(legendData);
    };
    fetchFoodItem();
  }, [id]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedLegend(value);
  };

  // Our handle submit for adding the flavor to our food
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const foodItem = await addFlavorToFood(id, selectedFlavor);
  //   setFoodItem(foodItem);
  // };

  return (
    <div>
      <h1>{legend?.name}</h1>
      <img
        src={legend?.legend_image_url}
        alt={legend?.name}>
      </img>
      <p>{legend?.lore}</p>

      <img
        src={legend?.passive_image_url}
        alt={legend?.passive_image_url}>
      </img>
      <h3>{legend?.passive_name}</h3>

      <img
        src={legend?.tactical_image_url}
        alt={legend?.tactical_image_url}>
      </img>
      <h3>{legend?.tactical_name}</h3>

      <img
        src={legend?.ultimate_image_url}
        alt={legend?.ultimate_image_url}>
      </img>
      <h3>{legend?.ultimate_name}</h3>
      
    </div>
  );
}