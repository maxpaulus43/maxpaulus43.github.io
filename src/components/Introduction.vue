<template>
    <div class="intro">
        <!-- Learn how to use images here: https://gridsome.org/docs/images -->
        <g-image alt="profile image" class="profile-image" src="~/assets/max_profile.png" />
        <div class="intro-description">
            <h2>Introduction</h2>
            <p>
                Hello and welcome to my website! This is where I plan to show off all the things I did and currently doing. 
                Hopefully you enjoy what I've done here.
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

.profile-image {
    border-radius: 50%;
    box-shadow: 2px 2px 4 gray;
}

@media all and (max-width: 500px) {
    .intro {
        display: flex;
        flex-flow: column nowrap;
    }
}

</style>
