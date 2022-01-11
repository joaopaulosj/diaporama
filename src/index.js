import React from "react";
import ReactDOM from "react-dom";
import DeclarativeDiaporamaWrapper from "./DeclarativeDiaporamaWrapper";
import TextSlide from "./TextSlide";

function App() {
  const imageUrls = [
    "https://s3-ap-southeast-2.amazonaws.com/homepass-com/prod/bluproperty/1.jpg"
    // "https://s3-ap-southeast-2.amazonaws.com/homepass-com/prod/bluproperty/2.jpg",
    // "https://s3-ap-southeast-2.amazonaws.com/homepass-com/prod/bluproperty/3.jpg"
  ];
  const imageUrlsGroup2 = [
    "https://s3-ap-southeast-2.amazonaws.com/homepass-com/prod/bluproperty/2.jpg",
    "https://s3-ap-southeast-2.amazonaws.com/homepass-com/prod/bluproperty/3.jpg"
  ];
  const primaryColor = "#0205d5";
  const accentColor = "#EF4143";

  return (
    <div className="App">
      <DeclarativeDiaporamaWrapper
        primaryColor={primaryColor}
        accentColor={accentColor}
        imageDurationMs={4500}
        transitionDurationMs={2500}
        width={"100%"}
        height={"100%"}
      >
        <TextSlide
          backgroundColor={primaryColor}
          color={accentColor}
          font="serif"
          text={"Text content 1"}
        />

        {imageUrls.map(imageUrl => {
          return <img key={imageUrl} alt="" src={imageUrl} />;
        })}

        <TextSlide
          backgroundColor={primaryColor}
          color={accentColor}
          font="serif"
          text={"More textual content"}
        />

        {imageUrlsGroup2.map(imageUrl => {
          return <img key={imageUrl} alt="" src={imageUrl} />;
        })}
      </DeclarativeDiaporamaWrapper>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
