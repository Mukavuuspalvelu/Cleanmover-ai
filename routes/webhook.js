<div id="chatlog" style="padding:10px; border:1px solid #ccc; height:200px; overflow:auto; background:#fff;"></div>
<input type="text" id="chatinput" placeholder="Kysy jotain..." style="width:100%; padding:10px; margin-top:5px;">

<script>
async function askChatGPT(message) {
  const response = await fetch("https://cleanmover-ai.onrender.com/webhook", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message })
  });

  const data = await response.json();
  return data.reply || "❌ Ei vastausta saatu.";
}

document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("chatinput");
  const log = document.getElementById("chatlog");

  input.addEventListener("keypress", async function (e) {
    if (e.key === "Enter" && input.value.trim() !== "") {
      const userMessage = input.value.trim();
      log.innerHTML += `<div><strong>Asiakas:</strong> ${userMessage}</div>`;
      input.value = "";

      try {
        const reply = await askChatGPT(userMessage);
        log.innerHTML += `<div><strong style="color:green;">Mukavuuspalvelu ChatGPT:</strong> ${reply}</div>`;
        log.scrollTop = log.scrollHeight;
      } catch (error) {
        log.innerHTML += `<div><strong style="color:red;">Virhe:</strong> Yhteys epäonnistui.</div>`;
        console.error(error);
      }
    }
  });
});
</script>




