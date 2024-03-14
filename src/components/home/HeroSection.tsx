import { ImageWrap } from "../atom/ImageWrap";
import bgImage from "../../assets/slider/slider_bg.jpg";
import shape01 from "../../assets/slider/slider_shape01.png";
import { Text } from "../atom/Text";
import { Button } from "../atom/Button";

const HeroSection = () => {
    return (
        <section className="bg-center lg:h-[80vh] md:h-[60vh] h-[90vh] w-full bg-cover z-[1] relative after:right-0 before:content-[''] before:absolute before:w-6/12 before:bg-[#45f882] before:h-[50px] before:left-0 before:bottom-0 before:clip-path-polygon-[0_0,_0_100%,_100%_100%] after:content-[''] after:absolute after:w-6/12 after:bg-[#45f882] after:h-[50px] after:left-auto after:bottom-0 after:clip-path-polygon-[100%_0,_0_100%,_100%_100%] xl:before:h-[40px] xl:after:h-[40px] lg:before:h-[30px] lg:after:h-[30px] md:before:h-[30px] md:after:h-[30px] sm:before:h-[20px] sm:after:h-[20px] 
        ">
            {/* banner */}
            <ImageWrap image={bgImage} alt="Banner" className="w-full h-full" objectStatus="object-cover" />

            {/* Start Shape */}
            <ImageWrap image={shape01} alt="Shape01" className="absolute left-[15%] top-[17%] md:left-[13%] md:top-[12%] sm:left-[11%] sm:top-[11%] " objectStatus="object-cover" />

            <ImageWrap image={shape01} alt="Shape02" className=" absolute left-[10%] bottom-[45%] md:left-[12%] md:bottom-[45%] sm:left-[10%] sm:bottom-[55%] " objectStatus="object-cover" />

            <ImageWrap image={shape01} alt="Shape03" className="absolute right-[47%] top-[20%] md:right-[53%] md:top-[15%] sm:right-[10%] sm:top-[17%] " objectStatus="object-cover" />

            <ImageWrap image={shape01} alt="Shape04" className="w-[80px] h-[80px] absolute right-[22%] top-[43%] xl:right-[40%] xl:top-[32%] lg:right-[40%] lg:top-[32%] md:right-[20%] md:top-[35%] sm:right-[14%] sm:top-[33%] " objectStatus="object-fill" />
            {/* Start Shape */}

            <main className="w-full h-full absolute top-0 inset-x-0 bg-gradient-to-b from-[#0f161b]/60 z-[10] flex md:flex-row flex-col px-10">
                <aside className="flex-1 flex flex-col justify-center items-start gap-4">
                    <Text as="h3" className="uppercase bg-gradient-to-r from-myGreen text-gray-100 px-8 py-3 rounded-md font-barlow font-bold tracking-widest text-2xl">Live Gaming</Text>
                    <Text as="h1" className="uppercase text-8xl leading-[0.8] font-poppins font-bold drop-shadow-[-1px_5px_0px_rgba(69,248,130,0.66)]
                         sm:drop-shadow-[-1px_5px_0px_rgba(69,248,130,0.66)] ">POKEMONING</Text>
                    <Text as="h5" className="uppercase ">Video Games Online</Text>
                    <Button className="slider-cta-btn text-gray-100 text-base font-bold font-barlow px-4 py-2 flex justify-center items-center">
                        Play Now
                    </Button>
                </aside>
                <aside className="flex-1 flex flex-col justify-center items-center"></aside>
            </main>

        </section>
    )
}

export default HeroSection