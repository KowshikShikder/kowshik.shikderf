import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Cover from '../../Component/Cover/Cover'
import About from '../About/AboutSection'
import Contact from '../Contact/Contact'
import Map from '../Map/Map'


export default function Router() {
    return (
        <div>
        
        <Switch>
            <Route exact path="/" component={Cover} />
            <Route path="/contact"  component={Contact} />
            <Route path="/about"  component={About} />
            <Route component={Map}/>
        </Switch>
        
        </div>
    )
}
