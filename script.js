const { createApp, ref, computed } = Vue;

createApp({
    setup() {
        const newTask = ref('');
        const tasks = ref([]);

        // Добавление новой задачи
        const addTask = () => {
            if (newTask.value.trim() !== '') {
                tasks.value.push({
                    text: newTask.value.trim(),
                    completed: false
                });
                newTask.value = '';
            }
        };

        // Переключение статуса задачи (по клику на текст)
        const toggleComplete = (index) => {
            tasks.value[index].completed = !tasks.value[index].completed;
        };

        // Обновление статуса задачи (по чекбоксу)
        const updateTaskStatus = (index) => {
            // Этот метод вызывается автоматически благодаря v-model
            // Оставлен для возможной дополнительной логики
            console.log(`Задача ${index} обновлена: ${tasks.value[index].completed}`);
        };

        // Удаление задачи
        const removeTask = (index) => {
            tasks.value.splice(index, 1);
        };

        // Подсчет выполненных задач
        const completedCount = computed(() => {
            return tasks.value.filter(task => task.completed).length;
        });

        return {
            newTask,
            tasks,
            addTask,
            toggleComplete,
            updateTaskStatus,
            removeTask,
            completedCount
        };
    }
}).mount('#app');