export default {
    template: `
        <form @submit.prevent="add">
            <div class="border border-gray-600 text-black flex">
                <input v-model="newTodo" placeholder="New Todo..." class="p-2 w-full">
                <button type="submit" class="bg-white p-2 border-l">Add</button>
            </div>
        </form>
    `,
    
    /** @return {{newTodo: string}} */
    data() {
        return {
            newTodo: ''
        }
    },
    
    methods: {
        add() {
            this.$emit('add', this.newTodo);
            
            this.newTodo = '';
        }
    }
}
