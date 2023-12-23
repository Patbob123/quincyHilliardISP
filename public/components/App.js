import { Hero } from './Hero.js';
import { Contact } from './Contact.js';
import { About } from './About.js';
import { NavBar } from './NavBar.js';
import { Team } from './Works.js';
function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: `scroll-smooth snap-mandatory snap-y`,
    "x-init": "app"
  }, /*#__PURE__*/React.createElement("div", {
    className: "video-container"
  }, /*#__PURE__*/React.createElement("img", {
    src: './assets/bge.png',
    id: "unimg",
    alt: "Icon",
    className: "w-full h-full object-cover"
  }), /*#__PURE__*/React.createElement("div", {
    "x-data": "{ shown: false , handleIntersect: () => { shown = true; }  }",
    "x-intersect": "handleIntersect()",
    className: "caption"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(NavBar, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(Team, null), /*#__PURE__*/React.createElement(Contact, null)))));
}
document.addEventListener('DOMContentLoaded', function () {
  const root = ReactDOM.createRoot(document.querySelector('#app'), {
    throwIfNamespace: false
  });
  console.log(root);
  root.render( /*#__PURE__*/React.createElement(App, null));
});