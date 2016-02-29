var app = angular.module('webCvApp', []);
app.controller('webCvController', function ($scope) {

    $scope.selectedCompetence = 0;

    $scope.listeCompetences = [
        { id: 0, nom: "C#", niveau: 4 },
        { id: 1, nom: "C++", niveau: 3 },
        { id: 2, nom: "Java", niveau: 4 },
        { id: 3, nom: "C", niveau: 3 },
        { id: 4, nom: "Python", niveau: 3 },
        { id: 5, nom: "HTML", niveau: 4 },
        { id: 6, nom: "CSS", niveau: 3 },
        { id: 7, nom: "JavaScript", niveau: 3 },
        { id: 8, nom: "WPF", niveau: 4 },
        { id: 9, nom: "XML", niveau: 4 },
        { id: 10, nom: "JSON", niveau: 3 },
        { id: 11, nom: "SQL", niveau: 3 },
        { id: 12, nom: "Android", niveau: 2 },
        { id: 13, nom: "IOS", niveau: 1 },
        { id: 14, nom: "Windows Phone", niveau: 4 },
        { id: 15, nom: "Ionic", niveau: 3 },
        { id: 16, nom: "REST", niveau: 2 },
        { id: 17, nom: "OAUTH / OAUTH 2", niveau: 2 },
        { id: 18, nom: "Boottrap", niveau: 3 }
    ];
})