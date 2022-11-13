import { useState } from "react";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import logo from "./assets/images/banner_LOGO.png";
import tankTop from "./assets/images/tank-top.gif";
import tankSide from "./assets/images/tank-side.gif";
import soldierFront from "./assets/images/soldier-front.png";
import soldierBack from "./assets/images/soldier-back.png";
import tree from "./assets/images/tree.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-black">
        <Navbar />
        <section className="container mx-auto bg-opacity-0 h-screen md:h-[calc(100vh-56px)] text-white">
          <div className="flex flex-col gap-28 lg:gap-20">
            <div className="flex justify-between mt-6 px-5 text-2xl">
              <span>I- 00</span>
              <span>HI- 99999</span>
              <span>Hex School</span>
            </div>
            <img
              src={logo}
              alt="logo"
              className="relative mx-auto w-2/3 translate-x-[5%]"
            />
            <div className="flex items-start gap-6 flex-col mx-auto text-3xl">
              <div className="group relative translate-x-[-10%]">
                <input
                  type="radio"
                  name="status"
                  id="login"
                  className="hidden peer/login"
                  defaultChecked
                />
                <img
                  src={tankTop}
                  alt="tankTop"
                  className="hidden absolute h-8 peer-checked/login:block"
                />
                <label
                  htmlFor="login"
                  className="pl-28 peer-checked/login:text-primary"
                >
                  1 LOG IN
                </label>
              </div>
              <div className="group relative translate-x-[-10%]">
                <input
                  type="radio"
                  name="status"
                  id="signUp"
                  className="hidden peer/signUp"
                />
                <img
                  src={tankTop}
                  alt="tankTop"
                  className="hidden absolute h-8 peer-checked/signUp:block"
                />
                <label
                  htmlFor="signUp"
                  className="pl-28 peer-checked/signUp:text-primary"
                >
                  2 SIGN UP
                </label>
              </div>
            </div>
            <span className="mx-auto lg:text-2xl">
              Interactive And Responsive Web Design.
            </span>
          </div>
        </section>
        {/* dialogs */}
        <section className="flex flex-col gap-20 lg:gap-60 overflow-hidden text-3xl">
          <div className="relative">
            <div className="relative flex justify-center items-center bg-primary max-w-[980px] w-full md:w-[calc(50vw+50px)] h-[350px] lg:h-[570px] py-4 md:py-16 px-8 md:px-16 mt-14">
              <div className="absolute right-4 top-[-30px] bg-dialogs-flat bg-contain bg-no-repeat h-full w-1/2 text-center md:pt-[2%]">
                I’m cool !
              </div>
              <div className="flex justify-center items-center bg-web-animation bg-cover bg-no-repeat h-full w-full">
                <img src={tankSide} alt="tankSide" className="w-1/2" />
              </div>
            </div>
            <p className="md:absolute top-1/2 left-1/2 mt-20 md:mt-0 text-white text-center">
              羨慕別人的酷酷網頁動畫...
            </p>
          </div>
          <div className="relative">
            <div className="relative flex justify-center items-center bg-primary w-full max-w-[980px] md:w-[calc(50vw+50px)] h-[350px] lg:h-[570px] py-4 md:py-16 px-8 md:px-16 mt-14 ml-auto">
              <div className="absolute left-0 md:left-[-100px] lg:left-[-200px] top-[-50px] lg:top-[-150px] bg-dialogs bg-contain bg-no-repeat h-full w-1/2 text-center pt-[10%] z-10">
                !@#$%...
              </div>
              <img
                src={soldierFront}
                alt="soldierFront"
                className="absolute bottom-0 right-[-50px] md:right-5 md:w-3/4 object-cover"
              />
            </div>
            <p className="md:absolute top-1/2 left-1/4 mt-20 md:mt-0 text-white text-center">
              滿足不了同事的許願...
            </p>
          </div>
          <div className="relative">
            <div className="relative flex justify-center items-center bg-primary w-full max-w-[980px] md:w-[calc(50vw+50px)] h-[350px] lg:h-[570px] py-4 md:py-16 px-8 md:px-16 mt-14">
              <img
                src={tree}
                alt="tree"
                className="absolute bottom-0 right-[-50px] md:right-0 h-[110%] object-cove"
              />
              <img
                src={soldierBack}
                alt="soldierBack"
                className="absolute bottom-0 left-1/4 md:right-5 w-1/4 md:w-[35%]"
              />
            </div>
            <p className="md:absolute top-2/3 right-1/4 mt-20 md:mt-0 text-white text-center">
              動畫技能樹太雜無從下手...
            </p>
          </div>
        </section>
        <Loading />
      </div>
    </>
  );
}

export default App;
