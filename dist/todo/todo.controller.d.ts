import { Todo } from "./todo.interface";
import { TodoService } from "./todo.service";
export declare class TodoControl {
    private readonly todoService;
    private readonly logger;
    constructor(todoService: TodoService);
    create(todo: Todo): void;
    findAll(): Array<Todo>;
    findOne(id: number): Todo;
    update(id: number, todo: Todo): void;
    remove(id: number): void;
}
