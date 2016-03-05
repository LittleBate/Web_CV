var app = angular.module('webCvApp', []);
app.controller('webCvController', function ($scope) {

    $scope.nom = "M. Guillaume PLUVY";
    $scope.telephone = "06-16-56-00-16";
    $scope.mail = "guillaume.pluvy@gmail.com";
    $scope.adresse = "57 Route de St Martin";
    $scope.codePostal = "42800";
    $scope.ville = "ST MARTIN LA PLAINE";
    $scope.age = "24 ans";
    $scope.permis = "Permis B";
    $scope.voiture = "Possède un voiture";

    
    $scope.pages = [
        { id: 0, nom: "Chronologie" },
        { id: 1, nom: "Compétences" },
        { id: 2, nom: "Classique" }
    ];

    $scope.idSelectedPage = 0;

    $scope.idSelectedCompetence = 0;

    $scope.idSelectedTypeCompetence = 0;

    $scope.isSelectedAnnee = 0;

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

    $scope.Experience = [
        {
            id: 0, libelle: "", lieu: "", mission: "", listeCompetence: [
                { type: 0, liste: [] }
            ]
        }, 
        {
            id: 1, libelle: "Employé à ESABORA", lieu: "St Etienne (42)", mission: "Déeloppement d'une application (client - serveur) de gestion", listeCompetence: [
              { type: 0, liste: [0, 8, 11] },
              { type: 1, liste: [1] },
              { type: 3, liste: [0]}
            ]
        },
        {
            id: 2, libelle: "Stage DUT à ESABORA", lieu: " St Etienne (42)", mission: "Développement de la version mobile (tablette tactile) d’une application de CAO.", listeCompetence: [
                { type: 0, liste: [] }
            ]
        },
        {
            id: 3, libelle: "Stage informatique à la SNCF", lieu: "Oullins (69)", mission: "Développement d'une application de gestion de ticket en intranet. ", listeCompetence: [
                { type: 0, liste: [] }
            ]
        },
        {
            id: 4, libelle: "Employé au Conseil Général de la Loire", lieu: "ST Etienne (42)", mission: "Archivage ", listeCompetence: [
                { type: 0, liste: [] }
            ]
        }
    ];

    $scope.activites = [
        { id: 0, libelle: "Basket" },
        { id: 1, libelle: "Lectuer (BD)"}
    ];

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
            id: 1, nom: "Méthodologies et langages",
            competences:
                [{ id: 0, nom: "Design Pattern", niveau: 4 },
                { id: 1, nom: "MVVM", niveau: 3 },
                { id: 2, nom: "Merise", niveau: 3 },
                { id: 3, nom: "UML", niveau: 3 },
                { id: 4, nom: "Analyse", niveau: 3 },
                { id: 5, nom: "MVC", niveau: 4 }]
        },
        {
            id: 2, nom: "Outils de génie logiciel",
            competences:
                [{ id: 0, nom: "Visual Studio", niveau: 4 },
                { id: 1, nom: "Eclipse", niveau: 3 },
                { id: 2, nom: "Maple", niveau: 3 },
                { id: 3, nom: "Netbeans", niveau: 3 },
                { id: 5, nom: "Vim", niveau: 4 } ]
        },
        {
            id: 3, nom: "Base de données",
            competences:
                [{ id: 0, nom: "Oracle", niveau: 4 },
                { id: 1, nom: "MySql", niveau: 3 },
                { id: 2, nom: "SQLLight", niveau: 4 },
                { id: 3, nom: "SQL Server", niveau: 4 },
                { id: 4, nom: "MongoDB", niveau: 3 }]
        },
        {
            id: 4, nom: "OS et Réseaux",
            competences:
                [{ id: 0, nom: "Windows", niveau: 4 },
                { id: 1, nom: "Linux", niveau: 3 }]
        },
        {
            id: 5, nom: "Général",
            competences:
                [{ id: 0, nom: "Anglais", niveau: 4 },
                { id: 1, nom: "Communication", niveau: 3 }]
        }

    ];
})