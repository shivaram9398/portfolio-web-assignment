import {Component} from 'react'
import Contact from './components/Contact'
import Projects from './components/Projects'
import './App.css'

const details = {
  name: 'ShivaRam',
}

const startList = [
  {
    id: 1,
    description:
      'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
    name: 'Project Name',
    imgUrl:
      'https://res.cloudinary.com/dbo3k0tzb/image/upload/v1704427059/pexels-elly-fairytale-3823207_1_dx7i6f.png',
  },
  {
    id: 2,
    description:
      'What was your role, your deliverables, if the project was personal, freelancing.',
    name: 'Project Name',
    imgUrl:
      'https://res.cloudinary.com/dbo3k0tzb/image/upload/v1704434876/Rectangle_7_2_qxqgy6.png',
  },
  {
    id: 3,
    description:
      'You can also add in this description the type of the project, if it was for web, mobile, electron.',
    name: 'Project Name',
    imgUrl:
      'https://res.cloudinary.com/dbo3k0tzb/image/upload/v1704435057/Rectangle_7_1_hf6hze.png',
  },
]

const randomImg =
  'https://www.shutterstock.com/image-vector/car-having-small-size-convenient-260nw-1192676419.jpg'

class App extends Component {
  state = {
    intialList: startList,
    projectnameInput: '',
    projectLink: '',
    descriptionInput: '',
  }

  onchange = event => {
    this.setState({projectnameInput: event.target.value})
  }

  onchangeLink = event => {
    this.setState({projectLink: event.target.value})
  }

  onchangedescriptionInput = event => {
    this.setState({descriptionInput: event.target.value})
  }

  add = () => {
    const {intialList, projectLink, projectnameInput, descriptionInput} =
      this.state
    const newData = {
      name: projectnameInput,
      link: projectLink,
      description: descriptionInput,
      imgUrl: randomImg,
    }
    this.setState({intialList: [...intialList, newData]})
  }
  render() {
    const {intialList} = this.state
    console.log(intialList)
    return (
      <div className="page-container">
        <div className="main-container">
          <div>
            <div className="header">
              <p className="user-name">{details.name}</p>
              <div className="nav-bar">
                <a className="nav-item" href="#about">
                  About
                </a>
                <a className="nav-item" href="#projects">
                  Projects
                </a>
                <a className="nav-item" href="#contacts">
                  Contacts
                </a>
              </div>
            </div>

            <div className="intro-main-container" id="#about">
              <div className="intro-container">
                <p className="intro-heading">UI/UX Designer</p>
                <h1 className="intro-title">
                  Hello, my name is {details.name}
                </h1>
                <p className="intro-subheadline">
                  Short text with details about you, what you do or your
                  professional career. You can add more information on the about
                  page.
                </p>
                <div className="buttons-container">
                  <button className="project-button">
                    <a className="nav-item" href="#projects">
                      Projects
                    </a>
                  </button>
                  <button className="linkedin-button">Linkedin</button>
                </div>
              </div>
            </div>
            <div className="form-container">
              <div className="form-header">
                <h2 className="add-project">Add Project</h2>
                <hr className="bar-line" />
                <div className="input-box-container">
                  <div className="input-box">
                    <div className="input-container">
                      <label className="label-name">Project Name</label>
                      <input className="input" onChange={this.onchange} />
                    </div>
                    <div className="input-container">
                      <label className="label-name">Project Link</label>
                      <input className="input" onChange={this.onchangeLink} />
                    </div>
                    <div className="input-container">
                      <label className="label-name">Description</label>
                      <textarea
                        rows="5"
                        onChange={this.onchangedescriptionInput}
                      ></textarea>
                    </div>
                    <div className="add-btn-container">
                      <button className="add-button" onClick={this.add}>
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="vector-card"></div>
          </div>
          <div className="projects-container" id="projects">
            <div>
              <h2 className="add-project">Projects</h2>
              <hr className="bar-line" />
            </div>
            {intialList.map(each => (
              <Projects
                key={each.id}
                details={each}
                value={intialList.indexOf(each)}
              />
            ))}
          </div>
          <Contact />
        </div>
      </div>
    )
  }
}
export default App
