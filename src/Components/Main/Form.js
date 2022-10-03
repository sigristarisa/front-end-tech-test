import FormSelectItem from "./SelectItem";
import FormInput from "./FormInput";
import {
  eventType,
  area,
  venueLayout,
  venueStyle,
} from "../../helpers/FormSelectItems";

const Form = () => {
  return (
    <div>
      <form>
        <FormSelectItem
          label={"Event type"}
          name={"Event type"}
          selectItemArr={eventType}
        />
        <FormSelectItem label={"Area"} name={"Area"} selectItemArr={area} />
        <FormInput
          name={"number_of_people"}
          type={"number"}
          min={1}
          placeholder={"Number of people"}
        />
        <FormInput
          name={"estimated_spend"}
          type={"text"}
          placeholder={"Estimated total event spend"}
        />
        <FormSelectItem
          label={"Venue layout"}
          name={"Venue layout"}
          selectItemArr={venueLayout}
        />
        <FormSelectItem
          label={"Venue style"}
          name={"Venue style"}
          selectItemArr={venueStyle}
        />
        <input id='checkbox' type='checkbox' />
        <label HTMLFor='checkbox'>Add online elements to event</label>
        <FormInput
          name={"add_online_elements"}
          type={"checkbox"}
          placeholder={"Add online elements to event"}
        />
        <textarea name='requirements' rows='4' cols='50'>
          Specific requirements
        </textarea>
        <input type='submit' value='Next' />
      </form>
    </div>
  );
};

export default Form;
