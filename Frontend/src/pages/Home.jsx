import React from "react";
import Landinglogo from "../assests/landinglogo.png";
import Landinglogo1 from "../assests/landinglogo1.png";
import Char from "../assests/image1.png";
import Qr from "../assests/image.png";
import Eatzze from "../assests/eatzze.png";
import Eatclub from "../assests/eatclub.png";
import Internzze from "../assests/internzze.png";
import Meesho from "../assests/meesho.png";
import Mikava from "../assests/mikava.png";
import Car from "../assests/car.png";
import Pc from "../assests/pc.png";
import Ecomerce from "../assests/ecomerce.png";
import Delivery from "../assests/delivery.png";
import Chat from "../assests/chat.png";
import Last from "../assests/last.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-fit  border-black z-9 relative pt-35">
      <div className=" w-full h-full">
        <h1 className="w-full h-fit text-[40px] font-bold text-center pt-9 leading-12 ">
          "Where the Streets Meet the Screen
          <br />
          <b className="bg-gradient-to-r from-red-500 to-gray-500 bg-clip-text text-transparent font-semibold">
            Scan
          </b>
          ,{" "}
          <b className="bg-gradient-to-r from-red-500 to-gray-500 bg-clip-text text-transparent font-semibold">
            Engage
          </b>
          ,{" "}
          <b className="bg-gradient-to-r from-red-500 to-gray-500 bg-clip-text text-transparent font-semibold">
            Convert
          </b>
          "
        </h1>
        <div className="w-full pt-10 flex  border-black h-fit gap-2 justify-between px-15">
          <p className="text-[20px] tracking-widest leading-9 text-[rgba(111, 111, 111, 1)] text-2xl mt-30 ml-5 h-fit  w-140 shrink-0">
            QRWalk is a smart street-level advertising platform that turns
            physical banners into interactive experiences.We place branded
            banners with QR codes in high-traffic locations.When people walk by,
            they scan and instantly connect with your digital platform app,
            website, product, or offer.
          </p>
          <div className="h-120  flex items-center justify-end w-fit relative">
            <img src={Landinglogo} className="h-full align-right" />
            <img
              src={Char}
              className="absolute bottom-0 right-[80%] scale-170 mb-4"
            />
            <img src={Qr} className="h-[20%] absolute bottom-70 right-[90%]" />
          </div>
        </div>
        <h1 className="w-full font-bold text-red-500 mt-40 text-center text-4xl">
          20+ Brands Join
        </h1>
        <div className="w-full h-50 flex items-center mt-10 gap-9 px-3">
          <img src={Eatzze} className="h-[94%] scale-90" />
          <img src={Eatclub} className="h-[94%] scale-90" />
          <img src={Internzze} className="h-[94%] scale-90" />
          <img src={Meesho} className="h-[94%] scale-90" />
          <img src={Mikava} className="h-[94%] scale-90" />
          <img src={Car} className="h-[94%] scale-90" />
        </div>
        <div className="w-screen h-fit border-2 mt-30 relative bg-[#303030] overlfow-hidden">
          <img
            src={Landinglogo1}
            className="absolute right-0 bottom-0 h-150 z-7"
          />
          <div
            className="w-full h-full absolute top-0 left-[60%]"
            style={{
              backgroundImage: "radial-gradient(closest-side,#5b5d61,#303030)",
              zIndex: 6,
            }}
          ></div>
          <div className="w-full h-190 relative bg-transparent z-7 px-1">
            <h1 className="text-white text-3xl font-bold w-full text-center mt-15">
              Why QRWalk Works?
            </h1>
            <div className="bg-transparent min-h-screen p-10 mt-30">
              <div className="grid grid-cols-3 grid-rows-3 gap-5 w-200">
                {/* Cost-Effective */}
                <div className="bg-[#3a3a3a] rounded-lg p-4 col-span-1 row-span-1">
                  <h3 className="text-orange-400 text-xl font-bold mb-2">
                    Cost-Effective
                  </h3>
                  <p className="text-white text-sm">
                    One scan takes users straight to your product or platform
                    QRWalk is a smartstreet-level and the advertising platform
                    that One scan takes users straight to your product.
                  </p>
                </div>

                {/* High Visibility */}
                <div className="bg-[#3a3a3a] rounded-lg p-4 col-span-1 row-span-2">
                  <h3 className="text-orange-400 text-xl font-bold mb-2">
                    High Visibility
                  </h3>
                  <p className="text-white text-sm">
                    One scan takes users straight to your product or platform
                    QRWalk is a smartstreet-level and the advertising platform
                    that One scan takes users straight to your product or...
                  </p>
                </div>

                {/* Real-Time Analytics */}
                <div className="bg-[#3a3a3a] rounded-lg p-4 col-span-1 row-span-1">
                  <h3 className="text-orange-400 text-xl font-bold mb-2">
                    Real-Time Analytics
                  </h3>
                  <p className="text-white text-sm">
                    One scan takes users straight to your product or platform
                    QRWalk is a smartstreet-level and the advertising
                    platform...
                  </p>
                </div>

                {/* CAC */}
                <div className="bg-[#3a3a3a] rounded-lg p-4 col-span-1 row-span-1">
                  <h3 className="text-orange-400 text-xl font-bold mb-2">
                    CAC
                  </h3>
                  <p className="text-white text-sm">
                    One scan takes users straight to your product or platform
                    QRWalk is a smartstreet-level and the advertising
                    platform...
                  </p>
                </div>

                {/* Multi-brand Banners */}
                <div className="bg-[#3a3a3a] rounded-lg p-4 col-span-1 row-span-1">
                  <h3 className="text-orange-400 text-xl font-bold mb-2">
                    Multi-brand Banners
                  </h3>
                  <p className="text-white text-sm">
                    One scan takes users straight to your product or platform
                    QRWalk is a smartstreet-level and the advertising
                    platform...
                  </p>
                </div>

                {/* Instant Engagement */}
                <div className="bg-[#3a3a3a] rounded-lg p-4 col-span-1 row-span-2 absolute top-">
                  <h3 className="text-orange-400 text-xl font-bold mb-2">
                    Instant Engagement
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="w-full font-bold text-red-500 mt-40 text-center text-4xl">
          Ideal For
        </h1>
        <div className=" w-full h-80 mt-16 flex items-center justify-center gap-32 px-3">
          <div className="w-70 border-2 h-full rounded-lg flex items-center justify-center flex-col px-2 gap-6">
            <img src={Pc} className="" />
            <h1 className="font-bold text-3xl w-full text-center">
              App Based Startup
            </h1>
          </div>
          <div className="w-70 border-2 h-full rounded-lg flex items-center justify-center flex-col px-2 gap-6">
            <img src={Ecomerce} className="" />
            <h1 className="font-bold text-3xl w-full text-center">
              E-commerce platforms
            </h1>
          </div>
          <div className="w-70 border-2 h-full rounded-lg flex items-center justify-center flex-col px-2 gap-6">
            <img src={Delivery} className="" />
            <h1 className="font-bold text-3xl w-full text-center">
              Food delivery & D2C brands
            </h1>
          </div>
          <div className="w-70 border-2 h-full rounded-lg flex items-center justify-center flex-col px-2 gap-6">
            <img src={Chat} className="" />
            <h1 className="font-bold text-3xl w-full text-center">
              Local-to-digital businesses
            </h1>
          </div>
        </div>
        <h1 className="w-full font-bold text-red-500 mt-40 text-center text-4xl">
          Want Your Brand on the Next QRwalk?
        </h1>
        <div className="w-full px-30 h-fit flex pt-20 justify-between items-centers">
          <p className="w-150 text-[1.2rem] tracking-wide mt-3">
            Imagine your app or website being discovered not just online but
            right on the streets. With QRWalk, you get the power of physical
            visibility paired with instant digital engagement. Whether you're a
            startup looking for growth or an established brand wanting more
            eyes, QRWalk brings you closer to real users in real time.
            <br/>
            
            <br/>
            <Link to="/contact-page" className="px-6 py-3 border-2 rounded-lg text-red-500 border-red-500 font-semibold hover:cursor-pointer">Contact with Us</Link>
          </p>
          <img src={Last} className="w-120 aspect-[16/9]"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
