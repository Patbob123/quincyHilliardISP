import { FadeInSection } from './FadeinSection.js';

export function Team() {
    return (
        <>

            <div id="team" className=' z-[1] text-alttextcol w-screen h-screen min-h-[800px] flex flex-col justify-center items-center 'style={{ paddingBottom: '10vh' }} > 
                <div className='titlefont text-alttextcol text-5xl lg:text-8xl flex justify-center items-center w-full h-1/6 lg:h-1/3 duration-700 drop-shadow-lg shadow-shadowcol'>NOTABLE WORKS</div>
                <div className="flex-row flex text-subtextcol whitespace-none overflow-x-auto w-5/6 h-5/6 lg:h-2/3 p-8 lg:pt-12 lg:pb-12 gap-8 lg:gap-8 border-2 border-bordercol rounded-2xl">
                    <InfoBox link="https://www.youtube.com/watch?v=aZ1G0RI-A2s">
                        As the World Watched
                    </InfoBox>
                    <InfoBox link="https://www.youtube.com/watch?v=9cKUcxAhOQ0">
                        Ghost Dance
                    </InfoBox>
                    <InfoBox link="https://www.youtube.com/watch?v=6ntOIccifz4">
                        Unknown Soldier
                    </InfoBox>
                    <InfoBox link="https://www.youtube.com/watch?v=VHUQtW3ljAY">
                        Driven
                    </InfoBox>
                    <InfoBox link="https://www.youtube.com/watch?v=C7_21SAR06c">
                        Fanfare for Freedom
                    </InfoBox>
                    <InfoBox link="https://www.prestomusic.com/sheet-music/composers/7921/browse">
                        Many more
                    </InfoBox>

                </div>
            </div>
        </>
    );
}
function InfoBox(props) {

    return (
 
            <div className='bg-opacity-50 bg-subbgcol shadow-2xl transition ease-in-out lg:pl-5 lg:pr-5 p-5 flex lg:flex-col justify-center lg:w-1/4 h-full w-full border-2 border-bordercol rounded-2xl box-border md:hover:-translate-y-1 md:hover:scale-105 md:hover:bg-opacity-80 md:hover:shadow-2xl md:hover:text-hovertxtcol md:hover:bg-hoverbgcol duration-200'>
                <FadeInSection>
                <a href={props.link} target="_blank">
                    <div className="w-full underline underline-offset-1">
                        {props.children}
                    </div>
                </a>
                </FadeInSection>
                {/* <div className="flex justify-center flex-col lg:flex-row lg:w-full">
                    <img src={props.iconUrl} alt="Icon" className="w-16 h-16 md:hover:h-20 md:hover:w-20 lg:w-24 lg:h-24 lg:md:hover:h-36 lg:md:hover:w-36 duration-100" />
                </div> */}
            </div>
     
    );
}