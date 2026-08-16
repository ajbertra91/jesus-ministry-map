import DecorativeBorder from '../DecorativeBorder';
import LargeBrightBar from '../LargeBrightBar';
import PageTitle from '../PageTitle';
import "./Home.css";

const Home = () => {
  return (
    <div className="home content">
      <PageTitle title="Home" />
      <DecorativeBorder dir="horizontal" className="top" />
      <LargeBrightBar />
      <DecorativeBorder dir="horizontal" className="bottom" />
    </div>
  );
};

export default Home;