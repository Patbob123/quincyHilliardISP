import { Hero } from './Hero.js';
import { Contact } from './Contact.js';
import { About } from './About.js';
import { NavBar } from './NavBar.js';
import { Team } from './Works.js';



function App() {
    return (
        <div className={`scroll-smooth snap-mandatory snap-y`}
            x-init="app">
            <div className="video-container">
                <img src={'./assets/bge.png'} id="unimg" alt="Icon" className="w-full h-full object-cover" />
                <div x-data="{ shown: false , handleIntersect: () => { shown = true; }  }" x-intersect="handleIntersect()" className="caption">
                    <div>

                        <NavBar />
                        <Hero />
                        <About />
                        <Team />
                        <Contact />
                    </div>
                </div>
            </div>


        </div>
    );
}

document.addEventListener('DOMContentLoaded', function () {
    const root = ReactDOM.createRoot(document.querySelector('#app'), { throwIfNamespace: false });
    console.log(root)
    root.render(<App />);
});


