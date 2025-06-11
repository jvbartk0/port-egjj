document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculate');
    const resultContainer = document.getElementById('result');
    const averageElement = document.getElementById('average');
    const statusElement = document.getElementById('status');

    calculateBtn.addEventListener('click', () => {
        const grades = [
            document.getElementById('grade1'),
            document.getElementById('grade2'),
            document.getElementById('grade3'),
            document.getElementById('grade4')
        ];

        let isValid = true;
        let sum = 0;

        grades.forEach((gradeInput, index) => {
            const gradeValue = parseFloat(gradeInput.value);
            
            if (isNaN(gradeValue)){
                alert(`Por favor, insira um valor válido para a Nota ${index + 1}`);
                isValid = false;
                return;
            }

            if (gradeValue < 0 || gradeValue > 10) {
                alert(`A Nota ${index + 1} deve estar entre 0 e 10`);
                isValid = false;
                return;
            }

            sum += gradeValue;
        });

        if (!isValid) return;

        const average = sum / grades.length;
        const roundedAverage = Math.round(average * 10) / 10;

        let status, statusClass;
        
        if (roundedAverage >= 7) {
            status = 'Aprovado';
            statusClass = 'approved';
        } else if (roundedAverage >= 5) {
            status = 'Recuperação';
            statusClass = 'recovery';
        } else {
            status = 'Reprovado';
            statusClass = 'failed';
        }

        averageElement.textContent = roundedAverage.toFixed(1);
        statusElement.textContent = status;
        statusElement.className = statusClass;
        
        resultContainer.classList.remove('hidden');
    });
});