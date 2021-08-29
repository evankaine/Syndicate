import { Link } from 'react-router-dom';
import "./Legends.css"

export default function Legends(props) {
  const { legends, currentUser } = props;
  
  return (
    <div className="background-legends">
      <h3 className="legend-title">LEGENDS</h3>
      <hr />
    <div className="legends-container">
   
      {legends?.map((legend) => (
        <div className="legend" key={legend.id}>
          <Link to={`/legends/${legend.id}`}>
            <img className="legend-image" src={legend.legend_image_url}></img>
          <div className="overlay">
            <h2 className="legend-name">{legend.name}</h2>
          </div>
          </Link>
          {/* {currentUser?.id === food.user_id && (
            <div>
              <Link to={`/foods/${food.id}/edit`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => handleDelete(food.id)}>Delete</button>
            </div>
          )} */}
          
        </div>
      ))}
      </div>
    </div>
  );
}
