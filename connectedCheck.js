function getAdmin() {
    const token = sessionStorage.getItem('tibule');
    if (token) {
        const splo = token.split("°");
        console.log(splo[4]);
        if (splo[4] !== "GIFV") {
            window.location.href = "/";

        }
        return splo[4] == "GIFV" ? true : false
    }
    window.location.href = "/";
    return false
};
getAdmin();