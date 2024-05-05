import Image from "next/image";
import mea from "../../../../public/images/Hero/mea.png"
const Hero = () => {
    return (
        <>
        <div className="relative w-screen h-screen">
            <Image src={mea} alt="MEA" className="absolute inset-0 w-full h-full object-cover z-0 " />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white  font-[Outfit] text-7xl sm:text-8xl lg:text-9xl xl:text-9xl font-semibold bg-black bg-opacity-35">
            MEA ‘24
            <p className="mt-4 font-[Montserrat] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl ml-16 font-normal">Mechanical Engineering Association</p>
            <p className="mt-4 font-[Montserrat] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal">NIT Trichy</p>
            </div>
        </div>
        </>

    );
};
export default Hero;

