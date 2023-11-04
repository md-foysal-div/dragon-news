import { useParams } from "react-router-dom";
import Header from "../component/header/Header";
import Nav from "../component/navber/Nav";

const NewsDetails = () => {
    const {_id} = useParams()
    
    return (
        <div>
           <Header></Header>
           <Nav></Nav>
           <p> id{_id}</p>
           <h1>details part</h1>
           
        </div>
    );
};

export default NewsDetails;