// Anchors
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
   anchor.onclick = event => {
      event.preventDefault()
      const blockID = anchor.getAttribute('href')
      document.querySelector('' + blockID).scrollIntoView({
         behavior: "smooth",
         block: "start"
      })
   }
}

// Tabs
const tabsBtn = document.querySelectorAll('.tabs__btn')
const tabsContent = document.querySelectorAll('.tabs__item')

tabsBtn.forEach((el, i) => {
   el.onclick = () => {
      if (!el.classList.contains('active')) {
         tabsBtn.forEach((el, i) => {
            el.classList.remove('active')
            tabsContent[i].classList.remove('active')
         })

         el.classList.add('active')
         tabsContent[i].classList.add('active')
      }
   }
})

tabsBtn[0].click()