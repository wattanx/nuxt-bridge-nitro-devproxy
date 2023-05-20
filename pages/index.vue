<script setup lang="ts">
import { useFetch, ref, computed } from '@nuxtjs/composition-api';
import { useHead, useLazyFetch } from '#imports';

useHead({
  title: 'test',
});

const { data } = useLazyFetch('/api/pokemon/ditto');
</script>

<template>
  <p>{{ data.name }}</p>
</template>
