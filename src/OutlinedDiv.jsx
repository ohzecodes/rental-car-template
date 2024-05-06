import React from 'react';
import './OutlinedDiv.css';

export default function OutlinedDiv({ label, children,style }) {
    return (
      <div className="outlined-div" style={style}>
        <label htmlFor="outlined-basic">{label}</label>
        {children}
      </div>
    );
  }
