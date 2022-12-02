import { Todo } from "./todo.interface";
export declare class TodoService {
    private readonly storage;
    create(todo: Todo): void;
    findAll(): Array<Todo>;
    findOne(id: number): Todo;
    update(id: number, todo: Todo): void;
    remove(id: number): void;
}
