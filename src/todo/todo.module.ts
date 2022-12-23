import { Module, NestModule, MiddlewareConsumer,RequestMethod } from "@nestjs/common";

import { TodoControl } from "./todo.controller";
import { TodoService } from "./todo.service";
import { LoggerMiddleware } from "src/middlewares/logger.middleware";
import { ROUTES } from "src/models/routes";


@Module({
    controllers: [TodoControl],
    providers: [TodoService]
})
export class TodoModule implements NestModule{

    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(LoggerMiddleware)
            .forRoutes(ROUTES.TODO);
    }
}