//const tl = gsap.timeline({ defaults: { ease: "power1.out" } });



const slider = document.querySelector('.slider');
const select = document.querySelectorAll('.main-menu > ul > li');
const links = document.querySelectorAll('.main-menu > ul > li > a');
const menu = document.querySelector('.menu');
const topMenu = document.querySelector('.top-menu');
const sector = document.querySelectorAll('.sector');
const open = document.querySelector('.open-menu');
const color = ['#4ca9df','#6fc3e7', '#c2fdff','#a1ffb3', '#eef3d2', '#fc8884'];
slider.style.top =  select[0].getBoundingClientRect().top + "px";



let activeSector = 0;

function sectionOn(activeSector){
	var position = 0;
	var content = sector[activeSector].querySelectorAll('.content');
	var prev = sector[activeSector].querySelector('.prev');
	var next = sector[activeSector].querySelector('.next');
	
	// all info disable
	for(let i = 0; i < content.length; i++ ){
		content[i].style.display = 'none';
	}
	content[0].style.display = 'block';
	if(prev.addEventListener('click', () => {
		content[position].style.display = 'none';
		position--;
		tgInfo();

	}));
	if(next.addEventListener('click', () => {
		content[position].style.display = 'none';
		position++;
		tgInfo();
	}));

	//abs postion 
	function tgInfo(){
		if (position > content.length - 1 ) {position = 0};   
		if (position < 0) {position = content.length - 1};
		content[position].style.display = 'block';
	}
}

for(let i = 0; i < select.length; i++){
	sector[i].style.backgroundColor = color[i];
	if(open.addEventListener('click', () => {
		menu.style.top = "0%";
		menu.addEventListener("transitionend", () => {
			menu.style.pointerEvents= 'visible';
			
		});
		sector[i].style.left = '-100%';
	}));
	if(select[i].addEventListener('mouseenter', () => {
		slider.style.top =  select[i].getBoundingClientRect().top + "px";
		slider.style.backgroundColor = '#000';
		links[i].style.color = "#fff";
		menu.style.backgroundColor = color[i];
	}));
	if(select[i].addEventListener('mouseleave', () => {
		slider.style.backgroundColor = 'transparent';
		links[i].style.color = "#000";
		menu.style.backgroundColor = "#fff";
	}));
	if(links[i].addEventListener('click', () =>{
			menu.style.pointerEvents= 'none';	
			slider.style.top = "0%";
			menu.style.top = "-100%";
			sector[i].style.left = '0%';
			sectionOn(i);
	} ));
}




