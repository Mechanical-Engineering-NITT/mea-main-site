"use client";

import Blush from "@assets/images/Common/blush.png";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";
import { z } from "zod";
import { HighlightsSchema } from "@actions/cms/schemas";

export default function Highlights({
	content,
}: {
	content: z.infer<typeof HighlightsSchema>;
}) {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className="h-screen w-screen flex flex-col relative overflow-x-hidden">
			<span className="text-customOrange font-outfit font-bold text-7xl w-full text-center mt-10">
				Highlights
			</span>
			<div className="flex flex-col sm:flex-row p-10 gap-5 w-full h-full">
				<Swiper
					spaceBetween={30}
					centeredSlides={true}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
					}}
					loop={true}
					navigation={true}
					modules={[Autoplay, Pagination, Navigation]}
					onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
					className="h-1/2 w-full sm:w-1/2 sm:my-auto"
					id={"highlightSwiper"}
				>
					{content.map((slide) => (
						<SwiperSlide
							key={slide.id}
							id="highlightSlide"
							className=""
						>
							<Image
								src={`${process.env.NEXT_PUBLIC_CMS_URL}${slide.url}`}
								fill={true}
								alt="Highlight"
								className=" h-full w-full object-cover select-none"
							/>
						</SwiperSlide>
					))}
				</Swiper>
				<div className="w-full sm:w-1/2 sm:my-auto border-t-4 sm:border-t-0 sm:border-l-4 border-customBlue pt-5 sm:pl-5 sm:py-5 overflow-y-auto font-montesrrat">
					{content[activeIndex]?.description}
				</div>
			</div>
			<Image
				src={Blush}
				alt="Blush"
				className=" absolute h-[90%] object-fit -left-28 sm:-left-16 -z-50"
			/>
			<Image
				src={Blush}
				alt="Blush"
				className=" absolute h-[90%] object-fit -right-28 sm:-right-16 rotate-180 -z-50"
			/>
		</div>
	);
}
