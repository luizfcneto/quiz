<template>
    <div class="radio-type-answer">
      <label>Resposta em Multipla Escolha:</label>
      <button @click="addOption">Adicionar Opção</button>
      <div v-for="(option, index) in radioOptions" :key="index">
        <input
          type="radio"
          :name="`radioQuestion-${uniqueId}`"
          :value="option"
          disabled
        />
        <input type="text" v-model="option.value" />
        <button @click="removeOption(index)" v-if="radioOptions.length > 1">
          Remover
        </button>
      </div>
    </div>
  </template>

<script>
export default {
    name: 'radioTypeAnswer',
    data() {
        return {
            radioOptions: [{ value: '' }],
            uniqueId: Math.random()
                .toString(36)
                .substr(2, 9)
        };
    },
    computed: {
        selectedOptions() {
            return this.radioOptions
                .filter(option => option.value !== '')
                .map(option => option.value);
        }
    },
    methods: {
        addOption() {
            this.radioOptions.push({ value: '' });
        },
        removeOption(index) {
            this.radioOptions.splice(index, 1);
        }
    }
};
</script>

<style scoped>
.radio-type-answer {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.radio-type-answer label {
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
}

.radio-type-answer button {
  margin-bottom: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.radio-type-answer button:hover {
  background-color: #0056b3;
}

.radio-type-answer div {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.radio-type-answer input[type="radio"] {
  margin-right: 10px;
}

.radio-type-answer input[type="text"] {
  flex: 1;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.radio-type-answer button:last-child {
  margin-left: 10px;
  background-color: #dd5249; /* Vermelho leve */
}

.radio-type-answer button:last-child:hover {
  background-color: #db1a1a; /* Tom mais escuro ao passar o mouse */
}
</style>