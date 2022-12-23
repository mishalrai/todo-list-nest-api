import { NestModule, MiddlewareConsumer } from "@nestjs/common";
export declare class TodoModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void;
}
