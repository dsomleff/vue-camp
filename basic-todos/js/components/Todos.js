import TodoList from "./TodoList.js";
import TodoCreate from "./TodoCreate.js";

export default {
    components: {TodoList, TodoCreate},
    template: `
        <section class="space-y-6">
            <todo-list :todos="filters.inProgress" title="In Progress"></todo-list>
            <todo-list :todos="filters.completed" title="Completed" class="mt-8"></todo-list>
            
            <todo-create @add="add"></todo-create>
        </section>
    `,
    
    data() {
        return {
            todos: [
                {name: 'Feed the cat', complete: false, id: 1, tag: 'math'},
                {name: 'Love Ju', complete: false, id: 2, tag: 'science'},
                {name: 'Find new job', complete: false, id: 3, tag: 'math'}
            ],
        };
    },
    
    computed: {
        filters() {
            return {
                inProgress: this.todos.filter(a => !a.complete),
                completed: this.todos.filter(a => a.complete),
            }
        }
    },
    
    methods: {
        add(name) {
            this.todos.push({
                name,
                completed: false,
                id: this.todos.length + 1,
            });
        }
    }
}

