const btn = document.getElementById('addBtn');
btn.addEventListener(
    'click',
    ()=>{
        addNote();
    }
);
const main = document.querySelector('#main')
const addNote = (text = "")=>{
    const note = document.createElement('Div');
    note.classList.add('note');
    note.innerHTML = `
            <div class="tool">
                <button class="trash">&#128465</button>
            </div>
            <textarea>${text}</textarea>`

    note.querySelector(".trash").addEventListener(
        'click',
        function() {
            note.remove();
            saveNote();
        }
    );
    note.addEventListener(
        'focusout',
        ()=>{
            saveNote();
        }
    );
    main.appendChild(note);
}

const saveNote = ()=>{
    let data =[];
    const notes = document.querySelectorAll('.note textarea');
    for(i=0;i<notes.length;i++){
        data.push(notes[i].value);
    }
    localStorage.setItem('notes',JSON.stringify(data));
    console.log(localStorage.getItem('notes'));
}
const loadSite = ()=>{
    const notes = JSON.parse(localStorage.getItem('notes'));
    for(i=0;i<notes.length;i++){
        addNote(notes[i]);
    }
}
window.onload(loadSite());