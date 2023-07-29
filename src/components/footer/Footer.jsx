import "./FooterStyle.css";
import { FaFacebook, FaInstagram, FaMailBulk, FaPhone } from "react-icons/fa";

function Footer() {
  return (
    <div className="footerContainer">
      <div>
        <h4 className="footer">
          <FaPhone
            size={30}
            style={{ color: "#ff2844", marginRight: "1rem" }}
          />{" "}
          +5 1 - 1 5 1 6 1 7 1 9
          <hr />
          <FaMailBulk
            size={30}
            style={{ color: "#ff2844", marginRight: "1rem" }}
          />{" "}
          RetroConsolas@reto.com.ar
          <hr />
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#ff2844", marginRight: "8rem" }}
            />
            <FaInstagram
              size={30}
              style={{ color: "#ff2844", marginRight: "8rem" }}
            />
          </div>
        </h4>
      </div>
      <div className="social"></div>
    </div>
  );
}

export default Footer;
