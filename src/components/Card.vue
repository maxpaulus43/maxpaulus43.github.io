<template >
    <div class="card">
        <slot/>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.card {
    display: flex;
    justify-content: space-around;
    transition: transform .2s; /* Animation */
    box-shadow: 0 2px 4px gray;
    padding: 10px 15px;
    margin-bottom: 10px;
    background-color: white;
}

.card:hover {
    transform: scale(1.01);
}
</style>
