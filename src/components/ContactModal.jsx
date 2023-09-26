/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
// import emailjs from 'emailjs-com';
import thankyoucheck from "../assets/checked.png";
import { BarLoader } from "react-spinners";

function ContactModal({ closeModal }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false); // New state variable
  const [messageSending, setMessageSending] = useState(false);

  const modalRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessageSending(true);
    setMessageSending(false);
    setSubmitted(true);

    // Replace "YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", and "YOUR_USER_ID" with your actual values
    // emailjs
    //   .sendForm(
    //     'service_pm4gjbs',
    //     'template_mgnnh5n',
    //     e.target,
    //     '0yFpo6v7S8OzZG-s5'
    //   )
    //   .then(() => {
    //     setMessageSending(false);
    //     setSubmitted(true); // Update the state to indicate successful submission
    //   })
    //   .catch((error) => {
    //     setMessageSending(false);
    //     console.error('Error sending message:', error);
    //   });
  };

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [handleOutsideClick]);

  // Display the thank you message if the form is submitted
  if (submitted) {
    return (
      <div className="fixed left-0 top-0 z-40 flex h-full w-full items-center justify-center bg-black bg-opacity-50 text-center">
        <div
          ref={modalRef}
          className="relative mx-3 max-w-lg rounded-lg bg-white p-7 sm:mx-0"
        >
          <div className="mb-4 flex justify-center">
            {/* Apply Tailwind CSS classes to adjust the size of the confirmation icon */}
            <img
              src={thankyoucheck}
              alt="Confirmation Icon"
              className="h-12 w-12"
            />
          </div>
          <h1 className="mb-4 text-3xl font-bold">Thank You!</h1>
          <p className="mb-10">
            Thanks for reaching out. We will be in touch with you soon.
          </p>
          <button
            type="button"
            onClick={closeModal}
            className="  rounded-sm bg-logoGreen px-6 py-2 font-bold text-white hover:bg-logoGreenHover"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  // Render the form if it's not submitted
  return (
    <div className="fixed left-0 top-0 z-40 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
      <div
        ref={modalRef}
        className="relative mx-3 max-w-md rounded-lg bg-white p-7 sm:mx-0"
      >
        <h1 className="mb-1 mt-2 text-3xl font-bold">Contact Us</h1>
        <p className="mb-8">Our Team is at Your Service</p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 p-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 p-2"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="h-32 w-full rounded-md border border-gray-300 p-2"
          ></textarea>
          <div className="flex justify-start">
            <button
              type="submit"
              className="mr-4 rounded-sm bg-logoBlue px-6 py-2 font-bold text-white hover:bg-logoHover"
            >
              {messageSending ? (
                <BarLoader color="#fff" width={56} height={3} />
              ) : (
                "Send Message"
              )}
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="mr-2 text-black"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactModal;
