const Content = () => {
  return (
    <div>
      chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "addButton") {
    const replyFields = document.querySelectorAll(".public-DraftStyleDefault-block");
    replyFields.forEach((replyField) => {
      const button = document.createElement("button");
      button.innerText = "Populate Original Tweet"; // Replace with your button text
      button.style.cssText = `background-color: #428bca; color: white; padding: 5px 10px; border: none; border-radius: 3px; cursor: pointer;`;

      // Find the tweet element containing the original tweet text
      const tweetElement = replyField.closest(".public-DraftStyleDefault-block"); // Adjust selector if needed

      button.addEventListener("click", async () => {
        if (tweetElement) {
          const originalTweetText = tweetElement.querySelector(".TweetBody-body").innerText;

      // Get the reply input field
      const replyInput = replyField.querySelector("div[role='textbox']"); // Adjust selector if needed

      if (replyInput) {
        // Populate the reply input with the original tweet text
        replyInput.innerText = originalTweetText;
          } else {
        alert("Reply input field not found!");
          }
        } else {
        alert("Original tweet text not found!");
        }
      });

      replyField.appendChild(button);
    });
  }
});

    </div>
  )
}

export default Content