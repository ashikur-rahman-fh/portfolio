import React from "react";

import Rainfall from "../RainFall";

const RainFallLayout = (props) => {
    
    return (
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <h2 style={{ textAlign: 'center' }}>Under contruction</h2>
            <Rainfall  width={1200} height={400} background="rgb(200, 200, 200)" color="rgba(255, 255, 255, 0.5)" />
        </div>
    );
}

export default RainFallLayout