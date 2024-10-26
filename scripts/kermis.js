const pics = document.getElementsByTagName('picture')
const texts = []
texts.push(document.getElementsByTagName('span'))
texts.push(document.getElementsByTagName('p'))
texts.push(document.getElementsByTagName('a'))
texts.push(document.getElementsByTagName('h1'))
const imgUrl = chrome.runtime.getURL('../images/kermis1.jpg')
const rx = /\b[A-ZÅÄÖ][a-zA-ZåäöÅÄÖ]*/g

function replaceText(els) {
    if (els && els.length) {
        for (let el of els) {
            el.textContent = el.textContent.replaceAll(rx, 'Kermis')
        }
    }
}

function kermifyPage() {
    if (pics && pics.length) {
        console.log('kerm')
        for (let pic of pics) {
            for (let el of pic.children) {
                if (el.tagName === "SOURCE") {
                    el.srcset=imgUrl
                } else if (el.tagName === "IMG") {
                    el.src=imgUrl
                }
            }
        }
    }
    for (let els of texts) {
        replaceText(els)
    }
}

kermifyPage()

setInterval(() => {
    kermifyPage()
}, 3000);