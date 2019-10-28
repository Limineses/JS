const vm = new Vue({
	el: '#app',
	data: {
		categoryButtons: new Set(),
		items: [],
		pages: [],
		page: 1,
		category: null,
		countItems: 9,
		sumSort: null,
		showCart: false,
		cart: []
	},

	computed: {
		filterItems() {
			if(this.category){
				return [...this.items].filter((e)=> e.category.toUpperCase() == this.category.toUpperCase())
			} 
			else {
				return this.items;
			}
		},

		itemsOnPage() {
			const x = this.countItems * this.page;
			const y = (this.page * this.countItems) - this.countItems;
			const arr = this.filterItems.filter((e, index) => index + 1 <= x && index + 1 > y)
			return arr.sort((a, b)=> {return (-this.sumSort) * a.price - (-this.sumSort) * b.price});
		},

		pagesCount() {
			const countPages = Math.ceil(this.filterItems.length / this.countItems);
			const arr = [...this.pages];
			for(let i = 1; i <= countPages; i++){
				if(countPages > 1)
				{
					arr.push(i);
				}
			}
			return arr;
		},

		cartSum() {
			return this.cart.reduce((sum, n) => {
				return sum += n.price * n.count;
			}, 0)
		},

		cartItems() {
			return this.cart.filter(e => e.count > 0)
		}
	},

	methods: {
		changeShowCart() {
			this.showCart = !this.showCart;
		},

		addToCart(n) {
			const item = {
				name: n.name,
				image: n.image,
				description: n.description,
				price: n.price,	
				count: 1
			}
			const haveItem = this.cart.find(cartItem => cartItem.name === item.name);
			if(haveItem === undefined) { 
				return this.cart.push(item);
			}
			haveItem.count ++;
		},

		addCartItem(item) {
			const haveItem = this.cart.find(e => e.name == item.name);
			haveItem.count++;
		},

		removeCartItem(item) {
			const haveItem = this.cart.find(e => e.name == item.name);
			haveItem.count--;
		},

		deleteCartItem(item) {
			this.cart = this.cart.filter(cartItem => cartItem.name !== item.name);
		}
	},

	async created() {
		const loadPromise = new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.open('GET', 'data.json', true);
			xhr.onload = function(){
				const data = JSON.parse(xhr.responseText);
				resolve(data);
			};
			xhr.send();			
		})
		this.items = await loadPromise;
		this.items.forEach(e => {
			this.categoryButtons.add(e.category)
		});
		const cart = JSON.parse(localStorage.getItem('catalog_cart'));
		if(cart) this.cart = cart;
	},

	mounted() {
		window.addEventListener('unload', function()
		{
			localStorage.setItem('catalog_cart', JSON.stringify(vm.cart));
		});		
	}
});
