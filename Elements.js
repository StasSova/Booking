const optionMenu = document.querySelector(".select-menu"),
selectBtn = optionMenu.querySelector(".select-btn"),
options = optionMenu.querySelectorAll(".option"),
sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;
        optionMenu.classList.remove("active");
    });
});
document.getElementById('monthDayInput').addEventListener('input', function(e) {
    var input = e.target.value;
    if (input.length > 5) e.target.value = input.slice(0, 5);
    if (input.length === 2 && !input.includes('/')) e.target.value = input + '/';
});