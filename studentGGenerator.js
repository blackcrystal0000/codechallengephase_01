function totalGrade(_grade) {
    const totalMarks = totalMarks("total student marks(from 0 - 100):");
const totalNumbers = Number(totalMarks);

if (totalNumbers > 79) {
    return "A";
}
else if (totalNumbers >= 60 && totalNumbers <= 79){
    return "B";
}
else if (totalNumbers >= 49 && totalNumbers <= 59){
    return "C";
}
else if (totalNumbers >= 40 && totalNumbers <= 49){
    return "D";
}
else {
    return "E";
}
    
}
totalGrade(_grade);
console.log(totalGrade(_grade))
