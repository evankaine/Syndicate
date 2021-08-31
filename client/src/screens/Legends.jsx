import { Link } from 'react-router-dom';
import "./Legends.css"

export default function Legends(props) {
  const { legends } = props;
  
  return (
    <div className="background-legends">
      <h3 className="legend-title">LEGENDS</h3>
      <hr />
    <div className="legends-container">
      {legends?.map((legend) => (
        <div className="legend" key={legend.id}>
      
          <Link to={`/legends/${legend.id}`}>

            <img className="legend-image"
              src={legend.legend_image_url}
              alt="apex legend">
            </img>

          <div className="overlay">
            <h2 className="legend-name">{legend.name}</h2>
          </div>
            
          </Link>
        </div>
      ))}
      </div>
    </div>
  );
}
