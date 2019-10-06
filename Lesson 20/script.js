var App = {
	init() {
		let swapforuser = false;
		this.checkLogin();
		this.EventHandlers();
	}
	,checkLogin() {
		firebase.auth().onAuthStateChanged(function(e)
		{
			if(e)
			{
				ymaps.ready(App.loadMap);
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
	,EventHandlers() {
		document.addEventListener('click', function(e)
		{
			const n = e.target.getAttribute('data-n');
			if(e.target.classList.contains('change'))
			{
				const n = e.target.getAttribute('data-n');
				$('.infoWindow').css('display', 'flex');
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
				$('.infoWindow').css('display', 'none');
			}
		});

		$('.button-log').click(function(e)
		{
			if(this.swapforuser)
			{
				$('.form-container-wrapper').css('display', 'none');
			}
			else
			{
				$('.form-container-wrapper').css('display', 'flex');
			}
			this.swapforuser =! this.swapforuser;
		});

		$('.button-registration').click(function()
		{
			$('.button-singin').css({background: '#8D8D8D', fontSize: '15px'});
			$('.button-registration').css({background: '#555555', fontSize: '20px'});
			$('#submitSingin').css('display', 'none');
			$('#submitRegistration').css('display', 'block');
		});

		$('.button-singin').click(function()
		{
			$('.button-singin').css({background: '#555555', fontSize: '20px'});
			$('.button-registration').css({background: '#8D8D8D', fontSize: '15px'});
			$('#submitSingin').css('display', 'block');
			$('#submitRegistration').css('display', 'none');
		});

		$('.button-exit').click(function()
		{
			firebase.auth().signOut();
			location.reload()
		});

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
	,loadMap() {
	    var myMap = new ymaps.Map("map", 
	    {
	        center: [53.896485, 27.547494],
	        zoom: 12
	    });
		var database = firebase.database();
		database.ref('/').on('value', res =>
		{
			res.val().forEach((e, index)=> 
			{
				MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
	            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
		        ),

		        myPlacemark = new ymaps.Placemark([e.cord1, e.cord2], {
		            hintContent: `${e.name}`,
		            balloonContent: `<h3>${e.name}</h3><p class="desc">${e.description}</p><img class="map-image" src="${e.image}"/> <button class="change" data-n="${index}">Изменить</button>`
		        }),
				myMap.geoObjects.add(myPlacemark);
			})
		}) 
	}
}
App.init();