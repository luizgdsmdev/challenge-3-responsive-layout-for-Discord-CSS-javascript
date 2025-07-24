function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= ((window.innerHeight -120) || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function updateHtmlElement(element, image, text, textDirection, imageDirection){
    window.addEventListener('scroll', () => {
        if (isElementInViewport(element)) {
            text.classList.add(textDirection);
            image.classList.add(imageDirection);
        }
    });
}

let secondSectionImg = document.getElementById('second-section-img');
let secondSectionText = document.getElementById('second-section-text');
let ThirdSectionImg = document.getElementById('third-section-img');
let ThirdSectionText = document.getElementById('third-section-text');
let FourthSectionImg = document.getElementById('fourth-section-img');
let FourthSectionText = document.getElementById('fourth-section-text');
let lastSectionImg = document.getElementById('last-section-img');
let lastSectionText = document.getElementById('last-section-text');

updateHtmlElement(secondSectionImg, secondSectionImg, secondSectionText, "ShowTextFromLeft", "ShowImageFromLeft");
updateHtmlElement(ThirdSectionText, ThirdSectionText, ThirdSectionImg, "ShowTextFromRigh", "ShowImageFromRigh");
updateHtmlElement(FourthSectionImg, FourthSectionImg, FourthSectionText, "ShowTextFromRigh", "ShowImageFromRigh");
updateHtmlElement(lastSectionText, lastSectionText, lastSectionImg, "ShowTextFromBottom", "ShowImageFromBottom");