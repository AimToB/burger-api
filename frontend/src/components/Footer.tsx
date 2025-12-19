import { siteConfig } from "@/config/siteConfig";
import { apiFetch } from "@/lib/api";
import { OpeningHours } from "../types/openingHours";

export default async function Footer() {
  const [openHours, contactInfo] = await Promise.all([
    apiFetch("hours"),
    apiFetch("contact"),
  ]);
  return (
    <footer id="footer">
      <div className="footer-inner">
        <div className="footer-col">
          <h4>Links</h4>
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#reservations">Reservations</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Hours</h4>
          {openHours.map((day: OpeningHours) => {
            return (
              <p key={day.day}>
                {day.day}: {day.openTime}-{day.closeTime}
              </p>
            );
          })}
        </div>
        <div className="footer-col">
          <h4>{siteConfig.name}</h4>
          {
            <>
              <p>{contactInfo.address}</p>
              <p>{contactInfo.phone}</p>
              <p>{contactInfo.email}</p>
              <iframe
                src="
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.0368157734574!2d34.99715807572109!3d32.817789481901244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151dbb9e5250d04d%3A0x803985638295218!2sBrooklyn%20-%20Bar%20%26%20Kitchen!5e0!3m2!1sen!2scz!4v1765728750597!5m2!1sen!2scz
                "
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </>
          }
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Hearth Burger
      </div>
    </footer>
  );
}
