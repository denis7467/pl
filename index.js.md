<button onclick="toggleTheme()">Сменить тему</button>

<div id="themedText" style="padding: 10px; margin-top: 10px;">
  Это текст, чей цвет будет меняться.
</div>

<script>
function toggleTheme() {
  const el = document.getElementById("themedText");
  const isDark = el.style.backgroundColor === "black";
  el.style.backgroundColor = isDark ? "white" : "black";
  el.style.color = isDark ? "black" : "white";
}
</script>
