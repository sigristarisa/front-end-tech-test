import MainText from "./MainText";
import MainImage from "./MainImage";
import "./Main.css";

const Main = () => {
  return (
    <main className='two-grid-columns'>
      <aside>
        <MainText />
      </aside>
      <aside>
        <MainImage />
      </aside>
    </main>
  );
};

export default Main;
