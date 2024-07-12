import './styles.css'
import { BoxInfo, ButtonStyledComponent } from './styles'

function Lesson08() {
  // 2 способ - inline стили - в отдельном объекте
  const textStyleObj = {
    fontSize: '24px',
    color: '#f3eaf2'
  }

  return (
    //1 способ - отдельный css файл
    <div className='lesson08-component'>
      {/* 2 способ - inline стили */}
      {/* <p style={{ fontSize: '24px', color: '#f3eaf2' }}>Inline styles example</p> */}
      <p style={textStyleObj}>Inline styles example</p>
      <div style={textStyleObj}>Inline styles example - second element</div>
      {/* 3 способ - emotion */}
      <BoxInfo>My first styled component</BoxInfo>
      <ButtonStyledComponent >Custom button</ButtonStyledComponent>
      <ButtonStyledComponent main>Custom button main</ButtonStyledComponent>
      <ButtonStyledComponent close >Close button</ButtonStyledComponent>
    </div>
  )
}

export default Lesson08