import './index.css'

const Contact = () => {
  return (
    <div id="contacts">
      <div className="footer-container">
        <div className="footer-container2">
          <div className="icon-container">
            <img
              className="icon-insta"
              src="https://res.cloudinary.com/dbo3k0tzb/image/upload/v1704427243/insta_jzk28q.png"
            />

            <img
              className="icon"
              src="https://res.cloudinary.com/dbo3k0tzb/image/upload/v1704427358/bi_envelope-fill_pvzkza.png"
            />

            <img
              className="icon"
              src="https://res.cloudinary.com/dbo3k0tzb/image/upload/v1704427454/bi_linkedin_c1ddik.png"
            />
          </div>
          <p className="copy-right">Copyright © 2024. All rights reserved</p>
        </div>
      </div>
      <div className="vector-card"></div>
    </div>
  )
}
export default Contact
