import logo from '../assets/images/logo.svg';
import mainImg from '../assets/images/main.svg';

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="Logo" className="logo" />
      </nav>
      <div className="container page">
        {/* Info */}
        <div className="info">
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            I'm sorry, guys. I never meant to hurt you. Just to destroy
            everything you ever believed in. I've been there. My folks were
            always on me to groom myself and wear underpants. What am I, the
            pope? I've been there. My folks were always on me to groom myself
            and wear underpants. What am I, the pope?
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={mainImg} alt="Job Hunt" className="img main-img" />
      </div>
    </main>
  );
};
export default Landing;
