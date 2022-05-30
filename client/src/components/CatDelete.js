import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CatDelete = ({deleteHandler}) => {
    const location = useLocation();
    const cat = location.state.cat;

    const name = useState(cat.name);
    const [choose, setChoose] = useState(false);
    const navigate = useNavigate();

    const formHandler = (e) => {
        e.preventDefault();
        console.log("CHOOSE: ", choose);
        if (choose){
            deleteHandler(cat);
        }
        navigate('/cats');
    }

    return(
        <form onSubmit={formHandler}>
            <div>
                <label>Delete the cat named {name}?</label>
            </div>
           

            <button
                onClick={()=>{setChoose(true)}}
                style={{
                background: "red",
                color: "white",
                padding: "10px",
                marginRight: "4px",
                border: "none",
                cursor: "pointer"
                }}
            >
                Yes
            </button>
            <button
                style={{
                background: "green",
                color: "white",
                padding: "10px",
                marginLeft: "4px",
                border: "none",
                cursor: "pointer"
                }}
            >
                No
          </button>
        </form> 
    );

}

export default CatDelete;