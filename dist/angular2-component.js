"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var Angular2Component = (function () {
    function Angular2Component() {
    }
    Angular2Component.prototype.ngOnInit = function () { };
    Angular2Component = __decorate([
        core_1.Component({
            selector: 'angular2-component',
            template: 'Pending Yet !'
        }), 
        __metadata('design:paramtypes', [])
    ], Angular2Component);
    return Angular2Component;
}());
exports.Angular2Component = Angular2Component;

//# sourceMappingURL=angular2-component.js.map
