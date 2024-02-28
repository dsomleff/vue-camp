import TodoList from "./TodoList.js";
import TodoCreate from "./TodoCreate.js";

export default {
    components: {TodoList, TodoCreate},
    template: `
        <section class="flex gap-8">
            <todo-list :todos="filters.inProgress" title="In Progress">
                <todo-create @add="add" class="pt-6"></todo-create>
            </todo-list>
            
            <div v-show="showCompleted">
                <todo-list
                    :todos="filters.completed"
                    title="Completed"
                    can-toggle
                    @toggle="showCompleted = !showCompleted"
                ></todo-list>
            </div>
            
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
            /** @type boolean */
            showCompleted: true
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

