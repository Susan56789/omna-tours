import React, { Component } from 'react';
import './TourList.scss';
import Tour from '../Tour/Tour';
import { TourData } from './TourData';

export default class TourList extends Component {

    state = {
        tours: TourData
    }


    render() {
     const {tours} = this.state;

        return (
            <>
              <section className='tourlist'>
                 {
                     tours.map(tour =>{
                         return(
                             <Tour key={tour.id} tour={tour}/>
                         )
                     })
                 } 
            </section>  
            </>
        )
    }
}
