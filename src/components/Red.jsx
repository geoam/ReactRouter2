import React from 'react';
import { useState, useEffect } from "react";

export default function Red(){
    const [backgroundColor, setBackgroundColor] = useState("red")

    return(
        <div
        style={{
          backgroundColor: 'red',
          width: '800px',
          height: '800px'
        }}
      />
    );
}