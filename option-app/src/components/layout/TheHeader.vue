<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <header>
        <nav>
            <h1>
                <RouterLink :to="{name: 'home'}">
                    Find a Coach
                </RouterLink>
            </h1>

            <ul>
                <li>
                    <RouterLink to="/coaches">
                        List of Coaches
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="/requests">
                        Requests
                    </RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped src="../../../styles/header.css"></style>
