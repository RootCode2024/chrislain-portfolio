import { ref, onMounted } from 'vue';

export default function useTheme() {
  const theme = ref('light');

  // Basculer entre light et dark
  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
    applyTheme();
    localStorage.setItem('theme', theme.value);
  };

  // Appliquer le thème à `document.body`
  const applyTheme = () => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme.value);
  };

  // Charger le thème au montage
  onMounted(() => {
    const storedTheme = localStorage.getItem('theme');
    theme.value = storedTheme || 'light';
    applyTheme();
  });

  return { theme, toggleTheme };
}
