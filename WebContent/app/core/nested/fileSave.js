function ExampleCtrl(FileSaver, Blob) {
  var vm = this;

    text: 'Hey ho lets go!'

  vm.download = function(text) {
    var data = new Blob([text], { type: 'text/plain;charset=utf-8' });
    FileSaver.saveAs(data, 'C:\Users\SMJ8707\Downloads\text.txt');
  };
}
angular.module('demo', ['ngFileSaver']).controller('NestedListsDemoController', ['FileSaver', 'Blob', ExampleCtrl]);