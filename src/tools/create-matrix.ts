interface ExtraColumns {
    [key: string]: number;
}

export const createMatrix = (rows: number, columns: number,extraColumns: ExtraColumns = {}) => {
    const letters: string[] = Array.from({ length: rows }, (_, index) => String.fromCharCode(65 + index));
    
    return letters.map((letter) => {
        const columnCount = columns + (extraColumns[letter] ?? 0);
        const numbers = Array.from({ length: columnCount }, (_, index) => (index + 1).toString());
        return numbers.map(number => letter + number);
    });
}