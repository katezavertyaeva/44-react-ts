import { Homework08Component } from './styles'
import Button from '../../components/Button/Button'

function Homework08() {
  return (
    <Homework08Component>
      <Button disabled={false} name='Simple button' onButtonClick={() => { console.log('Button simple work!') }} />
      <Button disabled={true} name='Disabled button' onButtonClick={() => { console.log('Button disabled work!') }} />
    </Homework08Component>
  )
}

export default Homework08