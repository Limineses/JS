var but1 = document.body.children[0];

but1.addEventListener('click', function(){
    var div = document.createElement('div')
    document.body.appendChild(div);
    div.innerHTML += '<input type="button" value="enter and click"><input type="text">';
     
    var send = div.children[0];
    send.addEventListener('click', function(){
        var message = div.children[1].value;
        alert(message);
    })
})