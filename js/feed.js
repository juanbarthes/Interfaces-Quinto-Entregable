document.addEventListener("DOMContentLoaded", initScript);

function initScript() {
    "use strict";
    /**
     * Variables
     */    
    //Constantes con los className de los iconos
    const likeIcon = "far fa-thumbs-up card-icon";
    const likeIconActive = "fas fa-thumbs-up card-icon";
    const dislikeIcon = "far fa-thumbs-down card-icon";
    const dislikeIconActive = "fas fa-thumbs-down card-icon";
    const commentIcon = "far fa-comment card-icon";
    const commentIconActive = "fas fa-comment card-icon";
    const shareIcon = "far fa-share-square card-icon";
    
    let cardIcons = [];

    let sharedConfirmation = document.querySelector(".share-alert");

    cardIcons = document.querySelectorAll(".card-icon");
    cardIcons.forEach(icon => {
        icon.addEventListener("click", (e) => {
            iconActivate(e)
        });
    });

    setTimeout(() => {
        document.querySelector("#loading-label").classList.add("hidden");
        document.querySelector("#sticky-top").classList.add("sticky-top");
    }, 1000);


    /**
     * Funciones
     */
    function iconActivate(event) {
        if ((event.target.className == commentIcon) || (event.target.className == commentIconActive)) {
            showComments(event.target, event.target.parentNode);
        } else {
            if (event.target.className == shareIcon) {
               let shareCount = event.target.parentNode.querySelector("span");
               let update = parseInt(shareCount.innerHTML) + 1;
               shareCount.innerHTML = update; 
                showSharedConfirmation() 
            } else {
                switchIcon(event.target);
            }
        }
    }

    function showComments(target, node) {
        let commentBox = node.parentNode.parentNode.querySelector(".comment-box");
        if (commentBox) {
            switchIcon(target);
            commentBox.classList.toggle("invisible");
        }
    }

    function switchIcon(node) {
        const className = node.className;
        switch (className) {
            case likeIcon:
                node.className = likeIconActive;
                updateInteractionCount(node, 1);
                break;
            case likeIconActive:
                node.className = likeIcon;
                updateInteractionCount(node, -1);
                break;
            case dislikeIcon:
                node.className = dislikeIconActive;
                updateInteractionCount(node, 1);
                break;
            case dislikeIconActive:
                node.className = dislikeIcon;
                updateInteractionCount(node, -1);
                break;
            case commentIcon:
                node.className = commentIconActive;
                break;
            case commentIconActive:
                node.className = commentIcon;
                break;

            default:
                break;
        }
    }

    function updateInteractionCount(node, number) {
        let count = node.parentNode.querySelector("span");
        let update = parseInt(count.innerHTML) + number;
        count.innerHTML = update;
    }

    function showSharedConfirmation() {
        sharedConfirmation.classList.toggle("hidden");
        setTimeout(() => {
            sharedConfirmation.classList.toggle("hidden");
        }, 2000);
    }
}