import React, { useState, useEffect, useCallback } from "react";
import CapabilitiesHighlights from "./CapabilitiesHighlights";
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
    "PROTOTYPING",
    "LASER CUTTING",
    "TURRET PUNCHING",
    "CNC BENDING",
    "CNC MACHINING",
    "FORM ROLLING",
    "WELDING",
    "POWDER COATING",
    "ASSEMBLY",
    "ELECTRIC PANEL",
    "ENGINEERING DESIGN",
    "ENCLOSURES",
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
    "Trumpf CO2 lasers with automatic load and unload operate unattended 24 hours/day. The laser is capable of cutting0.50″ steel. Murata and Strippit turret presses can accommodate 60″ wide material and punch up to 0.25″ thick material. The Murata is equipped with an automatic load and piece part unload for lights out operation. Efficient part nesting insures maximum sheet usage.",
    "need info for turret punching",
    "Krage Manufacturing utilizes Bystronic Xpert and PR press brakes. Each brake is equipped with 4 – 6 axis backgauging, hydraulic clamping, automatic crowning and material thickness compensation. The largest is an Xpert 250 ton 13.5′ brake. All brakes are programmed in the office to insure maximum floor productivity and effective first part quality. We have an experienced group of operators that along with seasoned programmers can handle the most difficult bending applications.",
    "need info for cnc machining",
    "need info for form rolling",
    "Several weld stations are operated by experienced welders utilizing Lincoln Power MIG welders and Invertec TIG welders. Krage Mfg. excels at welding galvanized steel along with most other types of material. The Motoman ArcWorld robotic welding cell can accommodate a 10′ long part with a 1,100 lb. part capacity. The robotic cell has a high speed indexing turntable and rotary part positioner.",
    "Krage Mfg. has a complete powder coating and painting operation. Skilled coaters operate Nordson powder guns in multiple booths. A three stage phosphate pretreatment system insures excellent coating adhesion and corrosion protection. Salt spray tests exceed 1,000 hours for several powder applications. Multiple ovens are employed with capacities of 10’H x 10’W x 16′ or more in length. Liquid painting operations use the same pretreatment method as powder coating. A conveyor system provides an efficient part flow from pretreatment through paint and into part drying. Media blasting is used for previously coated parts or to remove mill scale. The blast booth can handle large frames up to 16′ long. Longer parts can be handled as well. All blasted parts are pretreated with the 3 stage phosphate system to again insure maximum coating adhesion and corrosion protection.",
    "After Krage Mfg. has fabricated your parts we have the in house capability of assembling your products. We will manage your unique assembly requirements and integrate specified purchased parts into the final assembly. Whether a simple or complex turn-key assembly Krage Mfg. has a team of mechanical and electrical technicians to handle your requirements.",
    "Control and Relay Panel Fabrication Western Control Systems is uniquely suited to fully integrate your substation electrical needs. We can provide all your power protection monitoring and control relay panels through vertical, dual or duplex switchboards, marshalling and summation enclosures. From a single protective relay panel to the complexity of a walk-in power distribution center, we provide quality protection, control and communications solutions. Our products are designed to perform in this rugged, demanding and critical environment. Western Control Systems has uniquely designed DC power, battery racks and equipment to meet your requirements. We can combine multiple requirements into a rugged outdoor rated unit for smaller substations eliminating the need for large E-houses or buildings. It is through these innovations that WesternControl Systems prides itself as a customer driven organization that actively listens to you.",
    "Custom Fabrication and Engineering Design Western Control Systems offers engineering firms, OEM’s, system integrators, end users and contractors custom control panel fabrication and specialized assemblies to meet your needs. Custom fabrication saves you valuable labor and time, eliminating in-house fabrication with ready to use materials to your dock. Fully integrated engineering and manufacturing capabilities ensure that from start to finish, your project is handled by one coordinated team. In house design engineers and flexible manufacturing allows Western Control Systems to engineer and build panels to meet varied requirements. Our attention to detail with point to point wiring diagram creation insures accurately wired completed assemblies. A neat wire harness with precise wire routing, identification and attachment lower installation costs and assist your field personel. From rack-mount, panel mount, full structures, swing-out panels or custom upgrading and field retrofit applications we can build products that are fully engineered for your project and custom fabricated to your design.",
    "Custom Enclosures Western Control Systems and Krage Manufacturing pride ourselves on designing specialty and customized enclosures that serve the varying needs of our customers. We can take your rough sketch, picture or CAD drawing and fabricate an enclosure to fill your needs. Frequently, we match existing enclosures in the field to insure your control room looks professional. Why purchase a standard run-of-the-mill enclosure and manually layout your cut-outs and hole patterns when you can get a completed enclosure from Western Control Systems and Krage Manufacturing with all your requirements built in. Krage Manufacturing fabricates thousands of enclosures each year for OEM’s, utilities, electrical contractors and other specialty markets. We are UL listed for Type 1, 3R, Nema 4, Nema 4X and Nema 12 electrical enclosures. We work closely with UL on new enclosure requirements and test new designs in UL laboratories for those special needs. All our enclosures are pretreated and powder coated to insure excellent coating adhesion and corrosion protection for a long service life."
    // "Krage has the tools and experience necessary to produce components used in demanding industrial and commercial applications. From high temperature burner and oven assemblies, to extreme low temperature cryogenic tanks and components, ABC can meet the needs of this industry. Parts and assemblies manufactured that fall into the heating & cooling industry include: tanks, pans, dampers, louvers, ducting, transitions, elbows, heat exchangers, oven chambers, burner brackets, manifolds, and covers.",
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
      case "PROTOTYPING ":
        setTitle(value)
        setBackground(backgrounds.prototypeContractManu);
        setInfo(infos[0]);
        setImages(imageList.coolingUtility)
        break;
      case "LASER CUTTING":
        setTitle(value)
        setBackground(backgrounds.laserCuttingCapabilities);
        setInfo(infos[1]);
        setImages(imageList.coolingUtility)
        break;
      case "TURRET PUNCHING":
        setTitle(value)
        setBackground(backgrounds.turretPunchingCapabilities);
        setInfo(infos[2]);
        setImages(imageList.coolingUtility)
        break;
      case "CNC BENDING":
        setTitle(value)
        setBackground(backgrounds.cncBendingCapabilities);
        setInfo(infos[3]);
        setImages(imageList.coolingUtility)
        break;
      case "CNC MACHINING":
        setTitle(value)
        setBackground(backgrounds.cncMachiningCapabilities);
        setInfo(infos[4]);
        setImages(imageList.coolingUtility)
        break;
      case "FORM ROLLING":
        setTitle(value)
        setBackground(backgrounds.cncMachiningCapabilities);
        setInfo(infos[5]);
        setImages(imageList.coolingUtility)
        break;
      case "WELDING":
        setTitle(value)
        setBackground(backgrounds.weldingCapabilities);
        setInfo(infos[6]);
        setImages(imageList.coolingUtility)
        break;
      case "POWDER COATING":
        setTitle(value)
        setBackground(backgrounds.powderCoatingCapabilities);
        setInfo(infos[7]);
        setImages(imageList.coolingUtility)
        break;
      case "ASSEMBLY":
        setTitle(value)
        setBackground(backgrounds.assemblyCapabilities);
        setInfo(infos[8]);
        setImages(imageList.coolingUtility)
        break;
      case "ELECTRIC PANEL":
        setTitle(value)
        setBackground(backgrounds.controlPanelCapabilities);
        setInfo(infos[9]);
        setImages(imageList.coolingUtility)
        break;
      case "ENGINEERING DESIGN":
        setTitle(value)
        setBackground(backgrounds.customFabCapabilities);
        setInfo(infos[10]);
        setImages(imageList.coolingUtility)
        break;
      case "ENCLOSURES":
        setTitle(value)
        setBackground(backgrounds.customEncloserCapabilities);
        setInfo(infos[11]);
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
      < CapabilitiesHighlights props={title}/>
    </>
  );
}

const styleDivChild = {
  display: 'flex',
  flexGrow: "1",
  justifyContent: "center",
  alignItems: 'center',
  backgroundColor: 'lightgrey',
  // borderStyle: 'ridge',
  borderBottom: '6px solid #011730',
  // borderBottom: '6px solid #01173f00',
  // borderColor: 'silver',
  borderRadius: '5px',
  padding: '1%',
  margin: '0.5%'
};
const styleDivParent = {
  display: "flex",
  justifyContent: "center",
  // flexDirection: 'column',
  padding: "3% 7%",
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

  borderStyle: 'none',
  padding: '5% 0%',
  color: 'black',
  fontWeight: 'bold',
  outline: 'none',
  backgroundColor: 'lightgrey',
//   padding: '4% 4%', 
  margin: '3% 3%',
  backgroundColor: 'lightgrey'
    // backgroundImage: 'linear-gradient(silver , white)',
}


// "PROTOTYPING & CONTRACT MANUFACTURING",
// "LASER CUTTING",
// "TURRET PUNCHING",
// "CNC BENDING",
// "CNC MACHINING",
// "FORM ROLLING",
// "WELDING",
// "POWDER COATING",
// "ASSEMBLY",
// "CONTROL & RELAY PANEL FABRICATION",
// "CUSTOM FABRICATION & ENGINEERING DESIGN",
// "CUSTOM ENCLOSURES",