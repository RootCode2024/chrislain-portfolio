<template>
  <div class="flex flex-wrap md:flex-nowrap space-x-4">
        <button v-for="(data, index) in datas.socials" :key="index">
          <a :href="data.link" target="_blank">
            <img
            class="h-6 w-6 "
            :src="data.icon"
            :alt="data.title"
          />
          </a>
        </button>
    </div>
</template>

<script setup>
  import datas from './../data/portfolio.json'

</script>
