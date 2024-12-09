"use client";

import Blush from "@assets/images/Common/blush.png";
import MEA from "@assets/images/Hero/mea.png";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

const slides = [
	{
		src: MEA,
		content:
			"Content 1: Ea quis blanditiis aut labore dolores qui quam pariatur est nostrum laudantium ut praesentium reiciendis non voluptas commodi. Et totam dolor ut neque tenetur non error sapiente et natus praesentium in magnam quod ut illum consequatur! Ut neque eaque aut sequi natus qui labore sunt sed deserunt voluptate et ipsum vero quo tenetur quae. Aut quidem magnam est corporis velit est odio laudantium a aliquam autem.",
	},
	{
		src: MEA,
		content:
			"Content 2: Ea quis blanditiis aut labore dolores qui quam pariatur est nostrum laudantium ut praesentium reiciendis non voluptas commodi. Et totam dolor ut neque tenetur non error sapiente et natus praesentium in magnam quod ut illum consequatur! Ut neque eaque aut sequi natus qui labore sunt sed deserunt voluptate et ipsum vero quo tenetur quae. Aut quidem magnam est corporis velit est odio laudantium a aliquam autem.",
	},
	{
		src: MEA,
		content:
			"Content 3: Ea quis blanditiis aut labore dolores qui quam pariatur est nostrum laudantium ut praesentium reiciendis non voluptas commodi. Et totam dolor ut neque tenetur non error sapiente et natus praesentium in magnam quod ut illum consequatur! Ut neque eaque aut sequi natus qui labore sunt sed deserunt voluptate et ipsum vero quo tenetur quae. Aut quidem magnam est corporis velit est odio laudantium a aliquam autem.",
	},
	{
		src: MEA,
		content:
			"Content 4: Ea quis blanditiis aut labore dolores qui quam pariatur est nostrum laudantium ut praesentium reiciendis non voluptas commodi. Et totam dolor ut neque tenetur non error sapiente et natus praesentium in magnam quod ut illum consequatur! Ut neque eaque aut sequi natus qui labore sunt sed deserunt voluptate et ipsum vero quo tenetur quae. Aut quidem magnam est corporis velit est odio laudantium a aliquam autem.",
	},
	{
		src: MEA,
		content:
			"Content 5: Ea quis blanditiis aut labore dolores qui quam pariatur est nostrum laudantium ut praesentium reiciendis non voluptas commodi. Et totam dolor ut neque tenetur non error sapiente et natus praesentium in magnam quod ut illum consequatur! Ut neque eaque aut sequi natus qui labore sunt sed deserunt voluptate et ipsum vero quo tenetur quae. Aut quidem magnam est corporis velit est odio laudantium a aliquam autem.",
	},
	{
		src: MEA,
		content:
			"Content 7: Ea quis blanditiis aut labore dolores qui quam pariatur est nostrum laudantium ut praesentium reiciendis non voluptas commodi. Et totam dolor ut neque tenetur non error sapiente et natus praesentium in magnam quod ut illum consequatur! Ut neque eaque aut sequi natus qui labore sunt sed deserunt voluptate et ipsum vero quo tenetur quae. Aut quidem magnam est corporis velit est odio laudantium a aliquam autem.",
	},
];

export default function Highlights() {
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		console.log("Active Index: ", activeIndex);
	}, [activeIndex]);

	return (
		<div className=" relative w-screen box-border overflow-x-hidden overflow-y-hidden h-screen flex flex-col items-center sm:justify-center">
			<div className="text-customOrange font-outfit font-bold text-7xl">
				Highlights
			</div>
			<div className="flex flex-col box-border h-full sm:flex-row w-[90%] sm:w-[80%]">
				<div className=" h-1/2 sm:h-auto box-border sm:w-1/2 border-b-4 sm:border-r-4 border-[#3C97AB]">
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
						onSlideChange={(swiper) =>
							setActiveIndex(swiper.realIndex)
						}
						className="w-full h-full"
						id={"highlightSwiper"}
					>
						{slides.map((slide, index) => (
							<SwiperSlide key={index} id="highlightSlide">
								<div className="h-full w-full flex flex-col">
									<Image
										src={slide.src}
										alt="Highlight"
										className="w-full aspect-square object-cover select-none my-auto"
									/>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div className="h-1/2 py-5 box-border sm:h-auto sm:w-1/2 sm:p-5 flex justify-center sm:items-center font-montesrrat font-medium text-xl text-justify">
					<div className="overflow-auto">
						{slides[activeIndex].content}
					</div>
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
