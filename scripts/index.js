document.addEventListener('DOMContentLoaded', () => {
  const ingredientsDialog = document.querySelector("dialog#ingredients-dialog");
  const ingredientsBtn = document.querySelector("button#ingredients-btn");
  const ingredientsCloseBtn = document.querySelector("dialog#ingredients-dialog>button.close");
  
  ingredientsBtn.addEventListener("click", () => {
    document.body.classList.add("overflow-hidden");
    ingredientsDialog.showModal();
  });

  ingredientsCloseBtn.addEventListener("click", () => {
    document.body.classList.remove("overflow-hidden");
    ingredientsDialog.close();
  })
});