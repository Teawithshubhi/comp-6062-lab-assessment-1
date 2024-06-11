console.log();

const STUDENTNAME = "ShubhamYadav";
console.log(STUDENTNAME);
const STUDENTNUMBER = "1152865";
console.log(STUDENTNUMBER);
const result = STUDENTNAME.concat('-', STUDENTNUMBER);
console.log(result);
const headerContent = document.querySelector("h1");
headerContent.innerHTML = `${STUDENTNAME} - ${STUDENTNUMBER}`;
headerContent.classList.add("heading1");