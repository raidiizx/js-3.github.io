function calC() {
    // get this year
    const thisYear = new Date();
    console.log(thisYear.getFullYear());
    // get user birth year
    const x = document.getElementById("user-birth-year").value;
    // (this year)-(user birth year)
    const result = thisYear.getFullYear() - x
    // print value to paragraph
    //create paragraph with id
    //get element 
    const paragraphElement = document.getElementById('age');
    //put result in innerhtml property
    // if value over thisyear alert user do not put over thisyear
    if (result < 0) {
        alert(`Do not enter over ${thisYear.getFullYear()}`);
    }
    if (x <= 0) {
        alert(`Please fill the empty form`);
    }
    if (x > thisYear.getFullYear()) {
        paragraphElement.innerHTML = ""
    }
    else {
        paragraphElement.innerHTML = `${result} years olds`;
    }
}   