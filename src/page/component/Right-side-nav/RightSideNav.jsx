import { Link } from "react-router-dom";
import { AiOutlineGoogle, AiOutlineGithub } from "react-icons/ai";
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram } from "react-icons/bi";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";
import newspaper from "../../../assets/bg.png";
import { useContext } from "react";
import { Authcontext } from "../../../context/AuthContext";

const RightSideNav = () => {
  const { googleLogIn,GitHubLogIn } = useContext(Authcontext);
  const logInForm = (media) => {
    media.then((result) => {
        const user = result.user;
        console.log(user);
      }).catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="login-nav px-2">
        <h3 className="text-xl font-bold text-black mb-4">Login With</h3>
        <div>
          <Link>
            <button
              onClick={() => logInForm(googleLogIn())}
              className="rounded-lg w-full border-2 border-blue-500 mb-3 py-2 font-medium text-base relative"
            >
              <AiOutlineGoogle className="absolute top-[13px] left-[50px]"></AiOutlineGoogle>
              Login With Google
            </button>
          </Link>
        </div>
        <div>
          <Link>
            <button onClick={() =>logInForm(GitHubLogIn())} className="rounded-lg w-full border-2 border-black py-2 font-medium text-base relative">
              <AiOutlineGithub className="absolute top-[13px] left-[50px]"></AiOutlineGithub>
              Login With GitHub
            </button>
          </Link>
        </div>
      </div>
      <div className="find-us-nav mt-5">
        <h3 className="text-xl font-bold text-black mb-4">Find Us</h3>
        <div className="find-item border border-slate-300 rounded-lg">
          <div className="facebook flex items-center ml-8 py-3">
            <BiLogoFacebook className="h-[20px] w-[20px] rounded-full bg-slate-300 mr-2 text-[#3B599C]"></BiLogoFacebook>
            <h3>Facebook</h3>
          </div>
          <div className="facebook flex items-center pl-8 border-t border-b border-slate-300 py-3">
            <BiLogoTwitter className="h-[20px] w-[20px] rounded-full bg-slate-300 mr-2 text-[#3B599C]"></BiLogoTwitter>
            <h3>Twitter</h3>
          </div>
          <div className="facebook flex items-center ml-8 py-3">
            <BiLogoInstagram className="h-[20px] w-[20px] rounded-full bg-slate-300 mr-2 text-[#E25072]"></BiLogoInstagram>
            <h3>Instagram</h3>
          </div>
        </div>
      </div>
      <div className="q-zone space-y-5">
        <h3 className="text-xl font-bold text-black mb-4 mt-9">Q-Zone</h3>
        <img className="" src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
      <div
        style={{ background: `url(${newspaper})` }}
        className="h-[50vh] w-[311px] text-center"
      >
        <h3 className="text-white text-xl font-semibold pt-12">
          Create an Amazing Newspaper
        </h3>
        <h4 className="text-base text-white font-medium p-5">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </h4>
        <div>
          <button className="text-white btn btn-error">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
