import MainText from "./MainText";
import Stepper from "./Stepper";
import Form from "./Form";
import MainImage from "./MainImage";
import "./Main.css";

const Main = () => {
  return (
    <main className='two-grid-columns'>
      <aside>
        <MainText />
        <Stepper />
        <Form />
      </aside>
      <aside>
        <MainImage />
      </aside>
    </main>
  );
};

export default Main;
