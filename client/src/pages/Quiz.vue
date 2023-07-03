<template>
    <div class="quiz-container">
        <h1> Quiz Page </h1>
        <Form/>
        <Question/>
    </div>
</template>


<script>
import Form from "../components/modules/quiz/Form.vue";
import Question from "../components/modules/quiz/Question.vue";
export default {
    name: "Quiz",
    components: {
        Form, Question
    }
}
</script>


<style>
.quiz-container{
    background-color: #F6F1F1;
}

</style>