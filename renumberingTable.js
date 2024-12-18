/**
 * перенумерация строк в таблице
 * @param tableId
 */
function renumberTableRows(tableId) {
    // Находим таблицу по id
    var table = document.getElementById(tableId);

    // Если таблица не найдена, выходим из функции
    if (!table) {
        console.warn('Таблица с id "' + tableId + '" не найдена.');
        return;
    }

    // Получаем строки таблицы
    var rows = table.getElementsByTagName('tr');

    // Перенумерация строк
    for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName('td');
        if (cells.length > 0) {
            cells[0].innerText = i; // Устанавливаем номер строки
        }
    }
}