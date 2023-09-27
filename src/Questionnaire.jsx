/* eslint-disable react/prop-types */
import ContactInfo from "./components/ContactInfo";
import { scrollToTop } from "./utils/scrollToTop";

const Questionnaire = () => {
  return (
    <>
      <ContactInfo />
      <div className="max-w-4xl mx-auto px-8">
        <h1 className=" font-semibold text-3xl text-center py-10">
          Annual Client Tax Questionnaire for Individuals
        </h1>
        <div className="flex flex-col gap-6">
          <p>
            <b>
              <u>Purpose:</u>
            </b>{" "}
            This form is for Annual Tax Preparation, not Tax Planning. This
            questionnaire should be completed by All clients prior to the start
            of your annual tax engagement.
          </p>
          <p>
            <b>
              <u>Objective:</u>
            </b>{" "}
            Our Tax Questionnaire is designed to help you maximize your
            deductions, while minimizing your problems in preparing and filing
            your tax return and reducing delays due to missing information on
            initial interview. The questionnaire is revised annually to be
            compatible with the ever-changing tax laws. The Internal Revenue
            Service (IRS) matches information returns/forms with amounts
            reported on tax returns. A negligence penalty may be assessed when
            income is underreported or when deductions are overstated.
            Accordingly, all information returns reflecting amounts reported to
            the IRS also are mailed or delivered to the taxpayers in an envelope
            clearly marked “IMPORTANT TAX DOCUMENTS ENCLOSED” and should be
            provided to your preparer.
          </p>
        </div>
        <form className="w-full max-w-4xl pt-10">
          <div className="w-full mb-6 md:mb-0 md:pb-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="year"
            >
              For Tax Year Ending
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-year"
              >
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              ></input>
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
            <div className="w-full md:w-1/3 px-3 pb-4 md:pb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Middle Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Marcus"
              />
            </div>
            <div className="w-full md:w-1/3 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-firstTime"
              >
                Did you Roubik Tax Services prepare your taxes last year?
              </label>
              <input className="" id="no" type="radio" value="no" />
              <label className="text-gray-600 pl-2 pr-4" htmlFor="no">
                No
              </label>
              <input className="" id="yes" type="radio" value="yes" />
              <label className="text-gray-600 pl-2" htmlFor="yes">
                Yes
              </label>
            </div>
            <div className="w-full px-3 pt-5">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-firstTime"
              >
                Has Roubik Tax Services EVER prepared your taxes?
              </label>
              <input className="" id="no" type="radio" value="no" />
              <label className="text-gray-600 pl-2 pr-4" htmlFor="no">
                No
              </label>
              <input className="" id="yes" type="radio" value="yes" />
              <label className="text-gray-600 pl-2" htmlFor="yes">
                Yes
              </label>
            </div>
          </div>
          <div>
            <h3 className="py-1 font-semibold text-xl md:text-2xl mb-5">
              Scheduling
            </h3>
            <p className="mb-5">
              *Please note that due to the complexities of current tax laws, our
              offices do not prepare tax returns on the spot or while you wait.
              If you plan to drop off your documents no appointment is needed,
              but please contact us in advance to ensure staff will be available
              to receive your documents. We encourage all clients to speak with
              a tax preparer if you have any questions or would like to bring
              any potential issues to our attention before we begin tax
              preparation. We also encourage all clients to speak with a tax
              advisor upon completion of your tax preparation to review your
              completed tax return and discuss potential tax planning
              opportunities, if available.
            </p>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3 mb-3 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-state"
              >
                How do you plan to get us your tax documents?
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option>I will drop them off at Roubik Tax Services</option>
                  <option>
                    I will upload them through our secure file portal
                  </option>
                  <option>I will mail them to Roubik Tax Services</option>
                  <option>I plan to schedule a meeting to drop them off</option>
                  <option>I have already delivered my tax documents</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full px-3 md:mb-0 py-4">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-state"
              >
                How do you want to review and sign you tax return?
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option>
                    I would like to schedule an in person tax return review
                  </option>
                  <option>
                    I would like my tax return sent electronically
                  </option>
                  <option>
                    I would like my tax return mailed to my tax return filing
                    address
                  </option>
                  <option>
                    I would prefer not to review my return with a tax advisor
                    and would like to pick it up
                  </option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center sm:justify-between pb-10">
            <button
              className="bg-logoBlue hover:bg-logoHover text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Questionnaire;
