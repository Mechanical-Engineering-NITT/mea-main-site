import Link from "next/link";
import Image from "next/image";
import meaLogo from "../../../../public/images/Navbar/meaLogo.png"
import clgLogo from "../../../../public/images/Navbar/clgLogo.png"

const Navbar = () => {
    return(
        <div className="fixed h-fit w-screen backdrop-blur flex justify-around px-1 sm:px-2 lg:px-3 items-center top-0 z-50 font-[Montserrat] text-base sm:text-lg lg:text-xl xl:text-2xl text-white font-medium flex-wrap">
        <div>  
            <Image
                src={meaLogo}
                alt="MEA LOGO"
                className="size-16 lg:size-20 xl:size-20"
            />
        </div>
        <div>
            <Link href={'/'}>Synergy</Link>
        </div>
        <div>
            <Link href={'/'}>Projects</Link>
        </div>
        <div>
            <Link href={'/'}>Study Materials</Link>
        </div>
        <div>
            <Link href={'/'}>Good to Know</Link>
        </div>
        <div>
            <Link href={'/'}>FAQs</Link>
        </div>
        <div><Image src={clgLogo} alt="NITT LOGO" className="size-16 lg:size-20 xl:size-20" /></div>
    </div>
);
};
export default Navbar;