import React from "react";
import'./Sidebar1.css'
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaRocket } from "react-icons/fa6";
function Sidebar1(){
    return(
        <div className="Sidebar1">
<div className="side">
<h4><FaEnvelopeOpenText /><span>Email me for jobs</span></h4>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ea earum nihil aperiam voluptatibus cumque sit error eos itaque recusandae fuga quod modi ullam sint saepe incidunt, laudantium est tempora.</p>
<input  type="email" placeholder="name@mail.com"/>
<button>Subcribe</button>
</div>
<div className="side">
    <h4><FaRocket /><span>Get noticed faster</span></h4>
    <p>Ut esse eiusmod aute. Sit enim labore dolore. Aute ea fugiat commodo ea foes.</p>
    <button>upload your resume</button>
</div>
        </div>
    )
}
export default Sidebar1