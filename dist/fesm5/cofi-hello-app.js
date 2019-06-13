import { __decorate, __metadata } from 'tslib';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

var HelloComponent = /** @class */ (function () {
    function HelloComponent() {
    }
    HelloComponent.prototype.ngOnInit = function () {
    };
    HelloComponent = __decorate([
        Component({
            selector: 'app-hello',
            template: "<p>\n  hello!\n</p>\n",
            styles: [""]
        }),
        __metadata("design:paramtypes", [])
    ], HelloComponent);
    return HelloComponent;
}());

var HelloModule = /** @class */ (function () {
    function HelloModule() {
    }
    HelloModule = __decorate([
        NgModule({
            declarations: [HelloComponent],
            imports: [
                CommonModule
            ],
            exports: [
                HelloComponent
            ]
        })
    ], HelloModule);
    return HelloModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { HelloModule, HelloComponent as ɵa };
//# sourceMappingURL=cofi-hello-app.js.map
