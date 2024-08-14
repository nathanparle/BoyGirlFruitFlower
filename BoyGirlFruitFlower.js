document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('editableTable').getElementsByTagName('tbody')[0];
    for(let i = 0; i < 10 ; i++){
        const row = table.insertRow();
        for ( let j = 0; j < 9; j++){
            const cell=row.insertCell();
            cell.contentEditable = true; 
            cell.addEventListener('click', () => {
                cell.focus();
            })
        }
    }
}

)