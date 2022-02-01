import { hellopipeline1 } from "../../declarations/hellopipeline1";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with hellopipeline1 actor, calling the greet method
  const greeting = await hellopipeline1.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
