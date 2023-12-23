import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Pagination, Thumbs } from "swiper/modules";

import { featureDescriptions } from "../../utils/constants";

import "swiper/css";
import "swiper/css/pagination";

import s from "./features.module.css";

const Features = () => {
	const [hiddenSwiper, setHiddenSwiper] = useState<null | any>(null);
	const [imgSwiper, setImgSwiper] = useState<null | any>(null);
	const [descriptionSwiper, setDescriptionSwiper] = useState<null | any>(null);

	return (
		<section className={s.featuresSection} id="features">
			<div className={s.featuresImgContainer}>
				<Swiper
					modules={[Controller, Pagination]}
					onSwiper={setHiddenSwiper}
					controller={{ control: imgSwiper }}
					grabCursor
					loop
					className={s.swiperHidden}
				>
					<SwiperSlide></SwiperSlide>
					<SwiperSlide></SwiperSlide>
					<SwiperSlide></SwiperSlide>
					<SwiperSlide></SwiperSlide>
					<SwiperSlide></SwiperSlide>
				</Swiper>
				<div className={s.featuresImgBox}>
					<Swiper
						modules={[Controller, Pagination, Thumbs]}
						onSwiper={setImgSwiper}
						controller={{ control: hiddenSwiper }}
						pagination={{
							el: ".swiper-paginations",
							clickable: true,
						}}
						loop
						grabCursor
						className={s.swiperImgs}
						thumbs={{ swiper: descriptionSwiper }}
					>
						<SwiperSlide>
							<img src="/images/features/features.jpg" alt="features" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="/images/features/meal-plan.jpg" alt="meal plan" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="/images/features/shopping-list.jpg" alt="shopping list" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="/images/features/smart-fridge.jpg" alt="smart fridge" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="/images/features/recipe-discovery.jpg" alt="recipe discovery" />
						</SwiperSlide>
					</Swiper>
				</div>
				<div className={`${s.swiperPaginations} swiper-paginations`}></div>
			</div>

			<div className={s.featuresDescriptionContainer}>
				<div className={s.featuresDecor}></div>
				<Swiper
					onSwiper={setDescriptionSwiper}
					modules={[Thumbs]}
					loop
					watchSlidesProgress
					speed={0}
					className="swiper-no-swiping"
				>
					<SwiperSlide>
						<h2 className={s.featuresTitle}>Features</h2>
						<ul className={s.descriptionList}>
							{featureDescriptions.features.map((text, index) => (
								<li key={index} className={s.descriptionItem}>
									<img
										className={s.iconDescription}
										src="/icons/broccoli.svg"
										alt="broccoli"
										width="16px"
										height="22px"
									/>
									<p>{text}</p>
								</li>
							))}
						</ul>
					</SwiperSlide>
					<SwiperSlide>
						<h2 className={s.featuresTitle}>Meal Plans</h2>
						<ul className={s.descriptionList}>
							{featureDescriptions.mealPlans.map((text, index) => (
								<li key={index} className={s.descriptionItem}>
									<img
										className={s.iconDescription}
										src="/icons/broccoli.svg"
										alt="broccoli"
										width="16px"
										height="22px"
									/>
									<p>{text}</p>
								</li>
							))}
						</ul>
					</SwiperSlide>
					<SwiperSlide>
						<h2 className={s.featuresTitle}>Shopping Lists</h2>
						<ul className={s.descriptionList}>
							{featureDescriptions.shoppingLists.map((text, index) => (
								<li key={index} className={s.descriptionItem}>
									<img
										className={s.iconDescription}
										src="/icons/broccoli.svg"
										alt="broccoli"
										width="16px"
										height="22px"
									/>
									<p>{text}</p>
								</li>
							))}
						</ul>
					</SwiperSlide>
					<SwiperSlide>
						<h2 className={s.featuresTitle}>Smart Fridge Integration</h2>
						<ul className={s.descriptionList}>
							{featureDescriptions.smartFridges.map((text, index) => (
								<li key={index} className={s.descriptionItem}>
									<img
										className={s.iconDescription}
										src="/icons/broccoli.svg"
										alt="broccoli"
										width="16px"
										height="22px"
									/>
									<p>{text}</p>
								</li>
							))}
						</ul>
					</SwiperSlide>
					<SwiperSlide>
						<h2 className={s.featuresTitle}>Recipe Discovery</h2>
						<ul className={s.descriptionList}>
							{featureDescriptions.recipeDiscovery.map((text, index) => (
								<li key={index} className={s.descriptionItem}>
									<img
										className={s.iconDescription}
										src="/icons/broccoli.svg"
										alt="broccoli"
										width="16px"
										height="22px"
									/>
									<p>{text}</p>
								</li>
							))}
						</ul>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
};

export default Features;
