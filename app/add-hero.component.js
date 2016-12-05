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
var hero_service_1 = require('./hero.service');
var common_1 = require('@angular/common');
var AddHeroComponent = (function () {
    function AddHeroComponent(heroService, location) {
        this.heroService = heroService;
        this.location = location;
    }
    AddHeroComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.heroService.create(name)
            .then(function (hero) {
            _this.heroes.push(hero);
            _this.selectedHero = null;
        }).then(function () { return _this.goBack(); });
    };
    AddHeroComponent.prototype.goBack = function () {
        this.location.back();
    };
    AddHeroComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'add-hero',
            templateUrl: 'add-hero.component.html',
            styleUrls: ['heroes.component.css']
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, common_1.Location])
    ], AddHeroComponent);
    return AddHeroComponent;
}());
exports.AddHeroComponent = AddHeroComponent;
//# sourceMappingURL=add-hero.component.js.map