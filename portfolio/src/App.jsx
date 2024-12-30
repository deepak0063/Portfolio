import './App.css'

function App() {

  return (
    <>
     <div >
      <contianer className='main-container'>
          <div className='left-top'>
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h3>Front-End Developer</h3>
            <p>Deepak Kumar Thakur</p>
            <div className='icons'>
              <a href="#">
                <img src="https://cdn-icons-png.flaticon.com/256/4406/4406234.png" alt="" />
              </a>
              <a href="#">
                <img src="https://cdn-icons-png.flaticon.com/256/1051/1051377.png" alt="" />
              </a>
              <a href="#">
                <img src="https://cdn-icons-png.flaticon.com/256/5968/5968958.png" alt="" />
              </a>
              <a href="#">
                <img src="https://cdn-icons-png.flaticon.com/256/1384/1384014.png" alt="" />
              </a>
              <a href="#">
                <img src="https://cdn-icons-png.flaticon.com/256/1384/1384015.png" alt="" />
              </a>
            </div>
            <div className='straight-line1'></div>
                <div className='p-info'>
                  <p>Age: <span className='age-in-age'>23</span> </p>
                  <p>Residence: <span className='text-in-text'>IND</span> </p>
                  <p>Freelance: <span className='available-in-freelance'>Available</span></p>
                  <p>Address: <span className='add'>Delhi,India</span> </p>
                </div>
                <div className='straight-line'></div>
                <div className='languages'>
                  <h3>Languages</h3>
                  <p>English
                  <div className='straight-line-english'></div>
                  </p>
                  <p>Hindi
                  <div className='straight-line-english'></div>
                  </p>
                </div>
                <div className='skills'>
                    <h3>Skills
                    </h3>
                    <p>HTML
                    <div className='straight-line-english'></div>
                    </p>
                    <p>CSS
                    <div className='straight-line-english'></div>
                    </p>
                    <p>Js
                    <div className='straight-line-english'></div>
                    </p>
                    <p>React
                    <div className='straight-line-english'></div>
                    </p>
                    <p>MySQL
                    <div className='straight-line-english'></div>
                    </p>
                </div>

                <div className='extra-skills'>
                    <h3>Skills</h3>
                    <p> <i className="bi bi-filetype-html"></i> HTML</p>
                    <p> <i className="bi bi-filetype-css"></i> CSS</p>
                    <p> <i className="bi bi-filetype-js"></i> Js</p>
                    <p> <i className="bi bi-filetype-sql"></i> MySQL</p>
                </div>

                <div className='download'>
                  <button>Download CV</button>
                </div>
          </div>

      <div className='middle-Body'>
          <div className='container'>
            <top className='middle-top'>
              <h3>I&apos;m Deepak Thakur <br /> <span className='color-Change'>Front-end</span> developer</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Aperiam doloribus ut commodi animi nobis <br /> laborum corrupti ab. Blanditiis, fugit sunt.</p>
              <button className='btn'>HIRE ME</button>
            </top>
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>

        <middle className='Middle-Middle' >
          <h3>My services </h3>
          <p id='para1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint commodi, <br /> ipsum fugit quaerat laboriosam tenetur dolorum, dolores odio enim, laborum </p> <p id='para2'>Lorem ipsum.</p>
        </middle>
        <div className='newpage'>
          <bottom className='cards'>

            <div className="card1">
                <img src="https://cdn-icons-png.flaticon.com/256/2010/2010957.png" alt="" />
                <h3>Web Development</h3>
                <p>Blog, E-commerce</p>
            </div>

            <div className="card2">
              <img src="https://cdn-icons-png.flaticon.com/256/10276/10276609.png" alt="" />
              <h3>UI/UX design</h3>
              <p>Mobile App, Website Design</p>
            </div>

            <div className="card3">
              <img src="https://cdn-icons-png.flaticon.com/256/1425/1425813.png" alt="" />
              <h3>Sound designing</h3>
              <p>Voice Over,Mixing,Sampling</p>
            </div>

            <div className="card4">
              <img src="https://cdn-icons-png.flaticon.com/256/674/674440.png" alt="" />
              <h3>Game Design</h3>
              <p>Character Design & Objects</p>
            </div>

            <div className="card5">
              <img src="https://cdn-icons-png.flaticon.com/256/461/461823.png" alt="" />
              <h3>Photography</h3>
              <p>Portrait, Product Photography</p>
            </div>

            <div className="card6">
              <h3>Advertising</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, magnam? Eveniet quaerat recusandae ratione nesciunt.</p>
              <a href="#">Order Now</a>
            </div>
          </bottom>
        </div>
      </div>
      </contianer>
      
     </div>
    </>
  )
}

export default App
