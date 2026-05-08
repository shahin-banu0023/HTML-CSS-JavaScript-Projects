

const randomDelay = () => {
    return new Promise((resolve, reject) => {
        timeOut = 1 + 6 * Math.random();
        setTimeout(() => {
            resolve()
        }, timeOut * 1000);
    })
}
const addItem = async (item) => {
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div);
}

async function main() {
    let t = setInterval(() => {
        last = document.body.lastElementChild;
        if (last.innerHTML.endsWith("...")) {
            last.innerHTML = last.innerHTML.slice(0, last.lastElementChild - 3);
        }
        else {
            last.innerHTML += ".";
        }
    }, 100)
    let text = ["Initializing data", "Loading data", "Processing data", "storing data", "Modifying data", "displaying data"];

    for (let item of text) {
        await addItem(item);
    
    }
    randomDelay();
    clearInterval(t);
}
main()