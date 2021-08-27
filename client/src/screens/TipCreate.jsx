import { useState } from 'react';
import { useParams } from "react-router-dom"

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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate(formData, id);
      }}
    >
      <h3>Create Tip</h3>
      <label>
        
        <input type='text' name="tip" value={tip} onChange={handleChange} />
      </label>
      <button>Submit</button>
    </form>
  );
}