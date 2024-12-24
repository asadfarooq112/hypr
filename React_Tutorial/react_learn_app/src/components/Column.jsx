import React from "react"; 

function Column ({title, tasks}) {
    return (
        <div style={{color:'red'}}>

            <h2> {title} </h2>
            
            <ul style={{backgroundColor: "blue"}}>

                {
                    tasks.map((task) => (
                        <li key={task.id} style={{color:'green'}}>  {task.name}   </li>

                    ))
                }

            </ul>




        </div>
    )
}

export default Column;