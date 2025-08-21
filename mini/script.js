document.addEventListener('DOMContentLoaded', () => {
    const tableCells = document.querySelectorAll('td:nth-child(2)');
    const resetButton = document.getElementById('reset-button');

    tableCells.forEach(cell => {
        cell.addEventListener('click', () => {
            // Если текст уже виден, ничего не делаем
            if (cell.classList.contains('visible')) {
                return;
            }

            // Показываем текст и помечаем ячейку как просмотренную
            cell.classList.add('visible');
            cell.classList.add('seen');

            // Скрываем текст через 2 секунды
            setTimeout(() => {
                cell.classList.remove('visible');
            }, 2000);
        });
    });

    // Обработчик для кнопки сброса
    resetButton.addEventListener('click', () => {
        const seenCells = document.querySelectorAll('.seen');
        seenCells.forEach(cell => {
            cell.classList.remove('seen');
        });
    });
});