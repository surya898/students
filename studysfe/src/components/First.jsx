import React from 'react';
import { useNavigate } from 'react-router-dom';

function First() {
  const navigate = useNavigate();

  const containerStyle = {
    position: 'relative',
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    color: 'white',
    textAlign: 'center',
  };

  const videoStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 1,
  };

  const videoOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3))',
    zIndex: 2,
  };

  const overlayStyle = {
    position: 'relative',
    zIndex: 3,
    padding: '80px 20px',
    fontFamily: "'Poppins', sans-serif",
    lineHeight: '1.6',
  };

  const headingStyle = {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    color: '#f5f5f5',
    textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)',
  };

  const paragraphStyle = {
    fontSize: '1.3rem',
    color: '#e0e0e0',
    maxWidth: '800px',
    margin: '10px auto',
    textShadow: '1px 1px 5px rgba(0, 0, 0, 0.5)',
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '15px 30px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    background: 'linear-gradient(to right, #007BFF, #00C6FF)',
    color: 'white',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    zIndex: 3,
  };

  const coursesSectionStyle = {
    padding: '50px 20px',
    backgroundColor: '#f7f7f7',
    color: '#333',
    textAlign: 'center',
  };

  const coursesHeadingStyle = {
    fontSize: '2.5rem',
    marginBottom: '30px',
    fontWeight: 'bold',
    color: 'black',
  };

  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  };

  const cardStyle = {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    maxWidth: '300px',
  };

  const contactSectionStyle = {
    padding: '50px 20px',
    backgroundColor: '#f1f1f1',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    minHeight: '100vh',
  };

  const contactFormStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '600px', 
    margin: '0 auto',
  };
  
  const inputStyle = {
    margin: '15px 0', 
    padding: '12px', 
    fontSize: '1.2rem', 
    borderRadius: '8px', 
    border: '1px solid #ccc', 
  };
  
  const submitButtonStyle = {
    marginTop: '20px',
    padding: '18px', 
    fontSize: '1.2rem',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    backgroundColor: '#28A745',
    color: 'white',
    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.3)', // Slightly bigger shadow for more emphasis
  };
  

  const growthSectionStyle = {
    padding: '60px 20px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  };

  const growthHeadingStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '50px',
  };

  const growthCardContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
  };

  const growthCardStyle = {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '30px 20px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '250px',
    width: '100%',
  };

  const growthCardIconStyle = {
    fontSize: '3rem',
    marginBottom: '15px',
    color: '#007BFF',
  };

  const growthCardStatStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    margin: '10px 0',
    color: '#333',
  };

  const growthCardTextStyle = {
    fontSize: '1rem',
    color: '#777',
  };

  const footerStyle = {
    backgroundColor: '#333',  
    color: 'white',           
    padding: '20px 0',
    textAlign: 'center',
  };

  const iconStyle = {
    fontSize: '2rem',
    marginRight: '10px',
    cursor: 'pointer',
  };

  const copyrightStyle = {
    fontSize: '1rem',
    color: '#bbb',
  };

  return (
    <div>
      <div style={containerStyle}>
        <video style={videoStyle} autoPlay loop muted>
          <source
            src="https://videos.pexels.com/video-files/3209298/3209298-sd_640_360_25fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div style={videoOverlayStyle}></div>
        <div style={overlayStyle}>
          <h1 style={headingStyle}>Welcome to the Student Study Portal</h1>
          <p style={paragraphStyle}>
            Your ultimate destination for learning, collaboration, and success.
          </p>
          <p style={paragraphStyle}>
            Explore courses, manage assignments, and ace your exams—all in one place!
          </p>
          <button style={buttonStyle} onClick={() => navigate('/log')}>
            Sign In
          </button>

          <button style={buttonStyle} onClick={() => navigate('/reg')}>
            Create Account
          </button>

        </div>
      </div>

      <section style={coursesSectionStyle}>
        <h2 style={coursesHeadingStyle}>Our Website Advantages</h2>
        <div style={cardContainerStyle}>
          {[ 
            {
              description: 'All Classes & Subjects Fliplearn digital learning caters to all the subjects of each class mapped as per academic curriculum. Every child can learn at his/her own pace and style.',
              image: 'https://media.istockphoto.com/id/1266722645/photo/african-american-boy-using-laptop-and-waving-during-video-call-while-homeschooling.webp?a=1&b=1&s=612x612&w=0&k=20&c=98Sd4-UelJhJR8OPAwhd0QkHV9M4ilk5gO41KfJo9eU=',
            },
            {
              description: 'Simplified Learning Videos are the most effective tool for learning. Fliplearn helps students grasp concepts quicker with animations and 3D videos which makes the learning easy and fun.',
              image: 'https://media.istockphoto.com/id/2160438109/photo/primary-multiethnic-pupils-working-on-digital-tablet-with-teacher.webp?a=1&b=1&s=612x612&w=0&k=20&c=952cdh57TFkEIfPJc7xPf54eDSKRpbM17zjWTRLl5hw=',
            },
            {
              description: 'Access Anytime, Anywhere Students can enjoy 24X7 access to our content with mobile phones, tablets, laptops and desktops. Your child’s learning won’t be stopped irrespective of the location.',
              image: 'https://plus.unsplash.com/premium_photo-1683736986776-97b7703bed6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wJTIwc3R1ZHl8ZW58MHx8MHx8fDA%3D',
            },
          ].map((course, index) => (
            <div key={index} style={cardStyle}>
              <img
                src={course.image}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '10px',
                  marginBottom: '15px',
                }}
              />
              <p>{course.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={growthSectionStyle}>
        <h2 style={growthHeadingStyle}>We Are Growing Every Day</h2>
        <div style={growthCardContainerStyle}>
          <div style={growthCardStyle}>
            <div style={growthCardIconStyle}>
              <span role="img" aria-label="happy users">😊</span>
            </div>
            <h3 style={growthCardStatStyle}>3,211,537</h3>
            <p style={growthCardTextStyle}>Happy Users</p>
          </div>
          <div style={growthCardStyle}>
            <div style={growthCardIconStyle}>
              <span role="img" aria-label="question paper">📄</span>
            </div>
            <h3 style={growthCardStatStyle}>1,630,343</h3>
            <p style={growthCardTextStyle}>Questions Practiced</p>
          </div>
          <div style={growthCardStyle}>
            <div style={growthCardIconStyle}>
              <span role="img" aria-label="play button">▶️</span>
            </div>
            <h3 style={growthCardStatStyle}>61,038,053</h3>
            <p style={growthCardTextStyle}>Videos Viewed</p>
          </div>
          <div style={growthCardStyle}>
            <div style={growthCardIconStyle}>
              <span role="img" aria-label="thought bubble">💭</span>
            </div>
            <h3 style={growthCardStatStyle}>131,664</h3>
            <p style={growthCardTextStyle}>Doubts Solved</p>
          </div>
        </div>
      </section>

      <section style={contactSectionStyle}>
        <h2 style={coursesHeadingStyle}>Contact Us</h2>
        <form style={contactFormStyle}>
          <input type="text" placeholder="Your Name" style={inputStyle} />
          <input type="email" placeholder="Your Email" style={inputStyle} />
          <textarea placeholder="Your Message" rows="5" style={inputStyle}></textarea>
          <button type="submit" style={submitButtonStyle}>
            Send Message
          </button>
        </form>
      </section>

      <footer style={footerStyle}>
        <div>
          <span style={iconStyle}>
            <i className="fab fa-youtube" style={{ marginRight: '10px' }}></i>
            <i className="fab fa-instagram" style={{ marginRight: '10px' }}></i>
            <i className="fab fa-facebook"></i>


          </span>
        </div>
        <p style={copyrightStyle}>
          &copy; 2025 Your Website. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default First;
