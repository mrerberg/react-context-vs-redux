import { useEffect } from "react"

export const IndependentComponent = () => {
  useEffect(() => {
    console.log("Context", "IndependentComponent rerender");
  })

  return <h1>IndependentComponent</h1>;
}