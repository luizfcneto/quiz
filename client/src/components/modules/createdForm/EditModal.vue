<template>
    <div class="edit-modal" v-if="editedQuestionIndexProp !== -1">
        <div class="modal-content">
            <h2>Editar Pergunta</h2>
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
            <div class="modal-buttons">
                <button class="cancel-btn" @click="closeEditModal">
                    Cancelar
                </button>
                <button class="save-btn" @click="saveEditedQuestion">
                    Salvar
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
    name: 'EditModal',
    data() {
        return {
            editedQuestionIndexProp: -1, // Use uma propriedade local para armazenar o índice
            selectedType: '',
            responseIsRequired: false,
            questionText: '',
            responseTypes: [
                { label: 'Resposta Curta', value: 'text' },
                { label: 'Resposta Longa', value: 'textArea' },
                { label: 'Multipla Escolha', value: 'radio' },
                { label: 'Caixa de Seleção', value: 'checkbox' },
                { label: 'Resposta em Linha', value: 'range' }
            ]
        };
    },
    props: {
        editedQuestionIndexProp: Number, // Renomeie para evitar conflito com o método
        questions: Array, // Adicione esta propriedade para acessar as perguntas do componente pai
        isEditModalOpen: Boolean // Adicione essa propriedade
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
                text: 'TextTypeAnswer', // Substitua com os nomes corretos dos componentes
                textArea: 'TextAreaTypeAnswer',
                range: 'RangeTypeAnswer',
                radio: 'RadioTypeAnswer',
                checkbox: 'CheckboxTypeAnswer'
            };
        }
    },
    watch: {
        editedQuestionIndex(index) {
            this.editedQuestionIndexProp = index; // Atualize a propriedade local quando a prop é atualizada
        }
    },
    methods: {
        initializeEditedQuestionIndex(index) {
            this.$emit('update-edited-question-index', index);
            const question = this.questions[index];
            this.selectedType = question.type;
            this.responseIsRequired = question.isRequired;
            this.questionText = question.text;
            // Preencha a resposta, dependendo do tipo de pergunta (se houver)
            if (question.type === 'radio' || question.type === 'checkbox') {
                const answerComponent = this.$refs.answerComponent;
                answerComponent.selectedOptions = question.answers;
            } else {
                const answerComponent = this.$refs.answerComponent;
                answerComponent.clearSelectedOptions(); // Limpe as respostas selecionadas
            }
        },
        closeEditModal() {
            this.editedQuestionIndexProp = -1;
        },
        saveEditedQuestion() {
            if (this.editedQuestionIndexProp !== -1) {
                const question = this.questions[this.editedQuestionIndexProp];
                question.text = this.questionText;
                question.type = this.selectedType;
                question.isRequired = this.responseIsRequired;
                if (
                    this.selectedType === 'radio' ||
                    this.selectedType === 'checkbox'
                ) {
                    const answerComponent = this.$refs.answerComponent;
                    question.answers = answerComponent.selectedOptions;
                }
                this.closeEditModal();
            }
        }
    }
    // Restante das configurações, importações, etc.
};
</script>

<style scoped>
.edit-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 200;
}

.modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    min-width: 400px; /* Defina a largura do modal de acordo com suas preferências */
}

.modal-content h2 {
    font-size: 24px;
    margin-bottom: 10px;
}

.modal-buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
}

.cancel-btn,
.save-btn {
    padding: 10px 20px;
    margin-left: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
}

.cancel-btn {
    background-color: #ccc;
    color: #fff;
}

.save-btn {
    background-color: #007bff;
    color: #fff;
}

.cancel-btn:hover {
    background-color: #db1a1a;
}
.save-btn:hover {
    background-color: #0056b3;
}
</style>
