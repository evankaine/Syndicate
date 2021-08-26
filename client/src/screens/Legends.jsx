import { Link } from 'react-router-dom';

export default function Legends(props) {
  const { legends, currentUser } = props;
  
  return (
    <div>
      <h3>Legends</h3>
      {legends?.map((legend) => (
        <div key={legend.id}>
          <Link to={`/legends/${legend.id}`}>
            <img src={legend.legend_image_url}></img>
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
  );
}
