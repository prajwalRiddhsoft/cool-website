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
      containerElement.current.style.top = "-30vw";
      containerElement.current.style.left = "-100vw";
      containerElement.current.style.transform = "rotate(90deg)";
      setOrientation(Orientation.PORTRAIT);
    } else {
      containerElement.current.style.top = "50vh";
      containerElement.current.style.left = "-20vw";
      containerElement.current.style.transform = "rotate(30deg)";
      setOrientation(Orientation.LANDSCAPE);
    }
  }
  const handleOnHover = () => {
    if(orientation === Orientation.LANDSCAPE){
      containerElement.current.style.top = "50vh";
      containerElement.current.style.transform = "rotate(30deg)";
    }
  }
  const handleRemoveHover = () => {
    if(orientation === Orientation.LANDSCAPE){
      containerElement.current.style.top = "70vh";
      containerElement.current.style.transform = "rotate(-30deg)";
    }
    
  }

  return (
    <div className="App">

      <div className="top-container">
        <div className='img-area' ref={containerElement}></div>

        <div className='container'>
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
      </div>
      
    </div>
  );
}

export default App;
