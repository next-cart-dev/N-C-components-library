import React from "react";
export type ButtonProps = {
    text:string;
}


export const Button: React.FC<ButtonProps> = ({text}) =>{
    return(
        <button   style={{
        backgroundColor: 'blueviolet',
        color: 'white',
        fontSize: '17px',
        padding: '10px 16px',
        borderRadius: '99999px',
      }}>
            {text}
        </button>
    )
}

