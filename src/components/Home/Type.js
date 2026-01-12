import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "AI Product Builder",
                    "Global Retail Scaler",
                    "MS AI School Graduate",
                    "0-to-1 Product Maker",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
