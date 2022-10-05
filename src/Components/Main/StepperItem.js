import stepChecked from "../../assets/1.png";
import stepTwo from "../../assets/2.png";
import stepThree from "../../assets/3.png";

const StepperItem = ({ step, index }) => {
  const isChecked = (stepIndex) => (stepIndex === 0 ? "checked" : "");

  const renderStepIcon = (index) => {
    switch (index) {
      case 0:
        return stepChecked;
      case 1:
        return stepTwo;
      case 2:
        return stepThree;
      default:
        return stepChecked;
    }
  };

  return (
    <li className='stepper-item three-grid-columns_custom align-items_center'>
      <div className='stepper-icon_container place-items_center'>
        <img src={renderStepIcon(index)} alt='step icon' />
      </div>
      <p className={`${isChecked(index)}`}>{step}</p>
      <div className='horizontal-line'></div>
    </li>
  );
};

export default StepperItem;
