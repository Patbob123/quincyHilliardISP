import { FadeInSection } from './FadeinSection.js';
export function Hero() {
  return /*#__PURE__*/React.createElement("div", {
    id: "home",
    className: "flex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 w-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "z-[1] h-screen min-h-[800px] flex flex-col justify-center items-center"
  }, /*#__PURE__*/React.createElement(FadeInSection, null, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center flex-col lg:flex-row border-2 border-bordercol rounded-2xl box-border\r w-48 h-48 md:hover:h-80 md:hover:w-80 lg:w-80 lg:h-80 lg:md:hover:h-96 lg:md:hover:w-96 duration-100"
  }, /*#__PURE__*/React.createElement("img", {
    src: './assets/0.jpeg',
    alt: "Icon",
    className: "h-full w-full object-cover border-2 border-bordercol rounded-2xl box-border"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "titlefont font-extrabold text-transparent text-center text-3xl sm:text-5xl lg:text-8xl bg-clip-text bg-gradient-to-r from-red-400 to-pink-600 duration-700"
  }, "QUINCY C. HILLIARD"), /*#__PURE__*/React.createElement("div", {
    className: "text-slate-100 font-bold text-1xl sm:text-1xl lg:text-3xl"
  }, "and why he's great...")), /*#__PURE__*/React.createElement(InfoBox, {
    title: "About"
  }, "Quincy Hilliard is an award-winning 69-year-old african american composer who has scored over 250 works such as \"Anthem for Victory\" for the 1996 Olympic Games in Atlanta. He is also a music professor at the University of Louisiana at Lafayette, authoring many educational books about musical theory and composition.")));
}
function InfoBox(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "p-16 md:p-16 lg:pt-24 gap-8 lg:gap-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-opacity-100 bg-subbgcol shadow-2xl transition ease-in-out p-2 flex lg:flex-col justify-center h-full w-full border-2 border-bordercol rounded-2xl box-border md:hover:-translate-y-1 md:hover:scale-105 md:hover:bg-opacity-80 md:hover:shadow-2xl md:hover:text-hovertxtcol md:hover:bg-hoverbgcol duration-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-subtextcol flex flex-col lg:items-center lg:justify-around lg:h-2/3"
  }, /*#__PURE__*/React.createElement(FadeInSection, null, /*#__PURE__*/React.createElement("div", {
    className: "text-base lg:text-m"
  }, "This is a website made from scratch to complement the essay")), /*#__PURE__*/React.createElement("div", {
    className: "p-8 text-subtextcol flex flex-col lg:items-center lg:justify-around lg:h-2/3"
  }, /*#__PURE__*/React.createElement(FadeInSection, null, /*#__PURE__*/React.createElement("div", {
    className: "text-base lg:text-xl"
  }, "About Quincy C. Hilliard:")), /*#__PURE__*/React.createElement(FadeInSection, null, /*#__PURE__*/React.createElement("div", {
    className: "text-left lg:text-l whitespace-none overflow-y-auto"
  }, props.children))))));
}