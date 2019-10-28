Vue.component('wrapper-app', {
	template: document.getElementById('wrapper-app'),
	data() {
		return {
			showContent: 'my-page',
			publications: [],
			messages: [],
			showDialog: null,		
		}
	},

	methods: {
		show(index) {
			this.showDialog = index
		},
		close() {
			this.showDialog = null
		}
	},

	async created() {
		function getAjax(path) {
			const promise = new Promise((res, rej) => {
				const xhr = new XMLHttpRequest();
				xhr.open('GET', path, true);
				xhr.onload = () => {
					res(xhr.responseText)
				}
				xhr.send();
			});
			return promise;
		}
		getAjax('data.json').then(data => this.publications = JSON.parse(data));
		getAjax('dialogs.json').then(data => this.messages = JSON.parse(data));
	}
})

Vue.component('my-page', {
	template: document.getElementById('my-page')
})

Vue.component('news', {
	template: document.getElementById('news'),
	props: {
		publications: {
			type: Array,
			default: () => [],
		}
	},
	methods: {
		openComments(index) {
			this.$refs.com[index].classList.toggle('open');
		}
	}
})

Vue.component('dialogs', {
	template: document.getElementById('dialogs'),
	props: {
		messages: {
			type: Array,
			default: () => [],
		},
		showDialog : {
			type: Number,
			default: () => null,
		}
	},
})

Vue.component('dilogs-list', {
	template: document.getElementById('dilogs-list'),
	props: {
		messages: {
			type: Array,
			default: () => [],
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