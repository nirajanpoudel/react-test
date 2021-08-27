import ReactDOM from 'react-dom';
import React, { useState,useContext,useEffect } from 'react';

import {Component} from 'react';

export default function Hoc(HocComponent){

    return class extends Component{

        render(){
            return (
                <div className="b">
                    <HocComponent></HocComponent>
                </div>

            );
        }
    } 
}