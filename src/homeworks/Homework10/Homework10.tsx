import { ChangeEvent, useState } from "react"
import Input from "../../components/Input/Input"
import { Homework10Component, FormWrapper, ResultsWrapper } from "./styles"
import Button from "../../components/Button/Button"
import ResultBlock from "../../components/ResultBlock/ResultBlock"


function Homework10() {
  const [firstNoteValue, setFirstNoteValue] = useState<string>('')
  const [secondNoteValue, setSecondNoteValue] = useState<string>('')
  const [firstResult, setFirstResult] = useState<string>('')
  const [secondResult, setSecondResult] = useState<string>('')
  const [isShowBlock, setIsShowBlock] = useState<boolean>(false)


  const firstNoteOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    console.log(event)
    setFirstNoteValue(event.target.value)
  }

  const secondNoteOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSecondNoteValue(event.target.value)
  }

  const showResult = () => {
    setFirstResult(firstNoteValue)
    setSecondResult(secondNoteValue)
    //!!!
    if (firstNoteValue !== '' || secondNoteValue !== '') {
      setIsShowBlock(!isShowBlock)
    }
  }

  console.log(isShowBlock)

  return (
    <Homework10Component>
      <FormWrapper>
        <Input
          name='first-note'
          placeholder="Enter first note"
          value={firstNoteValue}
          onChange={firstNoteOnChange}
        />
        <Input
          name='second-note'
          placeholder="Enter second note"
          value={secondNoteValue}
          onChange={secondNoteOnChange}
        />
        <Button name="SHOW/HIDE RESULTS" onButtonClick={showResult} />
      </FormWrapper>
      {isShowBlock && <ResultsWrapper>
        {firstResult !== '' && <ResultBlock resultName="first note" result={firstResult} />}
        {secondResult && <ResultBlock resultName="second note" result={secondResult} />}
      </ResultsWrapper>}
    </Homework10Component>
  )
}

export default Homework10