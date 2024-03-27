const Search = async () => {
    let token = localStorage.getItem('oneci');

    const nni = document.getElementById('nni').value;

    if (nni, token) {
        document.getElementById('messago').style.display = "block"

        document.getElementById('nni').blur();

        const response = await requesttoBackendAtrubi('GET', `${rnppUrl}/oneci/persons/${nni}?attributeNames=FIRST_NAME&attributeNames=LAST_NAME&attributeNames=BIRTH_DATE&attributeNames=GENDER`, token);

        if (response) {
            document.getElementById('messago').innerHTML = `<img src="./asserts/loaging.gif" style="height: 100%; width: 100%;"`;
            document.getElementById('messago').style.display = "none"
            //console.log(response);

            const userinfos = `
                                <p>Nom: ${response.LAST_NAME}</p>
                                <p>Prénom: ${response.FIRST_NAME}</p>
                                <p>Date de naissance: ${response.BIRTH_DATE}</p>
                                <p>Genre: ${response.GENDER}</p>
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


