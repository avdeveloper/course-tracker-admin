$(function () {
  /**
   * Overview
   * ~jQuery bindings
   * ~Knockout bindings
   * ---------------------------------- */

  /* ~jQuery bindings
   * ---------------------------------- */
  (function initializejQueryBindings () {
    var form = $('form'),
        newCourseButton = $('header > button');

    form.hide();
    newCourseButton.click(function (event) {
      form.is(':visible') ? form.hide(200) : form.show(200);
    });
  })();

  /* ~Knockout bindings
   * ---------------------------------- */
  ko.applyBindings(new AddCourseViewModel);
});
