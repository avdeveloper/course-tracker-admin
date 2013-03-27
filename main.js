$(function () {
  Parse.initialize('U9fUNVz6nQHRDZqIM3DaR9ydC3Vb6pMWhq5eyj60', 'eZ79KBnlJ3siGkndjM1LOsmcOsBhIAJXAXOd8rf1');
  var Course = Parse.Object.extend('Course');

  function AddCourseViewModel() {
    var self = this;

    // Set data
    self.department = ko.observable();
    self.initials = ko.observable();
    self.courseNumber = ko.observable();
    self.credits = ko.observable();
    self.description = ko.observable();
    self.formData = ko.computed(function() {
      return {
        department: self.department(),
        initials: self.initials(),
        courseNumber: self.courseNumber(),
        credits: self.credits(),
        description: self.description()
      };
    }, this);

    // Utils
    self.resetFormData = function () {
      self.courseNumber('');
      self.credits('');
      self.description('');
    };
    
    // Handle events
    self.saveCourse = function (data, event) {
      // Save course to database
      var course = new Course();
      course.save(self.formData(), {
        success: function (data) {
          console.log("Course has been saved!");
          self.resetFormData();
        },
        error: function (data, error) {
          console.error("Could not save course: " + error);
        }
      });
    };
  }

  ko.applyBindings(new AddCourseViewModel());
});
