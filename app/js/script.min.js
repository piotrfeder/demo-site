
// pobieramy header
let header = document.querySelector('header');

// nasluchujemy scrolla
document.addEventListener('scroll', () => {
	// gdy pozycja headera jest mniejsza niz pozycja scrolla
	if( header.scrollTop < window.pageYOffset)
	{
		// dodajemy klase fixed
		header.classList.add('fixed');		
	}
	// jezeli jest wiekszy
	else if (header.scrollTop >= window.pageYOffset)
	{
		// usuwamy klase fixed
		header.classList.remove('fixed');
	}
	
	
})

// pobieramy odpowiednie elementy
let rtlCheck = document.querySelector('#rtl'),
bodyItem = document.querySelector('body'),
hamMobile = document.querySelector('.main-hamburger'),
navi = document.querySelector('nav');

// gdy klikamy na rtl
rtlCheck.addEventListener('click', () =>

{
		// dodajemy do body klase rtl
		bodyItem.classList.toggle('rtl');

});

// gdy klikamy na hamburgera
hamMobile.addEventListener('click', () => {
	// do hamburgera dodajemy klase open
	hamMobile.classList.toggle('open');
	// do nav dodajemy show aby pokazac
	navi.classList.toggle('show');
	// blokujemy przesuwanie strony pod menu
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