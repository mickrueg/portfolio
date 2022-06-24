const x = document.querySelector('.x')
const hamburger = document.querySelector('.hamburger')
const navMobileCollapsed = document.querySelector('nav .top.collapsed')
const navMobileExpanded = document.querySelector('nav .top.expanded')

const body = document.querySelector('body')
const topbar = document.querySelector('nav .topbar')
const topCollapsed = document.querySelector('nav .top.collapsed')
const highlighted = document.querySelectorAll('.highlighted')
const topExpanded = document.querySelector('nav .top.expanded')
const navList = document.querySelectorAll('nav li')

//Query Selectors for Images
const fish = document.querySelectorAll('.fishView')
const leaf = document.querySelectorAll('.leafView')
const fishMobile = document.querySelector('.mobile .fishView')
const leafMobile = document.querySelector('.mobile .leafView ')
const linkedinMobile = document.querySelector('.mobile .linkedin')
const githubMobile = document.querySelector('.mobile .github')

// fishMobile.src = `./assets/fishMobileFish.png`



//Event Listeners
hamburger.addEventListener('click',()=>{
    navMobileCollapsed.style.display = 'none';
    navMobileExpanded.style.display = 'block';
})
x.addEventListener('click',()=>{
    navMobileCollapsed.style.display = 'block';
    navMobileExpanded.style.display = 'none';
})

fish.forEach((e)=>{
    e.addEventListener('click', ()=>{
        body.classList.add('fish')
        x.classList.add('fish')
        topbar.classList.add('fish')
        topCollapsed.classList.add('fish')
        for (const i of highlighted){
            i.classList.add('fish')
        }
        topExpanded.classList.add('fish')
        for (const i of navList){
            i.classList.add('fish')
        }
        fishMobile.src = `./assets/fishMobileFish.png`
        leafMobile.src = `./assets/leafMobileFish.png`
        githubMobile.src = `./assets/githubMobileFish.png`
        linkedinMobile.src = `./assets/linkedinMobileFish.png`

    })
})


leaf.forEach((e)=>{
    e.addEventListener('click', ()=>{
        body.classList.remove('fish')
        x.classList.remove('fish')
        topbar.classList.remove('fish')
        topCollapsed.classList.remove('fish')
        for (const i of highlighted){
            i.classList.remove('fish')
        }
        topExpanded.classList.remove('fish')
        for (const i of navList){
            i.classList.remove('fish')
        }
        fishMobile.src = `./assets/fishMobileLeaf.png`
        leafMobile.src = `./assets/leafMobileLeaf.png`
        githubMobile.src = `./assets/githubMobileLeaf.png`
        linkedinMobile.src = `./assets/linkedinMobileLeaf.png`

    })
})

