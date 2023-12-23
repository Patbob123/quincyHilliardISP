import { FadeInSection } from './FadeinSection.js';
export function Contact() {
  return /*#__PURE__*/React.createElement("div", {
    id: "contact",
    className: "z-[1] text-subtextcol w-screen h-screen min-h-[800px] bg-white flex-col justify-around items-center "
  }, /*#__PURE__*/React.createElement("div", {
    className: "titlefont text-titlecol text-5xl lg:text-8xl flex justify-center items-center w-full h-1/6 lg:h-1/3 duration-700 drop-shadow-lg shadow-shadowcol"
  }, "CONTACT"), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center items-center w-full h-4/5 lg:h-3/5 p-16 lg:p-24 gap-8 lg:gap-8"
  }, /*#__PURE__*/React.createElement(InfoBox, {
    title: "Email",
    iconUrl: "./assets/email.svg",
    text: "vazetti@louisiana.edu",
    link: "mailto:vazetti@louisiana.edu"
  })));
}
function InfoBox(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-opacity-50 bg-subbgcol shadow-2xl transition ease-in-out p-4 flex lg:flex-col justify-between min-h-auto min-w-auto h-full w-full border-2 border-bordercol rounded-2xl box-border transform md:hover:-translate-y-1 md:hover:scale-105 md:hover:bg-opacity-80 md:hover:shadow-2xl md:hover:text-hovertxtcol hover:bg-hoverbgcol duration-200"
  }, /*#__PURE__*/React.createElement(FadeInSection, null, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col lg:items-center lg:justify-around flex-grow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-2xl lg:text-2xl lg:text-center"
  }, props.title), /*#__PURE__*/React.createElement("div", {
    className: "text-base lg:text-xl"
  }, /*#__PURE__*/React.createElement("div", {
    className: props.title == "Email Us!" ? 'text-center' : 'whitespace-nowrap'
  }, props.text))), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center flex-col lg:flex-row lg:w-full"
  }, /*#__PURE__*/React.createElement("a", {
    href: props.link,
    target: "_blank"
  }, /*#__PURE__*/React.createElement("img", {
    src: props.iconUrl,
    alt: "Icon",
    className: "w-16 h-16 md:hover:h-20 md:hover:w-20 lg:w-24 lg:h-24 lg:md:hover:h-36 lg:md:hover:w-36 duration-100"
  })))));
}