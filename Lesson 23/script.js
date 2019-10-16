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
		getFilterItems() {
			if(this.category){
				return [...this.items].filter((e)=> e.category.toUpperCase() == this.category.toUpperCase())
			} 
			else {
				return this.items;
			}

		},
		getItemsOnPage() {
			let arr = this.getFilterItems.filter((e, index) => index + 1 <= this.countItems * this.page && index + 1 >(this.page * this.countItems) - this.countItems)
			switch(this.sumSort)
			{
				case 'up':
					return arr.sort((a, b)=> {return b.price - a.price});
					break;
				case 'down':
					return arr.sort((a, b)=> {return a.price - b.price});
					break;
				default	:
					return arr;
			}
		},

		getPages() {
			let arr = [...this.pages];
			for(let i = 1; i <= Math.ceil(this.getFilterItems.length / this.countItems); i++){
				if(this.getFilterItems.length / this.countItems > 1)
				{
					arr.push(i);
				}
			}
			return arr;
		},

		getCartSum() {
			return this.cart.reduce((sum, n) => {
				return sum += (n.price * 1) * (n.count * 1);
			}, 0)
		}
	},

	methods: {
		changeCategory(name) {
			this.category = name;
		},
		getItemsByPage(n) {
			this.page = n;
		},
		changeSumSort(name) {
			this.sumSort = name;
		},
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
			if(!this.cart.some(e => { return e.name == item.name})) {
				this.cart.push(item);
				return;
			}

			this.cart.forEach(e => {
				if(e.name == item.name) {
					e.count ++;
				}
			})
		},
		addCartItem(item) {
			this.cart.forEach(e => {
				if(e.name == item.name) {
					e.count ++;
				}
			})
		},
		removeCartItem(item) {
			this.cart.forEach(e => {
				if(e.name == item.name) {
					e.count --;
				}
			})
		},
		deleteCartItem(item) {
			this.cart.forEach((e, index) => {
				if(e.name == item.name) {
					this.cart.splice(index, 1);
				}
			})
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
		this.cart = JSON.parse(localStorage.getItem('catalog_cart'));
	}
});

window.addEventListener('unload', function()
{
	localStorage.setItem('catalog_cart', JSON.stringify(vm.cart));
})