import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneLegend } from '../services/legends';
import { addTipToLegend } from '../services/tips';
import { Link } from 'react-router-dom';
import "./LegendDetail.css"


export default function LegendDetail(props) {
  const [legend, setLegend] = useState(null);
  const [tip, setTip] = useState(null);
  const [selectedLegend, setSelectedLegend] = useState('');
  const { id } = useParams();
  const { tips, handleDelete } = props;

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
    <div className="background-legends">
    <div className="legend-detail">

    <div className="detail-image">
      <img className="image"
        src={legend?.legend_image_url}
        alt={legend?.name}>
      </img>
    </div>
      
    <div className="detail">
      <h1 className="detail-name">{legend?.name}</h1>
      <p className="detail-lore">{legend?.lore}</p>


    <div className="ability-images">
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
    </div>
    </div>
      

    

    <div className="tip-container">
      <div className="tip-section">
        <Link to={`/legends/${legend?.id}/new`}>
          <h2>create post</h2>
        </Link>
    </div>
      <div className="tip-list">
    {legend?.tips.map((content) => (
      <div className="user-tip" key={content.id}>
        <h3>{content.user.username}</h3>
        <p>{content.tip}</p>
        <Link to={`/legends/${legend?.id}/edit`}>
          edit
        </Link>
        <button onClick={() => handleDelete(legend.id)}>Delete</button>
      </div>
    ))}
      </div>
    </div>
  </div>
  );
}