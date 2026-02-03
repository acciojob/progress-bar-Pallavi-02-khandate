//your JS code here. If required.

    const progress = document.getElementById("progress");
    const circles = document.querySelectorAll(".circle");
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("prev");

    let currentActive = 1;

    nextBtn.addEventListener("click", () => {
      currentActive++;

      if (currentActive > circles.length) {
        currentActive = circles.length;
      }

      update();
    });

    prevBtn.addEventListener("click", () => {
      currentActive--;

      if (currentActive < 1) {
        currentActive = 1;
      }

      update();
    });

    function update() {
      // Activate circles
      circles.forEach((circle, index) => {
        if (index < currentActive) {
          circle.classList.add("active");
        } else {
          circle.classList.remove("active");
        }
      });

      // Update progress bar width
      const actives = document.querySelectorAll(".circle.active");

      progress.style.width =
        ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

      // Disable buttons
      if (currentActive === 1) {
        prevBtn.disabled = true;
      } else if (currentActive === circles.length) {
        nextBtn.disabled = true;
      } else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
      }
    }
 