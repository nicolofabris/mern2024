import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";

import {Link} from "react-router-dom";
import {Logo} from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo/>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            error maxime fugit minus cum impedit dignissimos labore aut
            similique doloremque, reprehenderit asperiores, accusantium quis
            minima commodi ipsa repellendus molestiae ipsam placeat
            exercitationem reiciendis? Quaerat, nihil quas error repudiandae
            quam architecto est veritatis quod unde atque libero voluptatum ex
            magni cupiditate!ƒ
          </p>
		  <Link to='/register' className="btn register-link">Register</Link>
		  <Link to='/login' className="btn">Login / Demo User</Link>
        </div>
		<img src={main} alt="Job Hunt" className="img main-img"/>
      </div>
    </Wrapper>
  );
};

export default Landing;
