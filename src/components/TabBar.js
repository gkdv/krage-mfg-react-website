import React, { useState, useEffect } from "react";
import industryCooling from "../utils/industryCooling.jpg";
import industryElectric from "../utils/industryElectric.jpg";
import background1 from "../utils/industryElectric.jpg";
import industryConstruction from "../utils/industryConstruction.jpg";

export default function TabBar(props) {
  const titles = [
    "Commercial & Industrial Construction",
    "Electric Utility",
    "Commercial Cooling & Heating",
  ]
  const backgrounds = {
    industryConstruction,
    industryElectric,
    industryCooling,
  };
  const infos = [
    'With heavy plate fabrication capability and American Welding Society certified welding services, ABC SHEET METAL provides a wide variety of parts and assemblies used in the oil & gas industries. Products include a multitude of both on and offshore drilling rig and support equipment components. Other products include tanks, covers, brackets, shrouds, control panels, guards, guides, trays, shims, and frames.',
    'Krage manufactures components and assemblies used by various electrical and electronic equipment OEMs. Products include PCB holders and brackets, electrical enclosures, automated assembly equipment covers and frames, robotic machine frames and enclosures, motor mount brackets, adapter plates, and electronic frames and chassis, and machine tool covers.',
    'Krage has the tools and experience necessary to produce components used in demanding industrial and commercial applications. From high temperature burner and oven assemblies, to extreme low temperature cryogenic tanks and components, ABC can meet the needs of this industry. Parts and assemblies manufactured that fall into the heating & cooling industry include: tanks, pans, dampers, louvers, ducting, transitions, elbows, heat exchangers, oven chambers, burner brackets, manifolds, and covers.',
  ]

  // const imageList = [{
  //   electricUtility: [image1, image2, image3, image4],
  //   coolingUtility: [image5, image6, image7, image8],
  //   constructionUtility: [image9, image10, image11, image12],
  // }]

  const [title, setTitle] = useState(titles[0]);
  const [background, setBackground] = useState(backgrounds.industryConstruction);
  const [info, setInfo] = useState(infos[0]);
  const [images, setImages] = useState();

  useEffect(() => {
    // console.log('pizza')
    switch (title) {
      case 'Commercial & Industrial Construction':
        setBackground(backgrounds.industryConstruction)
        setInfo(infos[0])
        break;
      case 'Electric Utility':
        setBackground(backgrounds.industryElectric)
        setInfo(infos[1])
        break;
      case 'Commercial Cooling & Heating':
        setBackground(backgrounds.industryCooling)
        setInfo(infos[2])
      break;
      default:
        setBackground(backgrounds.industryConstruction)
        setInfo(infos[0])
        console.log('default switch case')
    }
  })

  function handleClick(value) {
    // e.preventDefault();
    console.log(value);
    setTitle(value)
  }

  const tabs = props.Tabs;
  const listTabs = tabs.map((tab) => (
    <div key={tab.toString()} data={tab.toString()} style={styleDivChild}>
      <button value={tab} onClick={e => handleClick(e.target.value)}>
        {tab}
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
