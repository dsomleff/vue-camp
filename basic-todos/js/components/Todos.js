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
            /**
             * @property {string} name
             * @property {boolean} complete
             * @property {number} id
             * @property {string} tag
             */
            todos: [],
        };
    },
    
    computed: {
        /** @return {Object} */
        filters() {
            /** @type {{ inProgress: Array<Object>, completed: Array<Object>}}*/
            return {
                inProgress: this.todos.filter(a => !a.complete),
                completed: this.todos.filter(a => a.complete),
            }
        }
    },
    
    created() {
        fetch('http://localhost:56052/todos')
            .then(response => response.json())
            .then(todos => {
                this.todos = todos
            })
    },
    
    methods: {
        /** @param {string} name */
        add(name) {
            this.todos.push({
                name,
                completed: false,
                id: this.todos.length + 1,
            });
        }
    }
}

