import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { feedbacks } from "../../utils/constants";

import "swiper/css";
import "swiper/css/pagination";

import s from "./feedbacks.module.css";

const Feedbacks = () => {
	return (
		<section className={s.feedbacksSection}>
			<div className={s.feedbacksDecor} />
			<h2 className={s.feedbacksTitle}>Feedbacks</h2>

			<Swiper
				modules={[Pagination]}
				pagination={{
					el: ".feedbacks-pagination",
					clickable: true,
				}}
				slidesPerView={1.1}
				grabCursor
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
		</section>
	);
};

export default Feedbacks;
