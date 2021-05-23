function todo() {
  return {
    formTask: "",
    formTaskEdit: "dsdfsd",
    taskValid: true,
    modal: false,
    tasks: [
      { task: "Minha tarefa a ser feita", isConcluded: false },
      { task: "Finalizar sla", isConcluded: true },
    ],
    transition: {
      ["x-transition:enter"]() {
        return "transition ease-out duration-300";
      },
      ["x-transition:enter-start"]() {
        return "opacity-0 transform scale-90";
      },
      ["x-transition:enter-end"]() {
        return "opacity-100 transform scale-100";
      },
      ["x-transition:leave"]() {
        return "transition ease-in duration-300";
      },
      ["x-transition:leave-start"]() {
        return "opacity-100 transform scale-100";
      },
      ["x-transition:leave-end"]() {
        return "opacity-0 transform scale-90";
      },
    },

    add() {
      if (!this.formTask) return (this.taskValid = false);
      this.tasks.push({ task: this.formTask, isConcluded: false });
      this.taskValid = true;
      this.formTask = "";
    },

    conclude(index) {
      this.tasks[index].isConcluded = true;
    },

    reopen(index) {
      this.tasks[index].isConcluded = false;
    },

    edit(task, index, refBtnModal) {
      this.modal = true;
      this.formTaskEdit = task;
      refBtnModal.dataset.index = index;
    },

    saveEdit(refBtnModal) {
      const index = refBtnModal.dataset.index;
      this.tasks[index].task = this.formTaskEdit;
      this.modal = false;
    },

    cancelEdit() {
      this.modal = false;
    },

    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
  };
}
