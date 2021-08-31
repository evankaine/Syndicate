import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom';

export default function FoodEdit(props) {
  const [formData, setFormData] = useState({
    tip: ''
  })
  const { tip } = formData;
  const { handleUpdate, tips, currentUser } = props;
  const { id, legend_id } = useParams()

  useEffect(()=> {
    const prefillFormData = () => {
      const tipItem = tips.find((content)=> content.id === Number(id));
      setFormData({ tip: tipItem.tip })
    }
    if (tips.length) {
      prefillFormData()
    }
  }, [tips, id])

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="background">
      <div className="wrapper">
        <div className="tip-form">
          <div className="title">
            <h3>EDIT</h3>
            <h4></h4>
          </div>  
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdate(id, formData, legend_id);
            }}>
      <div className="input-wrap">
        <textarea className="textarea"
          rows="5" cols="40"
          type='text'
          name="tip"
          value={tip}
          onChange={handleChange}>
        </textarea>
              <button className="raise" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

