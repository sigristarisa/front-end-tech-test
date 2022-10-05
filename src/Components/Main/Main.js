import MainText from "./MainText";
import Stepper from "./Stepper";
import Form from "./Form";
import MainImage from "./MainImage";
import "./Main.css";

const Main = () => {
  return (
    <main className='main_container two-grid-columns_extend-one'>
      <aside className='main_left-container align-items_start'>
        <MainText />
        <Stepper />
        <Form />
      </aside>
      <aside className='main_right-container'>
        <MainImage />
      </aside>
    </main>
  );
};

export default Main;
