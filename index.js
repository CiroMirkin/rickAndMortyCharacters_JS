let nextUrl = ''
let prevUrl = ''

const getRickAndMortyCharacters = (done, url) => {
    const results = fetch(url || `https://rickandmortyapi.com/api/character/`)
    results.then(response => response.json()).then(data => {
        nextUrl = data.info.next || 'https://rickandmortyapi.com/api/character/'
        prevUrl = data.info.prev || 'https://rickandmortyapi.com/api/character/'
        done(data)
    })
}

const show = ({ info, results }) => {
    document.getElementById('characters').innerHTML = results.map(character => {
        return `<li><img src="${character.image}" alt="${character.name}" title="${character.name}" width="120px"></li>`
    }).join('')
}

getRickAndMortyCharacters(show)

document.getElementById('next').addEventListener('click', () => {
    getRickAndMortyCharacters(show, nextUrl)
})

document.getElementById('prev').addEventListener('click', () => {
    getRickAndMortyCharacters(show, prevUrl)
})
