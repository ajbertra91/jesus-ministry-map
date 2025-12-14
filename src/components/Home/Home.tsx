import DecorativeBorder from '../DecorativeBorder';
import LargeBrightBar from '../LargeBrightBar';
import "./Home.css";

const Home = () => {
  return (
    <div className="home content">
      <DecorativeBorder dir="horizontal" className="top" />
      <LargeBrightBar />
      <DecorativeBorder dir="horizontal" className="bottom" />
    </div>
  );
};

export default Home;