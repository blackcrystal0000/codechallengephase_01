function generateGrade() {
    const gradeInput = document.getElementById('studentGradeInput');
    const totalNumbers = parseInt(gradeInput.value);
  
    if (totalNumbers >= 0 && totalNumbers <= 100) {
      console.log('Your input is ' + totalNumbers);
  
      let grade = '';
  
      if (totalNumbers > 79) {
        console.log('Grade A');
        grade = 'Grade A';
      } else if (totalNumbers >= 60 && totalNumbers <= 79) {
        console.log('Grade B');
        grade = 'Grade B';
      } else if (totalNumbers >= 49 && totalNumbers <= 59) {
        console.log('Grade C');
        grade = 'Grade C';
      } else if (totalNumbers >= 40 && totalNumbers <= 49) {
        console.log('Grade D');
        grade = 'Grade D';
      } else {
        console.log('Grade E');
        grade = 'Grade E';
      }
  
      const gradeOutput = document.getElementById('gradeOutput');
      if (gradeOutput) {
        gradeOutput.textContent = grade;
      }
    } else {
      console.log('Invalid Marks');
    }
  }

  




