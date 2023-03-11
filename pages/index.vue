<template>
  <div>
    <p>
      <NuxtLink :to="localePath('login')">To login page</NuxtLink>
    </p>
    <p>
      <button @click="$i18n.setLocale('nl')">Language NL</button>
      <button @click="$i18n.setLocale('en')">Language EN</button>
    </p>
  </div>
</template>

<script setup>
const localePath = useLocalePath();
const { locale } = useI18n();
</script>
