var App = {
	init() {
		this.checkLogin();
		this.EventHandlers.init();
	}
	,checkLogin() {
		firebase.auth().onAuthStateChanged(function(e)
		{
			if(e)
			{
				ymaps.ready(App.loadMapWithPoints.loadMap());
				$('#map').css('display', 'block')
				$('.username').text(e.email);
				$('.button-log').css('display', 'none');
				$('.button-exit').css('display', 'inline');
			}
			else
			{
				$('.button-log').css('display', 'inline');
				$('.button-exit').css('display', 'none');
			}
		});
	}
	,EventHandlers: {
		
		init(){
			this.pointsWindow();
			this.inputWindow();
			this.swapSingAndRegistration();
			this.sendDataOnSing();
		},

		pointsWindow(){
			document.addEventListener('click', function(e)
			{
				const n = e.target.getAttribute('data-n');
				if(e.target.classList.contains('change'))
				{
					const n = e.target.getAttribute('data-n');
					$('.infoWindow-wrapper').show(200);
					firebase.database().ref(`/${n}`).on('value', res =>
					{
					    $('.cord1').val(res.val().cord1);
					    $('.cord2').val(res.val().cord2);
					    $('.name').val(res.val().name);
					    $('.description').val(res.val().description);
					})
				}
				if(e.target.classList.contains('infoWindow-accept'))
				{
					firebase.database().ref(`/${n*1}`).update({
					    cord1: $('.cord1').val(),
					    cord2: $('.cord2').val(),
					    description: $('.description').val(),
					    name: $('.name').val()
				  	});
					location.reload();
				}
				if(e.target.classList.contains('infoWindow-exit'))
				{
					$('.infoWindow-wrapper').hide(200);
				}
			});			
		},

		inputWindow(){
			$('.button-log').click(function(e)
			{
				if($('.form-container-wrapper').css('display') == 'none')
				{
					$('.form-container-wrapper').css('display', 'flex');
				}
				else
				{
					$('.form-container-wrapper').css('display', 'none');
				}
			});			
			$('.button-exit').click(function()
			{
				firebase.auth().signOut();
				location.reload()
			});
		},

		swapSingAndRegistration(){
			$('.button-registration').click(function()
			{
				$('.button-singin').removeClass('active');
				$('.button-registration').addClass('active');

				$('#submitSingin').css('display', 'none');
				$('#submitRegistration').css('display', 'block');
			});

			$('.button-singin').click(function()
			{
				$('.button-registration').removeClass('active');
				$('.button-singin').addClass('active');

				$('#submitSingin').css('display', 'block');
				$('#submitRegistration').css('display', 'none');
			});			
		},

		sendDataOnSing(){
			$('#submitRegistration').click(function(e)
			{
				e.preventDefault();
				const [$pass, $email] = [$('#password'), $('#email')]
				const user = firebase.auth().createUserWithEmailAndPassword($email.val(), $pass.val());
				user.then(()=> location.reload());
				user.catch(function(error) {
					alert(error.message)
				});	
			})

			$('#submitSingin').click(function(e)
			{
				e.preventDefault();
				const [$pass, $email] = [$('#password'), $('#email')]
				const user = firebase.auth().signInWithEmailAndPassword($email.val(), $pass.val());
				user.then(()=> location.reload());
				user.catch(function(error) {
					alert(error.message)
				});	
			})			
		}
	},

	loadMapWithPoints: {
		async loadPoints(){
			return new Promise((resolve, reject) => {
				var database = firebase.database();
				database.ref('/').on('value', res => resolve(res.val()))

			})
		},

		async loadMap(){
			var myMap = new ymaps.Map("map", 
	    	{
		        center: [53.896485, 27.547494],
		        zoom: 12
	    	});

			const points = await this.loadPoints();

			points.forEach((e, index)=> 
			{
				MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
	            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
		        ),

		        myPlacemark = new ymaps.Placemark([e.cord1, e.cord2], {
		            hintContent: `${e.name}`,
		            balloonContent: `<h3>${e.name}</h3><p class="desc">${e.description}</p><img class="map-image" src="${e.image}"/> <button class="change" data-n="${index}">Изменить</button>`
		        }),
				myMap.geoObjects.add(myPlacemark);
			});
		}
	}
}
App.init();