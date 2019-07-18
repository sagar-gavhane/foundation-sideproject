import React from 'react'
import ReactDOM from 'react-dom'
import Home from './screens/Home'
import * as serviceWorker from "./serviceWorker"
import './styles/global.css'

ReactDOM.render(<Home />, document.getElementById('root'))
serviceWorker.register()
