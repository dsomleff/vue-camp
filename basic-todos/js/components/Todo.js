export default {
    template: `
        <li>
                <label class="p-2 flex justify-between items-center">
                    {{todo.name}}

                    <input type="checkbox" v-model="todo.complete" class="ml-3">
                </label>
            </li>
    `,
    
    /** @type {{ todo: ObjectConstructor }} */
    props: {
        todo: Object
    }
}
