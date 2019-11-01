Vue.component('wrapper-app', {
	template: document.getElementById('wrapper-app'),
	data() {
		return {
			showContent: 'my-page',		
		}
	},
})

Vue.component('my-page', {
	template: document.getElementById('my-page')
})

Vue.component('news', {
	template: document.getElementById('news'),
	data() {
		return {
			publications: [],
		}
	},
	methods: {
		openComments(index) {
			this.$refs.com[index].classList.toggle('open');
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
		});
		this.publications = await loadPromise;
	}
})

Vue.component('dialogs', {
	template: document.getElementById('dialogs'),
	data() {
		return {
			messages: [],
			showDialog: null,
		}
	},
	methods: {
		show(index) {
			// this.showDialog = index;
			this.showDialog = index;
		},
		close() {
			this.showDialog = null;
		}
	},

	async created() {
		const loadPromise = new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.open('GET', 'dialogs.json', true);
			xhr.onload = function(){
				const data = JSON.parse(xhr.responseText);
				resolve(data);
			};
			xhr.send();			
		});
		this.messages = await loadPromise;
	}
})

Vue.component('dilogs-list', {
	template: document.getElementById('dilogs-list'),
	props: {
		messages: {
			type: Array,
			default: () => [],
		},
		showDialog: {
			type: Number,
			default: () => null,
		}
	},

	methods: {
		show(index) {
			this.$emit('show', index);
		}
	}
})

Vue.component('dial', {
	template: document.getElementById('dial'),
	props: {
		messages: {
			type: Array,
			default: () => [],
		},
		showDialog: {
			type: Number,
			default: () => null,
		}
	},
	methods: {
		close() {
			this.$emit('close')
		}
	}
})

const vm = new Vue({
	el: '#app'
})