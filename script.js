// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case

// Once you've identified the elements you want to change, you can use the "classList" (to change classes):
// classList = https://www.w3schools.com/jsref/prop_element_classlist.asp
// document.getElementById("").classList.remove("");

// This function is being reused
// We need the "elem" because the function changes the div when clicked on.		`
// variables
a1 = document.getElementById("sound_jill")
a2 = document.getElementById("sound_grown")
a3 = document.getElementById("sound_water")
a4 = document.getElementById("sound_happy")
b1 = document.getElementById("jill_quote")
b2 = document.getElementById("grownup")
b3 = document.getElementById("waterboy")
b4 = document.getElementById("happygill")

// array
quote = [a1,a2,a3,a4];

function stopSound () {
	a1.pause();
	a2.pause();
	a3.pause();
	a4.pause();
}

function grown(el){
	if (el.src.match ("images/grown_photo.PNG")){
		el.src ="images/grown_pic1.jpg";
	} else if (el.src.match("images/grown_pic1.jpg")){
		el.src = "images/grown_pic3.jpg";
	} else if (el.src.match ("images/grown_pic3.jpg")){
		el.src = "images/grown_pic4.jpg";
	} else if (el.src.match ("images/grown_pic4.jpg")){
		el.src = "images/grown_photo.PNG";
	}
}

function jack(el){
	if (el.src.match ("images/jack_photo.jpg")){
		el.src ="images/jack_pic2.jpg";
	} else if (el.src.match("images/jack_pic2.jpg")){
		el.src = "images/jack_pic1.jpg";
	} else if (el.src.match ("images/jack_pic1.jpg")){
		el.src = "images/jack_pic3.jpg";
	} else if (el.src.match ("images/jack_pic3.jpg")){
		el.src = "images/jack_photo.jpg";
	}
}

function happyg(el){
	if (el.src.match ("images/happy_photo.jpg")){
		el.src ="images/happy_pic2.jpg";
	} else if (el.src.match("images/happy_pic2.jpg")){
		el.src = "images/happy_pic3.jpg";
	} else if (el.src.match ("images/happy_pic3.jpg")){
		el.src = "images/happy_pic1.jpg";
	} else if (el.src.match ("images/happy_pic1.jpg")){
		el.src = "images/happy_photo.jpg";
	}
}

 function water(el){
	if (el.src.match ("images/water_photo.jpg")){
		el.src ="images/water_pic1.jfif";
	} else if (el.src.match("images/water_pic1.jfif")){
		el.src = "images/water_pic2.jfif";
	} else if (el.src.match ("images/water_pic2.jfif")){
		el.src = "images/water_pic3.jpg";
	} else if (el.src.match ("images/water_pic3.jpg")){
		el.src = "images/water_photo.jpg";
	}
}

function jill(){
	b1.classList.remove("hide");
	stopSound();
	a1.play();
}

function up(){
	b2.classList.remove("hide");
	stopSound();
	a2.play();
}

function boy(){
	b3.classList.remove("hide");
	stopSound();
	a3.play();
}

function happy(){
	b4.classList.remove("hide");
	stopSound();
	a4.play();
}
