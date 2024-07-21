import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

// export const AffiliatedCompanies = () => {
//   const IMGS = [
//     <img alt="" key={1} className="w-[129.38px] h-[74.25px]" src="/aws3.png" />,
//     <img
//       alt=""
//       key={2}
//       className="w-[118.12px] h-[59.62px]"
//       src="/azure.svg"
//     />,
//     <img alt="" key={3} className="w-[159.75px] h-[95.62px]" src="GCP.png" />,
//     <img
//       alt=""
//       key={4}
//       className="w-[136.12px] h-[95.62px]"
//       src="salesforce.png"
//     />,
//     <img
//       alt=""
//       key={5}
//       className="w-[122.62px] h-[43.88px]"
//       src="oracle.png"
//     />,
//     <img alt="" key={6} className="w-[106.88px] h-[52.88px]" src="HPE.png" />,
//   ];

//   return (
//     <div className="px-pagePadding overflow-hidden max-w-full">
//       <div className="max-w-full overflow-hidden hidden lg:flex w-full h-[161px] pt-[33px] pb-[32.38px] bg-white justify-center items-center">
//         <div className="border border-blue-400 self-stretch justify-start items-center gap-9 3xl:gap-20 inline-flex">
//           {IMGS.map((img) => img)}
//         </div>
//       </div>
//       {/* border-8 border-red-400 border-dashed */}
//       {/* MOBILE VIEW */}

//       <br />
//       <br />
//     </div>
//   );
// };

// export const DedicatedTowards = () => {
//   return (
//     <div className="max-w-1536 px-pagePadding overflow-hidden flex flex-col gap-2 m-auto">
//       <div className="w-full py-[77px] flex flex-col-reverse items-center gap-10 grid-cols-2 lg:grid">
//         <div className="relative max-w-[618px] max-h-[min(100%, 616px)]">
//           <img
//             className="h-full w-full rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[130px] rounded-br-[20px]"
//             src="/Rectangle1.png"
//           />
//           <div className="w-[165px] h-[181px] px-[38px] py-6 right-[-30px] bottom-[-53px] absolute bg-white rounded-[10px] shadow justify-center items-center gap-2.5 inline-flex">
//             <div className="Frame2147223568 flex-col justify-start items-center gap-3.5 inline-flex">
//               <div className="Frame2147223567 flex-col justify-start items-center gap-[9px] flex">
//                 <div className="Frame931 justify-start items-start gap-2.5 inline-flex">
//                   {redGlobeIcon}
//                 </div>
//                 <div className="Frame2147223566 flex-col justify-start items-center gap-px flex">
//                   <div className=" text-center text-stone-950 text-[38px] font-bold font-['Inter']">
//                     200+
//                   </div>
//                   <div className="Learners text-center text-neutral-700 text-[15px] font-medium font-['Inter']">
//                     Learners
//                   </div>
//                 </div>
//               </div>
//               <div className="Group1004 w-[53px] h-[17px] relative">
//                 <div className="5 left-[16px] top-0 absolute text-red-600 text-sm font-semibold font-['Inter']">
//                   11.5%
//                 </div>
//                 <div className="Frame12 w-3 h-3 left-[-0px] top-[3px] absolute" />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-col justify-center">
//           <div className="flex-col justify-start items-start gap-4 inline-flex">
//             <div className="flex-col justify-start items-start gap-3.5 flex">
//               <div className="justify-start items-center gap-4 inline-flex">
//                 <div className="Line1 w-5 h-[0px] border-2 border-red-600"></div>
//                 <div className="AboutUs text-red-600 text-lg font-bold font-['Inter']">
//                   About Us
//                 </div>
//               </div>
//               <div className="flex-col justify-start items-start gap-5 flex">
//                 <div className="w-full text-stone-950 text-2xl md:text-3xl lg:text-5xl font-bold font-['Archivo']">
//                   Dedicated Towards Innovative Solutions!
//                 </div>
//                 <div className="w-full text-center lg:text-start text-neutral-700 text-lg font-normal font-['Inter'] leading-[37px]">
//                   Welcome to Infolab Technology Services Limited, a leading
//                   IT-based company located in the bustling city of Lagos,
//                   Nigeria.
//                   <br className="hidden lg:display" />
//                   <br />
//                   At Infolab, we are dedicated to providing innovative and
//                   comprehensive technology solutions to meet the evolving needs
//                   of businesses and organizations across various industries.
//                 </div>
//               </div>
//             </div>
//             <div className="self-center lg:self-start w-8/12 lg:w-[170px] h-[60px] p-2.5 bg-red-600 rounded-lg justify-center items-center gap-2.5 inline-flex">
//               <div className="text-center text-white text-lg font-bold font-['Inter']">
//                 Read More
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <br />
//       <br />
//     </div>
//   );
// };

// export const OurCoreServices = () => {
//   const Courses = [
//     {
//       title: "Programming Language",
//       desc: "We offer training on various programming language such as Python, Java, React, NodeJS...",
//       href: "#",
//       image: "programLang.png",
//       bgColor: "#FEE2EF",
//     },
//     {
//       title: "Cloud Computing",
//       desc: "Our cloud computing services enable organizations to leverage the scalability...",
//       href: "#",
//       image: "cloudComputing.jpg",
//       bgColor: "#E0FBF1",
//     },
//     {
//       title: "Digital Marketing",
//       desc: "We offer comprehensive training and services in digital marketing strategies, including SEO...",
//       href: "#",
//       image: "digitalMarketing.jpg",
//       bgColor: "#FFE1DC",
//     },
//     {
//       title: "Data Analysis",
//       desc: "Our data analysis services enable businesses to harness the power of data for informed decision...",
//       href: "#",
//       image: "dataAnalysis.jpg",
//       bgColor: "#FFF9E1",
//     },
//     {
//       title: "Cybersecurity",
//       desc: "In an era of increasing cyber threats, our cybersecurity solutions are designed to safe...",
//       href: "#",
//       image: "cyberSecurity.png",
//       bgColor: "#E3E6F1",
//     },
//     {
//       title: "Web Services",
//       desc: " We offer a wide range of web services, including website development, design, hosting...",
//       href: "#",
//       image: "webServices.png",
//       bgColor: "#F1DBFF",
//     },
//     {
//       title: "Software Development",
//       desc: "Our software development services encompass the entire development lifecycle, from ideation...",
//       href: "#",
//       image: "softwareDev.png",
//       bgColor: "#C0E7E9",
//     },
//   ];

//   const Arrow45Up = (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="34"
//       height="34"
//       viewBox="0 0 34 34"
//       fill="none"
//     >
//       <g clip-path="url(#clip0_28_2144)">
//         <path
//           d="M11.9321 8.68367L11.9321 11.0451L21.3778 11.0451L7.71532 24.7076L9.40205 26.3943L23.0646 12.7318V22.1775L25.426 22.1775L25.426 8.68367L11.9321 8.68367Z"
//           fill="black"
//         />
//       </g>
//       <defs>
//         <clipPath id="clip0_28_2144">
//           <rect
//             width="23.854"
//             height="23.854"
//             fill="white"
//             transform="translate(0.125 17.1173) rotate(-45)"
//           />
//         </clipPath>
//       </defs>
//     </svg>
//   );

//   return (
//     <div className="max-w-1536 px-pagePadding overflow-hidden flex flex-col gap-2 m-auto">
//       <div className="w-full flex flex-col gap-[70px] bg-white">
//         <div className="flex flex-col gap-5 md:flex-row md:items-center justify-between">
//           <div className="flex-col justify-start items-start gap-4 inline-flex">
//             <div className="justify-start items-center gap-4 inline-flex">
//               <div className="Line1 w-5 h-[0px] border-2 border-red-600"></div>
//               <div className="OurCoreServices text-center text-red-600 text-base md:text-lg font-bold font-['Inter']">
//                 Our Core Services
//               </div>
//             </div>
//             <div className="text-stone-950 text-2xl md:text-3xl lg:text-5xl font-bold font-['Archivo']">
//               Training and Services{" "}
//             </div>
//           </div>
//           <div className="self-end w-8/12 md:w-1/3 pl-4 items-start gap-4 flex border-l-2 border-red-600">
//             <p className="w-full text-neutral-700 text-lg font-normal font-['Inter']">
//               Infolab offers services that are tried, tested and trusted. Our
//               design build framework provides solutions powered by intelligent
//               and seamless technology.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export const SurveyTrustFirms = () => {
  const surveyData = [
    {
      src: "https://via.placeholder.com/204x83",
      companyName: "FOMS Survey Consult Limited",
      surveyor: "Surv. Mariam Adebule",
      imgWidth: 204,
      imgHeight: 83,
    },
    {
      src: "https://via.placeholder.com/203x84",
      companyName: "Stenik Consult",
      surveyor: "Surv. Adenike A. Tejuosho",
      imgWidth: 203,
      imgHeight: 84,
    },
    {
      src: "https://via.placeholder.com/203x79",
      companyName: "Arpenture Consultants Limited",
      surveyor: "Surv. Adedapo Fashina",
      imgWidth: 203,
      imgHeight: 79,
    },
    {
      src: "https://via.placeholder.com/155x80",
      companyName: "Samday GeoServices",
      surveyor: "Surv. Adediji Adegoke Samson",
      imgWidth: 155,
      imgHeight: 80,
    },
    {
      src: "https://via.placeholder.com/152x80",
      companyName: "QED Consult",
      surveyor: "Surv. Sangowawa Olutomi Ajose",
      imgWidth: 152,
      imgHeight: 80,
    },
    {
      src: "https://via.placeholder.com/99x80",
      companyName: "DOT Point",
      surveyor: "Surv. Taiwo David O.",
      imgWidth: 99,
      imgHeight: 80,
    },
    {
      src: "https://via.placeholder.com/99x80",
      companyName: "Survey Firm",
      surveyor: "Surv. Paul Osigweh Chigozie",
      imgWidth: 99,
      imgHeight: 80,
    },
  ];

  return (
    <div className="overflow-hidden max-w-full">
      <div className="w-full h-[276px] py-10 items-center  bg-white self-stretch flex-col justify-start gap-[35px] flex">
        <div className="text-center text-stone-950 text-lg font-semibold">
          Survey Firms that Trust our Solution
        </div>
        <div className="flex w-full justify-center overflow-hidden items-center">
          <Carousel className="w-[90%]" style={{ width: "95%" }}>
            <CarouselContent className="flex p-3">
              {surveyData.map((survey, index) => (
                <CarouselItem
                  key={index}
                  className="p-2 basis-1/2 md:basis-[35%] lg:basis-[20%] 2xl:basis-[14%]"
                >
                  <div className="flex-col justify-start items-center gap-2.5 inline-flex">
                    <img
                      className={`w-[${survey.imgWidth}px] h-[${survey.imgHeight}px]`}
                      src={survey.src}
                      alt={survey.companyName}
                    />
                    <div className="flex-col justify-start items-center flex">
                      <div className="text-center text-stone-950 text-sm font-medium">
                        {survey.companyName}
                      </div>
                      <div className="text-center text-stone-950 text-xs font-normal leading-7">
                        {survey.surveyor}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export const EfficientGISSolutions = () => {
  return (
    <div className="mywrapper w-full min-h-[792px] py-[75px] bg-white flex-col items-center gap-12 inline-flex">
      <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-center gap-[50px] 2xl:gap-[70px]">
        <div className="lg:basis-1/2 flex flex-col justify-start items-start gap-20">
          <div className="h-[172px] flex flex-col justify-start items-start gap-[30px]">
            <div className="flex justify-start items-center gap-[15px]">
              <div className="w-5 h-[0px] border-2 border-sky-950"></div>
              <div className="text-sky-950 text-xl font-medium leading-[34px]">
                Our Core Solution
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-[18px]">
              <div className="w-[331px] text-sky-950 text-[50px] font-extrabold leading-[54px]">
                Efficient GIS Solutions
              </div>
            </div>
          </div>
          <div className="h-[110px] flex flex-col justify-start items-start gap-6">
            <div className="w-[570px] flex justify-start items-start gap-6">
              <div className="w-16 h-16 relative">
                <div className="w-16 h-16 left-0 top-0 absolute rounded-full border-2 border-sky-950" />
                <div className="left-[28px] top-[15px] absolute text-center text-sky-950 text-2xl font-bold leading-[34px]">
                  1
                </div>
              </div>
              <div className="flex flex-col justify-start items-start gap-5">
                <div className="w-[482px] text-sky-950 text-2xl font-bold leading-[34px]">
                  Survey Data Management
                </div>
                <div className="w-[482px] text-neutral-600 text-base font-normal leading-7">
                  Renders Surveyor's data in a manner that provides easy access,
                  management and data-driven insight.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-5">
            <div className="w-[470px] px-[45px] py-[15px] bg-sky-950 rounded-[30px] flex justify-center items-center gap-2.5">
              <div className="text-center text-white text-lg font-semibold leading-[30px]">
                Get Started Today
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[530px] lg:basis-1/2 max-h-[642px] bg-black/opacity-20 rounded-lg mt-6 lg:mt-0 lg:ml-6 flex items-center">
          <img
            src="/gis.png"
            className="w-full h-auto lg:h-full object-cover rounded-lg"
            alt="GIS Solutions"
          />
        </div>
      </div>
    </div>
  );
};

export const Revolutionizing = () => {
  return (
    <section className="mywrapper h-max py-16 bg-black lg:bg-red-800">
      <div className="h-full w-full grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:flex"></div>
        <div className="flex flex-col h-full justify-center">
          <div className="pb-4 justify-start items-center gap-[15px] inline-flex">
            <div className="w-5 h-[0px] border-2 border-white"></div>
            <div className="text-white text-xl font-medium leading-[34px]">
              Our Services
            </div>
          </div>
          <div className="pb-6 items-center inline-flex">
            <div className="flex-col justify-start items-start inline-flex">
              <div className="justify-center items-center inline-flex">
                <div className="text-sky-500 text-[50px] font-extrabold leading-[54px]">
                  Revolutionizing
                </div>
              </div>
              <div className="self-stretch text-white text-[50px] font-extrabold leading-[54px]">
                Industry Based
                <br />
                Geospatial Solutions
              </div>
            </div>
          </div>
          <div className="pb-10 text-white text-lg font-normal leading-[30px]">
            Discover the art of seamless data management and visualization,
            tailored for your needs. Unleash the power of geospatial
            intelligence with ease.
          </div>

          <Link
            href="#"
            className="bg-white max-w-[470px] grid place-items-center w-full h-[60px] gap-[10px] rounded-[30px] text-[18px] font-semibold leading-[30px] text-center"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export const SignUpforOurSurvey = () => {
  return (
    <div className="mywrapper w-full min-h-[374px] pt-[60px] pb-24 bg-white flex-col justify-center items-center gap-2.5 inline-flex">
      <div className="self-stretch h-[254px] flex-col justify-start items-center gap-[45px] flex">
        <div className="w-full justify-between items-center inline-flex">
          <div className="flex-col justify-start items-center gap-[18px] inline-flex">
            <div className="text-center text-sky-950 text-[50px] font-extrabold leading-[64px]">
              Sign Up for Our Survey Data Management
            </div>
            <div className="w-[90%] text-center text-sky-950 text-base font-normal leading-[30px]">
              Don't miss out on the latest in GIS technology and insights.
              Subscribe to our newsletter and be the first to know about new
              features, industry trends, and expert tips.
            </div>
          </div>
        </div>
        <div className="max-w-[257px] w-full px-5 py-6 grid place-items-center bg-sky-950 rounded-[50px]">
          <div className="text-white text-lg font-semibold">Subscribe</div>
        </div>
      </div>
    </div>
  );
};

export const BelovedClientsSayings = () => {
  const testimonials = [
    {
      imgSrc: "https://via.placeholder.com/72x72",
      text: "I am truly impressed by TwoNode Technologies' innovative GIS solution. It is a game-changer in the industry, offering new ways to access and manage survey-based data anywhere in the world.",
      author: "Surv. Adebule Mariam - FOMSSURVEY",
    },
    {
      imgSrc: "https://via.placeholder.com/72x72",
      text: "It's truly wonderful to come across a solution that efficiently and effectively addresses the challenges we face. The convenience of storing and retrieving our records in a well-organized system is truly unmatched.",
      author: "Karimah Dolapo - STENIK CONSULT",
    },
    {
      imgSrc: "https://via.placeholder.com/72x72",
      text: "I have always seen GIS as a fantasy but here we are a company really using GIS to solve the problem of Survey Based Data Management.",
      author: "Aderayo - DOT POINTS",
    },
  ];

  return (
    <div className="mywrapper bord bg-black w-full py-16 min-h-[592px] flex-col justify-start items-center gap-[70px] inline-flex">
      <div className="text-center text-white text-[50px] font-extrabold leading-[54px]">
        What Our Beloved Clients Are Saying
      </div>

      <div className="flex w-full justify-center overflow-hidden items-start gap-[30px]">
        <Carousel className="w-full">
          <CarouselContent className="flex gap-7">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="p-3 basis-full md:basis-1/2 2xl:basis-1/3"
              >
                <div className="w-full flex justify-center">
                  <div className="px-5 py-10 bg-white rounded-[10px] flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="flex-col justify-start items-center gap-5 flex">
                      <img
                        className="w-[72px] h-[72px] rounded-full border border-sky-950"
                        src={testimonial.imgSrc}
                        alt={`Testimonial from ${testimonial.author}`}
                      />
                      <div className="flex-col justify-center items-center gap-2.5 flex">
                        <div className="justify-start items-center gap-1 inline-flex" />
                        <div className="w-[330px] text-center text-neutral-600 text-base font-normal leading-7">
                          {testimonial.text}
                        </div>
                      </div>
                      <div className="text-center text-sky-950 text-base font-medium leading-7">
                        {testimonial.author}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export const FeaturedNews = () => {
  return (
    <div className="mywrapper w-full min-h-[623px] px-[135px] py-[70px] bg-gray-50 flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="self-stretch min-h-[483px] flex-col justify-start items-start gap-[50px] flex">
        <div className="self-stretch text-neutral-900 text-5xl font-semibold capitalize">
          Featured News
        </div>
        <div className="grid justify-items-center lg:grid-cols-2 gap-10">
          <img
            className="max-w-[565px] w-full max-h-[375px] rounded-[10px]"
            src="https://via.placeholder.com/565x375"
          />
          <div className="self-stretch flex-col justify-start items-start gap-[45px] inline-flex">
            <div className="self-stretch h-[260px] flex-col justify-start items-start gap-[30px] flex">
              <div className="self-stretch text-neutral-900 text-xl font-medium leading-[35px]">
                Same Subscription with more Capabilities with ArcGIS Pro and
                ArcOnline Licenses
              </div>
              <div className="self-stretch text-neutral-900 text-base font-normal leading-[30px]">
                TwoNode Technologies is thrilled to announce a long-term
                partnership with sambus geospatial, the official distributor for
                ESRI products.
                <br />
                This partnership is to provide ultra-specific capabilities
                beyond your imagination.
              </div>
            </div>
            <div className="px-5 py-2.5 bg-sky-950 rounded-[5px] justify-center items-center gap-2.5 inline-flex">
              <div className="text-white text-lg font-normal leading-7">
                Read More
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const OurGallery = () => {
  return (
    <div className="mywrapper w-full h-[1038px] px-[131px] py-[68px] bg-white flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="self-stretch h-[902px] flex-col justify-start items-center gap-10 flex">
        <div className="flex-col justify-start items-center gap-5 flex">
          <div className="flex-col justify-start items-center gap-[15px] flex">
            <div className="justify-start items-center gap-[15px] inline-flex">
              <div className="w-5 h-[0px] border-2 border-sky-950"></div>
              <div className="text-sky-950 text-xl font-medium leading-[34px]">
                Our Gallery
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-[18px] flex">
              <div className="text-center text-zinc-950 text-[32px] font-extrabold leading-[54px]">
                Take A View of Our Gallery
              </div>
            </div>
          </div>
        </div>
        <div className="justify-start items-center gap-[33px] inline-flex">
          <div className="justify-start items-center gap-2.5 flex">
            <img
              className="w-[270.23px] h-[652px] rounded-2xl"
              src="https://via.placeholder.com/270x652"
            />
          </div>
          <div className="w-[270.54px] flex-col justify-start items-start gap-[30px] inline-flex">
            <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
              <img
                className="w-[270.23px] h-[382px] rounded-2xl"
                src="https://via.placeholder.com/270x382"
              />
            </div>
            <div className="self-stretch h-60 flex-col justify-start items-start gap-2.5 flex">
              <img
                className="self-stretch h-60 rounded-2xl"
                src="https://via.placeholder.com/271x240"
              />
            </div>
          </div>
          <div className="w-[270.54px] flex-col justify-start items-start gap-[30px] inline-flex">
            <div className="self-stretch h-60 flex-col justify-start items-start gap-2.5 flex">
              <img
                className="self-stretch h-60 rounded-2xl"
                src="https://via.placeholder.com/271x240"
              />
            </div>
            <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
              <img
                className="w-[270.23px] h-[382px] rounded-2xl"
                src="https://via.placeholder.com/270x382"
              />
            </div>
          </div>
          <div className="justify-start items-center gap-2.5 flex">
            <img
              className="w-[270.23px] h-[652px] rounded-2xl"
              src="https://via.placeholder.com/270x652"
            />
          </div>
        </div>
        <div className="w-[257px] h-[67px] px-5 py-6 bg-sky-950 rounded-[50px] justify-center items-center gap-2.5 inline-flex">
          <div className="text-white text-lg font-semibold">Load More</div>
        </div>
      </div>
    </div>
  );
};

export const FrequentlyAskedQuestions = () => {
  return (
    <div className="mywrapper w-full h-[450px] py-[75px] bg-white flex-col justify-start items-center inline-flex">
      <div className="h-[300px] flex-col justify-start items-center gap-[60px] flex">
        <div className="text-center text-neutral-900 text-5xl font-semibold capitalize">
          Frequently Asked Questions
        </div>
        <div className="flex-col justify-start items-start gap-[18px] flex">
          <div className="flex-col justify-start items-start flex">
            <div className="w-[1170px] px-[30px] py-6 bg-gray-50 justify-between items-center inline-flex">
              <div className="text-neutral-900 text-2xl font-bold leading-[34px]">
                What do we do at TwoNode Technologies?
              </div>
              <div className="w-5 h-5 relative" />
            </div>
          </div>
          <div className="flex-col justify-start items-start flex">
            <div className="w-[1170px] px-[30px] py-6 bg-gray-50 justify-between items-center inline-flex">
              <div className="text-neutral-900 text-2xl font-bold leading-[34px]">
                On what platform is your solutions built?
              </div>
              <div className="w-5 h-5 relative" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ReachOutToUs = () => {
  return (
    <div className="mywrapper w-full h-[929px] px-[135px] py-[75px] bg-gray-50 flex-col justify-center items-start gap-12 inline-flex">
      <div className="justify-center items-center gap-[69px] inline-flex">
        <div className="w-[571px] h-[738px] px-[50px] py-[34px] bg-white rounded-[10px] shadow justify-center items-center gap-2.5 flex">
          <div className="flex-col justify-start items-start gap-[30px] inline-flex">
            <div className="flex-col justify-start items-start gap-[15px] flex">
              <div className="flex-col justify-start items-start gap-2.5 flex">
                <div className="justify-start items-center gap-[15px] inline-flex">
                  <div className="w-5 h-[0px] border-2 border-sky-950"></div>
                  <div className="text-sky-950 text-xl font-medium leading-[34px]">
                    Get In Touch
                  </div>
                </div>
                <div className="self-stretch h-12 flex-col justify-start items-start gap-[18px] flex">
                  <div className="text-sky-950 text-[40px] font-extrabold">
                    You Can Reach Out To Us!
                  </div>
                </div>
              </div>
              <div className="w-[498px] text-sky-950 text-[15px] font-normal leading-tight">
                Discover how our innovative GIS solution revolutionizes the
                representation of extent and survey information.
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-6 flex">
              <div className="flex-col justify-start items-start gap-[15px] flex">
                <div className="self-stretch text-sky-950 text-base font-medium leading-7">
                  Name
                </div>
                <div className="w-[520px] px-5 py-3.5 rounded-[5px] border border-zinc-200 justify-start items-center gap-2.5 inline-flex">
                  <div className="text-neutral-600 text-base font-normal leading-7">
                    Enter Name
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-[15px] flex">
                <div className="self-stretch text-sky-950 text-base font-medium leading-7">
                  Email Address
                </div>
                <div className="w-[520px] px-5 py-3.5 rounded-[5px] border border-zinc-200 justify-start items-center gap-2.5 inline-flex">
                  <div className="text-neutral-600 text-base font-normal leading-7">
                    Enter Email Address
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-[15px] flex">
                <div className="self-stretch text-sky-950 text-base font-medium leading-7">
                  Your Message
                </div>
                <div className="w-[520px] h-[138px] px-5 py-3.5 rounded-[5px] border border-zinc-200 justify-start items-start gap-2.5 inline-flex">
                  <div className="text-neutral-600 text-base font-normal leading-7">
                    Enter Message
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="w-[520px] px-[45px] py-[15px] bg-sky-950 rounded-[30px] justify-center items-center gap-2.5 inline-flex">
                <div className="text-center text-white text-lg font-semibold leading-[30px]">
                  Submit
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[530px] h-[738px] bg-black/opacity-20 rounded-lg" />
      </div>
    </div>
  );
};
