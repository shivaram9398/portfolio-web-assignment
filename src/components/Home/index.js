import {Component} from 'react'
import './index.css'

const details = {
  name: 'ShivaRam',
}

const startList = [{fst: 's', sec: 'H'}]

class Home extends Component {
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

  func = () => {
    const {addingtoList, intialList} = this.state
    const addingtoList = () => {}
  }

  add = () => {
    const {intialList, projectLink, projectnameInput, descriptionInput} =
      this.state
    const newData = {
      projectname: projectnameInput,
      link: projectLink,
      description: descriptionInput,
    }
    this.setState({intialList: [...intialList, newData]}, this.func)
  }

  render() {
    return (
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
            <h1 className="intro-title">Hello, my name is {details.name}</h1>
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
    )
  }
}

export default Home
