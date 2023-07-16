document.addEventListener('DOMContentLoaded', () => {
	const accordions = document.querySelectorAll('.accordion__item');

	accordions.forEach(el => {
		el.addEventListener('click', (e) => {
			const item = e.target.closest('.accordion__item');
			const content = item.querySelector('.accordion__content');
      try{
				const ico = item.querySelector('.accordion__ico')
				ico.classList.toggle('accordion__ico--active')
			}
			catch(e){}

			item.classList.toggle('accordion--open');
			content.classList.toggle('accordion__content--active')
		});
	});
});