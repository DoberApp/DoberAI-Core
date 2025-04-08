async function sendMessage() {
  const webhookUrl = 'https://hook.us2.make.com/snayj35o4qx7393upsov8gs13k8kwfb8';
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const message = input.value;

  // Wyświetl wiadomość użytkownika
  chatBox.innerHTML += `<div><strong>Ty:</strong> ${message}</div>`;
  input.value = "";

  // Wyślij wiadomość do webhooka (Make.com)
  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ command: message })
    });

    const data = await response.json();
    const reply = data.reply || "Brak odpowiedzi";
    chatBox.innerHTML += `<div><strong>DoberAI:</strong> ${reply}</div>`;
  } catch (error) {
    console.error("Błąd:", error);
    chatBox.innerHTML += `<div><strong>DoberAI:</strong> Wystąpił błąd połączenia</div>`;
  }
}