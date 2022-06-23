const x = document.querySelector('.x')
const hamburger = document.querySelector('.hamburger')
const navMobileCollapsed = document.querySelector('nav .top.collapsed')
const navMobileExpanded = document.querySelector('nav .top.expanded')



//Event Listeners
x.addEventListener('click',()=>{
    navMobileCollapsed.style.display = 'none';
    navMobileExpanded.style.display = 'block';
})
hamburger.addEventListener('click',()=>{
    navMobileCollapsed.style.display = 'block';
    navMobileExpanded.style.display = 'none';
})

