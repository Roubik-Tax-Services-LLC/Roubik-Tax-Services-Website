import checkIcon from "../../assets/checkIcon.svg";
import Button from "../Button";

const HomePageServices = () => {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-9 py-8 sm:px-16 gap-5">
        <h3 className="font-semibold text-center text-3xl">Our Services</h3>
        <div className="flex gap-8 md:gap-16 flex-col md:flex-row">
          <div className="md:w-1/2 w-full">
            <h4 className="font-semibold text-lg underline text-logoBlue text-center pb-4">
              Tax Planning
            </h4>
            <p className="flex gap-4 pb-4">
              <img className="w-8" src={checkIcon} alt="check mark icon" />
              Tax planning allows individuals to leverage deductions, credits,
              and exemptions provided by tax laws, ultimately reducing the
              amount of taxes owed.
            </p>
            <p className="flex gap-4 pb-4">
              <img className="w-8" src={checkIcon} alt="check mark icon" />
              Effective tax planning can improve cash flow by minimizing tax
              expenses. This additional cash can be directed towards fostering
              financial growth.
            </p>
            <p className="flex gap-4">
              <img className="w-8" src={checkIcon} alt="check mark icon" />
              Tax planning plays a crucial role in achieving long-term financial
              objectives and becomes a valuable tool for retirement planning and
              wealth preservation.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <h4 className="font-semibold text-lg underline text-logoBlue text-center pb-4">
              Tax Preparation
            </h4>
            <p className="flex gap-4 pb-4">
              <img className="w-8" src={checkIcon} alt="check mark icon" />
              Tax preparation ensures that individuals and businesses adhere to
              tax laws and regulations while optimizing their financial
              outcomes.
            </p>
            <p className="flex gap-4 pb-4">
              <img className="w-8" src={checkIcon} alt="check mark icon" />
              Accurate tax preparation helps prevent costly penalties, audits,
              and legal issues, promoting financial stability and peace of mind.
            </p>
            <p className="flex gap-4 pb-4">
              <img className="w-8" src={checkIcon} alt="check mark icon" />
              Effective tax preparation helps individuals and businesses
              maximize deductions and credits, leading to lower tax bills and
              greater savings.
            </p>
          </div>
        </div>
        {/* <div className="mx-auto flex flex-col items-center justify-center py-16">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#61C3EB"
            fillOpacity="1"
            d="M0,128L15,154.7C30,181,60,235,90,256C120,277,150,267,180,250.7C210,235,240,213,270,181.3C300,149,330,107,360,85.3C390,64,420,64,450,96C480,128,510,192,540,208C570,224,600,192,630,165.3C660,139,690,117,720,122.7C750,128,780,160,810,181.3C840,203,870,213,900,224C930,235,960,245,990,218.7C1020,192,1050,128,1080,101.3C1110,75,1140,85,1170,106.7C1200,128,1230,160,1260,165.3C1290,171,1320,149,1350,122.7C1380,96,1410,64,1425,48L1440,32L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z"
          ></path>
        </svg>
      </div> */}
        <Button to={"services"}>Learn More</Button>
      </div>
    </div>
  );
};

export default HomePageServices;
