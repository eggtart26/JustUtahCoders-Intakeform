import React from 'react';


var FormPage = (props) => {
  return (
    <div>
      <p>Contact US</p>
      
      <div>
      <label>Name</label><br/>
      <input onChange={props.handleAddName}></input>
      </div>

      <div>
      <label>Email</label><br/>
      <input onChange={props.handleAddEmail}></input>
      </div>

      <div>
      <label>Birth date</label><br/>
      <input onChange={props.handleAddBirthDate}></input>
      </div>

      <div>
      <label>
      <input type="checkbox" onChange={props.handleAgreeBox}/>
      <span>I agree to be contacted via email.</span>
      </label>
      </div>

      <button onClick={props.handleClear}>Clear</button>
      <button onClick={props.handleSubmit}>Submit</button>



    </div>


  )
}


export default FormPage;



