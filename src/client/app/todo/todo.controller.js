(function () {
    'use strict';

    angular
        .module('app.todo')
        .controller('TodoController', TodoController);

    TodoController.$inject = ['logger'];
    /* @ngInject */
    function TodoController(logger) {
        var vm = this;
        vm.title = 'Todo';

        activate();

        function activate() {
            logger.info('Activated Todo View');
        }
    }
})();
