import { ReactComponent as StepChecked } from "../../assets/1.svg";

const StepperItem = ({ step, index }) => {
  const isChecked = (stepIndex) => (stepIndex === 0 ? "checked" : "");
  return (
    <li className='stepper-item three-grid-columns_custom align-items_center'>
      <div className='stepper-checked_container'>
        <StepChecked />
      </div>
      <p className={`${isChecked(index)}`}>{step}</p>
      <div className='horizontal-line'></div>
    </li>
  );
};

export default StepperItem;
