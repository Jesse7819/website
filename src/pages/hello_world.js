import React from "react";
import { greetingPrompt, getallenFunction } from "../components/hello_world";

const HelloWorld = () => {
    return (
        <div className="helloWorld">
            <p className="intro"></p>
            <button type="button" onClick={greetingPrompt}>Hello World</button>
            <br />
            <button type="button" onClick={getallenFunction}>Getallen</button>

            <br /><br />
            <div className="getallenUitkomst">
                <div className="eersteGetal"></div>
                <div className="tweedeGetal"></div>
                <br />
                <div className="optellenUitkomst"></div>

                <div className="aftrekUitkomst"></div>

                <div className="vermenigvuldigUitkomst"></div>

                <div className="delenUitkomst"></div>
                <br />
            </div>
        </div>
    );
};

export default HelloWorld;