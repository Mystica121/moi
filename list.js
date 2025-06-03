function searchTable() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let table = document.getElementById("dataTable");
    let rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName("td");
        let matchFound = false;

        for (let cell of cells) {
            if (cell.innerHTML.toLowerCase().includes(input)) {
                matchFound = true;
                break;
            }
        }

        rows[i].style.display = matchFound ? "" : "none";
    }
}