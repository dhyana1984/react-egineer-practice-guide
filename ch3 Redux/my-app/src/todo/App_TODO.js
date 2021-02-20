import React from 'react'
import Title from './title'
import Create from './create'
import Todos from './todo'
import State from './state'
import { useSelector } from 'react-redux'

function App() {
    const data = useSelector(state => state)
    return (
        <div id="todoapp">
            <Title />
            <div className="content">
                <Create />
                {
                    data.length > 0 &&
                    <>
                        <Todos />
                        <State />
                    </>
                }

            </div>
        </div>
    )
}

export default App;