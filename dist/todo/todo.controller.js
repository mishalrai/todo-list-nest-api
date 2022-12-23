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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var TodoControl_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoControl = void 0;
const common_1 = require("@nestjs/common");
const todo_service_1 = require("./todo.service");
const routes_1 = require("../models/routes");
let TodoControl = TodoControl_1 = class TodoControl {
    constructor(todoService) {
        this.todoService = todoService;
        this.logger = new common_1.Logger(TodoControl_1.name);
    }
    create(todo) {
        this.logger.log('Handling create() request');
        return this.todoService.create(todo);
    }
    findAll() {
        throw new common_1.BadRequestException('Something bad happened', { cause: new Error(), description: 'Some error description' });
        this.logger.log('Handling findAll() request');
        return this.todoService.findAll();
    }
    findOne(id) {
        this.logger.log('Handling findOne() request with id=' + id);
        return this.todoService.findOne(id);
    }
    update(id, todo) {
        this.logger.log('Handling update() request with id=' + id);
        return this.todoService.update(id, todo);
    }
    remove(id) {
        this.logger.log('Handling remove() request with id' + id);
        this.todoService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TodoControl.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], TodoControl.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], TodoControl.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], TodoControl.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TodoControl.prototype, "remove", null);
TodoControl = TodoControl_1 = __decorate([
    (0, common_1.Controller)(routes_1.ROUTES.TODO),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoControl);
exports.TodoControl = TodoControl;
//# sourceMappingURL=todo.controller.js.map