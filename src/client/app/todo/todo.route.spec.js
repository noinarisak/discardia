/* jshint -W117, -W030 */
describe('todo routes', function () {
    describe('state', function () {
        var view = 'app/todo/todo.html';

        beforeEach(function() {
            module('app.todo', bard.fakeToastr);
            bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
        });

        beforeEach(function() {
            $templateCache.put(view, '');
        });

        it('should map state todo to url /todo ', function() {
            expect($state.href('todo', {})).to.equal('/todo');
        });

        it('should map /todo route to todo View template', function () {
            expect($state.get('todo').templateUrl).to.equal(view);
        });

        it('of todo should work with $state.go', function () {
            $state.go('todo');
            $rootScope.$apply();
            expect($state.is('todo'));
        });
    });
});
