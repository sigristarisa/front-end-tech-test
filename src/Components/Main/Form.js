import { useState } from "react";
import FormSelectItem from "./SelectItem";
import FormInput from "./FormInput";
import {
  eventType,
  area,
  venueLayout,
  venueStyle,
} from "../../helpers/FormSelectItems";
import { formInitialState } from "../../helpers/initialStates";

const Form = () => {
  const [formInput, setFormInput] = useState(formInitialState);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    name === "checkbox"
      ? setFormInput({ ...formInput, [name]: checked })
      : setFormInput({ ...formInput, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formInput);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormSelectItem
          label={"Event type"}
          name={"event_type"}
          value={formInput.event_type}
          selectItemArr={eventType}
          onChange={handleChange}
        />
        <FormSelectItem
          label={"Area"}
          name={"area"}
          value={formInput.area}
          selectItemArr={area}
          onChange={handleChange}
        />
        <FormInput
          name={"number_of_people"}
          value={formInput.number_of_people}
          type='number'
          min={1}
          placeholder={"Number of people"}
          onChange={handleChange}
        />
        <FormInput
          name={"estimated_spend"}
          value={formInput.estimated_spend}
          type={"text"}
          placeholder={"Estimated total event spend"}
          onChange={handleChange}
        />
        <FormSelectItem
          label={"Venue layout"}
          name={"venue_layout"}
          value={formInput.venue_layout}
          selectItemArr={venueLayout}
          onChange={handleChange}
        />
        <FormSelectItem
          label={"Venue style"}
          name={"venue_style"}
          value={formInput.venue_style}
          selectItemArr={venueStyle}
          onChange={handleChange}
        />
        <FormInput
          name={"add_online_elements"}
          checked={formInput.add_online_elements}
          type={"checkbox"}
          placeholder={"Add online elements to event"}
          onChange={handleChange}
        />
        <textarea
          name='requirements'
          rows='4'
          cols='50'
          value={formInput.specific_requirements}
          placeholder='Specific requirements'
          onChange={handleChange}
        ></textarea>
        <input type='submit' value='Next' />
      </form>
    </div>
  );
};

export default Form;
