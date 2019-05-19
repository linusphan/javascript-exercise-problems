function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],

    info() {
      console.log(`${this.name} is a ${year} year student`);
    },

    addCourse(course) {
      this.courses.push(course);
    },

    listCourses() {
      return this.courses;
    },

    addNote(code, note) {
      var idx = this.getCourseIdx(code);

      if (this.courses[idx].note) {
        this.courses[idx].note += `; ${note}`;
      } else {
        this.courses[idx].note = note;
      }
    },

    updateNote(code, note) {
      var idx = this.getCourseIdx(code);

      this.courses[idx].note = note;
    },
    
    viewNotes() {
      this.courses.forEach(course => {
        if (course.note) {
          console.log(`${course.name}: ${course.note}`);
        }
      });
    },

    getCourseIdx(code) {
      return this.courses.findIndex(course => {
        return course.code === code;
      });
    },
  };
}

// another solution
function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],
    info: function () {
      console.log(this.name + ' is a ' + this.year + ' year student');
    },

    listCourses: function () {
      return this.courses;
    },

    addCourse: function (course) {
      this.courses.push(course);
    },

    addNote: function (courseCode, note) {
      var course = this.courses.filter(function (course) {
        return course.code === courseCode;
      })[0];

      if (course) {
        if (course.note) {
          course.note += '; ' + note;
        } else {
          course.note = note;
        }
      }
    },

    viewNotes: function () {
      this.courses.forEach(function (course) {
        if (course.note) {
          console.log(course.name + ': ' + course.note);
        }
      });
    },

    updateNote: function (courseCode, note) {
      var course = this.courses.filter(function (course) {
        return course.code === courseCode;
      })[0];

      if (course) {
        course.note = note;
      }
    },
  };
}

foo = createStudent('Foo', '1st');
foo.info();
// 'Foo is a 1st year student'
// console.log(foo.listCourses());
// [];
// foo.addCourse({ name: 'Math', code: 101 });
// foo.addCourse({ name: 'Advanced Math', code: 102 });
// console.log(foo.listCourses());
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
// foo.addNote(101, 'Fun course');
// foo.addNote(101, 'Remember to study for algebra');
// foo.viewNotes();
// // "Math: Fun Course; Remember to study for algebra"
// foo.addNote(102, 'Difficult subject');
// foo.viewNotes();
// // "Math: Fun Course; Remember to study for algebra"
// // "Advance Math: Difficult Subject"
// foo.updateNote(101, 'Fun course');
// foo.viewNotes();
// "Math: Fun Course"
// "Advance Math: Difficult Subject"
