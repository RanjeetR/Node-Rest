angular.module('app').controller('collectionController', function ($scope) {
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
       // $scope.collection.push({color:$scope.fruitcolor});
    }
});
