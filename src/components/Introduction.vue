<template>
    <div class="intro">
        <!-- Learn how to use images here: https://gridsome.org/docs/images -->
        <g-image alt="profile image" class="profile-image" src="~/assets/max_profile.png" width="150" />
        <div class="intro-description">
            <h2>Introduction</h2>
            <p>
                Hello and welcome to my website! This is where I plan to show off all the things I did and currently doing. 
                Hopefully you enjoy what I've done here. <span style="color:pink">TODO make this better</span>
            </p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.intro {
    display: flex;
    align-items: center;
}

.intro-description {
    padding: 0 10px;
}

@media all and (max-width: 500px) {
    .intro {
        display: flex;
        flex-flow: column nowrap;
    }
}

</style>
