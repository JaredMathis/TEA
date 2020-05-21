angular.module('sandbox', []);

angular.module('sandbox').controller('EntityController', ($scope) => {
    $scope.model = {};

    $scope.model.selectedEntity = 'TEA1';
    
    $scope.entities = [
        'TEA1',
        'TEA2',
        'TEA3',
        'TEAD',
        'TEAH',
        'TEAL',
        'TEAM',
        'TEAN',
        'TEAS',
        'TEAU',
        'TEAV',
        'TEAZ',
    ]
});


angular.module('sandbox').controller('DownloadsController', ($scope) => {
    $scope.selectedCategory = 'Auction';
    
    $scope.categories = [
        'Auction',
        'Secondary Market',
        'Allocation',
    ];
});