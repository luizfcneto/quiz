<template>
    <form class="form-container">
        <Question 
            :type-input="'radioButton'" 
            :question-number="1" 
            :render-input="true" 
            :question-description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae suscipit tellus. Dignissim cras tincidunt lobortis feugiat vivamus at augue. Ac odio tempor orci dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae suscipit tellus. Dignissim cras tincidunt lobortis feugiat vivamus at augue. Ac odio tempor orci dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae suscipit tellus. Dignissim cras tincidunt lobortis feugiat vivamus at augue. Ac odio tempor orci dapibus. Sabendo disso, qual a sua fruta favorita?'"  
            :options="['Banana', 'Abacate', 'Jabuticaba', 'Acerola', 'Manga', 'Maçã']"></Question>

        <Question 
            :type-input="'textArea'" 
            :question-number="2" 
            :render-input="true" 
            :question-description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae suscipit tellus. Dignissim cras tincidunt lobortis feugiat vivamus at augue. Ac odio tempor orci dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae suscipit tellus. Dignissim cras tincidunt lobortis feugiat vivamus at augue. Ac odio tempor orci dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae suscipit tellus. Dignissim cras tincidunt lobortis feugiat vivamus at augue. Ac odio tempor orci dapibus. Sabendo disso, responda com suas palavras o que achou do curso ofertado'"></Question>

    </form>
</template>

<script>
import Question from "./Question.vue";
export default {
    name: "Form",
    components: {
        Question
    }
}
</script>

<style scoped>
.form-container {
    width: 50%;
    margin: 2em auto;
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    background-color: #F6FFDE;
}
</style>