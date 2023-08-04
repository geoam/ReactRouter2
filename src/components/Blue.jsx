import React from 'react';

import { useState, useEffect } from "react";

export default function Blue(){
    const [backgroundColor, setBackgroundColor] = useState("blue")

    return(
        <div
        style={{
          backgroundColor: 'blue',
          width: '800px',
          height: '800px'
        }}
      />
    );
}