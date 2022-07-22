import {useEffect} from 'react';

export const IndependentComponent = () => {
  useEffect(() => {
    console.log("Redux", "IndependentComponent rerender");
  });
  
  return <h1>IndependentComponent</h1>;
}