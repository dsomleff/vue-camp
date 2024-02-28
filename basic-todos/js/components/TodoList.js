import Todo from "./Todo.js";
import TodoTags from "./TodoTags.js";
import Panel from "./Panel.js";

export default {
    components: {Todo, TodoTags, Panel},
    template: `
        <Panel v-show="todos.length" class="w-60">
            <div class="flex justify-between items-start">
                <h2 class="font-bold mb-2">
                    {{title}}
                    <span>({{ todos.length }})</span>
                </h2>
                
                <button v-show="canToggle" @click="$emit('toggle')">&times;</button>
            </div>
            
           <todo-tags
               v-model:currentTag="currentTag"
               :initial-tags="todos.map(todo => todo.tag)"
           ></todo-tags>
    
            <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
                <todo v-for="todo in filteredTodos" :key="todo.id" :todo="todo"></todo>
            </ul>

            <slot></slot>
            
            <template #footer>My footer</template>
        </Panel>
    `,
    
    /** @type {{ todos: ArrayConstructor, title: StringConstructor}} */
    props: {
        todos: Array,
        title: String,
        canToggle: { type: Boolean, default: false }
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
