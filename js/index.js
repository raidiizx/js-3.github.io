function calC() {
    // get this year
    const thisYear = new Date();
    console.log(thisYear.getFullYear());
    // get user birth year
    const value2 = document.getElementById("user-birth-year").value;
    // (this year)-(user birth year)
    const result = thisYear.getFullYear() - value2
    // print value to paragraph
    //create paragraph with id
    //get element 
    const paragraphElement = document.getElementById('age');
    //put result in innerhtml property
    paragraphElement.innerHTML = `${result} years olds`;
    // if value over thisyear alert user do not put over thisyear
}