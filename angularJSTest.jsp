<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html  ng-app>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.13/angular.js"></script>
<script type='text/javascript'>
function MyCtrl($scope) {<!--from   w  ww . ja va  2 s  .c om-->
    $scope.foo = "I'm foo!";
    $scope.lines = [];

    $scope.addLine = function () {
        $scope.lines.push($scope.lines.length);
    };
}
</script>
</head>
<body>
  <div ng-app ng-controller="MyCtrl">
    <button ng-click="addLine()">Add a line</button>
    <div ng-repeat="line in lines">
        I'm a new line. {{foo}}
    </div>
</div>
</body>
</html>
