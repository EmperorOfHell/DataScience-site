//const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

const slider = document.querySelector('.slider');
const select = document.querySelectorAll('.list-articles > ul > li');
const links = document.querySelectorAll('.list-articles > ul > li > a');
const menu = document.querySelector('.menu');
const sector = document.querySelectorAll('.sector');
const open = document.querySelector('.open-menu');
const color = ['#4ca9df','#6fc3e7', '#c2fdff','#a1ffb3', '#eef3d2', '#fc8884'];


for(let i = 0; i < select.length; i++){
	sector[i].style.backgroundColor = color[i];
	if(select[i].addEventListener('mouseenter', () => {
		slider.style.top =  select[i].getBoundingClientRect().top + "px";
		slider.style.backgroundColor = '#000';
		links[i].style.color = "#fff";
		menu.style.backgroundColor = color[i];
	}));
	if(select[i].addEventListener('mouseleave', () => {
		links[i].style.color = "#000";
		slider.style.backgroundColor = 'transparent';
	}));
	if(links[i].addEventListener('click', () =>{
		menu.style.left = "100%";
		slider.style.left = "100%";
		sector[i].style.left = '0%';
		sectionOn(i);
		
	} ));
	if(open.addEventListener('click', () => {
		slider.style.left = "0%";
		menu.style.left = "0%";
		sector[i].style.left = '-100%';
	}));
}
if(open.addEventListener('mouseenter', () =>{
	open.querySelector('p').style.transform = 'translateX(0%)';
}));
if(open.addEventListener('mouseleave', () =>{
	open.querySelector('p').style.transform = 'translateX(100%)';
}));

function sectionOn(activeSector){
	var position = 1;
	var content = sector[activeSector].querySelectorAll('.content');
	var prev = sector[activeSector].querySelector('.prev');
	var next = sector[activeSector].querySelector('.next');
	tgInfo(position);
	// all info disable
	if(prev.addEventListener('click', () => {
		tgInfo(--position);

	}));
	if(next.addEventListener('click', () => {
		tgInfo(++position);
	}));
	if(prev.addEventListener('mouseenter', () => {
		prev.querySelector('circle').style.fillOpacity = 1; 
	}));
	if(prev.addEventListener('mouseleave', () => {
		prev.querySelector('circle').style.fillOpacity = 0.5; 
	}));
	if(next.addEventListener('mouseenter', () => {
		next.querySelector('circle').style.fillOpacity = 1; 
	}));
	if(next.addEventListener('mouseleave', () => {
		next.querySelector('circle').style.fillOpacity = 0.5; 
	}));

	//abs postion 
	function tgInfo(n){
		for(let i = 0; i < content.length; i++ ){
			content[i].style.display = 'none';
		}
		if (n > content.length) {n = 1};   
		if (n < 1) {n = content.length};
		position = n;
		content[n-1].style.display = 'block';
		content[n-1].style.opacity = 1;
	}
}




