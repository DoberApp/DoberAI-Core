async function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const message = input.value;
  chatBox.innerHTML += `<div><strong>Ty:</strong> ${message}</div>`;
  input.value = "";

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR_API_KEY"
    },
    body: JSON.stringify({
      model: "gpt-4o",
      messages: [{ role: "user", content: message }]
    }),
  });

  const data = await response.json();
  const reply = data.choices?.[0]?.message?.content || "Brak odpowiedzi";
  chatBox.innerHTML += `<div><strong>DoberAI:</strong> ${reply}</div>`;
}