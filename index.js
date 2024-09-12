// 1. Criação de Arrays: Crie um array chamado "notas" que armazene as notas de cinco alunos.
let notas = [7.5, 8.0, 6.5, 9.0, 7.8];

// 2. Acesso aos Elementos: Exiba no console a primeira e a última nota do array.
console.log("Primeira nota:", notas[0]);
console.log("Última nota:", notas[notas.length - 1]);

// 3. Adicione uma nova nota ao final do array usando push().
notas.push(8.5);
console.log("Array após adicionar nova nota:", notas);

// 4. Remova a primeira nota do array usando shift().
notas.shift();
console.log("Array após remover a primeira nota:", notas);

// 5. Exiba o array resultante no console.
console.log("Array atual:", notas);

// 6. Iteração com forEach: Itere sobre o array "notas" e exiba cada nota no console.
notas.forEach((nota, index) => {
    console.log(`Nota ${index + 1}:`, nota);});

// 7. Cálculo da Média: Utilize um loop for ou o método reduce para calcular a média das notas.
const soma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
const media = soma / notas.length;
console.log("Média das notas:", media);

// 8. Filtro de Notas: Use o método filter para criar um novo array com as notas maiores que 7.
const notasAltas = notas.filter(nota => nota > 7);
console.log("Notas maiores que 7:", notasAltas);

// 9. Ordenação: Ordene o array "notas" em ordem crescente utilizando o método sort().
const notasOrdenadas = [...notas].sort((a, b) => a - b); // [...notas] cria uma cópia para não alterar o array original
console.log("Notas em ordem crescente:", notasOrdenadas);

// 10. Busca de Elementos: Verifique se a nota 6.5 está presente no array utilizando includes().
const temNota65 = notas.includes(6.5);
console.log("Nota 6.5 está presente no array?", temNota65);

// 11. Encontre o Índice: Utilize o método indexOf para encontrar o índice da nota 8.0.
const indiceNota80 = notas.indexOf(8.0);
console.log("Índice da nota 8.0:", indiceNota80);

// 12. Mapeamento: Crie um novo array em que cada nota seja elevada ao quadrado utilizando o método map().
const notasAoQuadrado = notas.map(nota => nota ** 2);
console.log("Notas elevadas ao quadrado:", notasAoQuadrado);
