import { GithubUser } from './githubUser.js'

// Classe que vai conter a lógica dos dados
// Como os dados serão estruturados
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
  }

  load() {
    this.entires = JSON.parse(localStorage.getItem('@github-favorites:')) || []
  }

  save() {
    localStorage.setItem('@github-favorites:', JSON.stringify(this.entires))
  }

  async add(username) {
    try {
      const userExisted = this.entires.find(entry => {
        return entry.login === username
      })

      if (userExisted) {
        throw new Error('Usuário já cadastrado')
      }

      const user = await GithubUser.search(username)

      if (user.login === undefined) {
        throw new Error('Usuário não encontrado')
      }

      this.entires = [user, ...this.entires]

      this.update()
      this.save()
    } catch (error) {
      alert(error)
    }
  }

  delete(user) {
    const filteredEntries = this.entires.filter(
      entry => entry.login !== user.login
    )

    this.entires = filteredEntries
    this.update()
    this.save()
  }
}

// Classe que vai criar a visualização e eventos do HTML
export class favoritesView extends Favorites {
  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector('table tbody')
    this.update()
    this.onadd()
  }

  update() {
    this.removeAllTr()

    this.entires.forEach(user => {
      const row = this.createRow()
      row.querySelector(
        '.user img'
      ).src = `https://github.com/${user.login}.png`

      row.querySelector('.user img').alt = `Imagem de ${user.name} no github`

      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user span').textContent = user.login
      row.querySelector('.user a').href = `https://github.com/${user.login}`
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers

      row.querySelector('.remove').onclick = () => {
        const isOk = confirm('Tem certeza que deseja excluir essa linha ?')

        if (isOk) {
          this.delete(user)
        }
      }

      this.tbody.append(row)
    })
  }

  onadd() {
    const addButton = document.querySelector('.search button')

    addButton.onclick = () => {
      const { value } = document.querySelector('.search input')

      this.add(value)
    }
  }

  createRow() {
    const tr = document.createElement('tr')

    tr.innerHTML = `
    <td class="user">
      <img
        src="https://github.com/thamirespieve.png"
        alt="Foto de perfil do github"
      />
      <a href="https://github.com/thamirespieve" target="_blank"">
        <p>Thamires Pieve</p>
        <span>thamirespieve</span>
      </a>
    </td>
    <td class="repositories">23</td>
    <td class="followers">2899</td>
    <td><button class="remove">&times;</button></td>
`

    return tr
  }

  removeAllTr() {
    this.tbody.querySelectorAll('tr').forEach(tr => {
      tr.remove()
    })
  }
}
