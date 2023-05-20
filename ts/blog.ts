let counterComment = 2;

function deleteComment(index: number) {
  const targetComment = document.getElementById(`comment-${index}`);
  if (targetComment) {
    targetComment.remove();
    alert("Comment has deleted");
  }
}

window.addEventListener("load", () => {
  const commentForm = document.getElementById(
    "comment-form"
  ) as HTMLFormElement | null;
  if (commentForm) {
    commentForm.addEventListener("submit", (ev) => {
      ev.preventDefault();
      const inputFullname = document.getElementById(
        "input-fullname"
      ) as HTMLInputElement | null;
      const inputMessage = document.getElementById(
        "input-message"
      ) as HTMLInputElement | null;

      if (inputFullname && inputMessage) {
        if (inputFullname.value.length > 0 && inputMessage.value.length > 0) {
          const latestCommentEl = document.getElementById("latest-comments");
          if (latestCommentEl) {
            counterComment++;
            const commentItem = document.createElement("div");
            commentItem.id = `comment-${counterComment}`;
            commentItem.innerHTML = `
            <div>${inputFullname.value}</div>
            <div>
              <div>${inputMessage.value}</div>
              <button onclick="deleteComment(${counterComment})">Hapus</button>
            </div>            
            `;
            latestCommentEl.append(commentItem);
            commentForm.reset();
            alert("Success to send a comment");
          }
        } else {
          alert("Please fill all form input !");
        }
      }
    });
  }
});
