import React from 'react'
import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { render } from 'react-snapshot'

render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
