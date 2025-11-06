function initializeDropMenu() {
    const allButtons = document.querySelectorAll('.drop-list > p');
    const allList = document.querySelectorAll('.drop-list > ul');
    const listItems = document.querySelectorAll('.drop-list > ul > li');
    function chooseListItem(event) {
        const targetButton = allButtons[0];
        const clickedItem = event.currentTarget;
        textItem = clickedItem.textContent;
        targetButton.textContent = textItem;
        clickedItem.parentElement.classList.remove('active'); // parentElement повертається до батьківського елемента
        listItems.forEach(i => i.classList.remove('chosen'));
        clickedItem.classList.add('chosen');
    }                                                                                                        
    function toggleDropMenu(clicked) {
        const clickedButton = clicked.currentTarget;
        const list = clickedButton.nextElementSibling;
        const isItActive = list.classList.contains('active');

        allButtons.forEach(b => b.classList.remove('active'));
        allList.forEach(l => l.classList.remove('active'));

        if (!isItActive) {
            list.classList.add('active');
            clickedButton.classList.add('active');
        }
    }

    allButtons.forEach(button => button.addEventListener('click', toggleDropMenu));
    listItems.forEach(item => item.addEventListener('click', chooseListItem));
}