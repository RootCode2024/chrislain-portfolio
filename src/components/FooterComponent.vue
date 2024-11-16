<template>
  <footer class=" py-8">
    <div class="container mx-auto px-6">
      <!-- Footer Top -->
      <div class="flex flex-col lg:flex-row justify-between items-center">
        <!-- About Section -->
        <div class="mb-6 lg:mb-0 text-center lg:text-left">
          <h2 class="text-3xl font-bold mb-2">{{ $t('nickName') }}</h2>
          <p class="text-gray-800 dark:text-gray-100">{{ $t('sections.footer.description') }}</p>
        </div>

        <!-- Social Links -->
        <div class="flex space-x-6 mb-6 lg:mb-0">
          <a href="https://github.com/RootCode2024" target="_blank" class="text-gray-400 hover:text-white">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.5C6.753 2.5 2.5 6.753 2.5 12c0 4.956 3.23 9.177 7.643 10.635.561.103.765-.24.765-.53 0-.265-.01-1.019-.015-1.894-3.073.671-3.714-1.482-3.714-1.482-.5-1.27-1.224-1.607-1.224-1.607-.998-.681.075-.668.075-.668 1.105.078 1.68 1.134 1.68 1.134.98 1.674 2.567 1.19 3.195.91.1-.705.384-1.19.698-1.463-2.57-.294-5.28-1.285-5.28-5.713 0-1.263.45-2.3 1.19-3.11-.12-.294-.517-1.493.102-3.122 0 0 .97-.314 3.174 1.211a11.023 11.023 0 0 1 2.888-.388c.968 0 1.949.131 2.88.388 2.206-1.525 3.174-1.211 3.174-1.211.62 1.63.223 2.828.103 3.122.74.81 1.19 1.847 1.19 3.11 0 4.437-2.712 5.418-5.28 5.713.4.342.755 1.019.755 1.944 0 1.402-.015 2.538-.015 2.886 0 .29.205.636.765.528C20.77 21.177 24 16.956 24 12c0-5.247-4.253-9.5-9.5-9.5z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/chrislain-avocegan-314273315" target="_blank" class="text-gray-400 hover:text-white">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.23 0h-20.46C.75 0 0 .75 0 1.69v20.62C0 23.25.75 24 1.69 24h20.62c.94 0 1.69-.75 1.69-1.69V1.69c0-.94-.75-1.69-1.69-1.69zm-14.7 19.18H4.65v-10.5h2.88v10.5zm-1.44-11.91c-.93 0-1.68-.76-1.68-1.69s.75-1.69 1.68-1.69c.92 0 1.68.76 1.68 1.69s-.76 1.69-1.68 1.69zm13.77 11.91h-2.87v-5.58c0-1.33-.47-2.24-1.65-2.24-1.02 0-1.62.68-1.89 1.35-.1.25-.12.61-.12.97v5.45h-2.87v-10.5h2.87v1.41h.04c.4-.62 1.16-1.44 2.34-1.44 1.73 0 3.03 1.17 3.03 3.69v6.44z"/>
            </svg>
          </a>
          <a href="https://facebook.com/chrislain.avocegan.1/" target="_blank" class="text-gray-400 hover:text-white">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.672 0H1.328C.594 0 0 .594 0 1.328v21.344C0 23.406.594 24 1.328 24h11.89v-9.274h-3.03v-3.62h3.03v-2.672c0-3.142 1.874-4.897 4.798-4.897 1.398 0 2.773.103 3.14.142v3.417h-1.868c-1.464 0-1.883.697-1.883 1.812v2.478h3.766l-.49 3.62h-3.276V24h6.692c.734 0 1.328-.594 1.328-1.328V1.328C24 .594 23.406 0 22.672 0z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        <p>&copy; 2024 {{ $t('nickName') }}. {{ $t('sections.footer.copyright') }}</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Light mode text color */
.text-gray-400 {
  color: #cbd5e1;
}

/* Dark mode text color */
.dark .text-gray-400 {
  color: #e5e7eb;
}

/* Light mode background */
.bg-gray-800 {
  background-color: #2d3748;
}

/* Dark mode background */
.dark .bg-gray-800 {
  background-color: #1a202c;
}
</style>
