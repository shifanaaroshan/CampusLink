const buttons =
document.querySelectorAll(
".search-categories button"
);

const resources =
document.querySelectorAll(
".search-resource"
);

buttons.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            buttons.forEach(btn => {
                btn.classList.remove(
                    "active-category"
                );
            });

            this.classList.add(
                "active-category"
            );

            let category =
                this.textContent
                    .toLowerCase();

            if (
                category ===
                "question papers"
            ) {
                category =
                    "question-paper";
            }

            resources.forEach(
                resource => {

                    if (
                        category === "all" ||
                        resource.dataset
                            .category === category
                    ) {

                        resource.style.display =
                            "flex";

                    } else {

                        resource.style.display =
                            "none";

                    }

                }
            );

        }
    );

});
