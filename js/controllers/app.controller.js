angular.module('angularNivel1App', [])
.controller('appCtrl', function($scope) {
    
    //objeto vazio
    var aluno = {};
    // var aluno = new Object();

    //objeto com atributos
    var aluno2 = {
        nome: null,
        idade: null,
        sexo: null
    };

    aluno.nome = 'Leticia';
    console.log(aluno.nome);
    aluno2.telefone = '12323345';
    console.log(aluno2.telefone);

    //criar um novo array
    $scope.alunos = [];

    // var alunos = new Array();
    $scope.alunos[5] = aluno2;
    $scope.alunos.push(aluno2);


    //criar um array populado
    var arrayPopulado = ['string1', 'string2', 'string3'];

    $scope.alunos = [
        {nome: 'João', idade: 25},
        {nome: 'Maria', idade: 23},
        {nome: 'Josué', idade: 30},
        {nome: 'Anastácia', idade: 32}
    ]


}); 