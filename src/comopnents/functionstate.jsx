import React, {useState} from 'react';

const Functionstate = () => {
    const [count, numberUpdate]=useState({number:0})
    return (
        <div>
            <h1>Counter:{count.number}</h1>
            <button onClick={()=>numberUpdate({number:count.number +1})}>Increase</button>
            <button onClick={()=>numberUpdate({number:count.number -1})} className='decrease'>Decrease</button>
        </div>
    );
}

export default Functionstate;
