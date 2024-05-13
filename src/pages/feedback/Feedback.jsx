import { useLoaderData } from "react-router-dom";
import EachFeedBack from "./EachFeedBack";

const Feedback = () => {
    const message= useLoaderData()
    

    return (
        <div className="mx-[7px] md:mx-[40px] mt-[50px]">
            {
                message.map((oneMessage)=><EachFeedBack key={oneMessage._id} feedback={oneMessage}></EachFeedBack>)
            }
        </div>
    );
};

export default Feedback;