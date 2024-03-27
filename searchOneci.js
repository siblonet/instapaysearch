const Search = async () => {
    let token = sessionStorage.getItem('oneci');

    const nni = document.getElementById('nni').value;

    if (nni, token) {
        document.getElementById('valideuser').style.display = "none"
        document.getElementById('messago').style.display = "block"

        document.getElementById('nni').blur();

        const response = await requesttoBackendAtrubi('GET', `${rnppUrl}/oneci/persons/${nni}?attributeNames=FIRST_NAME&attributeNames=LAST_NAME&attributeNames=BIRTH_DATE&attributeNames=GENDER`, token);

        if (response) {
            document.getElementById('messago').innerHTML = `<img src="./asserts/loaging.gif" style="height: 100%; width: 100%;"`;
            document.getElementById('messago').style.display = "none"
            //console.log(response);

            const userinfos = `
                                <p>Nom: <span style="color: #f8aa45;">${response.LAST_NAME}</span></p>
                                <p>Prénom: <span style="color: #f8aa45;">${response.FIRST_NAME}</span></p>
                                <p>Date de naissance: <span style="color: #f8aa45;">${response.BIRTH_DATE}</span></p>
                                <p>Genre: <span style="color: #f8aa45;">${response.GENDER}</span></p>
            `;
            document.getElementById('valideuser').style.display = "flex"
            document.getElementById('userinfos').innerHTML = userinfos;

        } else {

            document.getElementById('messago').innerHTML = `<p style="color: red; font-weight: bold;">${nni} Introuvable!</p>`;

            setTimeout(() => {
                document.getElementById('messago').innerHTML = `<img src="./asserts/loaging.gif" style="height: 100%; width: 100%;"`;
                document.getElementById('messago').style.display = "none"
            }, 7000);
        }
    }
}

const nniA = document.getElementById('nni');

nniA.addEventListener("input", function () {
    nniA.value = nniA.value.replace(/\s/g, '')

});