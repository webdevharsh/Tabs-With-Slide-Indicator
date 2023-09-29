let allTabs = document.querySelectorAll('.container .content-box .content');
let allOptions = document.querySelectorAll('.container .options .option')

allOptions.forEach((option,index)=>{
  option.addEventListener('click',(e)=>{
     activeLink(e.target,index);
  })      
})

let activeLink =(elem,index)=>{
  allTabs.forEach((tab)=>{
    tab.classList.remove('active'); 
  })     
  allOptions.forEach((option)=>{
    option.classList.remove('active');
  })  
  elem.classList.add('active');
  allTabs[index].classList.add('active');
}
