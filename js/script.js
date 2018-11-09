//валидация
function valid (form){
	var num1 = form.cardNumber1.value;
	var num2 = form.cardNumber2.value;
	var num3 = form.cardNumber3.value;
	var num4 = form.cardNumber4.value;
	var cvv = form.cvv.value;
	var human = form.idhuman.value;
	var cardH = /^[0-9]{4}$/;
	var cvvH = /^[0-9]{3}$/;
	var humanH = /^[a-z' 'a-z]{4,}$/i;
	var num = 0;
	if (!cardH.test(num1)){
		document.getElementById('cardNumber1').classList.add('err');
	}else{document.getElementById('cardNumber1').classList.remove('err');num++}
	if (!cardH.test(num2)){
		document.getElementById('cardNumber2').classList.add('err');
	}else{document.getElementById('cardNumber2').classList.remove('err');num++}
	if (!cardH.test(num3)){
		document.getElementById('cardNumber3').classList.add('err');
	}else{document.getElementById('cardNumber3').classList.remove('err');num++}
	if (!cardH.test(num4)){
		document.getElementById('cardNumber4').classList.add('err');
	}else{document.getElementById('cardNumber4').classList.remove('err');num++}
	if (!cvvH.test(cvv)){
		document.getElementById('cvv').classList.add('err');
	}else{document.getElementById('cvv').classList.remove('err');num++}
	if (!humanH.test(human)){
		document.getElementById('idhuman').classList.add('err');
	}else{document.getElementById('idhuman').classList.remove('err');num++}
	console.log(human); 
	if (num==6){form.submit();}
};


//заполнение мясяца и года до загрузки страницы
window.onload = function() { 
	fill();
};
function fill() {
	var mon = new Date().getFullYear();
	for (var i = 1;i<50;i++){
		var dat = document.getElementById('year');
		var sel = document.createElement('option');
		sel.value = mon;
		sel.innerHTML = mon;
		dat.appendChild(sel);
		mon++;
	}
	var	mounth = new Date().getMonth()+1;
	for(var i = 1; i <= 12; i++){
		var dat = document.getElementById('mouth');
		var sel = document.createElement('option');
		sel.value = mounth;
		sel.id=mounth;
		sel.innerHTML = mounth;
		dat.appendChild(sel);
		mounth++;
		if (mounth==13){break;}
	}
};



//вызов функции изменение списка месяца по клику на элемент
var year1 = document.getElementById('year');
year1.addEventListener('click', function() {
	gzz();
});




//измениние списка месяца при изменение кода
function gzz(){
	var year1 = document.getElementById('year').value;	
	var year2 = new Date().getFullYear();
	var myNode = document.getElementById('mouth');
	var	mounth = new Date().getMonth()+1;
	if (year1==year2 && myNode.length==12){
		for(var i = 1; i < mounth; i++){
			var dat = document.getElementById('mouth');
			var sel = dat.firstChild;
			dat.removeChild(sel);
		}
	}else if(year1>year2 && myNode.length!=12){
		for(var i = mounth-1; i > 0; i--){
			var dat = document.getElementById('mouth');
			var sel = document.createElement('option');
			var first = dat.firstChild;
			sel.value = i;
			sel.id=i;
			sel.innerHTML = i;
			dat.insertBefore(sel,first);
		}	
	}
	console.log(myNode.length);	
	console.log(mounth);	
	console.log(myNode.length!=12);	    
};

