import React from 'react'

export default function Alert(props) {
  function capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
   return (
    // 12. Now we check if its null then props.alert will be false && would not proceed further, if it has some value then it would be return the div. 
   props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    {/*13. we are setting the props.alert.type here since we have different bootstrap alert types, success , warning, danger ,etc. and props.alert.type works because alert is an object. also we are showing the alert message below by capitalizing the first letter of type message just for fun not of any need. */}
        <strong>{capitalize(props.alert.type)}</strong> : {props.alert.message}
    </div>
  )
}
