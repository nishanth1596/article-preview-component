import { useState } from "react";

import img from "../../assets/images/drawers.jpg";
import avatarImg from "../../assets/images/avatar-michelle.jpg";
import shareIconImg from "../../assets/images/icon-share.svg";

import fbIcon from "../../assets/images/icon-facebook.svg";
import twitterIcon from "../../assets/images/icon-twitter.svg";
import pinIcon from "../../assets/images/icon-pinterest.svg";
import Button from "../Button/Button";

// import Share from "../Share";

function App() {
  const [isActive, setIsActive] = useState(false);

  function handleActive() {
    setIsActive((active) => !active);
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-[#ECF2F8]">
      <header className="sr-only">
        <h1 className="">Interior designers</h1>
      </header>
      <main className="rounded-[10px] bg-white">
        <article className="relative max-w-[20.44rem] lg:flex lg:min-w-[45.63rem]">
          <img
            className="h-[200px] w-full rounded-l-[0.625rem] lg:h-auto lg:max-w-[17.81rem]"
            src={img}
            alt="a green drawer with five compartments, a photo stand and a flower vase on top of it"
          />

          <div className="mx-8 mb-5 mt-8 max-w-[16.44rem] lg:mx-10 lg:my-8 lg:max-w-[22.81rem]">
            <h2 className="text-base font-bold leading-6 tracking-[.2px] text-[#48556a] lg:text-xl lg:leading-7 lg:tracking-[.25px]">
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h2>
            <p className="mt-3 text-[0.813rem] font-medium leading-5 tracking-[0.12px] text-[#6e8098] opacity-45 lg:opacity-100">
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I've got some simple tips to
              help you make any room feel complete.
            </p>

            <div className="mt-8 flex items-center justify-between lg:mt-5">
              <div className="flex items-center gap-4">
                <img
                  src={avatarImg}
                  alt="Michelle Appleton"
                  className="w-10 rounded-full"
                />

                <h3 className="flex flex-col text-[#9daec2]">
                  <span className="text-sm font-bold tracking-[0.12px] text-[#48556a]">
                    Michelle Appleton
                  </span>
                  28 Jun 2020
                </h3>
              </div>
              <Button
                type="primary"
                handleActive={handleActive}
                shareIconImg={shareIconImg}
              />
            </div>
          </div>

          {isActive && (
            <div
              className="absolute bottom-0 left-0 right-0 -mb-5 flex h-16 items-center justify-between bg-[#48556a] px-8 py-4 lg:-right-16 lg:bottom-auto lg:left-auto lg:top-32 lg:z-10 lg:max-w-[15.5rem] lg:animate-bounce lg:rounded-[.625rem] lg:ease-out"
              style={{ animationIterationCount: 1 }}
            >
              <div className="flex items-center gap-5">
                <p className="text-sm font-medium tracking-[5px] text-[#9daec2]">
                  Share
                </p>
                <div className="flex gap-4">
                  <img src={fbIcon} alt="Facebook Icon" />
                  <img src={twitterIcon} alt="Twitter Icon" />
                  <img src={pinIcon} alt="Pinterest Icon" />
                </div>
              </div>

              <Button
                type="secondary"
                handleActive={handleActive}
                shareIconImg={shareIconImg}
              />
            </div>
          )}
        </article>
      </main>

      <footer className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 animate-pulse text-center text-gray-800">
        Challenge by{''}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}<a href="https://www.frontendmentor.io/profile/nishanth1596">
          Nishanth
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
