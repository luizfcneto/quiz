<template>
    <div class="form-container">
        <div class="form-header">
            <h1>Criar Formulário</h1>
            <div class="question-type">
                <label>Qual o tipo de resposta:</label>
                <div class="select-container">
                    <select v-model="selectedType">
                        <option
                            v-for="option in responseTypes"
                            :key="option.value"
                            :value="option.value"
                        >
                            {{ option.label }}
                        </option>
                    </select>
                    <div class="select-arrow"></div>
                </div>
                <label class="checkbox-container">
                    <input type="checkbox" v-model="responseIsRequired" />
                    Resposta Obrigatória
                </label>
            </div>
        </div>
        <div class="question-container">
            <div class="question-box">
                <label class="question-label">Pergunta:</label>
                <textarea class="question-textarea" v-model="questionText" />
            </div>
            <div class="answer-container">
                <component
                    :is="componentMap[selectedType]"
                    ref="answerComponent"
                />
            </div>
            <button class="add-question-btn" @click="addQuestion">
                Adicionar Pergunta
            </button>
        </div>
        <div class="questions-list" v-if="questions.length > 0">
            <h2>Perguntas Adicionadas:</h2>
            <div
                v-for="(question, index) in questions"
                :key="index"
                class="question-item"
            >
                <h3>{{ index + 1 }}. {{ question.text }}</h3>
                <p>Tipo de resposta: {{ question.type }}</p>
                <p>
                    Resposta Obrigatória:
                    {{ question.isRequired ? 'Sim' : 'Não' }}
                </p>
                <div
                    v-if="
                        question.type === 'radio' ||
                            question.type === 'checkbox'
                    "
                >
                    <p>Respostas:</p>
                    <ul>
                        <li
                            v-for="(answer, answerIndex) in question.answers"
                            :key="answerIndex"
                        >
                            <span class="enumAZ"
                                >{{ getLetter(answerIndex) }}.</span
                            >
                            {{ answer }}
                        </li>
                    </ul>
                </div>
                <button
                    class="remove-question-btn"
                    @click="removeQuestion(index)"
                ><!-- Botão para remover a pergunta -->
                    Remover
                </button>
                
            </div>
        </div>
    </div>
</template>

<script>
import TextAreaTypeAnswer from './answerTypes/textAreaTypeAnswer.vue';
import TextTypeAnswer from './answerTypes/textTypeAnswer.vue';
import RangeTypeAnswer from './answerTypes/rangeTypeAnswer.vue';
import RadioTypeAnswer from './answerTypes/radioTypeAnswer.vue';
import CheckboxTypeAnswer from './answerTypes/checkboxTypeAnswer.vue';

export default {
    name: 'CreatedQuestion',
    data() {
        return {
            selectedType: 'text',
            rangeValue: 50,
            responseTypes: [
                { label: 'Resposta Curta', value: 'text' },
                { label: 'Resposta Longa', value: 'textArea' },
                { label: 'Multipla Escolha', value: 'radio' },
                { label: 'Caixa de Seleção', value: 'checkbox' },
                { label: 'Resposta em Linha', value: 'range' }
            ],
            responseIsRequired: false, // Propriedade para controlar se a resposta é obrigatória
            questionText: '', // Texto da pergunta atual
            questions: [] // Array para armazenar as perguntas adicionadas
        };
    },
    components: {
        TextTypeAnswer,
        TextAreaTypeAnswer,
        RangeTypeAnswer,
        RadioTypeAnswer,
        CheckboxTypeAnswer
    },
    computed: {
        componentMap() {
            return {
                text: TextTypeAnswer,
                textArea: TextAreaTypeAnswer,
                range: RangeTypeAnswer,
                radio: RadioTypeAnswer,
                checkbox: CheckboxTypeAnswer
            };
        }
    },
    methods: {
        addQuestion() {
            if (this.questionText.trim() !== '') {
                const answerComponent = this.$refs.answerComponent;

                // Se a pergunta é de múltipla escolha ou caixa de seleção,
                // usamos a propriedade "selectedOptions" do componente
                // para obter as respostas adicionadas pelo usuário.
                const answers =
                    this.selectedType === 'radio' ||
                    this.selectedType === 'checkbox'
                        ? answerComponent.selectedOptions
                        : this.questionText;

                this.questions.push({
                    text: this.questionText,
                    type: this.selectedType,
                    isRequired: this.responseIsRequired,
                    answers // Armazenamos as respostas nesta propriedade
                });

                // Limpar o texto da pergunta após adicionar
                this.questionText = '';
            }
        },
        removeQuestion(index) {
            // Método para remover a pergunta do array com base no índice
            this.questions.splice(index, 1);
        },
        getLetter(index) {
            // Array com as letras do alfabeto (de A a Z)
            const letters = 'abcdefghijklmnopqrstuvwxyz';
            // Retorna a letra correspondente ao índice
            return letters[index];
        }
    }
};
</script>

<style scoped>
/* Estilos gerais do formulário */
.form-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f7f9fc; /* Nova cor de fundo */
    font-family: Arial, sans-serif;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

.form-header {
    text-align: center;
    margin-bottom: 20px;
}

.form-header h1 {
    font-size: 28px; /* Tamanho maior para o título */
    color: #333;
}

.question-type {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.question-type label {
    margin-right: 10px;
    font-weight: bold;
}

.checkbox-container {
    margin-left: 10px;
}

.question-container {
    background-color: #fff;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.questions-list {/* Estilos para a lista de respostas */
  margin-top: 30px;
}

.question-box {
    margin-bottom: 20px; /* Maior espaço entre a pergunta e a resposta */
}

.question-label {
    display: block;
    font-weight: bold;
    margin-bottom: 10px; /* Espaçamento menor abaixo da pergunta */
}

.question-textarea {
    width: 100%;
    min-height: 100px;
    padding: 10px; /* Espaçamento menor dentro da caixa de texto */
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
}

.questions-list {
    margin-top: 30px; /* Espaçamento maior acima da lista de perguntas */
}

.question-item {
    background-color: #fff;
    padding: 20px;
    margin-bottom: 15px; /* Espaçamento menor entre as perguntas */
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.answer-container {
    /* Estilos para a caixa de resposta (personalize conforme necessário) */
}

.add-question-btn {
    display: block;
    margin: 20px auto;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
}

.add-question-btn:hover {
    background-color: #0056b3;
}

/* Estilos para a lista de respostas */
ul {
    padding-left: 20px; /* Espaçamento para as respostas */
}

.enumAZ {
    font-weight: bold;
    margin-right: 5px; /* Espaçamento entre a letra e a resposta */
}
.question-item {
    position: relative; /* Adiciona posição relativa para posicionar o botão "Remover" */
}

.remove-question-btn {
    position: absolute;
    top: 15px; /* Espaçamento do topo */
    right: 15px; /* Espaçamento da direita */
    padding: 5px 10px;
    background-color: #dd5249; /* Vermelho leve */
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
}

.remove-question-btn:hover {
    background-color: #db1a1a; /* Tom mais escuro ao passar o mouse */
}

.select-container {
    position: relative;
}

select {
    appearance: none; /* Remove o estilo padrão da caixa de seleção */
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: #fff;
    padding: 10px 30px 10px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    color: #333;
    cursor: pointer;
    width: 100%;
}

/* Estilizando a seta da caixa de seleção */
.select-arrow {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid #333;
    pointer-events: none; /* A seta não recebe eventos do mouse */
}

/* Alterando a cor do fundo quando a caixa de seleção é aberta */
select:focus {
    outline: none;
    background-color: #f0f0f0;
}

/* Alterando a cor do fundo ao passar o mouse */
select:hover {
    background-color: #e0e0e0;
}

/* Estilizando as opções da caixa de seleção */
option {
    background-color: #fff;
    color: #333;
    padding: 10px;
}

/* Alterando a cor de fundo ao passar o mouse nas opções */
option:hover {
    background-color: #f0f0f0;
}
</style>
