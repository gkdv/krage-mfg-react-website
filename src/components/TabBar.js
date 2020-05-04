import React, { useState, useEffect } from "react";
import industryCooling from "../utils/industryCooling.jpg";
import industryElectric from "../utils/industryElectric.jpg";
import background1 from "../utils/industryElectric.jpg";
import industryConstruction from "../utils/industryConstruction.jpg";

export default function TabBar(props) {
  const backgrounds = {
    industryCooling,
    industryElectric,
    industryConstruction,
  };
  // const imageList = [{
  //   electricUtility: [image1, image2, image3, image4],
  //   coolingUtility: [image5, image6, image7, image8],
  //   constructionUtility: [image9, image10, image11, image12],
  // }]

  const [title, setTitle] = useState("Electric Utility");
  const [background, setBackground] = useState(backgrounds.industryElectric);
  const [info, setInfo] = useState(
    "Krage manufactures components and assemblies used by various electrical and electronic equipment OEMs. Products include PCB holders and brackets, electrical enclosures, automated assembly equipment covers and frames, robotic machine frames and enclosures, motor mount brackets, adapter plates, and electronic frames and chassis, and machine tool covers."
  );
  const [images, setImages] = useState();

  const tabs = props.Tabs;
  const listTabs = tabs.map((tab) => (
    <div key={tab.toString()} data={tab.toString()} style={styleDivChild}>
      <button onClick={() => setTitle(this.key.value)}>
        <h4>{tab}</h4>
      </button>
    </div>
  ));

  const DescTextStyle = {
    padding: "15% 10%",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    color: "white",
    fontWeight: "bold",
  };

  return (
    <>
      <div className="row" style={styleDivParent}>
        {listTabs}
      </div>
      <div className="row" style={titleStyle}>
        {title}
      </div>
      <div className="row">
        <text style={DescTextStyle}>{info}</text>
      </div>
      <div className="row"></div>
    </>
  );
}

const styleDivChild = {
  flexGrow: "1",
  justifyContent: "center",
};
const styleDivParent = {
  display: "flex",
  justifyContent: "center",
  padding: "0% 7%",
};
const titleStyle = {
  padding: "3%",
};
