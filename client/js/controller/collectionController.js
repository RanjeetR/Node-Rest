angular.module('app').controller('collectionController',['$scope','$resource', function ($scope,$resource) {

    var fruits = $resource("/api/fruits");
    $scope.intCount = 20;
console.log("collectionController ");
    $scope.collection = [{
        fruits: "apple",
        color:"green"
    } ];
    $scope.savedata = function () {
        $scope.collection.push({
            fruits:$scope.fruitname,
            color:$scope.fruitcolor
        });
var fr = new fruits();
        fr.fruits = $scope.fruitname;
        fr.color = $scope.fruitcolor;
        fr.$save(function (result) {
               $scope.collection.push({
                   fruits:result.fruitname,
                   color:result.fruitcolor
               })
        });
    }
}]);
