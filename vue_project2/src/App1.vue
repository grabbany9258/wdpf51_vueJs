<template lang="">
    <div>
        <h2 v-if="score>=8">score is {{score}}, Excellent</h2>
        <h2 v-else-if="score>=6">score is {{score}}, Good</h2>
        <h2 v-else>poor</h2>

        <hr>

    <ul v-if="seen">
        <li>Apple</li>
        <li>Orrange</li>
        <li>Mango</li>
    </ul>
    <hr>
    {{ok ? 'Yes': 'No'}}
    </div>
</template>
<script>
export default {
    data(){
        return{
            score:10,
            seen: true,
            ok:false
        }
    }
    
}
</script>
<style lang="">
    
</style>