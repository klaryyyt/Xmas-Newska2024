body {
    font-family: Satoshi, sans-serif;
    text-align: center;
    background: #f8f9fa;
    margin: 0;
    padding: 0;
  }


body::before {
  content: ""; /* Required for pseudo-elements */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://cdn.photoroom.com/v2/image-cache?path=gs://background-7ef44.appspot.com/backgrounds_v3/christmas/35_-_christmas.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
 /* opacity: 0.6; /* Only the background image has reduced opacity */
  z-index: -1; /* Places the pseudo-element behind the content */
}

  h1 {
  /*  margin-top: 40px;
  /*  color: #0c0c0c ;
  /*  text-shadow: 4px 4px 5px rgba(0, 0, 0, 0.5); /* Horizontal, Vertical, Blur Radius, Color */
  /*  color: white; /* Optional: Ensures the text is visible */
  margin-top: 40px;
  color: #f3f0f0; /* Black text */
  font-size: 48px; /* Large font size */
  font-weight: bold; /* Bold font */
  text-transform: uppercase; /* Make it uppercase */
  letter-spacing: 2px; /* Add space between letters */
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.7); /* Shadow for depth */
  padding: 10px 10px; /* Add padding around the text */
  }

  .calendar {
    display: grid;
    grid-template-columns: repeat(6, 100px);
    gap: 10px;
    justify-content: center;
    padding: 20px;
    
  }

  .day.current {
    background-color: #189e39; /* Green for current day */
    cursor: pointer; 
  }

  .day {
    background-color: #d3d3d3; /* Default for future days */
    color: #333;
    font-size: 24px;
    line-height: 100px;
    text-align: center;
   /* cursor: not-allowed; */
    border-radius: 5px;
  }

  .day.past {
    background-color: #581818; /* Orange for past days */
    cursor: pointer;
  }



  /* Modal Styles */
  .modal {
    display: none; /* Hidden by default */
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 600px;
    text-align: center;
  }

  .modal-content img {
    max-width: 100%;
    border-radius: 10px;
  }

  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
