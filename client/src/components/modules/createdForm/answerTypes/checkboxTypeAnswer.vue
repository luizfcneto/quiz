<template>
  <div class="checkbox-type-answer">
    <label>Resposta em Caixa de Seleção:</label>
    <button @click="addOption">Adicionar Opção</button>
    <div v-for="(option, index) in checkboxOptions" :key="index">
      <input
        type="checkbox"
        :name="`checkboxQuestion-${uniqueId}`"
        :value="option"
        disabled
      />
      <input type="text" v-model="option.value" />
      <button @click="removeOption(index)" v-if="checkboxOptions.length > 1">
        Remover
      </button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'checkboxTypeAnswer',
    data() {
        return {
            checkboxOptions: [{ value: '' }],
            uniqueId: Math.random()
                .toString(36)
                .substr(2, 9)
        };
    },
    computed: {
        selectedOptions() {
            return this.checkboxOptions
                .filter(option => option.value !== '')
                .map(option => option.value);
        }
    },
    methods: {
        addOption() {
            this.checkboxOptions.push({ value: '' });
        },
        removeOption(index) {
            this.checkboxOptions.splice(index, 1);
        }
    }
};
</script>

<style scoped>
.checkbox-type-answer {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.checkbox-type-answer label {
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
}

.checkbox-type-answer button {
  margin-bottom: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.checkbox-type-answer button:hover {
  background-color: #0056b3;
}

.checkbox-type-answer div {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.checkbox-type-answer input[type="checkbox"] {
  margin-right: 10px;
}

.checkbox-type-answer input[type="text"] {
  flex: 1;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.checkbox-type-answer button:last-child {
  margin-left: 10px;
  background-color: #f44336;
}

.checkbox-type-answer button:last-child:hover {
  background-color: #d32f2f;
}
</style>
