import React from "react";
import "../App.css";
import { BsBank } from "react-icons/bs";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navigate() {
  return (
    <Navbar sticky="top" bg="light" expand="lg">
      <Container>
        <BsBank />
        <Navbar.Brand href="#home">SDS Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              target="_blank"
              href="https://snventerprise.sharepoint.com/sites/OneSynovus"
            >
              One Synovus
            </Nav.Link>
            <Nav.Link
              target="_blank"
              href="https://synovusprodc.service-now.com/now/workspace/agent/home"
            >
              Agent WorkSpace
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown title="Articles" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Software</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Hardware</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Telecom</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Network</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  Passwords
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">A/V</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Passwords" id="basic-nav-dropdown">
                <NavDropdown.Item
                  target="_blank"
                  href="https://partnercare.checkfree.com/PartnerCareUI/Pages/Login/Login.aspx"
                >
                  PartnerCare - Login
                </NavDropdown.Item>
                <NavDropdown.Item
                 target="_blank"
                 href="https://www.icom.fiserv.com/adm/cl/login.mvc">
                  Icom - Login
                </NavDropdown.Item>
                <NavDropdown.Item 
                target="_blank"
                href="https://www.visadpsprepaid.com/Identity?goto=https%3A%2F%2Faic.visaonline.com%2Fopenam%2Fcdcservlet%3FIssueInstant%3D2021-03-19T16%253A55%253A53Z%26MajorVersion%3D1%26MinorVersion%3D0%26ProviderID%3Dhttps%253A%252F%252Fwww.visadpsprepaid.com%253A443%252Famagent%253FRealm%253D%252Fvol%26RequestID%3D3D8A268AE537CC9FF10621AB11A0EB499427D1B5366B74608384B34697526BEE%26goto%3Dhttps%253A%252F%252Fwww.visadpsprepaid.com%252F%253Fampostpreserve%253Dbce0246c-593d-5842-b0f8-72bcfa1f7740%26loginURI%3D%2Fcdclogin.jsp">
                  VisaPas - Login
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigate;

// framename	Opens the linked document in the named iframe
//             <A HREF="https://partnercare.checkfree.com/PartnerCareUI/Pages/Login/Login.aspx" ADD_DATE="1651074097">PartnerCare - Login</A>
//             <A HREF="https://www.icom.fiserv.com/adm/cl/login.mvc" ADD_DATE="1601317431">Welcome to Cash &amp; Logistics Solution</A>
//             <A HREF="https://www.visadpsprepaid.com/Identity?goto=https%3A%2F%2Faic.visaonline.com%2Fopenam%2Fcdcservlet%3FIssueInstant%3D2021-03-19T16%253A55%253A53Z%26MajorVersion%3D1%26MinorVersion%3D0%26ProviderID%3Dhttps%253A%252F%252Fwww.visadpsprepaid.com%253A443%252Famagent%253FRealm%253D%252Fvol%26RequestID%3D3D8A268AE537CC9FF10621AB11A0EB499427D1B5366B74608384B34697526BEE%26goto%3Dhttps%253A%252F%252Fwww.visadpsprepaid.com%252F%253Fampostpreserve%253Dbce0246c-593d-5842-b0f8-72bcfa1f7740%26loginURI%3D%2Fcdclogin.jsp" ADD_DATE="1616172957" ICON="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACFklEQVQ4jXWSPW4UQRCFv+np2T+vwQhhaRNwQOrMiUXERRBwFkLuAAGn4BJOLHkDomVtozG7sr0/np/uegQzu94Av1ZJLXXXq1f1CknJJs7Pz9+v12v9L5bLpfI818XFxbfdHGaz2fbTbDbTUwghqCxLjcdjTSaTLUmyWCz081fB9K7iwFd8eHdEVdXM7xbsIsYIQP7nkk6WYWbfj4+PP3uA6W3F9LaEofEUnHOYGS9eHnKwv8dqtfx4dnb2wwMYIkjcFQGANHUMBz2cSyEBiw2xEBJkWUan22M8HjsPIIFJmNTKNRarB7IsIwGqqkZgJpyZOHi+b5n3xBjZKnAOsjRpK7WQEGACgWv4EwAnIBAagihRBGOdRCQhacuyuUq0b2AGMhGKgJdENFGbEdsPqEm4vr4i8ymSyPOc4XDIal3y+s0R3nsmk8kzr1bBJpoDBqRpik9ThsM9RqPRoypEDJHT09OvHkEwo45GMMPagTZKEnq9HnUdqarF1oUNQgRviGBNcjQhe+x3sDfg1eFh27e2bm1mU5QVXoK4U1USSeIY9PuUhZGmnrKseCgKzESMRtbp0u12cWmKwyCaWNdG4hrLEufo93v4doDRImbaRgiRGEWMwhvw6WTEsop0iMzn8x27ms3sdLqkaYdowuxx6czAT6e/v9R17RKDGriE1gO4v1+c3OT5W2vnYyZMiYlmOWZ/b67+ARbw6ivXuyeBAAAAAElFTkSuQmCC">Sign In</A>
//
