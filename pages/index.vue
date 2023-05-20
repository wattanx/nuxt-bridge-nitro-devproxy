<script setup lang="ts">
import { ref, computed } from "vue";
import { useHead, useLazyFetch } from "#imports";

useHead({
  title: "test",
});

const { data, pending } = useLazyFetch<{ name: string }>(
  "/api/v2/pokemon/ditto"
);
</script>

<template>
  <div>
    <div v-if="!pending && data">
      <p>{{ data.name }}</p>
    </div>
  </div>
</template>
