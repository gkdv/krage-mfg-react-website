import React, { Component } from "react";
import { MDBContainer, MDBCollapse, MDBCard, MDBCardBody } from "mdbreact";

class CollapsePage extends Component {
  state = {
    collapseID: "collapse3",
  };

  toggleCollapse = (collapseID) => () =>
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));

  render() {
    const { collapseID } = this.state;
    return (
      <MDBContainer style={containerStyle}>
        <MDBContainer className="mt-5" style={containerStyle}>
          <MDBCard className="mt-3" style={cardStyle}>
            <div style={headerStyle} onClick={this.toggleCollapse("collapse1")}>
              PROTOTYPING & CONTRACT MANUFACTURING
              <i
                className={
                  collapseID === "collapse1"
                    ? "fa fa-angle-down rotate-icon"
                    : "fa fa-angle-down"
                }
              />
            </div>
            <MDBCollapse id="collapse1" isOpen={collapseID}>
              <MDBCardBody>
                <p>
                  For years Krage Manufacturing has been offering customers
                  various manufacturing and engineering solutions. We have
                  exceptional individuals in engineering, management and
                  production to assist you in meeting your goals. Krage Mfg.
                  excels in everything from ideas on a napkin to short-run
                  prototypes to medium and long run production. We have
                  expertise to provide innovative engineering designs from ideas
                  to cost effective manufacturable finished parts and
                  assemblies. Our engineering and prototyping services are
                  designed around providing a quick turnaround with the use of
                  the latest technologies and processes.
                </p>
                <p>
                  Krage Mfg. prides itself on turning new designs successfully
                  into finished products sometimes in a matter of hours. We
                  actively manage customer inventory levels and deliver kanban
                  containers directly to our customer production lines.
                </p>
                <p>
                  We assist our customers in insuring a cost effective design
                  for manufacturable products. Cost saving ideas are constantly
                  under review. Krage Mfg. has consistently saved our customers
                  thousands to hundreds of thousands of dollars through
                  design/process changes initiated by our experienced team of
                  ‘Can Do’ individuals.
                </p>
                <p>
                  Krage Mfg. wants to be your lowest total cost supplier through
                  innovative ideas and efficient manufacturing processes. We
                  want you to be the best in your industry!
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard style={cardStyle}>
            <div style={headerStyle} onClick={this.toggleCollapse("collapse2")}>
              LASER CUTTING & TURRET PUNCHING
              <i
                className={
                  collapseID === "collapse2"
                    ? "fa fa-angle-down rotate-icon"
                    : "fa fa-angle-down"
                }
              />
            </div>
            <MDBCollapse id="collapse2" isOpen={collapseID}>
              <MDBCardBody>
                <p>
                  Trumpf CO2 lasers with automatic load and unload operate
                  unattended 24 hours/day. The laser is capable of cutting 0.50″
                  steel. Murata and Strippit turret presses can accommodate 60″
                  wide material and punch up to 0.25″ thick material. The Murata
                  is equipped with an automatic load and piece part unload for
                  lights out operation. Efficient part nesting insures maximum
                  sheet usage.
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard style={cardStyle}>
            <div style={headerStyle} onClick={this.toggleCollapse("collapse3")}>
              CNC BENDING
              <i
                className={
                  collapseID === "collapse3"
                    ? "fa fa-angle-down rotate-icon"
                    : "fa fa-angle-down"
                }
              />
            </div>
            <MDBCollapse id="collapse3" isOpen={collapseID}>
              <MDBCardBody>
                Krage Manufacturing utilizes Bystronic Xpert and PR press
                brakes. Each brake is equipped with 4 – 6 axis backgauging,
                hydraulic clamping, automatic crowning and material thickness
                compensation. The largest is an Xpert 250 ton 13.5′ brake. All
                brakes are programmed in the office to insure maximum floor
                productivity and effective first part quality. We have an
                experienced group of operators that along with seasoned
                programmers can handle the most difficult bending applications.
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard style={cardStyle}>
            <div style={headerStyle} onClick={this.toggleCollapse("collapse4")}>
              WELDING
              <i
                className={
                  collapseID === "collapse4"
                    ? "fa fa-angle-down rotate-icon"
                    : "fa fa-angle-down"
                }
              />
            </div>
            <MDBCollapse id="collapse4" isOpen={collapseID}>
              <MDBCardBody>
                Several weld stations are operated by experienced welders
                utilizing Lincoln Power MIG welders and Invertec TIG welders.
                Krage Mfg. excels at welding galvanized steel along with most
                other types of material. The Motoman ArcWorld robotic welding
                cell can accommodate a 10′ long part with a 1,100 lb. part
                capacity. The robotic cell has a high speed indexing turntable
                and rotary part positioner.
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard style={cardStyle}>
            <div style={headerStyle} onClick={this.toggleCollapse("collapse5")}>
              POWDER COATING, PAINTING & MEDIA BLASTING
              <i
                className={
                  collapseID === "collapse5"
                    ? "fa fa-angle-down rotate-icon"
                    : "fa fa-angle-down"
                }
              />
            </div>
            <MDBCollapse id="collapse5" isOpen={collapseID}>
              <MDBCardBody>
                Krage Mfg. has a complete powder coating and painting operation.
                Skilled coaters operate Nordson powder guns in multiple booths.
                A three stage phosphate pretreatment system insures excellent
                coating adhesion and corrosion protection. Salt spray tests
                exceed 1,000 hours for several powder applications. Multiple
                ovens are employed with capacities of 10’H x 10’W x 16′ or more
                in length. Liquid painting operations use the same pretreatment
                method as powder coating. A conveyor system provides an
                efficient part flow from pretreatment through paint and into
                part drying. Media blasting is used for previously coated parts
                or to remove mill scale. The blast booth can handle large frames
                up to 16′ long. Longer parts can be handled as well. All blasted
                parts are pretreated with the 3 stage phosphate system to again
                insure maximum coating adhesion and corrosion protection.
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard style={cardStyle}>
            <div style={headerStyle} onClick={this.toggleCollapse("collapse6")}>
              ASSEMBLY
              <i
                className={
                  collapseID === "collapse6"
                    ? "fa fa-angle-down rotate-icon"
                    : "fa fa-angle-down"
                }
              />
            </div>
            <MDBCollapse id="collapse6" isOpen={collapseID}>
              <MDBCardBody>
                After Krage Mfg. has fabricated your parts we have the in house
                capability of assembling your products. We will manage your
                unique assembly requirements and integrate specified purchased
                parts into the final assembly. Whether a simple or complex
                turn-key assembly Krage Mfg. has a team of mechanical and
                electrical technicians to handle your requirements.
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard style={cardStyle}>
            <div style={headerStyle} onClick={this.toggleCollapse("collapse7")}>
              CONTROL & RELAY PANEL FABRICATION
              <i
                className={
                  collapseID === "collapse7"
                    ? "fa fa-angle-down rotate-icon"
                    : "fa fa-angle-down"
                }
              />
            </div>
            <MDBCollapse id="collapse7" isOpen={collapseID}>
              <MDBCardBody>
                Control and Relay Panel Fabrication Western Control Systems is
                uniquely suited to fully integrate your substation electrical
                needs. We can provide all your power protection monitoring and
                control relay panels through vertical, dual or duplex
                switchboards, marshalling and summation enclosures. From a
                single protective relay panel to the complexity of a walk-in
                power distribution center, we provide quality protection,
                control and communications solutions. Our products are designed
                to perform in this rugged, demanding and critical environment.
                Western Control Systems has uniquely designed DC power, battery
                racks and equipment to meet your requirements. We can combine
                multiple requirements into a rugged outdoor rated unit for
                smaller substations eliminating the need for large E-houses or
                buildings. It is through these innovations that Western Control
                Systems prides itself as a customer driven organization that
                actively listens to you.
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard style={cardStyle}>
            <div style={headerStyle} onClick={this.toggleCollapse("collapse8")}>
              CUSTOM FABRICATION & ENGINEERING DESIGN
              <i
                className={
                  collapseID === "collapse8"
                    ? "fa fa-angle-down rotate-icon"
                    : "fa fa-angle-down"
                }
              />
            </div>
            <MDBCollapse id="collapse8" isOpen={collapseID}>
              <MDBCardBody>
                Custom Fabrication and Engineering Design Western Control
                Systems offers engineering firms, OEM’s, system integrators, end
                users and contractors custom control panel fabrication and
                specialized assemblies to meet your needs. Custom fabrication
                saves you valuable labor and time, eliminating in-house
                fabrication with ready to use materials to your dock. Fully
                integrated engineering and manufacturing capabilities ensure
                that from start to finish, your project is handled by one
                coordinated team. In house design engineers and flexible
                manufacturing allows Western Control Systems to engineer and
                build panels to meet varied requirements. Our attention to
                detail with point to point wiring diagram creation insures
                accurately wired completed assemblies. A neat wire harness with
                precise wire routing, identification and attachment lower
                installation costs and assist your field personel. From
                rack-mount, panel mount, full structures, swing-out panels or
                custom upgrading and field retrofit applications we can build
                products that are fully engineered for your project and custom
                fabricated to your design.
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard style={cardStyle}>
            <div style={headerStyle} onClick={this.toggleCollapse("collapse9")}>
              CUSTOM ENCLOSURES
              <i
                className={
                  collapseID === "collapse9"
                    ? "fa fa-angle-down rotate-icon"
                    : "fa fa-angle-down"
                }
              />
            </div>
            <MDBCollapse id="collapse9" isOpen={collapseID}>
              <MDBCardBody>
                Custom Enclosures Western Control Systems and Krage
                Manufacturing pride ourselves on designing specialty and
                customized enclosures that serve the varying needs of our
                customers. We can take your rough sketch, picture or CAD drawing
                and fabricate an enclosure to fill your needs. Frequently, we
                match existing enclosures in the field to insure your control
                room looks professional. Why purchase a standard run-of-the-mill
                enclosure and manually layout your cut-outs and hole patterns
                when you can get a completed enclosure from Western Control
                Systems and Krage Manufacturing with all your requirements built
                in. Krage Manufacturing fabricates thousands of enclosures each
                year for OEM’s, utilities, electrical contractors and other
                specialty markets. We are UL listed for Type 1, 3R, Nema 4, Nema
                4X and Nema 12 electrical enclosures. We work closely with UL on
                new enclosure requirements and test new designs in UL
                laboratories for those special needs. All our enclosures are
                pretreated and powder coated to insure excellent coating
                adhesion and corrosion protection for a long service life.
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>
        </MDBContainer>
      </MDBContainer>
    );
  }
}

export default CollapsePage;

const cardStyle = {
  margin: "0px",
};
const containerStyle = {
  margin: "0px",
  padding: "0px"
};
const headerStyle = {
  padding: '1.5%',
  backgroundImage: 'linear-gradient(white, silver)',
  fontWeight: 'bold'
}

// import React, { Component } from "react";
// import Card from "./Card";
// import LogoMakr_laser from "../utils/LogoMakr_laser.png";
// import LogoMakr_design from "../utils/LogoMakr_design.png";
// import LogoMakr_cnc from "../utils/LogoMakr_cnc.png";
// import LogoMakr_roboWelding from "../utils/LogoMakr_roboWelding.png";
// import LogoMakr_paint from "../utils/LogoMakr_paint.png";
// import LogoMakr_electric from "../utils/LogoMakr_electric.png";
// import LogoMakr_punching from "../utils/LogoMakr_punching.png";
// import LogoMakr_roll from "../utils/LogoMakr_roll.png";
// import LogoMakr_pressBrake from "../utils/LogoMakr_pressBrake.png";

// export class Capabilities extends Component {
//   render() {
//     return (
//       <div style={style}>
//         <div className="row">
//           <h2 className="font-weight-bold my-5 text-center">Capabilities</h2>
//         </div>
//         <div className="row" style={style}>
//           <Card
//             cardInfo={{
//               src: LogoMakr_laser,
//               alt: "image",
//               cardTitle: "Laser Cutting",
//             }}
//             imageStyle={imageStyle}
//             titleStyle={titleStyle}
//             cardStyle={cardStyle}
//           />
//           <Card
//             cardInfo={{
//               src: LogoMakr_design,
//               alt: "image",
//               cardTitle: "Engineering Design",
//             }}
//             imageStyle={imageStyle}
//             titleStyle={titleStyle}
//             cardStyle={cardStyle}
//           />
//           <Card
//             cardInfo={{
//               src: LogoMakr_cnc,
//               alt: "image",
//               cardTitle: "CNC Machining",
//             }}
//             imageStyle={imageStyle}
//             titleStyle={titleStyle}
//             cardStyle={cardStyle}
//           />
//           <Card
//             cardInfo={{
//               src: LogoMakr_roboWelding,
//               alt: "image",
//               cardTitle: "Robotic Welding",
//             }}
//             imageStyle={imageStyle}
//             titleStyle={titleStyle}
//             cardStyle={cardStyle}
//           />
//           <Card
//             cardInfo={{
//               src: LogoMakr_paint,
//               alt: "image",
//               cardTitle: "Paint & Powder Coating",
//             }}
//             imageStyle={imageStyle}
//             titleStyle={titleStyle}
//             cardStyle={cardStyle}
//           />
//           <Card
//             cardInfo={{
//               src: LogoMakr_electric,
//               alt: "image",
//               cardTitle: "Control Panel Wiring",
//             }}
//             imageStyle={imageStyle}
//             titleStyle={titleStyle}
//             cardStyle={cardStyle}
//           />
//           <Card
//             cardInfo={{
//               src: LogoMakr_punching,
//               alt: "image",
//               cardTitle: "CNC Punching",
//             }}
//             imageStyle={imageStyle}
//             titleStyle={titleStyle}
//             cardStyle={cardStyle}
//           />
//           <Card
//             cardInfo={{
//               src: LogoMakr_roll,
//               alt: "image",
//               cardTitle: "Steel Rolling",
//             }}
//             imageStyle={imageStyle}
//             titleStyle={titleStyle}
//             cardStyle={cardStyle}
//           />
//           <Card
//             cardInfo={{
//               src: LogoMakr_pressBrake,
//               alt: "image",
//               cardTitle: "Hydraulic Press Brake",
//             }}
//             imageStyle={imageStyle}
//             titleStyle={titleStyle}
//             cardStyle={cardStyle}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default Capabilities;

// const style = {
//   display: "flex",
//   flexDirection: "row",
//   flexWrap: "wrap",
//   justifyContent: "space-around",
//   margin: "5%",
// };
// const imageStyle = {
//   height: "6.25em",
//   width: "6.25em",
// };
// const cardStyle = {
//   width: "18rem",
//   borderStyle: "none",
// };

// const titleStyle = {};

// const headerStyle = {
//   display: 'flex',
//   justifyContent: 'center',
//   backgroundImage: 'linear-gradient(to bottom left,silver , white)'
// }
