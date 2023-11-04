import { useLoaderData } from "react-router-dom";
import LeftSideNav from "../component/Left-side-nav/LeftSideNav";
import RightSideNav from "../component/Right-side-nav/RightSideNav";
import Header from "../component/header/Header";
import Nav from "../component/navber/Nav";
import NewsCard from "../component/newsCard/NewsCard";
import { useState } from "react";

const Home = () => {
  const [show,  isShow] = useState(true)
  const data = useLoaderData();
  return (
    <div>
      <Header />
      <Nav></Nav>
      <div className="grid grid-cols-4 gap-3">
        <div className="">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="col-span-2 ">
          {
             show ? data.slice(0,3).map((itemData) => (<NewsCard key={itemData._id} itemData={itemData}></NewsCard>)):
             data.map((itemData) => (<NewsCard key={itemData._id} itemData={itemData}></NewsCard>))
          }
          <div className="text-center my-5">
           {
              data.length > 2 &&  <button onClick={() =>isShow(!show) } className="btn btn-success "> Show more</button>
           }
          </div>
        </div>
        <div className="">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
