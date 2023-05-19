<template>
    <div class="question-container">
        <p class="question-number">
            <b>Questão {{ questionNumber }} - {{ typeInput }}<span class="required">*</span>: </b>
        </p>
        <p class="question-description">
            {{ questionDescription }}
        </p>

        <!-- Input type: Radio Button, just showing when typeInput property comes with value 'radioButton' -->
        <div v-show="typeInput === 'radioButton'" class="radio-container">
            <div v-for="(option, index) in options">
                <input 
                    type="radio" 
                    class="" 
                    :id="'option-' + index" 
                    :value="option"
                    :name="'answer-question-' + questionNumber"
                    required>
                <label :for="'option-' + index">{{ option }}</label>
            </div>
        </div>

        <!-- Input type: Text Area, just showing when typeInput property comes with value 'textArea'-->
        <textarea 
            v-show="typeInput === 'textArea'" 
            class="question-answer" 
            placeholder="Escreva sua resposta aqui"
            name="answer-question-n" 
            maxlength="1500" 
            required>
        </textarea>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: "Question",
    props: {
        questionNumber: {
            type: Number,
            required: true
        },
        renderInput: {
            type: Boolean,
            required: true
        },
        typeInput: {
            type: String,
            required: true
        },
        questionDescription: {
            type: String,
            required: true
        },
        options: {
            type: Array,
            required: false
        }
    },
    data() {
        return {
            teste: false
        }
    },
    methods: {
        init() {
            console.log("Called init() method");
        }
    },
    created() {
        console.log("Created succesefuly...");
        this.init();
    }

})
</script>


<style scoped>
.question-container {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    margin: 1em auto;
}

p.question-number {
    margin-left: 0.2em;
    margin-bottom: 0.5em;
}

p.question-description {
    margin-left: 0.5em;
    margin-bottom: 2em;
    width: 100%;
    text-align: left;
}

.question-answer {
    padding: 0.2em;
    margin: 0.2em;
    width: 100%;
    height: 10em;
    border-width: 2px;
    border-radius: 5px;
}

.required {
    font-weight: bold;
    color: red;
}

.radio-container {
    display: flex;
    width: 100%;
    margin: 0.5em auto;
    justify-content: space-around;
}
</style>