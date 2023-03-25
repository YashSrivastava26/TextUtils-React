import React from 'react';

function Alerts(props) {
    const convertFirstCharToUpperCase=(word)=>{
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    return (
        <div style={{height: '70px'}}>
            {props.alert && 
            <div class={`alert alert-${props.alert.variant} alert-dismissible fade show`} role="alert">
            <strong>{convertFirstCharToUpperCase(props.alert.variant)}</strong> : {props.alert.msg}
            </div>}
        </div>
    );
}


export default Alerts;