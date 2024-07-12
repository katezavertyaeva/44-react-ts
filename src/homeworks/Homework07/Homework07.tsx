import {v4} from 'uuid'

import './styles.css'
import { cars } from './data'
import { Car } from './types'

function Homework07() {

  const carsElements = cars.map((car: Car) => {
    return (
      <div className='car-card' key={v4()}>
        <div>{car.brand}</div>
        <div>{car.price}$</div>
        <div>{car.isDiesel ? "Diesel" : 'Petrol'}</div>
      </div>
    )
  })

  return (
    <div className='homework07-component'>
      {carsElements}
    </div>
  )
}

export default Homework07