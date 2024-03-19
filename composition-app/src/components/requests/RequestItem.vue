<script>
export default {
    props:['email', 'message'],
    computed: {
        emailLink() {
            return 'mailto' + this.email;
        }
    }
}
</script>

<template>
    <li>
        <p>
            <a :href="emailLink">{{ email }}</a>
        </p>

        <p>
            {{ message }}
        </p>
    </li>
</template>

<style scoped src="../../../styles/request-item.css"></style>
