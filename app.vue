<script setup lang="ts">
const result = ref({
  lib: "unknown",
  nitro: "unknown",
  server: "unknown",
  cloudfare: "unknown",
});

const display = computed(() => [
  { name: "LIB", result: result.value.lib },
  { name: "NITRO", result: result.value.nitro },
  { name: "CLOUDFARE", result: result.value.cloudfare },
  { name: "SERVER", result: result.value.server },
]);

function getInfo() {
  $fetch("/api/ip").then((res) => {
    result.value = res;
  });
}
</script>

<template>
  <div class="page-root">
    <main id="main" class="page-container">
      <h1>Your Info</h1>

      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>

      <div class="deck">
        <button @click="getInfo">GET INFO</button>
      </div>

      <div class="deck">
        <div v-for="d in display" :key="d.name">
          <div>
            <em>{{ d.name }}</em>
          </div>
          <pre>{{ d.result }}</pre>
        </div>
      </div>
    </main>
  </div>
</template>

<style>
:root {
  color-scheme: dark only;
  color: hsl(100, 10%, 90%);
  font-family: system-ui, sans-serif;
  font-size: 15px;
}

.page-root {
  background: linear-gradient(to bottom, hsl(88, 15%, 10%), hsl(0, 0%, 5%));
  min-height: 100vh;
  padding: 40px;
  display: grid;
  place-items: center;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
}

:is(button, a) {
  padding: 8px 12px;
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: center;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  width: auto;
  height: auto;
  user-select: none;
  background-color: hsl(88, 25%, 10%);
  border: 1px solid hsl(88, 25%, 10%);
  transition: all 150ms ease;
  font-family: monospace;
  font-weight: 500;
  font-size: 0.85rem;
}

:is(button, a):is(:hover, :focus-visible) {
  border-color: hsl(88, 50%, 30%);
  outline: none;
}

:is(h2) {
  font-size: 1.5rem;
}

.deck {
  display: flex;
  padding: 8px;
  gap: 1rem;
  margin-top: 1rem;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
}

input {
  margin: 0.4rem;
}

label,
input {
  user-select: none;
  cursor: pointer;
}
</style>
