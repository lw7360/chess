function handleDragStart(e) {
    this.style.opacity = '0.999';
    dragSrcEl = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }

    e.dataTransfer.dropEffect = 'move';

    return false;
}

function handleDragEnter(e) {
    this.classList.add('over');
}

function handleDragLeave(e) {
    this.classList.remove('over');
}

function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    if (dragSrcEl != this) {
        dragSrcEl.innerHTML = "M";
        this.innerHTML = e.dataTransfer.getData('text/html');
    }

    return false;
}

function handleDragEnd(e) {
    [].forEach.call(squares, function (square) {
        square.classList.remove('over');
    });
}

var squares = document.querySelectorAll('#square');
[].forEach.call(squares, function(square) {
    square.addEventListener('dragstart', handleDragStart, false);
    square.addEventListener('dragenter', handleDragEnter, false);
    square.addEventListener('dragover', handleDragOver, false);
    square.addEventListener('dragleave', handleDragLeave, false);
    square.addEventListener('drop', handleDrop, false);
    square.addEventListener('dragend', handleDragEnd, false);
});