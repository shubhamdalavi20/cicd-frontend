import { Routes } from '@angular/router';
import { TodoListComponent } from './features/components/todo-list/todo-list.component';
import { AddTodoComponent } from './features/components/add-todo/add-todo.component';
import { HomeComponent } from './features/components/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'todo-list', component: TodoListComponent },
    { path: 'add-todo', component: AddTodoComponent },
    { path: '**', redirectTo: ''}
];
