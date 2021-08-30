import { useState } from 'react';
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom';
import "./TipCreate.css"

export default function TipCreate(props) {
  const [formData, setFormData] = useState({
    tip: ''
  });
  const { tip } = formData;
  const { handleCreate, legends, currentUser } = props;
  const { id } = useParams()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  console.log(formData)
  return (
    <div className = "background" >
          <div className="wrapper">
            <div className="tip-form">
              <div className="title">
                <h3>SHARE</h3>
                <h4></h4>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleCreate(formData, id);
                }}>
                <div className="input-wrap">
                  <textarea
                    rows="5" cols="40"
                    type='text'
                    name="tip"
                    value={tip}
                    onChange={handleChange}>
                  </textarea>
                  {/* <Link to={`/legends/${legends.id}`}>       */}
                  <button className="raise" type="submit">Submit</button>
                  {/* </Link> */}
        
                </div>
              </form>
            </div>
          </div>
    </div>
  );
}
