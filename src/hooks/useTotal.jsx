import { useState } from "react"

export const useTotal = (total=0) => {

  const [total, setTotal] = useState (total);

  const increment = () => {
    setTotal (total + item.price)
  }

  return (
    <div>useTotal</div>
  )
}
