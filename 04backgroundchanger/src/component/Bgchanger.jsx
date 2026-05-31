import { useRef } from 'react'


function Bgchanger() {
  const rootRef = useRef(document.documentElement);

  const changeColor = (color) => {
    rootRef.current.style.backgroundColor = color;
  };


}

export default Bgchanger