'use strict'

var bar = document.getElementById('bar');
var close = document.getElementById('navigation__close');
var nav = document.getElementById('navigation__ul');

bar.ontouchstart = function(e){
	e.preventDefault()
	this.onclick()
}

bar.onclick = function (e){
	nav.classList.add("navigation__ul_full-page")
}

function closeNav(e){
	nav.classList.remove("navigation__ul_full-page")
}

close.onclick = closeNav;

close.ontouchstart = function(e){
	e.preventDefault();
	this.onclick()
}

for (var i = 0; i < nav.children.length; i++) {

	nav.children[i].onclick = closeNav;

}



var widgets = {};

widgets.state = {
	center: "center"
};

var left = document.getElementById('image-left');
var center = document.getElementById('image-center');
var right = document.getElementById('image-right');

document.getElementById("widgets__left-arrow").onclick = function(){
	
	 switch(widgets.state.center){
	 	case 'center':
			scrollRight(center, left, right);
			widgets.state.center = 'right';
	 		break;
	 	case 'left':
	 		scrollRight(right, center, left);
			widgets.state.center = 'center';
	 		break;
	 	case 'right':
	 		scrollRight(left, right, center);
			widgets.state.center = 'left';
	 		break;
	}
}


document.getElementById("widgets__right-arrow").onclick = function(){
	 switch(widgets.state.center){
	 	case 'center':
			scrollLeft(center, left, right);
			widgets.state.center = 'left';
	 		break;
	 	case 'left':
	 		scrollLeft(right, center, left);
			widgets.state.center = 'right';
	 		break;
	 	case 'right':
	 		scrollLeft(left, right, center);
			widgets.state.center = 'center';
	 		break;
	 }
}

function scrollLeft(center, left, right){
	clearClasses(center);
	center.classList.add('widgets__images_center-to-left');
	clearClasses(left);
	left.classList.add('widgets__images_left-to-right');
	clearClasses(right);
	right.classList.add('widgets__images_right-to-center');
};

function scrollRight(center, left, right){
	clearClasses(center);
	center.classList.add('widgets__images_center-to-right');
	clearClasses(left);
	left.classList.add('widgets__images_left-to-center');
	clearClasses(right);
	right.classList.add('widgets__images_right-to-left');
} 


function clearClasses(elem){
	elem.classList.remove('widgets__images_right-to-center');
	elem.classList.remove('widgets__images_left-to-center');
	elem.classList.remove('widgets__images_right-to-left');
	elem.classList.remove('widgets__images_left-to-right');
	elem.classList.remove('widgets__images_center-to-right');
	elem.classList.remove('widgets__images_center-to-left');
}