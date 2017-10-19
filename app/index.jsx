import React from 'react'
import ReactDom from 'react-dom'
import {Button} from 'antd';

class App extends React.Component {
    constructor() {
        super()
    }
    render(){
        return (
            <div>
                <section>
                    <Button>Search Github Users</Button>
                </section>
            </div>
        )
    }
}

const app = document.createElement('div')
document.body.appendChild(app)
ReactDom.render(<App />, app)