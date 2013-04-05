function AddCourseViewModel() {

  /* Overview
   * ~Private Members
   * ~Private Methods
   * ~Constructor
   * ~Public Members
   * ~Public Methods
   * ---------------------------------- */

  /* ~Private Members
   * ---------------------------------- */
  var self = this,
      Course = Parse.Object.extend('Course'),
      CourseQuery = new Parse.Query(Course);

  /* ~Private Methods
   * ---------------------------------- */
  var pushCourses = function (courses) {
    courses.forEach(pushCourse);
  };

  var pushCourse = function (course) {
    self.courses.unshift(course.attributes);
    resetFormData();
  };

  var showError = function (object, error) {
    console.error('Encountered an error: ' + error);
  };

  var resetFormData = function () {
    self.courseNumber('');
    self.credits('');
    self.name('');
    self.description('');
  };

  var loadCourses = {
    success: pushCourses,
    error: showError
  };

  /**
   * ~Constructor
   * ---------------------------------- */
  (function constructor () {
    // TODO hide this please
    Parse.initialize('U9fUNVz6nQHRDZqIM3DaR9ydC3Vb6pMWhq5eyj60', 'eZ79KBnlJ3siGkndjM1LOsmcOsBhIAJXAXOd8rf1'); // TODO place these values in the environment
    CourseQuery.find(loadCourses);
  })();

  /**
   * ~Public Members
   * ---------------------------------- */
  self.department = ko.observable();
  self.initials = ko.observable();
  self.courseNumber = ko.observable();
  self.credits = ko.observable();
  self.name = ko.observable();
  self.description = ko.observable();
  self.courses = ko.observableArray();
  self.formData = ko.computed(function() {
    return {
      department: self.department(),
      initials: self.initials(),
      courseNumber: self.courseNumber(),
      credits: self.credits(),
      name: self.name(),
      description: self.description()
    };
  }, self);

  /*
   * ~Public Methods
   * ---------------------------------- */
  self.saveCourse = function (data, event) {
    new Course().save(self.formData(), {
      success: pushCourse,
      error: showError
    });
  };

}
