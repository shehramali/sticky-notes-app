note_i = 1;
var starred_note = []
var colors = ["blue", "red", "green", "purple", "pink", "yellow", "tomato"]
const addBtn = document.getElementById('add')
const show = document.querySelector('.show')
const fav = document.querySelector('.fav')



const notes = JSON.parse(localStorage.getItem('notes'))

if (notes) {
    notes.forEach(note => addNewNote(note))
}

addBtn.addEventListener('click', () => addNewNote())

function addNewNote(text = '') {
    const note = document.createElement('div')
    note.classList.add('note')
    note.setAttribute('id', "note_" + note_i)
    note.setAttribute('draggable', true)
    note.addEventListener('drag', function (e) {
        note.style.position = "absolute"
    })

    note.addEventListener('dragend', function (e) {
        var x = e.pageX
        var y = e.pageY
        note.style.left = (x - 30) + "px"
        note.style.top = (y - 30) + "px"
    })
    show.addEventListener('click', () => {
        note.classList.remove('hide')
        console.log('fjhsdfjdhjf')
    })

    note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
        <button class="star"><i class="fas fa-star"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>

    `

    const editBtn = note.querySelector('.edit')
    const deleteBtn = note.querySelector('.delete')
    const star = note.querySelector('.star')
    const main = note.querySelector('.main')
    const textArea = note.querySelector('textarea')
    let color = '#';
    color += Math.random().toString(16).slice(2, 8)
    note.style.backgroundColor = color

    star.addEventListener('click', () => {
        star.style.color = 'yellow'
    })
    function display() {
        setTimeout(() => {
            nte.classList.add('hide')
        }, 1000000000)
    }
    display()

    fav.addEventListener('click', () => {
        if (note.classList.contains = 'hide') {
            note.classList.remove('hide')
        } else {
            note.classList.add('hide')

        }
    })
    fav.addEventListener('click', () => {
        if (star.style.color != 'yellow') {
            note.classList.add('hide')
        }
    })

    textArea.value = text
    main.innerHTML = marked(text)

    deleteBtn.addEventListener('click', () => {
        note.remove()

        updateLS()
    })

    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    })

    textArea.addEventListener('input', (e) => {
        const { value } = e.target

        main.innerHTML = marked(value)

        updateLS()
    })

    document.body.appendChild(note)
    note.style.backgroundColor = colors[Math.random(Math.floor() * colors.length)]

}



function updateLS() {
    const notesText = document.querySelectorAll('textarea')

    const notes = []

    notesText.forEach(note => notes.push(note.value))

    localStorage.setItem('notes', JSON.stringify(notes))
}