
    
const containerEl=document.querySelector(".container")


const careers = [ "YouTuber", "Web Devoleper", "Freelancer", "Instructor" ];

let careerIndex = 0

let characterIndex = 0

updateText()

function updateText() {
    characterIndex++
    // nije mi jasno yasto je ovaj red morao biti prebacen ovde da bi se kucao poslednji index u characterIndex //
    containerEl.innerHTML =`
    <h1>I am ${careers[careerIndex].slice(0,1)=== "I" ? "an" : "a"} ${careers[careerIndex].slice(0,characterIndex)}</h1>
    `;
    
    if (characterIndex === careers[careerIndex].length){
        careerIndex++
        characterIndex = 0

    }
    if(careerIndex === careers.length){
        careerIndex=0;
    }


    setTimeout(updateText, 200)
}
