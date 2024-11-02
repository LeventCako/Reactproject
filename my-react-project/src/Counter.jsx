import React, { useState } from 'react';

function Counter() {

    const  [count, setCount] = useState(0);
    return(
        <div className='Faq-container'>
            <p>
              Count: {count} 
            </p>
            <button onClick={() => {
                setCount(count + 1)
            }}>Higher</button>

            <button onClick={() => {
                setCount(count - 1)
            }}>Lower</button>

            <button onClick={() => {
                setCount(0)
            }}>Reset Count</button>
        </div>
    )
}


export default Counter