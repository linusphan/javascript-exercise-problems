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

// creating students
var foo = createStudent('foo', '3rd');
foo.addCourse({ name: 'Math', code: 101, grade: 95 });
foo.addCourse({ name: 'Advanced Math', code: 102, grade: 90 });
foo.addCourse({ name: 'Physics', code: 102 });

var bar = createStudent('bar', '1st');
bar.addCourse({ name: 'Math', code: 101, grade: 91 });

var qux = createStudent('qux', '2nd');
qux.addCourse({ name: 'Math', code: 101, grade: 93 });
qux.addCourse({ name: 'Advanced Math', code: 102, grade: 90 });



// school object below
var school = {
  students: [],

  addStudent(student) {
    if (['1st', '2nd', '3rd', '4th', '5th'].includes(student.year)) {
      this.students.push(student);
      return student;
    } else {
      console.log('Invalid Year');
    }
  },

  enrollStudent(student, course) {
    student.courses.addCourse(course);
  },

  addGrade(student, courseCode, grade) {
    var idx = student.courses.findIndex(course => course.code === courseCode);

    student.courses[idx].grade = grade;
  },

  getReportCard(student) {
    student.courses.forEach(course => {
      console.log(`${course.name}: ${course.grade ? course.grade : 'In progress'}`);
    });
  },

  courseReport(courseName) {
    var grades = [];
    var list = '';

    this.students.forEach(student => {
      var idx = student.courses.findIndex(course => course.name === courseName);

      if (idx !== -1 && student.courses[idx].grade) {
        grades.push(student.courses[idx].grade);
        list += `${student.name}: ${student.courses[idx].grade}\n`;
      }
    });

    if (grades.length === 0) {
      return;
    }

    average = grades.reduce((acc, grade) => acc + grade) / grades.length;

    console.log(`=${courseName}=`);
    console.log(list);
    console.log('---');
    console.log(`Course Average: ${average}`);
  },
};

// school.getReportCard(foo);

school.addStudent(foo);
school.addStudent(bar);
school.addStudent(qux);

school.courseReport('Advanced Math');
console.log(school.courseReport('Physics'));
