import React from 'react';

import SimpleModalLauncher from '../components/SimpleModalLaunche/SimpleModalLauncher';
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  imageModal: {
    padding: '0.4rem',

    '& img': {
      display: 'block',
      maxWidth: '100%',
      height: 'auto',
    },
  },
})


const ImagePage = (props) => {
  const classes = useStyles()

  return (
    <>
      <div className="grid-container-page">
        <div>The Proposal<br />10-10-2020</div>
        <SimpleModalLauncher imgURL="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603762578/dynamitedayphotos/IMG_0153_Copy_okoddt.jpg">
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603762578/dynamitedayphotos/IMG_0153_Copy_okoddt.jpg"
            />
          </div>
        </SimpleModalLauncher>
        <SimpleModalLauncher imgURL="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603762631/dynamitedayphotos/IMG_0159_bn577i.jpg">
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603762631/dynamitedayphotos/IMG_0159_bn577i.jpg"
            />
          </div>
        </SimpleModalLauncher>
        <SimpleModalLauncher imgURL="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603762602/dynamitedayphotos/IMG_0158_wixna2.jpg">
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603762602/dynamitedayphotos/IMG_0158_wixna2.jpg"
            />
          </div>
        </SimpleModalLauncher>
        <SimpleModalLauncher imgURL="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603762666/dynamitedayphotos/IMG_0175_p3ihcy.jpg">
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603762666/dynamitedayphotos/IMG_0175_p3ihcy.jpg"
            />
          </div>
        </SimpleModalLauncher>
      </div>
      <div className="grid-container-page">
        <div>Engagement Photo Shoot<br />10-19-2020</div>
        <SimpleModalLauncher imgURL="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603803576/dynamitedayphotos/DSC_4069-_ZF-8109-01061-1-026_kus3qb.jpg">
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603803576/dynamitedayphotos/DSC_4069-_ZF-8109-01061-1-026_kus3qb.jpg"
            />
          </div>
        </SimpleModalLauncher>
        <SimpleModalLauncher imgURL="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603803576/dynamitedayphotos/DSC_3963-_ZF-8109-01061-1-014_wg0mgn.jpg">
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603803576/dynamitedayphotos/DSC_3963-_ZF-8109-01061-1-014_wg0mgn.jpg"
            />
          </div>
        </SimpleModalLauncher>
        <SimpleModalLauncher imgURL="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603803576/dynamitedayphotos/DSC_4008-_ZF-8109-01061-1-020_op97rj.jpg">
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603803576/dynamitedayphotos/DSC_4008-_ZF-8109-01061-1-020_op97rj.jpg"
            />
          </div>
        </SimpleModalLauncher>
        <SimpleModalLauncher imgURL="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603803577/dynamitedayphotos/DSC_3995-_ZF-8109-01061-1-019_yjdtb8.jpg">
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603803577/dynamitedayphotos/DSC_3995-_ZF-8109-01061-1-019_yjdtb8.jpg"
            />
          </div>
        </SimpleModalLauncher>
      </div>
      <div className="grid-container-page">
        <div> </div>
        <SimpleModalLauncher imgURL="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603803577/dynamitedayphotos/DSC_3977-_ZF-8109-01061-1-016_ypfywv.jpg">
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603803577/dynamitedayphotos/DSC_3977-_ZF-8109-01061-1-016_ypfywv.jpg"
            />
          </div>
        </SimpleModalLauncher>
        <SimpleModalLauncher imgURL="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603803578/dynamitedayphotos/DSC_3941-_ZF-8109-01061-1-009_c2uc0y.jpg">
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603803578/dynamitedayphotos/DSC_3941-_ZF-8109-01061-1-009_c2uc0y.jpg"
            />
          </div>
        </SimpleModalLauncher>
        <SimpleModalLauncher imgURL="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603803578/dynamitedayphotos/DSC_3948-_ZF-8109-01061-1-011_uingmh.jpg">
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603803578/dynamitedayphotos/DSC_3948-_ZF-8109-01061-1-011_uingmh.jpg"
            />
          </div>
        </SimpleModalLauncher>
        <SimpleModalLauncher imgURL="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603803578/dynamitedayphotos/DSC_3924-_ZF-8109-01061-1-006_zgqz3t.jpg">
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603803578/dynamitedayphotos/DSC_3924-_ZF-8109-01061-1-006_zgqz3t.jpg"
            />
          </div>
        </SimpleModalLauncher>
      </div>
      <div className="grid-container-page">
        <div> </div>
        <SimpleModalLauncher imgURL="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603803579/dynamitedayphotos/DSC_3921-_ZF-8109-01061-1-005_wjjmuy.jpg">
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603803579/dynamitedayphotos/DSC_3921-_ZF-8109-01061-1-005_wjjmuy.jpg"
            />
          </div>
        </SimpleModalLauncher>
        <SimpleModalLauncher imgURL="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603803579/dynamitedayphotos/DSC_3916-_ZF-8109-01061-1-004_urjyao.jpg">
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603803579/dynamitedayphotos/DSC_3916-_ZF-8109-01061-1-004_urjyao.jpg"
            />
          </div>
        </SimpleModalLauncher>
        <SimpleModalLauncher imgURL="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603803584/dynamitedayphotos/DSC_3979-_ZF-8109-01061-1-017_f57vvq.jpg">
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603803584/dynamitedayphotos/DSC_3979-_ZF-8109-01061-1-017_f57vvq.jpg"
            />
          </div>
        </SimpleModalLauncher>
        <SimpleModalLauncher imgURL="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603804355/dynamitedayphotos/DSC_4066-_ZF-8109-01061-1-025_vxzw1v.jpg">
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603804355/dynamitedayphotos/DSC_4066-_ZF-8109-01061-1-025_vxzw1v.jpg"
            />
          </div>
        </SimpleModalLauncher>
      </div>
      <div className="grid-container-page">
        <div> </div>
        <SimpleModalLauncher imgURL="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603804356/dynamitedayphotos/DSC_3986-_ZF-8109-01061-1-018_dcxszk.jpg">
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603804356/dynamitedayphotos/DSC_3986-_ZF-8109-01061-1-018_dcxszk.jpg"
            />
          </div>
        </SimpleModalLauncher>
        <SimpleModalLauncher imgURL="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603804357/dynamitedayphotos/DSC_3942-_ZF-8109-01061-1-010_k6mzag.jpg">
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603804357/dynamitedayphotos/DSC_3942-_ZF-8109-01061-1-010_k6mzag.jpg"
            />
          </div>
        </SimpleModalLauncher>
        <SimpleModalLauncher imgURL="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603804358/dynamitedayphotos/DSC_3937-_ZF-8109-01061-1-007_q36vf2.jpg">
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603804358/dynamitedayphotos/DSC_3937-_ZF-8109-01061-1-007_q36vf2.jpg"
            />
          </div>
        </SimpleModalLauncher>
        <SimpleModalLauncher imgURL="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603804361/dynamitedayphotos/DSC_3979-_ZF-8109-01061-1-017_cum19i.jpg">
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603804361/dynamitedayphotos/DSC_3979-_ZF-8109-01061-1-017_cum19i.jpg"
            />
          </div>
        </SimpleModalLauncher>
      </div>
      <div className="grid-container-page">
        <div> </div>
        <SimpleModalLauncher imgURL="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603804362/dynamitedayphotos/DSC_4052-_ZF-8109-01061-1-024_xhzchf.jpg">
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603804362/dynamitedayphotos/DSC_4052-_ZF-8109-01061-1-024_xhzchf.jpg"
            />
          </div>
        </SimpleModalLauncher>
        <SimpleModalLauncher imgURL="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603804363/dynamitedayphotos/DSC_3967-_ZF-8109-01061-1-015_irqr9m.jpg">
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603804363/dynamitedayphotos/DSC_3967-_ZF-8109-01061-1-015_irqr9m.jpg"
            />
          </div>
        </SimpleModalLauncher>
      </div>
      <div className="grid-container-page">
        <div>Venue Shopping - Cielo at Castle Pines<br />10-24-2020</div>
        <SimpleModalLauncher imgURL="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603766862/dynamitedayphotos/IMG_0201_splsdf.jpg">
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603766862/dynamitedayphotos/IMG_0201_splsdf.jpg"
            />
          </div>
        </SimpleModalLauncher>
        <SimpleModalLauncher imgURL="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603766862/dynamitedayphotos/IMG_0206_ulkwpb.jpg">
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603766862/dynamitedayphotos/IMG_0206_ulkwpb.jpg"
            />
          </div>
        </SimpleModalLauncher>
        <SimpleModalLauncher imgURL="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603766862/dynamitedayphotos/IMG_0203_thg2no.jpg">
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603766862/dynamitedayphotos/IMG_0203_thg2no.jpg"
            />
          </div>
        </SimpleModalLauncher>
        <SimpleModalLauncher imgURL="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603766862/dynamitedayphotos/IMG_0204_njwwot.jpg">
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603766862/dynamitedayphotos/IMG_0204_njwwot.jpg"
            />
          </div>
        </SimpleModalLauncher>
      </div>
      <div className="grid-container-page">
        <div> </div>        
        <SimpleModalLauncher imgURL="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603766862/dynamitedayphotos/IMG_0207_gsmg0j.jpg">
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603766862/dynamitedayphotos/IMG_0207_gsmg0j.jpg"
            />
          </div>
        </SimpleModalLauncher>
        <SimpleModalLauncher imgURL="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603766862/dynamitedayphotos/IMG_0208_u1zigj.jpg">
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603766862/dynamitedayphotos/IMG_0208_u1zigj.jpg"
            />
          </div>
        </SimpleModalLauncher>
        <SimpleModalLauncher imgURL="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603766862/dynamitedayphotos/IMG_0205_fwphe5.jpg">
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603766862/dynamitedayphotos/IMG_0205_fwphe5.jpg"
            />
          </div>
        </SimpleModalLauncher>
      </div>
      <div className="grid-container-page">
        <div>Venue Shopping - The Barn at Racoon Creek<br />10-25-2020</div>
        <SimpleModalLauncher imgURL="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603767120/dynamitedayphotos/IMG_0215_uodz8l.jpg">
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603767120/dynamitedayphotos/IMG_0215_uodz8l.jpg"
            />
          </div>
        </SimpleModalLauncher>
        <SimpleModalLauncher imgURL="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603767120/dynamitedayphotos/IMG_0213_bctlxg.jpg">
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603767120/dynamitedayphotos/IMG_0213_bctlxg.jpg"
            />
          </div>
        </SimpleModalLauncher>
        <SimpleModalLauncher imgURL="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603767121/dynamitedayphotos/IMG_0216_sir7ub.jpg">
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603767121/dynamitedayphotos/IMG_0216_sir7ub.jpg"
            />
          </div>
        </SimpleModalLauncher>
        <SimpleModalLauncher imgURL="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603767120/dynamitedayphotos/IMG_0211_erjfqi.jpg">
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603767120/dynamitedayphotos/IMG_0211_erjfqi.jpg"
            />
          </div>
        </SimpleModalLauncher>
      </div>
      <div className="grid-container-page">
        <div></div>
        <SimpleModalLauncher imgURL="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603767121/dynamitedayphotos/IMG_0218_risyb6.jpg">
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603767121/dynamitedayphotos/IMG_0218_risyb6.jpg"
            />
          </div>
        </SimpleModalLauncher>
        <SimpleModalLauncher imgURL="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603767121/dynamitedayphotos/IMG_0219_dr8fvj.jpg">
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603767121/dynamitedayphotos/IMG_0219_dr8fvj.jpg"
            />
          </div>
        </SimpleModalLauncher>
        <SimpleModalLauncher imgURL="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603767121/dynamitedayphotos/IMG_0217_w8q2sv.jpg">
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603767121/dynamitedayphotos/IMG_0217_w8q2sv.jpg"
            />
          </div>
        </SimpleModalLauncher>
      </div>
      <div className="grid-container-page">
        <div>Venue Shopping - Cheyenne Mountain Resort and Crooked Willow Farms<br />10-29-2020</div>
      </div>
      <div className="grid-container-page">
        <div>Venue Picked<br />10-31-2020</div>
      </div>
      <div className="grid-container-page">
        <div>Invitations Picked<br />-TODO-</div>
      </div>
      <div className="grid-container-page">
        <div>Flowers Picked<br />-TODO-</div>
      </div>
      <div className="grid-container-page">
        <div>Cake Picked<br />-TODO-</div>
      </div>
      <div className="grid-container-page">
        <div>Music / DJ Picked<br />-TODO-</div>
      </div>
      <div className="grid-container-page">
        <div>Dress Picked<br />-TODO-</div>
      </div>
      <div className="grid-container-page">
        <div>Tuxes Picked<br />-TODO-</div>
      </div>
      <div className="grid-container-page">
        <div>Invitations Sent<br />-TODO-</div>
      </div>
      <div className="grid-container-page">
        <div>Final Head Count<br />-TODO-</div>
      </div>
      <div className="grid-container-page">
        <div>Bachelor Party<br />-TODO-</div>
      </div>
      <div className="grid-container-page">
        <div>Bachelorette Party<br />-TODO-</div>
      </div>
      <div className="grid-container-page">
        <div>Rehearsal<br />-TODO-</div>
      </div>
    </>
  );
}

export default ImagePage;