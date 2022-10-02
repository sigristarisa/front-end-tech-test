import StepperItem from "./StepperItem";

const Stepper = () => {
  const steps = ["Event details", "Event date / time", "Contact details"];
  return (
    <div>
      <ul className='stepper-list three-grid-columns'>
        {steps.map((step, index) => (
          <StepperItem step={step} key={index} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default Stepper;
