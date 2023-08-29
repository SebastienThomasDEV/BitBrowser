import { CRYPTOS, DEVISES } from "./constants.js";

let add = document.getElementById("add_btn");
let datas = {
    labels : [],


}
add.addEventListener("click", async function () {
    const { value: PAIR } = await Swal.fire({
        title: 'Choisissez votre crypto et votre devise',
        html:
            `
            <select id="swal-input-crypto" class="swal2-input">
                ${CRYPTOS.map(crypto => `<option value="${crypto}">${crypto}</option>`)}
            </select>
            <select id="swal-input-devise" class="swal2-input">
                ${DEVISES.map(devise => `<option value="${devise}">${devise}</option>`)} 
            </select>
            `,
        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById('swal-input-crypto').value,
                document.getElementById('swal-input-devise').value
            ]
        }
    })

    if (PAIR) {
        const { value: COLOR } = await Swal.fire({
            title: 'Choisissez la couleur de votre graphique',
            html:
                `
            <input id="swal-input-color-border" type="color"><p>Couleur de la bordure</p>
            <input id="swal-input-color-bg" type="color"><p>Couleur de fond</p>
            `,
            focusConfirm: false,
            preConfirm: () => {
                return [
                    document.getElementById('swal-input-color-border').value,
                    document.getElementById('swal-input-color-bg').value
                ]
            }
        })
        if (COLOR) {
            Swal.fire(JSON.stringify(COLOR))
            console.log(COLOR, PAIR)
        }
    }
})