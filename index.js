const panels = document.querySelectorAll('.panel');
	
function toggleOpen(panel){
  panel.classList.toggle('open');
}

function toggleActive(e){
  if(e.propertyName.includes('flex')){
    this.classList.toggle('open-active');
  }
}

function removeClasses(){
  panels.forEach(panel => panel.classList.remove('open'))
}
	
panels.forEach(panel => panel.addEventListener('click', ()=>{
  if(!panel.classList.contains('open')) removeClasses();
  
  toggleOpen(panel);
}));

panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));