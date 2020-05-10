import React, { useState, useEffect, useCallback } from "react";
import prototypeContractManu from "../utils/prototypeContractManu.JPG";
import laserCuttingCapabilities from "../utils/laserCuttingCapabilities.JPG";
import turretPunchingCapabilities from "../utils/turretPunchingCapabilities.JPG";
import cncBendingCapabilities from "../utils/cncBendingCapabilities.JPG";
import cncMachiningCapabilities from "../utils/cncMachiningCapabilities.JPG";
import weldingCapabilities from "../utils/weldingCapabilities.JPG";
import powderCoatingCapabilities from "../utils/powderCoatingCapabilities.JPG";
import assemblyCapabilities from "../utils/assemblyCapabilities.JPG";
import controlPanelCapabilities from "../utils/controlPanelCapabilities.JPG";
import customFabCapabilities from "../utils/customFabCapabilities.JPG";
import customEncloserCapabilities from "../utils/customEncloserCapabilities.JPG";
import industryElectric from "../utils/industryElectric.jpg";
import background1 from "../utils/industryElectric.jpg";
import industryConstruction from "../utils/industryConstruction.jpg";
import image1 from "../utils/typical_parts29.jpg";
import image2 from "../utils/typical_parts11.JPG";
import image3 from "../utils/typical_parts30.JPG";
import image4 from "../utils/typical_parts31.JPG";
import image5 from "../utils/typical_parts32.JPG";
import image6 from "../utils/typical_parts34.JPG";
import image7 from "../utils/typical_parts3.JPG";
import image8 from "../utils/typical_parts3.JPG";
import image9 from "../utils/typical_parts33.JPG";
import image10 from "../utils/typical_parts35.JPG";
import image11 from "../utils/typical_parts3.JPG";
import image12 from "../utils/typical_parts3.JPG";

export default function TabBarCapabilities(props) {
  const titles = [
    "PROTOTYPING & CONTRACT MANUFACTURING",
    "LASER CUTTING",
    "TURRET PUNCHING",
    "CNC BENDING",
    "CNC MACHINING",
    "FORM ROLLING",
    "WELDING",
    "POWDER COATING",
    "ASSEMBLY",
    "CONTROL & RELAY PANEL FABRICATION",
    "CUSTOM FABRICATION & ENGINEERING DESIGN",
    "CUSTOM ENCLOSURES",
  ];
  const backgrounds = {
    industryConstruction,
    industryElectric,
    prototypeContractManu,
    laserCuttingCapabilities,
    turretPunchingCapabilities,
    cncBendingCapabilities,
    cncMachiningCapabilities,
    weldingCapabilities,
    powderCoatingCapabilities,
    assemblyCapabilities,
    controlPanelCapabilities,
    customFabCapabilities,
    customEncloserCapabilities
  };
  const infos = [
    "With heavy plate fabrication capability and American Welding Society certified welding services, ABC SHEET METAL provides a wide variety of parts and assemblies used in the oil & gas industries. Products include a multitude of both on and offshore drilling rig and support equipment components. Other products include tanks, covers, brackets, shrouds, control panels, guards, guides, trays, shims, and frames.",
    "Krage manufactures components and assemblies used by various electrical and electronic equipment OEMs. Products include PCB holders and brackets, electrical enclosures, automated assembly equipment covers and frames, robotic machine frames and enclosures, motor mount brackets, adapter plates, and electronic frames and chassis, and machine tool covers.",
    "Krage has the tools and experience necessary to produce components used in demanding industrial and commercial applications. From high temperature burner and oven assemblies, to extreme low temperature cryogenic tanks and components, ABC can meet the needs of this industry. Parts and assemblies manufactured that fall into the heating & cooling industry include: tanks, pans, dampers, louvers, ducting, transitions, elbows, heat exchangers, oven chambers, burner brackets, manifolds, and covers.",
  ];

  const imageList = {
    electricUtility: [image1, image2, image3, image4],
    coolingUtility: [image5, image6, image7, image8],
    constructionUtility: [image9, image10, image11, image12],
  };

  const [title, setTitle] = useState(titles[0]);
  const [background, setBackground] = useState(backgrounds.industryConstruction);
  const [info, setInfo] = useState(infos[0]);
  const [images, setImages] = useState(imageList.constructionUtility);


  function handleClick(value) {
        switch (value) {
      case "PROTOTYPING & CONTRACT MANUFACTURING":
        setTitle(value)
        setBackground(backgrounds.prototypeContractManu);
        setInfo(infos[0]);
        setImages(imageList.coolingUtility)
        break;
      case "LASER CUTTING":
        setTitle(value)
        setBackground(backgrounds.laserCuttingCapabilities);
        setInfo(infos[0]);
        setImages(imageList.coolingUtility)
        break;
      case "TURRET PUNCHING":
        setTitle(value)
        setBackground(backgrounds.turretPunchingCapabilities);
        setInfo(infos[0]);
        setImages(imageList.coolingUtility)
        break;
      case "CNC BENDING":
        setTitle(value)
        setBackground(backgrounds.cncBendingCapabilities);
        setInfo(infos[0]);
        setImages(imageList.coolingUtility)
        break;
      case "CNC MACHINING":
        setTitle(value)
        setBackground(backgrounds.cncMachiningCapabilities);
        setInfo(infos[0]);
        setImages(imageList.coolingUtility)
        break;
      case "WELDING":
        setTitle(value)
        setBackground(backgrounds.weldingCapabilities);
        setInfo(infos[0]);
        setImages(imageList.coolingUtility)
        break;
      case "POWDER COATING":
        setTitle(value)
        setBackground(backgrounds.powderCoatingCapabilities);
        setInfo(infos[0]);
        setImages(imageList.coolingUtility)
        break;
      case "ASSEMBLY":
        setTitle(value)
        setBackground(backgrounds.assemblyCapabilities);
        setInfo(infos[0]);
        setImages(imageList.coolingUtility)
        break;
      case "CONTROL & RELAY PANEL FABRICATION":
        setTitle(value)
        setBackground(backgrounds.controlPanelCapabilities);
        setInfo(infos[0]);
        setImages(imageList.coolingUtility)
        break;
      case "CUSTOM FABRICATION & ENGINEERING DESIGN":
        setTitle(value)
        setBackground(backgrounds.customFabCapabilities);
        setInfo(infos[0]);
        setImages(imageList.coolingUtility)
        break;
      case "CUSTOM ENCLOSURES":
        setTitle(value)
        setBackground(backgrounds.customEncloserCapabilities);
        setInfo(infos[0]);
        setImages(imageList.coolingUtility)
        break;
      default:
        setTitle(titles[0])
        setBackground(backgrounds.industryConstruction);
        setInfo(infos[0]);
        setImages(imageList.constructionUtility)
        console.log("default switch case");
    }
  }



  const tabs = props.Tabs;
  const listTabs = tabs.map((tab) => (
    <div className='col-md' key={tab.toString()} data={tab.toString()} style={styleDivChild}>
      <button style={buttonStyle} value={tab} onClick={(e) => handleClick(e.target.value)}>
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
      {/* <div className="row" style={titleStyle}>
        {title}
      </div> */}
      <div className="row">
        <text style={DescTextStyle}>{info}</text>
      </div>
      <div className="row" style={styleDivSmallRow}>
        <div className="col-sm">
          <img src={images[0]} alt="golf" style={smallImageStyle} />
        </div>
        <div className="col-sm">
          <img src={images[1]} alt="golf" style={smallImageStyle} />
        </div>
        <div className="col-sm">
          <img src={images[2]} alt="golf" style={smallImageStyle} />
        </div>
        <div className="col-sm">
          <img src={images[3]} alt="golf" style={smallImageStyle} />
        </div>
      </div>
    </>
  );
}

const styleDivChild = {
  display: 'flex',
  flexGrow: "1",
  justifyContent: "center",
  alignItems: 'center',
  backgroundColor: 'silver',
  borderStyle: 'outset'
};
const styleDivParent = {
  display: "flex",
  justifyContent: "center",
  // flexDirection: 'column',
  // padding: "0% 7%",
  margin: '4% 0% 0% 0%',

};
const styleDivSmallRow = {
  display: "flex",
  justifyContent: "center",
  padding: "5% 2%",
  // backgroundImage: 'linear-gradient(to bottom left, white , silver)'
};
const titleStyle = {
  padding: "3%",
  fontWeight: 'bold',
  fontSize: 'large',
  // backgroundImage: 'linear-gradient(silver , white)',
};
const smallImageStyle = {
  maxWidth: "100%",
  maxHeight: "100%",
  padding: "0%"
};
const buttonStyle = {
  backgroundColor: 'silver',
  borderStyle: 'none',
  padding: '5% 0%',
  color: 'black',
  fontWeight: 'bold',
  outline: 'none',
  backgroundColor: 'white',
//   padding: '4% 4%', 
  margin: '4% 4%',
  backgroundColor: 'silver'
    // backgroundImage: 'linear-gradient(silver , white)',
}