let moonBtn = document.querySelector('.moon-btn')
let sunBtn = document.querySelector('.sun-btn')
let activeBtn = document.querySelector('.active-btn')


moonBtn.addEventListener('click', () =>{
   activeBtn.classList.add('move')
   document.body.classList.add('dark')
})

sunBtn.addEventListener('click', () =>{
  document.body.classList.remove('dark')
  activeBtn.classList.add('inactive')
  activeBtn.classList.remove('move')
})

