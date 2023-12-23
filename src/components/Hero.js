import { FadeInSection } from './FadeinSection.js';

export function Hero() {
    return (
        <div id="home" className="flex">
            <div className="grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 w-full">
                <div className='z-[1] h-screen min-h-[800px] flex flex-col justify-center items-center'>
                    <FadeInSection>
                        <div className="flex justify-center flex-col lg:flex-row border-2 border-bordercol rounded-2xl box-border
                            w-48 h-48 md:hover:h-80 md:hover:w-80 lg:w-80 lg:h-80 lg:md:hover:h-96 lg:md:hover:w-96 duration-100">
                            <img src={'./assets/0.jpeg'} alt="Icon" className="h-full w-full object-cover border-2 border-bordercol rounded-2xl box-border" />
                        </div>
                    </FadeInSection>
                    <div className="titlefont font-extrabold text-transparent text-center text-3xl sm:text-5xl lg:text-8xl bg-clip-text bg-gradient-to-r from-red-400 to-pink-600 duration-700">QUINCY C. HILLIARD</div>
                    <div className="text-slate-100 font-bold text-1xl sm:text-1xl lg:text-3xl">and why he's great...</div>

                </div>
                <InfoBox title="About">
                    Quincy Hilliard is an award-winning 69-year-old african american composer who has scored over 250 works such as "Anthem for Victory" for the 1996 Olympic Games in Atlanta. He is also a music professor at the University of Louisiana at Lafayette, authoring many educational books about musical theory and composition. 
                </InfoBox>
            </div>
        </div>
    );
}
function InfoBox(props) {

    return (
        <div className="p-16 md:p-16 lg:pt-24 gap-8 lg:gap-8">
            <div className='bg-opacity-100 bg-subbgcol shadow-2xl transition ease-in-out p-2 flex lg:flex-col justify-center h-full w-full border-2 border-bordercol rounded-2xl box-border md:hover:-translate-y-1 md:hover:scale-105 md:hover:bg-opacity-80 md:hover:shadow-2xl md:hover:text-hovertxtcol md:hover:bg-hoverbgcol duration-200'>
                <div className="text-subtextcol flex flex-col lg:items-center lg:justify-around lg:h-2/3">
                    <FadeInSection>
                        <div className="text-base lg:text-m">
                            This is a website made from scratch to complement the essay
                        </div>
                    </FadeInSection>
                    
                    <div className="p-8 text-subtextcol flex flex-col lg:items-center lg:justify-around lg:h-2/3">
                        <FadeInSection>
                            <div className="text-base lg:text-xl">
                                About Quincy C. Hilliard:
                            </div>
                        </FadeInSection>
                        <FadeInSection><div className="text-left lg:text-l whitespace-none overflow-y-auto">{props.children}</div></FadeInSection>
                    </div>
                </div>
                
                {/* <div className="flex justify-center flex-col lg:flex-row lg:w-full">
                <img src={props.iconUrl} alt="Icon" className="w-16 h-16 md:hover:h-20 md:hover:w-20 lg:w-24 lg:h-24 lg:md:hover:h-36 lg:md:hover:w-36 duration-100" />
            </div> */}
            </div>
        </div>
    );
}