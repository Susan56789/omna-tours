import React, { Component } from 'react';
import './Tour.scss';
import nairobi from '../../images/Nairobi.jpg';

export default class Tour extends Component {
    render() {
        return (
            <>
              <article className='tour'>
                  <div className='img-container'>
                    <img src={nairobi} alt ='nairobi city' />
                  <span className='close-btn'>
                      <i className='fas fa-window-close' />
                  </span>
                  </div>
                  <div className='tour-info'>
                      <h3>NAIROBI</h3>
                      <h4>Nairobi City Tour</h4>
                      <h5>Info 
                          <span>
                             <i className='fas fa-caret-square-down'/> 
                              </span></h5>
                    <p>Come Tour The beautiful sights of Nairobi .</p>
                  </div>
            </article>  
            </>
        )
    }
}
