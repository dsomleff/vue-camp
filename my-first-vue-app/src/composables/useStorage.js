import {ref, watch} from "vue";

export function useStorage(key) {
    let storedValue = localStorage.getItem(key);
    
    let val = ref(storedValue);
    
    function write() {
        if (val.value === '') {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, val.value);
        }
    }
    
    watch(val, write);
    
    return val;
}
