const triggerCount = ref(0);

function incrementCount() {
  triggerCount.value++;
}

export { incrementCount, triggerCount }
