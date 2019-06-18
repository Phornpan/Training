(function () {
    'use strict';

    var app = angular.module('application', []);
    app.controller('storeController', ['$scope', function ($scope) {
            $scope.sushis = [
                {
                    name: 'Maguro',
                    price: 200,
                    description: "Fat Tuna",
                    quantity: 0,
                    image: 'image/maguro.jpg'
                },
                {
                    name: 'Tamago',
                    price: 120,
                    description: "Rice With Egg",
                    quantity: 0,
                    image: 'image/tamago.jpg'
                },
                {
                    name: 'Ebi',
                    price: 150,
                    description: "Rice With shrimp",
                    quantity: 0,
                    image: 'image/ebi.jpg'
                },
                {
                    name: 'Tako',
                    price: 130,
                    description: "Rice With squid",
                    quantity: 0,
                    image: 'image/tako.jpg'
                },
                {
                    name: 'Lucky',
                    price: 1000,
                    description: "every thing jing ka bell",
                    quantity: 0,
                    image: 'image'
                }
            ];
            $scope.purchase = function (item) {
                if (item.quantity > 0) {
                    return true;
                } else {
                    return false;
                }
            };
            $scope.clickAdd = function (item) {
                item.quantity += 1;
            };
            $scope.clickRemove = function (item) {
                if (item.quantity > 0) {
                    item.quantity -= 1;
                    return true;
                } else {
                    return false;
                }
            };
        }]);

})();
