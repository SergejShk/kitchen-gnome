import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Keyboard, Mousewheel, Pagination } from "swiper/modules";

import { feedbacks } from "../../utils/constants";

import "swiper/css";
import "swiper/css/pagination";

import s from "./feedbacks.module.css";

const Feedbacks = () => {
	const [imgSwiper, setImgSwiper] = useState<null | any>(null);

	return (
		<section className={s.feedbacksSection} id="feedbacks">
			<div className={s.feedbacksContainer}>
				<div className={s.feedbacksDecor} />
				<h2 className={s.feedbacksTitle}>Feedbacks</h2>

				<Swiper
					modules={[Controller, Pagination, Keyboard, Mousewheel]}
					controller={{ control: imgSwiper }}
					grabCursor
					className={`${s.swiperHidden}`}
					pagination={{
						el: ".feedbacks-pagination",
						clickable: true,
					}}
					keyboard={{
						enabled: true,
						onlyInViewport: true,
						pageUpDown: true,
					}}
					mousewheel={{
						sensitivity: 1,
						forceToAxis: false,
						releaseOnEdges: true,
					}}
					breakpoints={{
						375: { touchRatio: 2, slidesPerGroup: 1 },
						1440: { touchRatio: 10, slidesPerGroup: 3.5 },
					}}
				>
					{feedbacks.map((_, index) => (
						<SwiperSlide key={index}></SwiperSlide>
					))}
				</Swiper>

				<Swiper
					onSwiper={setImgSwiper}
					breakpoints={{
						375: { slidesPerView: 1.1, slidesPerGroup: 1 },
						1440: { slidesPerView: 3.65, slidesPerGroup: 3.5 },
					}}
				>
					{feedbacks.map((feedback, index) => (
						<SwiperSlide key={index}>
							<div className={s.card}>
								<img className={s.imgPerson} src={feedback.src} alt={feedback.name} />
								<h3 className={s.namePerson}>{feedback.name}</h3>
								<p className={s.feedback}>{feedback.feedback}</p>
								<ul className={s.rateList}>
									{feedback.rate.map((el, idx) => (
										<li key={idx}>
											<img
												className={s.imgRate}
												src={el ? "/icons/star-green.svg" : "/icons/star-grey.svg"}
												alt={feedback.name}
											/>
										</li>
									))}
								</ul>
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				<div className={`${s.swiperPaginations} feedbacks-pagination`}></div>
			</div>
		</section>
	);
};

export default Feedbacks;
