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
var core_1 = require('@angular/core');
var TutorialsComponent = (function () {
    function TutorialsComponent() {
        this.title = "Tutorials from Vineet Vinayakumar";
        this.cone = true;
        this.ctwo = true;
        this.style = 'italic';
        this.size = '20px';
    }
    TutorialsComponent.prototype.toggle = function () {
        this.cone = !this.cone;
        this.ctwo = !this.ctwo;
    };
    TutorialsComponent = __decorate([
        core_1.Component({
            selector: 'my-tutorials',
            template: "<h2>Child Tutorials Component</h2>\n\t\t\t\t<label>Enter Child Tutorials Component Value</label>\n\t\t\t\t<input type=\"text\">\n\t\t\t\t<p>Value from Parent App Component is </p>"
        }), 
        __metadata('design:paramtypes', [])
    ], TutorialsComponent);
    return TutorialsComponent;
}());
exports.TutorialsComponent = TutorialsComponent;
//# sourceMappingURL=tutorials.component.js.map