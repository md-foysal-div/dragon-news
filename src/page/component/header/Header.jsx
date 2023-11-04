import Marquee from "react-fast-marquee";
import logo from "/src/assets/logo.png";
import moment from "moment";
const Header = () => {
  return (
    <div>
      <div className="text-center mt-6">
        <img className="mx-auto my-4" src={logo} alt="" />
        <p className="my-5">Journalism Without Fear or Favour</p>
        <p className="mb-4">{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="flex bg-gray-200 py-2 pl-2 rounded-lg">
        <div className="flex justify-center items-center">
          <button className="btn btn-error">Latest</button>
        </div>
        <div className="flex justify-center items-center ">
          <Marquee className="text-base font-medium" >
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Header;
