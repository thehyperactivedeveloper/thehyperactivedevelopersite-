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
          You might be wondering why “The Hyperactive Developer”? 
          </p>
          <p>  
          Attention. Deficit. Hyperactive. Disorder. Also known as (ADHD).

          To some a disability, to me… a superpower. 

          ADHD gives the impression that focusing is a near impossible task, however ironically, when it comes to areas of interest, hyper-focus for long periods of time is one of the main symptoms of ADHD.

          Thus, my superpower
          </p>
          <p>
          My passion towards technology and the inner-workings of machines began since my youth; disassembling household gadgets, fixing broken appliances, becoming the family’s technician…

          This eventually directed my intuitive problem-solving skills to computers and coding, and I became infatuated with the developer world.
          </p>
          <p>
            I guess After you've read the non tech related paragraph you must be wondering how I ended up 
            being a developer ? Well ladies and gentlemen here comes the answer: 
          </p>
          <p>
          Now I am a student at the University of Westminster studying Bsc Computer Science, with a predicted 1st class honors degree.
          </p>
          <p>
          This was an unpredictably unlikely outcome being an Italian expat growing up in desert 
          Egypt where the average internet speed is 2.36 Mb/s. When I realized I wanted to become a developer, 
          I left to pursue high school and eventually university, abroad to give myself better educational opportunities 
          to start my career. Coming from a family of famous artists and animal rescuers with no background higher education 
          I was the black robotic sheep of the family, but I am grateful my drive and determination was always greatly
          supported to get me where I am today.
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
           
          </p>
          <ul>
            <li></li>
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
          <form method="post" name="contact" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="contact" value="contact" />
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
