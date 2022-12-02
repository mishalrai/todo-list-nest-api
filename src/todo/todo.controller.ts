import { Body, Controller, Get, Post , Logger, Param, ParseIntPipe, Put, Delete} from "@nestjs/common";
import { Todo } from "./todo.interface";
import { TodoService } from "./todo.service";

@Controller('todo')
export class TodoControl{

    private readonly logger = new Logger(TodoControl.name);

    constructor( private readonly todoService: TodoService){}

    @Post()
    create( @Body() todo: Todo): void {
        this.logger.log('Handling create() request');
        return this.todoService.create(todo);
    }

    @Get()
    findAll(): Array<Todo>{
        this.logger.log('Handling findAll() request');
        return this.todoService.findAll();
    }

    @Get(':id')
    findOne( @Param('id', ParseIntPipe) id:number): Todo {
        this.logger.log('Handling findOne() request with id='+id);
        return this.todoService.findOne(id);
    }

    @Put(':id')
    update( @Param('id', ParseIntPipe) id: number, @Body() todo: Todo): void { 
        this.logger.log('Handling update() request with id='+id);
        return this.todoService.update(id, todo);
    }

    @Delete(':id')
    remove( @Param('id', ParseIntPipe) id: number): void{
        this.logger.log('Handling remove() request with id'+id);
        this.todoService.remove(id);
    }
}