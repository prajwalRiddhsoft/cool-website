import React, { useState, useRef } from 'react';

//Declaring an orientatin Enum
enum Orientation {
  LANDSCAPE,
  PORTRAIT
}
//Declaring an orientatin Enum

function App() {

  const [orientation, setOrientation] = useState<Orientation>(Orientation.LANDSCAPE);
  const containerElement = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleOnClick = () => {
    if(orientation === Orientation.LANDSCAPE){
      containerElement.current.classList.add("change-img");
      containerElement.current.style.backgroundSize = "100vh auto";
      containerElement.current.style.backgroundPosition = "0vw 0vh";
      setOrientation(Orientation.PORTRAIT);
    } else {
      containerElement.current.classList.remove("change-img");
      containerElement.current.style.backgroundSize =  "100vw auto";
      containerElement.current.style.backgroundPosition =  "0vw 75vh";
      setOrientation(Orientation.LANDSCAPE);
    }
  }
  const handleOnHover = () => {
    if(orientation === Orientation.LANDSCAPE){
      containerElement.current.style.backgroundSize =  "110vw auto";
      containerElement.current.style.backgroundPosition =  "0vw 45vh";
    }
  }
  const handleRemoveHover = () => {
    if(orientation === Orientation.LANDSCAPE){
      containerElement.current.style.backgroundSize =  "100vw auto";
      containerElement.current.style.backgroundPosition =  "0vw 75vh";
    }
    
  }

  return (
    <div className="App" ref={containerElement}>
      {/*Text area*/}
      <div className='text-container'>
        <h1>Explore the cosmos</h1>
        <p>Hello this is bossman, come along with me, see it for yourself</p>
        <div className='button-section'>
          <button className='learn-more'>Learn more</button>
          <button className='explore' 
            onClick={handleOnClick}
            onMouseOver={handleOnHover}
            onMouseLeave={handleRemoveHover}
          >Explore</button>
        </div>
      </div>
      {/*Text area*/}
    </div>
  );
}

export default App;
