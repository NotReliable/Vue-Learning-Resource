<template>
    <li>
        <h2> {{ name }} {{ isFavorite === '1' ? '(Favorite)' : '' }}</h2>
        <button @click="toggleDetails">{{ detailsAreVisible? 'Hide' : 'Show' }}</button>
    </li>
    <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ phoneNumber }}</li>
        <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
</template>

<script>
export default {
    props :[
        'name',
        'phoneNumber',
        'emailAddress',
        'favorite'
    ],
    data(){
        return{
            detailsAreVisible : false,
            friend : {
                id:'manuel',
                name : "Mauel Sam",
                phone : '01231 1313123 1231',
                email : 'manuel@gmail.com'
            }
        }
    },
    methods : {
        toggleDetails (){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
};
</script>