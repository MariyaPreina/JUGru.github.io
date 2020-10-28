const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const submitButtons = document.querySelectorAll('[data-submit]')
const submitBtn = document.getElementById('submitBtn')
const overlay = document.getElementById('overlay')
const respond = document.getElementById('modal-subscribe-respond')
const inner = document.getElementById('modal-subscribe-inner')
const content = document.getElementById('modal-reject-content')
const feedback = document.getElementById('modal-reject-feedback')
const backwardSub = document.getElementById('backward-sub')
const backwardRej = document.getElementById('backward-rej')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
});

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
});

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
});

submitBtn.addEventListener('click', () => {
    inner.classList.add('hide')
    respond.classList.add('active')
    backwardSub.textContent = "На главную"
});

submitButtons.forEach(button => {
    button.addEventListener('click', () => {
        content.classList.add('hide')
        feedback.classList.add('active')
        backwardRej.textContent = "На главную"
    })
});

function openModal(modal) {
    if(modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if(modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}