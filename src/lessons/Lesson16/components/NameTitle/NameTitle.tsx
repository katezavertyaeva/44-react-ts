import { useContext } from "react"

import { NameTitleComponent } from "./styles"
import { MainCardContext } from "../MainCard/MainCard"

function NameTitle() {
  const data = useContext(MainCardContext)
  console.log(data)

  const title = `${data.firstName} ${data.lastName}`

  return <NameTitleComponent>{title}</NameTitleComponent>
}

export default NameTitle