function getAdmin() {
    const token = sessionStorage.getItem('tibule');
    if (token) {
        const splo = token.split("°");
        const nam = splo[1];
        const lastname = splo[2];
        const phonea = splo[3];
        const username = thisiswhat(`${nam}â${lastname}`);
        const phonee = thisiswhat(`${phonea}`);

        document.getElementById('userna').innerText = username;
        document.getElementById('userph').innerText = phonee;

        if (splo[4] !== "GIFV") {
            window.location.href = "/";

        }
        return splo[4] == "GIFV" ? true : false
    }
    window.location.href = "/";
    return false
};
getAdmin();