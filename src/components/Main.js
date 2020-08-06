import PropTypes from 'prop-types'
import React from 'react'
import aboutme from '../images/aboutme.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Me</h2>
         
          <p>
            Hello developers and recruiters, 
          </p>
          <p>  
            My name is Kynda Loyola and I am a junior fullstack developer.Here is a quick non-tech about me paragraph.
          </p>
          <p>
            If I did an ethnicity test the results would be scattered all around the world.I 
            am know for my extreme diversity.I am an italian in short raised in a resort in egypt
            which has a max internet speed of 9.1 Mb/s and an average speed of 2.36 Mb/s I have no 
            idea how I became a developer.Fun fact I spent most of my time in egypt with horses. I 
            am a professional horse rider, I started horse riding at the age of 3 and show jumping 
            at the age of 7.I am a developer now so that skill went down the drain.Here is another
            fun fact, I am the only tech freak in the family, I am the granddaughter of a very famous 
            Jordanian artist <a href="https://en.wikipedia.org/wiki/Muhanna_Al-Dura">Mohanna Durra </a>
            I am the daughter of an amazing woman who spends her life saving dogs and cats in Egypt 
            and re-homing them all around the world.I guess you're all wondering why the "Hyperactive developer", 
            well the answer is very simple I was diagnosed with ADHD a learning disability when I started university 
            and ever since then my life started falling into place. To learn more about the advantages of 
            ADHD<a href="https://www.healthline.com/health/adhd/benefits-of-adhd#1"> Click Here </a>.
          </p>
          <p>
            I guess After you've read the non tech related paragraph you must be wondering how I ended up 
            being a developer ? Well ladies and gentlemen here comes the answer: 
          </p>
          <p>
          My incredible motor skills and my ADHD made me a very curious child.I Use to un-assemble
          almost everything around the house and I started to develop a skill in fixing anything tech-related.
          I became the family's technician specifically my grandfather's.I would spend most of my days fixing the
          most random things from Tvs to toasters to phones.This passion lead me to my curiosity about 
          how computers work and thats how I fell in love with the developer world.I started learning about 
          the internet developed some HTML skills here and there and now I am a student at the University of Westminster
          studying Computer Science Bsc Hons , with a predicted 1st class honors degree. 
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
          </span>
          <p>
           You can View my work on github <a href='https://github.com/thehyperactivedeveloper'>thehyperactivedeveloper</a>
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">What I can do</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
           My previous experiences are as follows:
          </p>
          <ul>
            <li>JAVA</li>
          </ul>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
