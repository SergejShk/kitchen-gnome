import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Pagination, Thumbs, Keyboard, Mousewheel } from "swiper/modules";

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
			<div className={s.featuresImgMainContainer}>
				<div className={s.featuresImgContainer}>
					<Swiper
						modules={[Controller, Pagination, Keyboard, Mousewheel]}
						onSwiper={setHiddenSwiper}
						controller={{ control: imgSwiper }}
						grabCursor
						className={`${s.swiperHidden}`}
						pagination={{
							el: ".swiper-paginations",
							clickable: true,
						}}
						// observer={true}
						// observeParents={true}
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
							375: { touchRatio: 2 },
							1440: { touchRatio: 5 },
						}}
					>
						<SwiperSlide></SwiperSlide>
						<SwiperSlide></SwiperSlide>
						<SwiperSlide></SwiperSlide>
						<SwiperSlide></SwiperSlide>
					</Swiper>

					<div className={s.featuresImgBox}>
						<Swiper
							modules={[Controller, Thumbs]}
							onSwiper={setImgSwiper}
							controller={{ control: hiddenSwiper }}
							grabCursor
							className={s.swiperImgs}
							thumbs={{ swiper: descriptionSwiper }}
						>
							<SwiperSlide>
								<img src="/images/features/recipe-discovery.png" alt="recipe discovery" />
							</SwiperSlide>
							<SwiperSlide>
								<img src="/images/features/meal-plan.png" alt="meal plan" />
							</SwiperSlide>
							<SwiperSlide>
								<img src="/images/features/shopping-list.png" alt="shopping list" />
							</SwiperSlide>
							<SwiperSlide>
								<img src="/images/features/smart-fridge.png" alt="smart fridge" />
							</SwiperSlide>
						</Swiper>
					</div>
					<div className={`${s.swiperPaginations} swiper-paginations`}></div>
				</div>
			</div>

			<div className={s.featuresDescriptionMainContainer}>
				<div className={s.featuresDescriptionContainer}>
					<div className={s.featuresDecor}></div>
					<Swiper onSwiper={setDescriptionSwiper} modules={[Thumbs]} speed={0} allowTouchMove={false}>
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
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default Features;
