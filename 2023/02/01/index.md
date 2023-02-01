some file content (:

<script>
var userLang = navigator.language || navigator.userLanguage;
if (userLang === 'pt-BR') {
  window.location = '{{ "/pt/2023/02/01" | relative_url }}'
} else {
  window.location = '{{ "/en/2023/02/01" | relative_url }}'
}
</script>