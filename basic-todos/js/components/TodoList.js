import Todo from "./Todo.js";
import TodoTags from "./TodoTags.js";

export default {
    components: {Todo, TodoTags},
    template: `
        <section v-show="todos.length">
            <h2 class="font-bold mb-2">
                {{title}}
                <span>({{ todos.length }})</span>
            </h2>
            
           <todo-tags
                :initial-tags="todos.map(todo => todo.tag)"
                :current-tag="currentTag"
                @change="currentTag = $event"
            />
    
            <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
                <todo v-for="todo in filteredTodos" :key="todo.id" :todo="todo"></todo>
            </ul>
        </section>
    `,
    
    /** @type {{ todos: ArrayConstructor, title: StringConstructor }} */
    props: {
        todos: Array,
        title: String,
    },
    
    /** @return {{currentTag: string}} */
    data() {
        return {
            currentTag: 'all'
        };
    },
    
    computed: {
        /** @return {Array<Object>} */
        filteredTodos() {
            if (this.currentTag === 'all') {
                return this.todos;
            }
            
            return this.todos.filter(todo => todo.tag === this.currentTag);
        } ,
    }
}
