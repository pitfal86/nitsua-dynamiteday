import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  imageModal: {
    padding: '0.4rem',

    '& img': {
      maxWidth: '100%',
      height: 'auto',
      textAlign: 'center'
    },
  },
})

const ImagePage = (props) => {
  const classes = useStyles()

  return (
    <div>
      <div className="grid-container-weddinginfo">
        <div>
            <h2>{"Wedding Info"}</h2>
        </div>
        <div className={classes.imageModal}>
            <br />
            <label>{"Save the Date"}</label>
            <br />
            <img className={classes.imageInModal} src={"https://res.cloudinary.com/dz7kvpuzo/image/upload/v1611941753/dynamitedayphotos/savethedate_xfffzf.jpg"} />
        </div>
        <div className={classes.imageModal} style={{ padding: "20px" }}>
          <div>
            <a href="https://crookedwillowevents.com/" target="_blank"><label>{"Crooked Willow Events"}</label>
              <img className={classes.imageModal} src="https://crookedwillowevents.com/wp-content/uploads/2020/10/XanaduDaniel-Wedding-5-2-scaled.jpeg"></img>
            </a>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3091.427869222675!2d-104.9259952846404!3d39.21044717952371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876ca5cf7a2050d9%3A0xfec9d6cf2220db76!2sThe%20Venue%20at%20Crooked%20Willow%20Farms!5e0!3m2!1sen!2sus!4v1604933096307!5m2!1sen!2sus" style={{border : "0", width: "100%"}} allowFullScreen=""></iframe>
        </div>
      </div>
      <hr></hr>

      <div className="grid-container-weddingparty">
        <div>
            <h2>{"Bridesmaids"}</h2>
        </div>
        <div>
            <br />
            <label>{"Chelsey"}</label>
            <div className={classes.imageModal}>
              <img className={classes.imageModal} src={"https://res.cloudinary.com/dz7kvpuzo/image/upload/v1611979366/dynamitedayphotos/c4jjbcwq8wbl4oludek6.jpg"} />
            </div>
            <label style={{ padding: "10px" }}>
                {"Chelsey is Tori’s cousin and they are only 10 months apart in age. They have been best friends since childhood and Chelsey knows Tori better than anyone. Chelsey is a director of a Rocky Mountain HIDAA and lives with her two dauchsands, Reggie and Gertie. She is “Sherpa” to 7 nieces and nephews, and very active in her church life. She is the maid of honor!"}
            </label>
        </div>
        <div>
            <br />
            <label>{"Caitlin"}</label>
            <div className={classes.imageModal}>
              <img className={classes.imageModal} src={"https://res.cloudinary.com/dz7kvpuzo/image/upload/v1611981148/dynamitedayphotos/cait_02_vpcgro.jpg"} />
            </div>
            <label style={{ padding: "10px" }}>
                {"Caitlin is Tori’s cousin and three years older. They grew up down the street from each other and Caitlin used to drive Tori to school in high school. Caitlin is a nurse, and a role model for Tori in her life. She is married to Cason, a super cool dude, and has two amazing daughters, Annabelle and Olive, who are the flower girls for the wedding. Caitlin is a bridesmaid!"}
            </label>
        </div>
        <div>
            <br />
            <label>{"Kacey"}</label>
            <div className={classes.imageModal}>
              <img className={classes.imageModal} src={"https://res.cloudinary.com/dz7kvpuzo/image/upload/v1614807845/dynamitedayphotos/kacey_new_tm58gb.jpg"} />
            </div>
            <label style={{ padding: "10px" }}>
                {"Kacey is Tori’s best friend from work. They met 9 years ago when they both started working as CNAs on the same floor in the hospital they both currently still work for. Kacey is Tori’s best adventure buddy, always ready and willing to do anything and everything active. She is a stroke coordinator at a Comprehensive Stroke Center hospital and has two girls, Addie and Kendall. Her boyfriend Tony works at the same hospital. Kacey is a bridesmaid!"}
            </label>
        </div>
      </div>

      <hr></hr>

      <div className="grid-container-weddingparty">
        <div>
            <h2>{"Groomsmen"}</h2>
        </div>
        <div>
            <br />
            <label>{"Greg"}</label>
            <div className={classes.imageModal}>
              <img className={classes.imageModal} src={"https://res.cloudinary.com/dz7kvpuzo/image/upload/v1611984032/dynamitedayphotos/mpheaj7v4qcmebxzlw93.jpg"} />
            </div>
            <label style={{ padding: "10px" }}>
                {"Greg has been Thomas' friend the longest, but to avoid sounding old we'll not mention the exact years. Through thick and thin they've been through it all and for some reason Greg still answers the phone when Thomas calls. He's a great friend and person!"}
            </label>
        </div>
        <div>
            <br />
            <label>{"Joe"}</label>
            <div className={classes.imageModal}>
              <img className={classes.imageModal} src={"https://res.cloudinary.com/dz7kvpuzo/image/upload/v1611984044/dynamitedayphotos/why1lk27q4mkpawr8p2h.jpg"} />
            </div>
            <label style={{ padding: "10px" }}>
                {"Joe and Thomas met in college and have certainly seen and done it all together. Through the wild times and great memories, Joe managed to keep Thomas alive and out of trouble long enough to meet his person. Thankful for his friendship and being there!"}
            </label>
        </div>
        <div>
            <br />
            <label>{"Zach"}</label>
            <div className={classes.imageModal}>
              <img style={{ width: "100%" }} className={classes.imageModal} src={"https://res.cloudinary.com/dz7kvpuzo/image/upload/v1611984131/dynamitedayphotos/zach_qlqfvw.jpg"} />
            </div>
            <label style={{ padding: "10px" }}>
                {"Zach is / has been the catalyst in Thomas' life for great change. This goes all the way back to when Thomas (not knowing anyone) moved to Fort Collins and was given the chance to tag along with Zach and his crew. The rest as they say... is history. Wouldn't be here today!"}
            </label>
        </div>
      </div>

      <hr></hr>

      <div className="grid-container-weddinginfo">
              <div>
                  <h2>{"Registry Info"}</h2>
              </div>
              <div className={classes.imageModal}>
                    <a href="https://www.target.com/gift-registry/giftgiver?registryId=fd9cac7bac81469ba1283c74807fadd5&type=WEDDING" target="_blank"><label>{"Target"}</label>
                    <img className={classes.imageModal} src="https://cdn.freelogovectors.net/wp-content/uploads/2019/10/target_logo.png"></img>
                  </a>
              </div>
              <div className={classes.imageModal}>
                    <a href="https://www.amazon.com/wedding/registry/3V6S6W6K86E9K?ref=wr_search_page_result_2" target="_blank"><label>{"Amazon"}</label>
                    <img className={classes.imageModal} src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"></img>
                  </a>
              </div>
            </div>
            <hr></hr>

    </div>
  );
}

export default ImagePage;