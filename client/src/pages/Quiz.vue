<template>
    <div class="quiz-container">
        <h1> Quiz Page </h1>
        <Form></Form>
    </div>
</template>


<script>
import Form from "../components/modules/quiz/Form.vue";
export default {
    name: "Quiz",
    components: {
        Form
    }
}
</script>


<style>
.quiz-container{
    background-color: #F6F1F1;
}

</style>