import Todo from "./Todo.js";

export default {
    components: {Todo},
    template: `
              <section v-show="todos.length">
        <h2 class="font-bold mb-2">
            {{title}}
            <span>({{ todos.length }})</span>
        </h2>
        
        <div class="flex gap-2 ">
            <button @click="currentTag = tag" v-for="tag in tags" class="border rounded px-1 py-px text-xs">{{ tag }}</button>
        </div>

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
    
    /**
     * @return {{currentTag: string}}
     */
    data() {
        return {
            currentTag: ''
        };
    },
    
    computed: {
        filteredTodos() {
            return this.todos.filter(todo => todo.tag === this.currentTag);
        } ,
        
        /**
         * @return {Set<string|string|*>}
         */
        tags() {
            return new Set(this.todos.map(todo => todo.tag));
        }
    }
}
