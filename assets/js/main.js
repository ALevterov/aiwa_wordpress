// function GTranslateGetCurrentLang() {var keyValue = document['cookie'].match('(^|;) ?googtrans=([^;]*)(;|$)');return keyValue ? keyValue[2].split('/')[2] : null;}
// function GTranslateFireEvent(element,event){try{if(document.createEventObject){var evt=document.createEventObject();element.fireEvent('on'+event,evt)}else{var evt=document.createEvent('HTMLEvents');evt.initEvent(event,true,true);element.dispatchEvent(evt)}}catch(e){}}
// function doGTranslate(lang_pair){if(lang_pair.value)lang_pair=lang_pair.value;if(lang_pair=='')return;var lang=lang_pair.split('|')[1];if(GTranslateGetCurrentLang() == null && lang == lang_pair.split('|')[0])return;if(typeof ga=='function'){ga('send', 'event', 'GTranslate', lang, location.hostname+location.pathname+location.search);}var teCombo;var sel=document.getElementsByTagName('select');for(var i=0;i<sel.length;i++)if(sel[i].className.indexOf('goog-te-combo')!=-1){teCombo=sel[i];break;}if(document.getElementById('google_translate_element2')==null||document.getElementById('google_translate_element2').innerHTML.length==0||teCombo.length==0||teCombo.innerHTML.length==0){setTimeout(function(){doGTranslate(lang_pair)},500)}else{teCombo.value=lang;GTranslateFireEvent(teCombo,'change');GTranslateFireEvent(teCombo,'change')}}

let transBtns = document.querySelectorAll('.translate-btn')
// $.fn.datepicker.dates = {
//   ru: {
//     closeText: 'Закрыть',
//     prevText: 'Предыдущий',
//     nextText: 'Следующий',
//     currentText: 'Сегодня',
//     monthNames: [
//       'Январь',
//       'Февраль',
//       'Март',
//       'Апрель',
//       'Май',
//       'Июнь',
//       'Июль',
//       'Август',
//       'Сентябрь',
//       'Октябрь',
//       'Ноябрь',
//       'Декабрь',
//     ],
//     monthNamesShort: [
//       'Янв',
//       'Фев',
//       'Мар',
//       'Апр',
//       'Май',
//       'Июн',
//       'Июл',
//       'Авг',
//       'Сен',
//       'Окт',
//       'Ноя',
//       'Дек',
//     ],
//     dayNames: [
//       'воскресенье',
//       'понедельник',
//       'вторник',
//       'среда',
//       'четверг',
//       'пятница',
//       'суббота',
//     ],
//     dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
//     dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
//     weekHeader: 'Не',
//     dateFormat: 'dd.mm.yy',
//     firstDay: 1,
//     isRTL: false,
//     showMonthAfterYear: false,
//     yearSuffix: '',
// },

// en: {
//   closeText: 'Close',
//   prevText: 'Previous',
//   nextText: 'Next',
//   currentText: 'Today',
//   monthNames: [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'Jule',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ],
//   monthNamesShort: [
//     'Jan',
//     'Feb',
//     'Mar',
//     'Apr',
//     'May',
//     'Jun',
//     'Jul',
//     'Aug',
//     'Sep',
//     'Oct',
//     'Nov',
//     'Dec',
//   ],
//   dayNames: [
//     'sunday',
//     'monday',
//     'tuesday',
//     'wednesday',
//     'thursday',
//     'friday',
//     'saturday',
//   ],
//   dayNamesShort: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
//   dayNamesMin: ['Sn', 'Mn', 'Tu', 'Wd', 'Th', 'Fr', 'St'],
//   weekHeader: 'No',
//   dateFormat: 'dd.mm.yy',
//   firstDay: 1,
//   isRTL: false,
//   showMonthAfterYear: false,
//   yearSuffix: '',
// }

// };
$.datepicker.regional['ru'] = {
  closeText: 'Закрыть',
  prevText: 'Предыдущий',
  nextText: 'Следующий',
  currentText: 'Сегодня',
  monthNames: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ],
  monthNamesShort: [
    'Янв',
    'Фев',
    'Мар',
    'Апр',
    'Май',
    'Июн',
    'Июл',
    'Авг',
    'Сен',
    'Окт',
    'Ноя',
    'Дек',
  ],
  dayNames: [
    'воскресенье',
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота',
  ],
  dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
  dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  weekHeader: 'Не',
  dateFormat: 'dd.mm.yy',
  firstDay: 1,
  isRTL: false,
  showMonthAfterYear: false,
  yearSuffix: '',
}
$.datepicker.regional['en'] = {
  closeText: 'Close',
  prevText: 'Previous',
  nextText: 'Next',
  currentText: 'Today',
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'Jule',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  dayNames: [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ],
  dayNamesShort: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
  dayNamesMin: ['Sn', 'Mn', 'Tu', 'Wd', 'Th', 'Fr', 'St'],
  weekHeader: 'No',
  dateFormat: 'dd.mm.yy',
  firstDay: 1,
  isRTL: false,
  showMonthAfterYear: false,
  yearSuffix: '',
}

function selectLanguage(e)  {
  const lang = document.documentElement.lang;
  console.log(lang);
  if(lang === 'en') {
    
    // $('#datepicker').datepicker({ language: "ru"})
    // $('#datepicker1').datepicker({ language: "ru"})
    // $('#datepicker2').datepicker({ language: "ru"})
    // $('#datepicker3').datepicker({ language: "ru"})
    transBtns.forEach(btn => {
        const btnLang = btn.title
        console.log(btnLang);
        if(btnLang === 'Russian') {
          btn.classList.add('selected')
        }
        if(btnLang === 'English') {
          // $.datepicker.setDefaults($.datepicker.regional['e'])
          btn.classList.remove('selected')
        }
    })
  } else {
    // $('#datepicker').datepicker({ language: "en"})
    // $('#datepicker1').datepicker({ language: "en"})
    // $('#datepicker2').datepicker({ language: "en"})
    // $('#datepicker3').datepicker({ language: "en"})
    transBtns.forEach(btn => {
      const btnLang = btn.title
      console.log(btnLang);

      if(btnLang === 'Russian') {
        // $.datepicker.setDefaults($.datepicker.regional['ru'])
        btn.classList.remove('selected')
      }
      if(btnLang === 'English') {
        btn.classList.add('selected')
      }
  })
  }

  // e.target.classList.add('selected')
}
function initLanguage(e)  {
  const lang = document.documentElement.lang;
  console.log(lang);
  if(lang === 'en') {
    // $.datepicker.setDefaults($.datepicker.regional['en'])
    transBtns.forEach(btn => {
        const btnLang = btn.title
        console.log(btnLang);
        if(btnLang === 'Russian') {
          btn.classList.remove('selected')
        }
        if(btnLang === 'English') {
          // $.datepicker.setDefaults($.datepicker.regional['e'])
          btn.classList.add('selected')
        }
    })
  } else {
    // $.datepicker.setDefaults($.datepicker.regional['ru'])
    transBtns.forEach(btn => {
      const btnLang = btn.title
      console.log(btnLang);

      if(btnLang === 'Russian') {
        btn.classList.add('selected')
      }
      if(btnLang === 'English') {
        // $.datepicker.setDefaults($.datepicker.regional['en'])
        btn.classList.remove('selected')
      }
  })
  }

  // e.target.classList.add('selected')
}
initLanguage()

transBtns.forEach(btn => {
  btn.addEventListener('click', selectLanguage)
})

let map
let mobileMap
function initMap() {
  map = new google.maps.Map(document.querySelector('.map__pc'), {
    center: { lat: -34.397, lng: 150.644 },
    // markers: [
    //   {
    //     latitude: 55.19657858982631,
    //     longitude: 25.11689772924049,
    //     icon: '../image/pin.png',
    //   },
    // ],
    zoom: 8,
  })
  mobileMap = new google.maps.Map(document.querySelector('.map__mobile'), {
    center: { lat: 55.19657858982631, lng: 25.11689772924049 },
    // markers: [
    //   {
    //     latitude: 55.19657858982631,
    //     longitude: 25.11689772924049,
    //     icon: '../image/pin.png',
    //   },
    // ],
    zoom: 8,
  })
}

window.initMap = initMap

let carsPicker = document.getElementById('cars_picker')

let pictureList = {}
let priceList = {}
for (let i = 0; i < carsPicker.childNodes.length; i++) {
  let item = carsPicker.childNodes[i]

  if (i === 0 || item.nodeName === '#text') continue

  let imgUrl = item.dataset.image
  let name = item.value
  let price = item.dataset.price

  pictureList[name] = imgUrl
  priceList[name] = price
}

function begin_date() {
  let input_taker = document.getElementById('datepicker').value
  document.getElementById('begin__date').innerHTML = input_taker
  return input_taker
}

function end_date() {
  let input_taker = document.getElementById('datepicker2').value
  document.getElementById('end__date').innerHTML = input_taker

  return input_taker
}

function getPrice() {
  let carsPicker = document.getElementById('cars_picker')
  let input_taker = carsPicker.value

  carsPicker.childNodes.forEach(option => {})

  // let priceList = {
  //   'Rolls Royce Cullinan': '4500',
  //   'Rolls Royce Dawn': '3600',
  //   'Bentley Bentayga': '4000',
  //   'Ferrari F8': '4000',
  //   'Ferrari Portofino': '3600',
  //   'Lamborghini URUS': '4500',
  //   'Lamborghini Huracan 2022': '3300',
  //   'Lamborghini Huracan 2023': '4500',
  //   'Mercedes G63': '2000',
  //   'Porsche 911': '1800',
  //   'Porsche Cayman 718': '3200',
  // }
  return priceList[input_taker]
}

function getDaysDif(date1, date2) {
  return (date2 - date1) / (60 * 60 * 24 * 1000)
}

let carsSelect = document.getElementById('cars_picker')
let datePickerBegin = document.getElementById('datepicker')
let datePickerEnd = document.getElementById('datepicker2')

function calculateCost() {
  let price = getPrice()
  let beginDateStr = begin_date()
  let endDateStr = end_date()
  let endPrice = document.getElementById('end__price')
  let totalDays = document.getElementById('end__day')

  if (!beginDateStr || !endDateStr || !price) {
    endPrice.innerHTML = '?'
    totalDays.innerHTML = '?'
    return
  }
  let splittedBegin = beginDateStr.split('.')
  let splittedEnd = endDateStr.split('.')

  let beginDate = new Date(splittedBegin[2], splittedBegin[1], splittedBegin[0])
  let endDate = new Date(splittedEnd[2], splittedEnd[1], splittedEnd[0])

  let daysDif = getDaysDif(beginDate, endDate)

  if (daysDif <= 0) {
    endPrice.innerHTML = '?'
    totalDays.innerHTML = '?'
    return
  }
  let totalCost = daysDif * +price + 5000

  endPrice.innerHTML = totalCost
  totalDays.innerHTML = daysDif
  return
}

$('#datepicker').datepicker({
  firstDay: 1,
  showOtherMonths: true,
  changeMonth: true,
  changeYear: true,
  dateFormat: 'dd.mm.yy',
    beforeShow: function(input, inst) {
    $('#ui-datepicker-div').addClass('notranslate');
},
})

$('.date').mousedown(function () {
  $('.ui-datepicker').addClass('active')
  // calculateCost()
})

$('#datepicker2').datepicker({
  beforeShow: function(input, inst) {
    $('#ui-datepicker-div').addClass('notranslate');
},
  firstDay: 1,
  showOtherMonths: true,
  changeMonth: true,
  changeYear: true,
  dateFormat: 'dd.mm.yy',
})

$('.date2').mousedown(function () {
  $('.ui-datepicker').addClass('active')
  // calculateCost()
})

$('#datepicker3').datepicker({
  firstDay: 1,
  showOtherMonths: true,
  changeMonth: true,
  changeYear: true,
  dateFormat: 'dd.mm.yy',
  beforeShow: function(input, inst) {
    $('#ui-datepicker-div').addClass('notranslate');
},
})

$('.date3').mousedown(function () {
  $('.ui-datepicker').addClass('active')
})

$('#datepicker4').datepicker({
  firstDay: 1,
  showOtherMonths: true,
  changeMonth: true,
  changeYear: true,
  dateFormat: 'dd.mm.yy',
  beforeShow: function(input, inst) {
    $('#ui-datepicker-div').addClass('notranslate');
},
})

$('.date4').mousedown(function () {
  $('.ui-datepicker').addClass('active')
})
$('.burger, .overlay').click(function () {
  $('.burger').toggleClass('clicked')
  $('.overlay').toggleClass('show')
  $('nav').toggleClass('show')
  $('body').toggleClass('overflow')
})
let cars_btn = document.querySelectorAll('.cars__btn')
let cars_item = document.querySelectorAll('.cars__item')
let cars_image = document.querySelectorAll('.cars__image')
let cars_open = document.querySelectorAll('.cars__open')
let cars_close = document.querySelectorAll('.cars__close')
let cars_add_open = document.querySelectorAll('.cars__add__open')
let item_circle = document.querySelectorAll('.item__circle')

for (let index = 0; index < cars_item.length; index++) {
  cars_btn[index].addEventListener('click', () => {
    if (cars_item[index].classList.contains('cars__down')) {
      cars_item[index].classList.remove('cars__down')
      cars_image[index].classList.remove('cars__cross')

      cars_open[index].style.display = 'block'
      cars_close[index].style.display = 'none'
      cars_add_open[index].style.display = 'none'
      item_circle[index].classList.remove('cars__item__circle')
    } else {
      cars_item[index].classList.add('cars__down')
      cars_image[index].classList.add('cars__cross')

      cars_open[index].style.display = 'none'
      cars_close[index].style.display = 'block'
      cars_add_open[index].style.display = 'block'

      item_circle[index].classList.add('cars__item__circle')
    }
  })
}
let cond_btn = document.querySelectorAll('.cond__btn')
let cond_item = document.querySelectorAll('.cond__item')
let cond_image = document.querySelectorAll('.cond__image')
let cond_open = document.querySelectorAll('.cond__open')
let cond_close = document.querySelectorAll('.cond__close')
let cond_shadow = document.querySelectorAll('.cond__shadow')

let cond_blur = document.querySelectorAll('.cond__blur')
let cond_text_open = document.querySelectorAll('.cond__text__open')

for (let index = 0; index < cond_item.length; index++) {
  cond_btn[index].addEventListener('click', e => {
    cond_btn[index].classList.toggle('static')
    cond_btn[index].classList.toggle('dark')
    cond_item[index].classList.toggle('dark')
    console.log(e.target)
    if (cond_item[index].classList.contains('cond__down')) {
      cond_item[index].classList.remove('cond__down')
      cond_image[index].classList.remove('cond__cross')

      cond_open[index].style.display = 'block'
      cond_close[index].style.display = 'none'

      cond_blur[index].style.display = 'grid'
      cond_text_open[index].style.display = 'none'

      // cond_btn[index].style.bottom = "20px";
      // cond_btn[index].classList.remove("cond__item__circle")

      cond_shadow[index].style.display = 'block'
    } else {
      cond_item[index].classList.add('cond__down')
      cond_image[index].classList.add('cond__cross')

      cond_open[index].style.display = 'none'
      cond_close[index].style.display = 'block'

      cond_blur[index].style.display = 'none'
      cond_text_open[index].style.display = 'grid'

      if (window.innerWidth >= 1024) {
        // cond_btn[index].style.bottom = "-780px";
      }

      // cond_btn[index].classList.add("cond__item__circle")

      cond_shadow[index].style.display = 'none'
    }
  })
}
let values_btn = document.querySelectorAll('.values__btn')
let values_item = document.querySelectorAll('.values__item')
let values_image = document.querySelectorAll('.values__image')
let values_open = document.querySelectorAll('.values__open')
let values_close = document.querySelectorAll('.values__close')
let values_shadow = document.querySelectorAll('.values__shadow')

let values_blur = document.querySelectorAll('.values__blur')
let values_text_open = document.querySelectorAll('.values__text__open')

for (let index = 0; index < values_item.length; index++) {
  values_btn[index].addEventListener('click', () => {
    if (values_item[index].classList.contains('values__down')) {
      values_item[index].classList.remove('values__down')
      values_image[index].classList.remove('values__cross')

      values_open[index].style.display = 'block'
      values_close[index].style.display = 'none'

      values_blur[index].style.display = 'grid'
      values_text_open[index].style.display = 'none'

      values_shadow[index].style.display = 'block'
    } else {
      values_item[index].classList.add('values__down')
      values_image[index].classList.add('values__cross')

      values_open[index].style.display = 'none'
      values_close[index].style.display = 'block'

      values_blur[index].style.display = 'none'
      values_text_open[index].style.display = 'grid'

      values_shadow[index].style.display = 'none'
    }
  })
}
let scrollObject = document.getElementById('car')
let mainBtn = document.querySelector('.main__btn')
let parallaxContainer = document.querySelector('.parallax_container')
let main_logo = document.querySelector('.main__logo')
let carRolls = document.querySelector('.car__rolls')
let bgHome = document.querySelector('.bg-home')

let check = document.getElementById('check')
let rent = document.getElementById('rent1')
let aiwa = document.getElementById('aiwa')

let mainLine = document.querySelector('.main__line')

let header = document.querySelector('header')
let hideParallaxBtns = document.querySelectorAll('.hide-parallax')

if (window.innerWidth >= 1024) {
  hideParallaxBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      parallaxContainer.style.opacity = 0
    })
  })
  window.addEventListener('scroll', () => {
    const scrollTop = this.scrollY
    const screenHeight = document.documentElement.clientHeight
    const screenWidth = document.documentElement.clientWidth
    const scaleSW = screenWidth / 1000

    const animationStep = 0.2
    let animationCurrentScroll

    // const onePercentOpacity = (screenHeight * 0.2) / 100

    const scale = scrollTop / screenHeight

    // document.querySelector('title').innerHTML = scrollTop + ' ' + screenHeight

    if (scrollTop < screenHeight) {
      if (scrollObject.classList.contains('fixed')) {
        scrollObject.classList.remove('fixed')
      }
      if (bgHome.classList.contains('fixed')) {
        bgHome.classList.remove('fixed')
      }
      bgHome.style.position = 'relative'
      scrollObject.style.position = 'relative'
    }

    if (scrollTop > screenHeight && scrollTop < screenHeight * 5) {
      if (!scrollObject.classList.contains('fixed')) {
        scrollObject.classList.add('fixed')
      }
      if (!bgHome.classList.contains('fixed')) {
        bgHome.classList.add('fixed')
      }
      // scrollObject.style.position = 'absolute'
      // scrollObject.style.top = `${window.pageYOffset}`
      if (scrollTop < screenHeight * 1.4) {
        carRolls.style.transform = `scale(${
          1.1 - scale * 0.1 * scaleSW
        }) translateX(${(scrollTop - screenHeight) * 0.6 * scaleSW}px)`
        carRolls.style.zIndex = 1
      }
      // if (scrollTop < screenHeight * 1.2) {
      //   bgHome.style.opacity = 0
      // }
      if (scrollTop > screenHeight * 1.2 && scrollTop < screenHeight * 1.42) {
        bgHome.style.opacity =
          (scrollTop - screenHeight * 1.2) / (screenHeight * 0.2)
      }
      if (scrollTop < screenHeight * 1.2) {
        bgHome.style.opacity = 0
      }
      if (scrollTop > screenHeight * 1.45) {
        carRolls.style.zIndex = 9999
      }

      // check
      if (scrollTop > screenHeight * 1.5 && scrollTop < screenHeight * 1.72) {
        bgHome.style.opacity = 0.999

        check.style.opacity =
          (scrollTop - screenHeight * 1.5) / (screenHeight * 0.2)
        check.style.marginTop = `${
          (10 * (screenHeight * 0.2)) / (scrollTop - screenHeight * 1.5)
        }px`
      }
      if (scrollTop < screenHeight * 1.5) {
        check.style.opacity = 0
        check.style.marginTop = '100px'
      }

      //rent
      if (scrollTop > screenHeight * 1.7 && scrollTop < screenHeight * 1.92) {
        check.style.marginTop = '0px'
        check.style.opacity = 1

        rent.style.opacity =
          (scrollTop - screenHeight * 1.7) / (screenHeight * 0.2)
        rent.style.marginTop = `${
          (10 * (screenHeight * 0.2)) / (scrollTop - screenHeight * 1.7)
        }px`
      }
      if (scrollTop < screenHeight * 1.7) {
        rent.style.opacity = 0
        rent.style.marginTop = '100px'
      }

      //aiwa
      if (scrollTop > screenHeight * 1.9 && scrollTop < screenHeight * 2.12) {
        rent.style.marginTop = '0px'
        rent.style.opacity = 1

        aiwa.style.opacity =
          (scrollTop - screenHeight * 1.9) / (screenHeight * 0.2)
        aiwa.style.marginTop = `${
          (10 * (screenHeight * 0.2)) / (scrollTop - screenHeight * 1.9)
        }px`
      }
      // if(scrollTop > screenHeight * 2) {
      //   rent.style.opacity = 1
      // }
      if (scrollTop < screenHeight * 1.9) {
        aiwa.style.opacity = 0
        aiwa.style.marginTop = '100px'
      }

      if (scrollTop > screenHeight * 2.1) {
        aiwa.style.marginTop = '0px'
        aiwa.style.opacity = 1
      }

      if (scrollTop > screenHeight * 2.1 && scrollTop < screenHeight * 2.32) {
        mainLine.style.transform = `translateY${
          (10 * (screenHeight * 0.2)) / (scrollTop - screenHeight * 2.1)
        }px`
        aiwa.style.opacity =
          (scrollTop - screenHeight * 2.1) / (screenHeight * 0.2)
      }

      if (scrollTop < screenHeight * 2.3) {
        mainLine.style.transform = `translateY(100px)`
        mainLine.style.opacity = 0
      }

      if (scrollTop > screenHeight * 2.3) {
        mainLine.style.transform = `translateY(0px)`
        mainLine.style.opacity = 1
      }
      if (scrollTop > screenHeight * 2.3) {
        mainLine.style.transform = `translateY(0px)`
        mainLine.style.opacity = 1
      }

      if (scrollTop > screenHeight * 2.3 && scrollTop < screenHeight * 2.52) {
        mainBtn.style.opacity =
          (scrollTop - screenHeight * 2.3) / (screenHeight * 0.2)
      }
      if (scrollTop < screenHeight * 2.3) {
        mainBtn.style.opacity = 0
      }
      if (scrollTop > screenHeight * 2.4) {
        mainBtn.style.opacity = 1
      }
      if (scrollTop < screenHeight * 3.4) {
        parallaxContainer.style.opacity = 0.999
      }
      if (scrollTop > screenHeight * 3.4 && scrollTop < screenHeight * 4.4) {
        parallaxContainer.style.opacity = `${Math.pow(
          screenHeight / (scrollTop - screenHeight * 2.4),
          8
        )}`
      }

      if (scrollTop > screenHeight * 4.4) {
        parallaxContainer.style.opacity = 0
        parallaxContainer.style.visibility = 'hidden'
      }

      if (scrollTop < screenHeight * 3.4) {
        // parallaxContainer.style.display = 'block'
        scrollObject.style.position = 'fixed'
        bgHome.style.position = 'fixed'
        scrollObject.style.top = 0
        bgHome.style.top = 0
        parallaxContainer.style.visibility = 'visible'
      }
    }
    // if (scrollTop < screenHeight || scrollTop > screenHeight * 5) {
    //   scrollObject.classList.remove('fixed')
    //   bgHome.classList.remove('fixed')
    //   carRolls.style.transform = 'none'
    // }
    document.body.style.cssText = `--scrollTop: ${scrollTop}`

    // if(window.pageYOffset <= 1920 && window.pageYOffset >= 1460) {
    //     scrollObject.style.transform = `translate(${0}px, ${window.pageYOffset - 1340}px)`;
    //     scrollObject.style.zoom = `1.3`;

    //     if (window.pageYOffset <= 1600) {
    //         scrollObject.style.zoom = `1`;
    //     }
    // }

    // if(window.pageYOffset >= 1829) {
    //     main_logo.style.opacity = "1"
    //     main__btn.style.left = "100px"
    // }
  })
}

// let pictureList = {
//     'Rolls Royce Dawn':
//       'image/form/Rolls-Royce-Cullinan-1-FW-DAloFK-transformed.png',
//     'Rolls Royce Cullinan': 'image/form/Rolls-Royce-Cullinan-1-transformed.png',
//     'Bentley Bentayga': 'image/form/Rolls-Royce-Cullinan-1-(1)-transformed.png',
//     'Ferrari F8': 'image/form/Rolls-Royce-Cullinan-1-(2)-transformed.png',
//     'Ferrari Portofino': 'image/form/Rolls-Royce-Cullinan-1-(3)-transformed.png',
//     'Lamborghini URUS': 'image/form/Rolls-Royce-Cullinan-1-(4)-transformed.png',
//     'Lamborghini Huracan 2022':
//       'image/form/Rolls-Royce-Cullinan-1-(5)-transformed.png',
//     'Lamborghini Huracan 2023': 'image/form/23456345634563456345634563.png',
//     'Mercedes G63': 'image/form/Rolls-Royce-Cullinan-1-(6)-transformed.png',
//     'Porsche 911': 'image/form/Rolls-Royce-Cullinan-1-(7)-transformed.png',
//     'Porsche Cayman 718': 'image/form/Rolls-Royce-Cullinan-1-(8)-transformed.png',
//     'Porsche Cayman 718': 'image/form/Rolls-Royce-Cullinan-2-(8)-transformed.png',
//   }

let change_text = document.querySelector('.change_text')
let change_text_calc = document.querySelector('.change_text_calc')
// let calc__select = document.querySelector('.calc__select')
// let carsPicker = document.querySelector('#cars_picker')
// calc__select.addEventListener('click', () => {
//   carsPicker.change()
// })

$('#rent_change').change(function () {
  let val = $('#rent_change').val()
  change_text.innerHTML = val
  $('.change__rent__car').attr('src', pictureList[val])
})

$('#cars_picker').change(function () {
  let val = $('#cars_picker').val()
  change_text_calc.innerHTML = val
  $('.change__calc__car').attr('src', pictureList[val])
})

// @@@ photogalery block begin

let galeryModals = document.querySelectorAll('.modal-photogalery')
let numberOfGalerys = galeryModals.length

let slideIndex = 1

for (let i = 1; i <= numberOfGalerys; i++) {
  showSlides(i, 1)
}

function plusSlides(cardIndex, n) {
  console.log('plusSlides', cardIndex)
  showSlides(cardIndex, (slideIndex += n))
}

function currentSlide(cardIndex, n) {
  console.log('currentSlide', cardIndex)
  showSlides(cardIndex, (slideIndex = n))
}

function showSlides(cardIndex, n) {
  console.log('showSlides', cardIndex)
  let i
  let slides =
    cardIndex === 1
      ? document.getElementsByClassName('mySlides')
      : document.getElementsByClassName(`mySlides${cardIndex}`)
  let dots = document.getElementsByClassName('demo')
  let captionText = document.getElementById('caption')
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '')
  }
  slides[slideIndex - 1].style.display = 'block'
  dots[slideIndex - 1].className += ' active'
  captionText.innerHTML = dots[slideIndex - 1].alt
}

// @@@ photogalery block end
