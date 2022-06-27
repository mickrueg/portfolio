//QUERY SELECTORS-----------------------
//Query Selectors for clickable elements
const x = document.querySelector('nav .x')
const hamburger = document.querySelector('.hamburger')

//Query Selectors for html section elements
const navMobileExpanded = document.querySelector('nav .top.expanded')
const bottombar = document.querySelector(`.bottombar`)
const body = document.querySelector('body')
const topbar = document.querySelector('nav .topbar')
const highlighted = document.querySelectorAll('.highlighted')
const navList = document.querySelectorAll('nav li')
const views = document.querySelector(`.views`)
const homeButton = document.querySelectorAll(`#home`)
const homeSection = document.querySelector('.home')
const bioButton = document.querySelectorAll(`#bio`)
const bioSection = document.querySelector('.bio')
const projectsButton = document.querySelectorAll(`#projects`)
const projectsSection = document.querySelector('.projects')
const resumeButton = document.querySelectorAll(`#resume`)
const resumeSection = document.querySelector('.resume')
const viewscreen = document.querySelector(`.viewscreen`)
const linkStyle = document.querySelector(`.viewscreen a`)
const changeThemeWindow = document.querySelector(`#change-theme-window`)

//Query Selectors for elements that are images
const fish = document.querySelectorAll('#fishView')
const leaf = document.querySelectorAll('#leafView')
const fishMobile = document.querySelector('.links .mobile')
const leafMobile = document.querySelector('.links .mobile ')
const linkedinMobile = document.querySelector('#linkedin.mobile ')
const githubMobile = document.querySelector('#github.mobile')
const sitemapHide = document.querySelectorAll('#sitemap-hide')
const email = document.querySelector('#email')
const profilepic = document.querySelector('#profilepic')
const sitemapText = document.querySelector('.sitemap-text')
const resumeLinkedin = document.querySelector(`.resume-linkedin`)

//FUNCTIONS-----------------------
//Close out of mobile window
const exitDropDown = () => {
    navMobileExpanded.classList.remove('mobile')
    bottombar.classList.remove(`expanded`)
}
//If user clicks on fish, change elements to fish theme
fish.forEach((e)=>{
    e.addEventListener('click', ()=>{
        body.classList.add('fish')
        x.classList.add('fish')
        topbar.classList.add('fish')
        for (const i of highlighted){
            i.classList.add('fish')
        }
        navMobileExpanded.classList.add('fish')
        for (const i of navList){
            i.classList.add('fish')
        }
        bottombar.classList.add('fish')
        views.classList.add(`fish`)
        viewscreen.classList.add(`fish`)
        linkStyle.classList.add(`fish`)
        email.classList.add(`fish`)
        sitemapText.classList.add(`fish`)
        sitemap.classList.add(`hide`)
        fishMobile.src = `./assets/fishMobileFish.png`
        leafMobile.src = `./assets/leafMobileFish.png`
        githubMobile.src = `./assets/githubMobileFish.png`
        linkedinMobile.src = `./assets/linkedinMobileFish.png`
        hamburger.src = `./assets/hamburgerMobileFish.png`
        resumeLinkedin.src = `./assets/linkedinMobileFish.png`
        
        exitDropDown();
        
    })
})

//If user clicks on leaf, change elements to fish theme
leaf.forEach((e)=>{
    e.addEventListener('click', ()=>{
        body.classList.remove('fish')
        x.classList.remove('fish')
        topbar.classList.remove('fish')
        for (const i of highlighted){
            i.classList.remove('fish')
        }
        navMobileExpanded.classList.remove('fish')
        for (const i of navList){
            i.classList.remove('fish')
        }
        bottombar.classList.remove('fish')
        views.classList.remove(`fish`)
        viewscreen.classList.remove(`fish`)
        linkStyle.classList.remove(`fish`)
        email.classList.remove(`fish`)
        sitemapText.classList.remove(`fish`)
        sitemap.classList.add(`hide`)
        fishMobile.src = `./assets/fishMobileLeaf.png`
        leafMobile.src = `./assets/leafMobileLeaf.png`
        githubMobile.src = `./assets/githubMobileLeaf.png`
        linkedinMobile.src = `./assets/linkedinMobileLeaf.png`
        hamburger.src = `./assets/hamburgerMobileLeaf.png`
        resumeLinkedin.src = `./assets/linkedinMobileLeaf.png`

        exitDropDown();
    })
})


//EVENT LISTENERS-----------------------
hamburger.addEventListener('click',()=>{
    navMobileExpanded.classList.add('mobile');
    bottombar.classList.add(`expanded`)
})

x.addEventListener('click',()=>{
    exitDropDown();
})

homeButton.forEach((e)=>{
    e.addEventListener('click', ()=>{
        const closeAllOther = [bioSection, resumeSection,projectsSection]
        closeAllOther.forEach((e)=>e.classList.remove(`visible`))
        homeSection.classList.add(`visible`)
        sitemap.classList.add(`hide`)
        exitDropDown();
        changeThemeWindow.classList.add('hide')

    })
})
bioButton.forEach((e)=>{
    e.addEventListener('click', ()=>{
        const closeAllOther = [homeSection, resumeSection,projectsSection]
        closeAllOther.forEach((e)=>e.classList.remove(`visible`))
        bioSection.classList.add('visible')
        sitemap.classList.add(`hide`)
        exitDropDown();
        changeThemeWindow.classList.add('hide')

    })
})
projectsButton.forEach((e=>{
    e.addEventListener('click', ()=>{
        const closeAllOther = [homeSection, resumeSection,bioSection]
        closeAllOther.forEach((e)=>e.classList.remove(`visible`))
        projectsSection.classList.add('visible')
        sitemap.classList.add(`hide`)
        exitDropDown();
        changeThemeWindow.classList.add('hide')

    })
}))

resumeButton.forEach((e)=>{
    e.addEventListener('click', ()=>{
        const closeAllOther = [homeSection, bioSection,projectsSection]
        closeAllOther.forEach((e)=>e.classList.remove(`visible`))
        resumeSection.classList.add('visible')
        sitemap.classList.add(`hide`)
        exitDropDown();
        changeThemeWindow.classList.add('hide')

    })
})


profilepic.addEventListener('click', ()=>{
    changeThemeWindow.classList.toggle('hide')
})

sitemapHide.forEach((e)=>{
    e.addEventListener('click', ()=>{
        sitemap.classList.toggle('hide')
        changeThemeWindow.classList.add('hide')
    })
})