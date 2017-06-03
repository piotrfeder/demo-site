/* $(document).ready(function() {
	
	$.fn.scrollHeader = function(fixedClass, scrollStart, scrollEnd ) {
	var $this = $(this);
	
	$(window).scroll(function() {
	
		
		var scrollPos = $(window).scrollTop();

		
		if(scrollPos > scrollStart )
		
			{
				$this.addClass('fixed').removeClass('nonfixed');
				
			}
			else if(scrollPos < scrollEnd )
			{
				$this.removeClass('fixed').addClass('nonfixed');	
			}
		
		});
	
	};
	
	
	$('header').scrollHeader('fixed', 0, 0);
	

} */

let header = document.querySelector('header');


document.addEventListener('scroll', () => {
	
	if( header.scrollTop < window.pageYOffset)
	{
		header.classList.add('fixed');
		
		
	}
	
	else if (header.scrollTop >= window.pageYOffset)
	
	{
		header.classList.remove('fixed');
		
	}
	
	
})


let rtlCheck = document.querySelector('#rtl'),
bodyItem = document.querySelector('body'),
hamMobile = document.querySelector('.main-hamburger'),
navi = document.querySelector('nav');

rtlCheck.addEventListener('click', () =>

{
		bodyItem.classList.toggle('rtl');
		


});


hamMobile.addEventListener('click', () => {
	
	hamMobile.classList.toggle('open');
	navi.classList.toggle('show');
	bodyItem.classList.toggle('blocked');
})




// nowa instancja vue
var td = new Vue({
	// odwolnie do elemtnu vue
	el: '#posts',
	// dane
	data: {
		// pusta tablica dla postow
		postData:[],
		// index dla ilosc wyswietlanych postow
		postIndex: 3,
		// oczekiwanie na zaladowanie
		loading: false,
		images: [
			{url: 'https://randomuser.me/api/portraits/women/73.jpg'},
			{url: 'https://randomuser.me/api/portraits/men/20.jpg'},
			{url: 'https://randomuser.me/api/portraits/men/6.jpg'},
			{url: 'https://randomuser.me/api/portraits/women/75.jpg'},
			{url: 'https://randomuser.me/api/portraits/men/73.jpg'},
			{url: 'https://randomuser.me/api/portraits/women/20.jpg'},
			{url: 'https://randomuser.me/api/portraits/men/6.jpg'},
			{url: 'https://randomuser.me/api/portraits/men/75.jpg'},
			{url: 'https://randomuser.me/api/portraits/women/16.jpg'},
			{url: 'https://randomuser.me/api/portraits/men/25.jpg'}
		]

		},
	methods:{
		// pobieramy jsona
		getJSON: function() {
				// poniewaz pobieramy, ustawiamy loading na true
				this.loading = true;
			  // pobieramy dane (get - pobieranie)
			  this.$http.get('https://jsonplaceholder.typicode.com/users/')
			  // gdy mamy odpowiedz
			  .then(response => {
				// zmieniamy loading na false
				this.loading = false;
				// przypisujemy odpowiedz do postData
				this.postData = response.body;
				// logujemy do consoli otrzymane dane
				console.log(response.body);

			  }, response => {
				// logujemy error
				console.log(err);
			  });
			},

		// funkcja na doladowanie do strony	
		morePosts: function() {
			// powiekszamy postIndex o 1
			this.postIndex = this.postIndex + 2;
		},
		remove: function(index, index2)
			{
			this.postData.splice(index,1);
			this.images.splice(index,1);
				
			}
		},
		
		// gdy instacja jest utworzona
		created:  function() {
			  // wywoulejmy funkcje getJSON pobierajaca dane
			  this.getJSON();
			},
			
		
	

		
})