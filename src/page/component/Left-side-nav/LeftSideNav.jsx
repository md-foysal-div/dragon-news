import { useEffect, useState } from "react";
import { GrCalendar } from 'react-icons/gr';
import { Link } from "react-router-dom";
import imgOne from '../../../assets/1.png'
import imgTwo from '../../../assets/2.png'
import imgThree from '../../../assets/3.png'
import moment from "moment";

const LeftSideNav = () => {
  const [caterogy, setcaterogy] = useState([]);
  useEffect(() => {
    fetch("../../../../public/categories.json")
      .then((ref) => ref.json())
      .then((data) => setcaterogy(data));
  }, []);
  return (
    <div>
      <div className="left-Caterogy-nav">
        <h3 className="text-xl font-bold text-black mb-4 ">All Caterogy</h3>
        <h3 className="w-full h-16 bg-[#E7E7E7] text-xl font-semibold text-center leading-[64px] text-black mb-4 ">
          National News
        </h3>
        <div className="space-y-7">
          {caterogy.map((item) => (
            <Link className="block justify-center ml-16" key={item.id}>{item.name}</Link>
          ))}
        </div>
      </div>
       <div className="caterogy-item mt-8">
         <img className="" src={imgOne} alt="" />
         <h2 className="text-lg font-semibold pr-[33px] mb-4">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
         <div className="flex gap-4 items-center">
            <h4>Soprt</h4>
             <GrCalendar></GrCalendar>
             {moment().format(" MMM D YYYY")}
         </div>
       </div>
       <div className="caterogy-item mt-8">
         <img className="" src={imgTwo} alt="" />
         <h2 className="text-lg font-semibold pr-[33px] mb-4">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
         <div className="flex gap-4 items-center">
            <h4>Soprt</h4>
             <GrCalendar></GrCalendar>
             {moment().format(" MMM D YYYY")}
         </div>
       </div>
       <div className="caterogy-item mt-8">
         <img className="" src={imgThree} alt="" />
         <h2 className="text-lg font-semibold pr-[33px] mb-4">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
         <div className="flex gap-4 items-center">
            <h4>Soprt</h4>
             <GrCalendar></GrCalendar>
             {moment().format(" MMM D YYYY")}
         </div>
       </div>
    </div>
  );
};

export default LeftSideNav;
