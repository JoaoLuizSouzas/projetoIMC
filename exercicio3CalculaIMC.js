/* ### Cálculo do IMC

Um app deve ser desenvolvido para ajudar no atendimento de nutricionistas, uma das funcionalidades desse aplicativo é calcular o índice de massa corpórea de uma pessoa (IMC). Sua tarefa é desenvolver um programa que receba como entrada o sexo, peso e altura de uma pessoa e informe a condição da pessoa segundo a tabela abaixo:

O cálculo do IMC é dado por:

$$
IMC = \frac{Peso}{(Altura)²}
$$

**Entradas do programa:** Sexo (M ou F), peso (número em Kg), altura (número em metros*/
const MASCULINO = 'M'
const FEMININO = 'F'

function calculaIMC (sexo, peso, altura) {

    const imc = peso / (altura * altura);
    console.log(imc.toFixed(2))
    if (sexo == FEMININO){
        if (imc < 19.1){
            console.log('Abaixo do peso');
        }
        else if (imc >= 19.1 && imc <= 25.8){
            console.log('Peso normal');
        }
        else if (imc > 25.8 && imc <= 27.3){
            console.log('Pouco acima do peso');
        }
        else if (imc > 27.3 && imc <= 32.3){
            console.log('Acima do peso ideal');
        }
        else {
            console.log('Obeso');
        }
    }
    if (sexo == MASCULINO){
        if (imc < 20.7){
            console.log('Abaixo do peso');
        }
        else if (imc >= 20.7 && imc <= 26.4){
            console.log('Peso normal');
        }
        else if (imc > 26.4 && imc <= 27.8){
            console.log('Pouco acima do peso');
        }
        else if (imc > 27.8 && imc <= 31.1){
            console.log('Acima do peso ideal');
        }
        else{
            console.log('Obeso');
        }
    }
}

calculaIMC(MASCULINO, 80, 1.75)
calculaIMC(FEMININO, 50, 1.75)




