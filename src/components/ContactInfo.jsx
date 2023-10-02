import phone from "../assets/phone.svg";
import email from "../assets/email.svg";
import pin from "../assets/pin.png";
import clock from "../assets/clock.png";

const ContactInfo = () => {
  return (
    <div className="flex justify-center bg-gray-200">
      <div className="flex flex-col place-items-start gap-3 py-6 text-sm lg:items-center lg:flex-row lg:gap-12 xl:text-base xl:gap-28 px-4">
        <div className="flex items-center gap-2 font-semibold">
          <img src={phone} alt="Phone icon" className="w-6" />
          <a href="tel:+14143166006">414-316-6006</a>
        </div>
        <div className="flex items-center gap-2 font-semibold">
          <img src={email} alt="Email icon" className="w-7" />
          <a href="mailto:info@roubiktax.com">info@roubiktax.com</a>
        </div>
        <div className="flex items-center gap-2 font-semibold">
          <img src={pin} alt="Map pin icon" className="w-6" />
          <a
            href="https://maps.app.goo.gl/rNaAYmVgKRtTC8gp6"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Our address"
            title="Our address"
            className="transition-colors duration-300"
          >
            7111 W. Edgerton Ave., Suite 302 <br /> Greenfield, WI 53220
          </a>
        </div>
        <div className="flex items-center gap-2 font-semibold">
          <img src={clock} alt="clock icon" className="w-6" />
          <p>
            Mon-Fri 9:00am-5:00pm <br /> Saturday: appointment only
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
