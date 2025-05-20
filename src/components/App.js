import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [fields, setFields] = useState([{ name: '', age: '' }]);

  const handleChange = (index, e) => {
    const values = [...fields];
    values[index][e.target.name] = e.target.value;
    setFields(values);
  };

  const addField = () => {
    setFields([...fields, { name: '', age: '' }]);
  };

  const remove = (index) => {
    const values = [...fields];
    values.splice(index, 1);
    setFields(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fields);
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              value={field.name}
              onChange={(e) => handleChange(index, e)}
            />
            <input
              type="number"
              placeholder="Enter Age"
              name="age"
              value={field.age}
              onChange={(e) => handleChange(index, e)}
            />
            {fields.length > 1 && (
              <button type="button" onClick={() => remove(index)}>
                Remove
              </button>
            )}
          </div>
        ))}

        <div>
          <button type="button" onClick={addField}>
            Add More
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default App;
