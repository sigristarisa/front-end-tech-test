import MainText from "./MainText";
import Stepper from "./Stepper";
import MainImage from "./MainImage";
import "./Main.css";

const Main = () => {
  return (
    <main className='two-grid-columns'>
      <aside>
        <MainText />
        <Stepper />
      </aside>
      <aside>
        <MainImage />
      </aside>
    </main>
  );
};

export default Main;
