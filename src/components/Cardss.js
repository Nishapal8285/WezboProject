import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import "./components/navbar";
import { FcApproval, FcGraduationCap, FcSportsMode,FcLike, FcSms, FcVoicePresentation } from "react-icons/fc";
// import { FontAwesomeIcon } from "react-icons/fa";BiShareAlt
import { BiShareAlt, BiDotsHorizontalRounded } from "react-icons/bi";

function Cardss() {
  return (
    <div className="App">
      <section>
        <div style={{ width: "50rem", marginLeft: "20%" }}>
          <h1 style={{ fontSize: "25px", marginTop: "30px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </h1>
          <Button
            style={{ fontSize: "15px", marginTop: "25px" }}
            variant="dark"
          >
            Lets Build Website!
          </Button>
        </div>
      </section>
      <Card style={{ width: "33rem", marginLeft: "32%", marginTop: "40px" }}>
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1610465299993-e6675c9f9efa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wJTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        />
        {/* <Card.Body>
        
        
      </Card.Body> */}
      </Card>
      <section>
        <div style={{ width: "50rem", marginLeft: "20%" }}>
          <h1 style={{ fontSize: "20px", marginTop: "30px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </h1>
          <h3 style={{ fontSize: "15px", marginTop: "30px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </h3>
        </div>
      </section>

      <section
        style={{ marginTop: "40px", backgroundColor: "#d6d4ce", height: 380 }}
      >
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h2 style={{ fontSize: "23px", marginTop: "20%" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </h2>
              <h4 style={{ fontSize: "15px", marginTop: "30px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy.
              </h4>
            </div>
            <div
              class="col-sm-6"
              style={{ marginTop: "22px" }}
            >
              <img style={{width:"27rem"}}
                src="https://mir-s3-cdn-cf.behance.net/projects/404/124d12157752087.Y3JvcCwxODQxLDE0NDAsNDEsMA.jpg"
                alt="laptop"
              />
              {/* <div  style={{  marginTop:"-10px", position:"absolute", width:"10px", height: 20 }}>
              <img src="https://images.unsplash.com/photo-1610465299993-e6675c9f9efa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wJTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
            </div> */}
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "gray", height: 230 }}>
        <div class="container">
          <div class="row" style={{ display: "flex" }}>
            <div
              class="column"
              style={{
                float: "left",
                width: "33.33%",
                padding: "10px",
                height: "50px",
              }}
            >
              <img
                style={{ width: "200px", marginTop: "33px",height: "150px" }}
                src="https://images.unsplash.com/photo-1493119508027-2b584f234d6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bGFwdG9wJTIwY29kZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt="laptop"
              />
            </div>
            <div
              class="column"
              style={{
                fontSize: "15px",
                width: "33.33%",
                padding: "10px",
                height: "50px",
              }}
            >
              <h2
                style={{
                  fontSize: "20px",
                  marginTop: "50px",
                  marginLeft: "40px",
                  width: "300px",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </h2>
              <Button
                style={{ fontSize: "15px", marginTop: "25px" }}
                variant="dark"
              >
                CTA BUTTON
              </Button>
            </div>
            <div
              class="column"
              style={{
                float: "left",
                width: "33.33%",
                padding: "10px",
                height: "100px",
              }}
            >
              <img
                style={{ width: "200px", marginTop: "33px", height:"150px" }}
                src="https://i.pinimg.com/originals/b0/22/3a/b0223a39ba5994082bcd3963c9e0d445.jpg"
                alt="laptop"
              />
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#d9d8d4", height: 560 }}>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1 style={{ marginTop: "40px", marginBottom: "20px" }}>
                Lorem ipsum dolor sit amet.
              </h1>
              <h4 style={{ fontSize: "15px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry Lorem Ipsum has been the industry's standard dummy.
              </h4>
              <h2>Lorem ipsum dolor sit amet.</h2>

              <h4 style={{ fontSize: "15px", marginLeft: "53px" }}>
                <FcApproval style={{ fontSize: "30px" }} />
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </h4>
              <h2>Lorem ipsum dolor sit amet.</h2>
              <h4 style={{ fontSize: "15px", marginLeft: "53px" }}>
                <FcGraduationCap style={{ fontSize: "30px" }} /> Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy.
              </h4>
              <h2>Lorem ipsum dolor sit amet.</h2>
              <h4 style={{ fontSize: "15px", marginLeft: "53px" }}>
                <FcSportsMode style={{ fontSize: "30px" }} /> Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy.
              </h4>
              <Button
                style={{
                  fontSize: "15px",
                  marginTop: "30px",
                  marginLeft: "0px",
                }}
                variant="dark"
              >
                CTA BUTTON
              </Button>
            </div>

            <div class="col-sm-6" style={{ marginTop: "80px" }}>
              <img style={{width:"30rem", height:"400px"}}
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&w=1000&q=80"
                alt="laptop"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <section  style={{ backgroundColor: "gray", height: 230}}>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>

      </section> */}
      <section style={{ backgroundColor: "gray", height: 550 }}>
        <div class="container">
          <div class="row" style={{ display: "flex" }}>
            <h2 style={{ fontSize: "25px", marginTop: "32px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit Maxime
              mollitia.
            </h2>
            <div
              class="column"
              style={{
                float: "left",
                width: "33.33%",
                padding: "10px",
                height: "50px",
              }}
            >
              <Card
                style={{
                  width: "18rem",
                  marginTop: "20px",
                  borderRadius: "50px 0px",
                }}
              >
                <Card.Img
                  style={{ borderRadius: "50px 0px" }}
                  variant="top"
                  src="https://mir-s3-cdn-cf.behance.net/projects/404/124d12157752087.Y3JvcCwxODQxLDE0NDAsNDEsMA.jpg"
                />
                <Card.Body>
                  <Card.Title>HP Laptop</Card.Title>
                  <Card.Text>
                  Quaerat provident commodi consectetur veniam similique ad 
earum omnis ipsum saepe.
                  </Card.Text>
                  <Button variant="outline-dark">Click here</Button>
                </Card.Body>
              </Card>
            </div>
            <div
              class="column"
              style={{
                fontSize: "15px",
                width: "33.33%",
                padding: "10px",
                height: "50px",
              }}
            >
              <Card
                style={{
                  width: "18rem",
                  marginTop: "20px",
                  borderRadius: "50px 0px",
                }}
              >
                <Card.Img
                  style={{ borderRadius: "50px 0px" }}
                  variant="top"
                  src="https://mir-s3-cdn-cf.behance.net/projects/404/124d12157752087.Y3JvcCwxODQxLDE0NDAsNDEsMA.jpg"
                />
                <Card.Body>
                  <Card.Title>Dell Laptop</Card.Title>
                  <Card.Text>
                  Quaerat provident commodi consectetur veniam similique ad 
earum omnis ipsum saepe.
                  </Card.Text>
                  <Button
                    variant="outline-dark"
                    style={{ borderRadius: "90px" }}
                  >
                    Click here
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div
              class="column"
              style={{
                float: "left",
                width: "33.33%",
                padding: "10px",
                height: "100px",
              }}
            >
              <Card
                style={{
                  width: "18rem",
                  marginTop: "20px",
                  borderRadius: "50px 0px",
                }}
              >
                <Card.Img
                  style={{ borderRadius: "50px 0px" }}
                  variant="top"
                  src="https://mir-s3-cdn-cf.behance.net/projects/404/124d12157752087.Y3JvcCwxODQxLDE0NDAsNDEsMA.jpg"
                />
                <Card.Body>
                  <Card.Title>Lenovo Laptop</Card.Title>
                  <Card.Text>
                  Quaerat provident commodi consectetur veniam similique ad 
earum omnis ipsum saepe.
                  </Card.Text>
                  <Button
                    variant="outline-dark"
                    style={{ borderRadius: "90px" }}
                  >
                    Click here
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section style={{  height: 600,width:"100%" }}>
        <div class="container">
          <div class="row" style={{ display: "flex" }}>
            <div class="col-md-3" style={{backgroundColor:"black",marginTop:"30px"}}>
              <h2 style={{ fontSize: "23px", marginTop: "20%", color:"white" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h2>
              <h4 style={{ fontSize: "15px", marginTop: "30px", color:"white" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy.
              </h4>
              <Button
                variant="outline-dark"
                style={{
                  borderRadius: "90px",
                  marginTop: "20px",
                  backgroundColor: "white",
                  width: "150px",
                }}
              >
                Click here{" "}
              </Button>
            </div>
            
             <div
              class="col-sm-9"
              style={{
                marginTop: "30px",
                backgroundColor: "#d6d4ce",
                height: 550,
              }}
            >
              <div class="container">
          <div class="row" style={{ display: "flex" }}>
            
        
              <div class="col-md-3" style={{ height:550}}>

              <div style={{display:"flex", width:"20rem", backgroundColor:"#fcfaf2", margin:"5px 5px 5px 5px", borderRadius:"20px", marginTop:"57px"}}>
              <div class="col-sm-2" style={{width:"11rem"}}><h4>LOREM IPSUM</h4>
              <img style={{width:"7rem"}} src="https://png.pngitem.com/pimgs/s/71-710469_graph-png-download-image-business-growth-graph-transparent.png"/>
              </div>
              <div class="col-sm-2"><h4 style={{marginTop:"50px",width: "9rem", fontSize: "13px"}}>Lorem Ipsum is simply dummy text of the printing and . </h4></div>
            </div>
              <Card style={{ width: "20rem", marginLeft:"7%", marginTop: "50px" }}>
                <Card.Img style={{height:200}}
                  variant="top"
                  src="https://wallpapercrafter.com/desktop/229056-open-laptop-on-desk-displaying-programming-code-ne.jpg"
                />
                <Card.Body>
                 
                  <Card.Text>
                    <div style={{ display:"flex"}}>
                  <FcLike style={{marginLeft:"0px", marginRight:"6px", fontSize:"23px"}}/>
                  <FcSms style={{marginLeft:"0px", marginRight:"6px", fontSize:"23px"}} />
                  <FcVoicePresentation style={{marginLeft:"0px", marginRight:"6px", fontSize:"23px"}} />
                  <BiDotsHorizontalRounded style={{fontSize:"25px"}} />
                  <BiShareAlt style={{marginLeft:"60%", marginTop:"5px"}}/>
                  </div>
                  </Card.Text>
                  
                </Card.Body>
              </Card>
              </div>
              
               <div  class="col-md-6" style={{marginTop:"10px"}} >
              <Card style={{ width: "25rem", marginLeft:"53%", marginTop: "20px", }}>
                <Card.Img style={{height:440}}
                  variant="top"
                  src="https://wallpapercrafter.com/desktop/229056-open-laptop-on-desk-displaying-programming-code-ne.jpg"
                />
                <Card.Body>
                 
                  <Card.Text>
                    Lorem Lorem Lorem Lorem Lorem 
                  </Card.Text>
                  
                </Card.Body>
              </Card>
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        style={{ marginTop: "15px", backgroundColor: "#7a7667", height: 380 }}
      >
        <div class="container">
          <div class="row">
            <div class="col-md-6" style={{ marginTop: "30px" }}>
            <img
              src="https://mir-s3-cdn-cf.behance.net/projects/404/124d12157752087.Y3JvcCwxODQxLDE0NDAsNDEsMA.jpg"
              alt="laptop"
            />
            </div>
            <div
              class="col-sm-6"
              style={{ marginTop: "30px" }}
            >
              <h2 style={{ fontSize: "23px", marginTop: "15%", color:"black" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </h2>
              <h4 style={{ fontSize: "15px", marginTop: "30px", color:"black" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy.
              </h4>
              {/* <div  style={{  marginTop:"-10px", position:"absolute", width:"10px", height: 20 }}>
              <img src="https://images.unsplash.com/photo-1610465299993-e6675c9f9efa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wJTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
            </div> */}
            </div>
          </div>
        </div>
          </section>
    </div>
  );
}

export default Cardss;
