import { Module } from "@nestjs/common";
import { TodoControl } from "./todo.controller";
import { TodoService } from "./todo.service";


@Module({
    controllers: [TodoControl],
    providers: [TodoService]
})
export class TodoModule{}