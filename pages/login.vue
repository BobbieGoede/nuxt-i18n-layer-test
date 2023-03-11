<template>
  <div>
    <p><NuxtLink :to="localePath('/')">Back</NuxtLink></p>
    {{ t('loginWelcome') }}
  </div>
  <p>
    <button @click="$i18n.setLocale('nl')">Language NL</button>
    <button @click="$i18n.setLocale('en')">Language EN</button>
  </p>
</template>

<script setup>
const localePath = useLocalePath();
const { t } = useI18n({
  messages: {
    en: {
      loginWelcome: 'Welcome, this is the login page.',
    },
    nl: {
      loginWelcome: 'Welkom, dit is de login pagina.',
    },
  },
});
</script>
