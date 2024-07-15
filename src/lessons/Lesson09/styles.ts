import styled from "@emotion/styled";
import { css } from '@emotion/react';

const flexCommonStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

export const Lesson09Component = styled.div`
  ${flexCommonStyles}
  /* display: flex; */
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  flex: 1;
  gap: 30px;
`

export const GreenLittleBox = styled.div`
 ${flexCommonStyles}
 min-width: 200px;
 min-height: 200px;
 background: #90EA71;
 padding: 20px;
 font-size: 12px;
`

export const BlueBigBox = styled.div`
 ${flexCommonStyles}
  min-width: 400px;
  min-height: 400px;
  background: #71ABEB;
  padding: 30px;
  font-size: 20px;
`

//Пример кода после компиляции с перезаписью свойства gap
// flex-direction: column;
// flex: 1;
// gap: 30px;
// display: flex;
// align-items: center;
// justify-content: center;
// gap: 10px;