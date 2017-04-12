$( window ).load(function() {
  procedurePaginators = $('.procedure .paging li');
  procedureSelect = $('.procedure .js_select');
  procedureSliders = [];
  procedurePics = $('.procedure .js_pic_slide');
  inversePaginators = $('.inverse .paging li');
  modal = $('.c-show-pic-modal');

  procedurePaginators.on('click', function () {
    changeProcedurePage($(this).data('value'), 'procedure');
  });

  procedureSelect.on('change', function () {
    changeProcedureSpecie(this.value);
  });

  procedurePics.on('click', function () {
    loadPicModal($(this).data('pic-url'), $(this).data('pic-name'));
  });

  inversePaginators.on('click', function () {
    changeBlockPage($(this).data('value'), 'inverse');
  });

  $('.js_show_pic_modal_close').on('click', hideModal);
});

function changeProcedureSpecie (specieId) {
  var slider = $('.js_slider[data-specie-id="' + specieId + '"]');
  slider.addClass('-selected');
  slider.siblings('.js_slider').removeClass('-selected');
  loadProcedureSlider(specieId);
}

function loadProcedureSlider (specieId) {
  var slider = $('.procedure .js_slider[data-specie-id="' + specieId + '"]');
  if (slider.find('.slide').length > 2) {
      lory(slider, {});
  }
}

function loadPicModal (picUrl, picName) {
  modal.find('.js_show_pic').css("background-image", "url('" + picUrl + "')");
  modal.find('.js_show_name').html(picName);
  if (picName === "") {
      modal.addClass("-no-legend");
  } else {
      modal.removeClass("-no-legend");
  }
  showModal();
}

function showModal () {
  modal.removeClass('is-hidden');
}

function hideModal () {
  modal.addClass('is-hidden');
}

function changeBlockPage (page, blockId) {
  var selectedPage = $('.' + blockId +'[data-page="' + page + '"]');

  selectedPage.removeClass('is-hidden');
  $('.' + blockId +':not([data-page="' + page + '"])').addClass('is-hidden');

  if (blockId === 'procedure') {
    loadProcedureSlider(selectedPage.find('.js_slider:first').data('specie-id'));
  }
}

function goTo (sectionId) {
  var offsetTop = $('#' + sectionId).offset().top;
  $('html, body').animate({
      scrollTop: offsetTop
  }, 500);
}
