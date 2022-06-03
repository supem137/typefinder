const btnGen = document.getElementById("btnGenerate");
btnGen.addEventListener("click", numberGenerate)

function numberGenerate() {

    let txtNum = document.getElementById("txtNum").value;
    let num = txtNum.toString();

    let flag = 0;
    for (let prop = 0; prop < num.length; prop++) {
        let code = num.charCodeAt(prop);

        let rule = (code >= 48 && code <= 57);
        if (!rule) {
            flag++;
        }
    }

    if (flag >= 1) {
        const error = document.getElementById('txtNum');
        error.value = 'Please enter only numbers!';

        let hi = setInterval(() => {
            error.value = '';
        }, 1500)

        setInterval(() => {
            clearInterval(hi);
        }, 1500)

    } else {

        reset();

        for (let i = 0; i < txtNum; i++) {
            const createNumberElement = document.createElement("div");
            createNumberElement.innerHTML = i;
            document.body.appendChild(createNumberElement);

            document.getElementById("container").appendChild(createNumberElement);

            // const oddRule = (i % 2 === 0);
            // const evenRule = (i % 2 !== 0);
            // const primeRule = (i >= 2);

            let flag = 0;
            for (let j = 1; j <= txtNum; j++) {

                if (i % j === 0 && i !== 0) {
                    flag++;
                }
            }

            if (flag === 2) {
                if (i % 2 === 0) {
                    createNumberElement.setAttribute("class", "evenPrime");
                    createNumberElement.innerHTML = i //+ " evenPrime";
                } else if (i % 2 !== 0) {
                    createNumberElement.setAttribute("class", "oddPrime");
                    createNumberElement.innerHTML = i //+ " oddPrime";
                }
            } else if (flag !== 2) {
                if (i % 2 === 0) {
                    createNumberElement.setAttribute("class", "evenNotPrime");
                    createNumberElement.innerHTML = i //+ " evenNotPrime";
                } else if (i % 2 !== 0) {
                    createNumberElement.setAttribute("class", "oddNotPrime");
                    createNumberElement.innerHTML = i //+ " oddNotPrime";
                }
            }

        }

    }
    setStyle();
}

function reset() {
    let rmElement = document.querySelectorAll(".oddNotPrime,.evenNotPrime,.oddPrime,.evenPrime");
    for (let prop of rmElement) {
        prop.remove();
    }
}

function setStyle() {
    let setStyleOdd = document.querySelectorAll(".oddPrime");
    for (let prop of setStyleOdd) {
        prop.classList.add("oddPrimeStyle");
    }

    let setStyleEven = document.querySelectorAll(".evenPrime");
    for (let prop of setStyleEven) {
        prop.classList.add("evenPrimeStyle");
    }

    let setStylePrime = document.querySelectorAll(".oddNotPrime");
    for (let prop of setStylePrime) {
        prop.classList.add("oddNotPrimeStyle");
    }

    let setStyleEvenPrime = document.querySelectorAll(".evenNotPrime");
    for (let prop of setStyleEvenPrime) {
        prop.classList.add("evenNotPrimeStyle");
    }
}


