import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneLegend } from '../services/legends';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import "./LegendDetail.css"


export default function LegendDetail(props) {
  const [legend, setLegend] = useState(null);
  const { id } = useParams();
  const { handleDelete } = props;

  useEffect(() => {
    const fetchLegendItem = async () => {
      const legendData = await getOneLegend(id);
      setLegend(legendData);
    };
    fetchLegendItem();
  }, [id]);


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
      <div >
        <h3 className="h3-media">PASSIVE</h3>
        <img className="passive"
          src={legend?.passive_image_url}
          alt={legend?.passive_image_url}>
        </img>
        <hr />
        <h3>{legend?.passive_name}</h3>
      </div>
            
      <div >
        <h3 className="h3-media">TACTICAL</h3>
        <img className="tactical"
          src={legend?.tactical_image_url}
          alt={legend?.tactical_image_url}>
        </img>
        <hr />
        <h3 >{legend?.tactical_name}</h3>
      </div>

      <div >
        <h3 className="h3-media">ULTIMATE</h3>
        <img className="ultimate"
          src={legend?.ultimate_image_url}
          alt={legend?.ultimate_image_url}>
        </img>
        <hr />
        <h3>{legend?.ultimate_name}</h3>
      </div>
    </div>
    <hr className="hr-media" />
          <div className="tip-container">
            <h3 className="forum-title">FORUM</h3>
            <p className="forum-legend">{legend?.name}</p>
      <hr />
            <div className="tip-section">
              <Link to={`/legends/${legend?.id}/new`}>
                <h2>CREATE POST</h2>
              </Link>
            </div>
            <div className="tip-list">
              {legend?.tips.map((content) => (
                <div className="user-tip" key={content.id}>
                  <h3 className="post-name">{content.user.username}</h3>
                  <p className="post-content">{content.tip}</p>
                  <hr />
                  <div className="edit-delete">
                    <Link className="edit-button" to={`/legends/${legend?.id}/tips/${content.id}/edit`}>
                      <EditIcon />
                    </Link>
                    <button className="delete-button"
                      onClick={() => handleDelete(content.id)}>
                      <DeleteIcon />
                    </button>
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
      
        </div>
      </div>
  </div>
  );
}