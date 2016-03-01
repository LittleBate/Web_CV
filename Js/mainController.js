var app = angular.module('webCvApp', []);
app.controller('webCvController', function ($scope) {

    $scope.nom = "M. Guillaume PLUVY";
    $scope.telephone = "06-16-56-00-16";
    $scope.mail = "guillaume.pluvy@gmail.com";
    $scope.adresse = "57 Route de St Martin";
    $scope.codePostal = "42800";
    $scope.ville = "St Martin la Plaine";
    $scope.age = "24 ans";
    $scope.permis = "Permis B";
    $scope.voiture = "Possède un voiture";

    
    $scope.pages = [
        { id: 0, nom: "Chronologie" },
        { id: 1, nom: "Compétences" },
        { id: 2, nom: "Classique" }
    ];

    $scope.selectedPage = 0;

    $scope.selectedCompetence = 0;

    $scope.selectedTypeCompetence = 0;

    $scope.selectedAnnee = 0;

    $scope.annees = [
        { id: 2000 },
        { id: 2001 },
        { id: 2002 },
        { id: 2003 },
        { id: 2004 },
        { id: 2005 },
        { id: 2006 },
        { id: 2007 },
        { id: 2008 },
        { id: 2009 },
        { id: 2010 },
        { id: 2011 },
        { id: 2012 },
        { id: 2013 },
        { id: 2014 },
        { id: 2015 },
        { id: 2016 }
    ]


    $scope.listeCompetences = [
        {
            id: 0, nom: "Langages informatiques",
            competences:
                [{ id: 0, nom: "C#", niveau: 4 },
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
                { id: 18, nom: "Boottrap", niveau: 3 }]
        },
        {
            id: 0, nom: "Méthodologies et langages",
            competences:
                [{ id: 0, nom: "Design Pattern", niveau: 4 },
                { id: 1, nom: "MVVM", niveau: 3 },
                { id: 2, nom: "MVC", niveau: 4 }]
        },
        {
            id: 0, nom: "Outils de génie logiciel",
            competences:
                [{ id: 0, nom: "Visual Studio", niveau: 4 },
                { id: 1, nom: "Eclipse", niveau: 3 },
                { id: 2, nom: "Vim", niveau: 4 } ]
        },
        {
            id: 0, nom: "Base de données",
            competences:
                [{ id: 0, nom: "SQL", niveau: 4 },
                { id: 1, nom: "MySql", niveau: 3 },
                { id: 2, nom: "SQLLight", niveau: 4 },
                { id: 3, nom: "MongoDB", niveau: 3 }]
        },
        {
            id: 0, nom: "OS et Réseaux",
            competences:
                [{ id: 0, nom: "Windows", niveau: 4 },
                { id: 1, nom: "Linux", niveau: 3 }]
        },
        {
            id: 0, nom: "Général",
            competences:
                [{ id: 0, nom: "Anglais", niveau: 4 },
                { id: 1, nom: "Communication", niveau: 3 }]
        }

    ];
})