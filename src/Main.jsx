import {React, Component} from "react";
import './Main.css';
import  logo from './images/man-min.png';
import  background from './images/background-min.png';



class Main extends Component{
    render(){
        return(
            <main>
                <div className="title">
                    <h1>
                        WELCOME TO MY FIRST REACT APP
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, accusamus. Expedita eveniet rem, hic nam corrupti quaerat? Sit cupiditate iusto placeat veniam incidunt accusamus illo! Repellat facilis quisquam dolorum fuga.
                    </p>
                    <button>Join Me</button>
                </div>

                <div className="logo-backg">
                    <img src={background} alt="Logo Background" />
                    <div className="mylogo">
                        <img src={logo} alt="Logo" />
                    </div>
                </div>
            </main>
        )
    }

}

export default Main