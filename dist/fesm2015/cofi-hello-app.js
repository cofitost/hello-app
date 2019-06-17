import { __decorate, __metadata } from 'tslib';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

let HelloComponent = class HelloComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
HelloComponent = __decorate([
    Component({
        selector: 'app-hello',
        template: "<p>\r\n  This is s hello component!\r\n</p>\r\n",
        styles: [""]
    }),
    __metadata("design:paramtypes", [])
], HelloComponent);

let HelloModule = class HelloModule {
};
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

/**
 * Generated bundle index. Do not edit.
 */

export { HelloModule, HelloComponent as ɵa };
//# sourceMappingURL=cofi-hello-app.js.map
