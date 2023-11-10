import Swiper from 'swiper';
import {Pagination} from 'swiper/modules';

const init = () => {
	const slider = new Swiper('.slider .swiper', {
		spaceBetween: 30,
		modules: [Pagination],
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
		},
	});
};

export default {
	init,
};
