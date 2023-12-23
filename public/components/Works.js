import { FadeInSection } from './FadeinSection.js';
export function Team() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    id: "team",
    className: " z-[1] text-alttextcol w-screen h-screen min-h-[800px] flex flex-col justify-center items-center ",
    style: {
      paddingBottom: '10vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "titlefont text-alttextcol text-5xl lg:text-8xl flex justify-center items-center w-full h-1/6 lg:h-1/3 duration-700 drop-shadow-lg shadow-shadowcol"
  }, "NOTABLE WORKS"), /*#__PURE__*/React.createElement("div", {
    className: "flex-row flex text-subtextcol whitespace-none overflow-x-auto w-5/6 h-5/6 lg:h-2/3 p-8 lg:pt-12 lg:pb-12 gap-8 lg:gap-8 border-2 border-bordercol rounded-2xl"
  }, /*#__PURE__*/React.createElement(InfoBox, {
    link: "https://www.youtube.com/watch?v=aZ1G0RI-A2s"
  }, "As the World Watched"), /*#__PURE__*/React.createElement(InfoBox, {
    link: "https://www.youtube.com/watch?v=9cKUcxAhOQ0"
  }, "Ghost Dance"), /*#__PURE__*/React.createElement(InfoBox, {
    link: "https://www.youtube.com/watch?v=6ntOIccifz4"
  }, "Unknown Soldier"), /*#__PURE__*/React.createElement(InfoBox, {
    link: "https://www.youtube.com/watch?v=VHUQtW3ljAY"
  }, "Driven"), /*#__PURE__*/React.createElement(InfoBox, {
    link: "https://www.youtube.com/watch?v=C7_21SAR06c"
  }, "Fanfare for Freedom"), /*#__PURE__*/React.createElement(InfoBox, {
    link: "https://www.prestomusic.com/sheet-music/composers/7921/browse"
  }, "Many more"))));
}
function InfoBox(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-opacity-50 bg-subbgcol shadow-2xl transition ease-in-out lg:pl-5 lg:pr-5 p-5 flex lg:flex-col justify-center lg:w-1/4 h-full w-full border-2 border-bordercol rounded-2xl box-border md:hover:-translate-y-1 md:hover:scale-105 md:hover:bg-opacity-80 md:hover:shadow-2xl md:hover:text-hovertxtcol md:hover:bg-hoverbgcol duration-200"
  }, /*#__PURE__*/React.createElement(FadeInSection, null, /*#__PURE__*/React.createElement("a", {
    href: props.link,
    target: "_blank"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full underline underline-offset-1"
  }, props.children))));
}