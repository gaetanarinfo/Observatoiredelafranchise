$(document).on('click', '.nav-link', function (e) {
  e.preventDefault()
  $(document).find('.nav-link').removeClass('active')
  $(this).toggleClass('active')

  if ($(this).attr('href') === '#tabFranchise') {
    $('.tab_1').addClass('active')
    $('.tab_2').removeClass('active')
    $('.tab_3').removeClass('active')
    $('.tab_4').removeClass('active')
  }

  if ($(this).attr('href') === '#tabSecteurs') {
    $('.tab_2').addClass('active')
    $('.tab_1').removeClass('active')
    $('.tab_3').removeClass('active')
    $('.tab_4').removeClass('active')
  }

  if ($(this).attr('href') === '#tabApport') {
    $('.tab_3').addClass('active')
    $('.tab_1').removeClass('active')
    $('.tab_2').removeClass('active')
    $('.tab_4').removeClass('active')
  }

  if ($(this).attr('href') === '#tab1') {
    $('.tab_4').addClass('active')
    $('.tab_3').removeClass('active')
    $('.tab_1').removeClass('active')
    $('.tab_2').removeClass('active')
  }
})
