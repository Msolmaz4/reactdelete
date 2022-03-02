import React, { useState} from "react";

const Main = () => {
  const [input, setInput] = useState('');
  const [load, setLoad] = useState([]);

  const handleSubmit=(e)=>{
    e.preventDefault()
    setLoad([...load,{input:input,id:Math.random()}])
  setInput('')
  }
  
const deletehand =(input)=>{
  const updates =[...load].filter((el)=>el.input !==input)
  setLoad(updates)
}

  
  return (
    <div>


      <form onSubmit={handleSubmit}>
        <h1>TODo lIST</h1>
        <input id="outlined-basic" 
        value={input} onChange={(e) => setInput(e.target.value)}
        />
        
        <button  onClick={handleSubmit}   variant="contained">ADD TO</button>
        
      
      {load.map((e) => (
      <div    className="map" >
          <ul>
          <li>
        <h1 className="map">{e.input}
        <button
    
        onClick={()=>deletehand(e.input)}
         className="delete"
         > delete</button>
        </h1>
        </li>
        </ul>
      </div>
    ))

    

  }


      </form>
    </div>
  );
};

export default Main;
