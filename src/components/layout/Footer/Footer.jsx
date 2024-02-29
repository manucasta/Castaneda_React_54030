
import "./Footer.css"

export default function Footer() {
  return (
    <>
      <div className="footerContainer">
        <div className="contactosContainer">
          <p>SEDE AVELLANEDA</p>
          <p> AV. MITRE 470 (1870)</p>
          <p>4229-7600</p>
          <p className="mail">socios@clubaindependiente.com.ar</p>
        </div>
        <div className="contactosContainer">
          <p>SEDE BOYACA</p>
          <p>BOYACA 470</p>
          <p>4633-7527</p>
          <p className="mail">boyaca@clubaindependiente.com.ar</p>
        </div>
        <div className="contactosContainer">
          <p>ESTADIO LIBERTADORES DE AMERICA</p>
          <p>BOCHINI 751</p>
          <p>4201-7873</p>
          <p className="mail">estadiolda@clubaindependiente.com</p>
        </div>
        <div className="redesContainer">
          <p>REDES</p>
          <a href="https://www.instagram.com/caindependiente/" target="_blank">
            <img
              src="https://res.cloudinary.com/dgzuk3rhi/image/upload/v1709246510/samples/instagram-logo_wvulsj.png"
              alt="instagram-logo"
            />
          </a>
          <a
            href="https://twitter.com/Independiente?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            target="_blank"
          >
            <img
              src="https://res.cloudinary.com/dgzuk3rhi/image/upload/v1709246472/samples/twitter-logo_h3vef1.png"
              alt="twitter-logo"
            />
          </a>
        </div>
      </div>
    </>
  );
}
