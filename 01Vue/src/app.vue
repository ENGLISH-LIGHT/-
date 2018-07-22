<template>
<div>
    Hello World {{name}}<br/>
    <input type="text" name="" id="" v-model="name">
    <ul>
        <li v-for="p in people">{{p.name}}</li>
    </ul>
    <pre>
        v-text - innerText
        v-html - innerHTML
        v-if
        v-show
        v-model
    </pre>
    <div v-text="people[0].name"></div>
    <div v-html="html"></div>
    <div style="height:100px;background-color:yellow;" v-if="isshow"></div>
    <div style="height:100px;background-color:blue;" v-bind:style="title" v-show="isshow"></div>
</div>
</template>

<script>
export default {
    data() {
        return {
            name: "light",
            people: [{
                name: "liang"
            }, {
                name: "xin"
            }],
            html:"<div style='width:50px;height:50px;background:red;'></div>",
            isshow:true,
            title:"height:100px;background-color:pink;" 
        }
    }
}
</script>

<style>

</style>
