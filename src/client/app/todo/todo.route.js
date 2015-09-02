(function() {
    'use strict';

    angular
        .module('app.todo')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'todo',
                config: {
                    url: '/todo',
                    templateUrl: 'app/todo/todo.html',
                    controller: 'TodoController',
                    controllerAs: 'vm',
                    title: 'Todo',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Todo'
                    }
                }
            }
        ];
    }
})();
