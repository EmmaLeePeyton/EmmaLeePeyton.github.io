document.getElementById("form-raccoon").onsubmit = (e) => {
  e.preventDefault(); //no go to action... no refresh page
  console.log("submitting");

  const form = e.target;

  const raccoonName = form.elements["raccoon-name"].value;
  const demeanor = form.elements["demeanor"].value;
  const termsChecked = form.elements["terms"].checked;
  const size = getRadioValue("size");


  console.log(`${raccoonName} is ${size} sized and has a ${demeanor} demeanor`);

};
console.log("I work");

const getRadioValue = (radioName) => {
  const radios = document.getElementsByName(radioName);

  for(let i in radios){
    if(radios[i].checked){
      return radios[i].value;
    }
  }

  return "";
};