import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneLegend } from '../services/legends';
import { addTipToLegend } from '../services/tips';
import "./LegendDetail.css"


export default function LegendDetail(props) {
  const [legend, setLegend] = useState(null);
  const [selectedLegend, setSelectedLegend] = useState('');
  const { id } = useParams();
  const { tips } = props;

  useEffect(() => {
    const fetchLegendItem = async () => {
      const legendData = await getOneLegend(id);
      setLegend(legendData);
    };
    fetchLegendItem();
  }, [id]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedLegend(value);
  };

  // handle submit for adding the tips to the legend
  const handleSubmit = async (e) => {
    e.preventDefault();
    const legendItem = await addTipToLegend(id, selectedLegend);
    setLegend(legendItem);
  };

  return (
    <div>

      <h1>{legend?.name}</h1>

      <div className="legend-detail-image">
        <img
          src={legend?.legend_image_url}
          alt={legend?.name}>
        </img>
      </div>

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
      
      {tips.map((tips) => (
        <h3 value={tips.id}>{tips.tip}</h3>
      ))}
    </div>
  );
}