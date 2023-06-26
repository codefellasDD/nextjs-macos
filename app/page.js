import Image from 'next/image'
import classnames  from 'classnames'
import styles from './page.module.css'
import bigSur from '../public/macOS-Big-Sur-wallpapers-1-scaled.jpg'
import finder from '../public/assets/images/icon/dock/finder.png'
import launchpad from '../public/assets/images/icon/dock/launchpad.png'
import appstore from '../public/assets/images/icon/dock/appstore.png'
import message from '../public/assets/images/icon/dock/message.png'
import music from '../public/assets/images/icon/dock/music.png'
import vscode from '../public/assets/images/icon/dock/vscode.svg'
import mail from '../public/assets/images/icon/dock/mail.png'
import photos from '../public/assets/images/icon/dock/photos.png'
import maps from '../public/assets/images/icon/dock/maps.png'
import calculator from '../public/assets/images/icon/dock/calculator.png'
import notes from '../public/assets/images/icon/dock/notes.png'
import terminal from '../public/assets/images/icon/dock/terminal.png'
import preferences from '../public/assets/images/icon/dock/preferences.png'
import trash from '../public/assets/images/icon/dock/bin.png'
import apple from '../public/assets/images/icon/apple-white.png'


export default function Home() {
  return (<>
   {/* <Image
    alt='Big Sur'
    src={bigSur}
    placeholder="blur"
    fill
    sizes='100vw'
    style={{objectFit:'cover'}}
   /> */}
    <div className={styles.navbar} height={44}>
    <ul>
        <li className={classnames(styles.leftLi, styles.logo)}>
          <Image src={apple} alt="Apple logo" />
          <ul>
            <li>
              <button><a href="https://github.com/mhmdmhd6/Mac-OS-Desktop" target="_blank">About This Mac</a></button>
            </li>
            <li>
              <button>System Preferences...</button>
            </li>
            <li>
              <button>Recent Items</button>
            </li>
            <li>
              <button>Force Quit Finder</button>
            </li>
            <li>
              <button>Sleep</button>
              <button onClick="window.location.reload();">Restart...</button>
              <button>Shut Down...</button>
            </li>
            <li>
              <button>Lock Screen</button>
              <button>Log Out</button>
            </li>
          </ul>
        </li>
        {/* <li className={classnames(styles.leftLi, 'app_name')} id="Terminal">
          <p>Terminal</p>
        </li>
        <li className={classnames(styles.leftLi, 'app_name')} id="Notes">
          <p>Notes</p>
        </li>
        <li className={classnames(styles.leftLi, 'app_name')} id="calculator">
          <p>Calculator</p>
        </li>
        <li className={classnames(styles.leftLi, 'app_name')} id="VScode">
          <p>VScode</p>
        </li>
        <li className={classnames(styles.leftLi, 'app_name')} id="map">
          <p>Maps</p>
        </li> */}
        <li className={styles.leftLi}>
          File
          <ul>
            <li>
              <button>New File</button>
              <button>New Window</button>
            </li>
            <li>
              <button>Open File</button>
              <button>Open Recent File</button>
            </li>
            <li>
              <button>Save</button>
              <button>Save as</button>
            </li>
            <li>
              <button>Searching</button>
              <button>Propertie File</button>
            </li>
            <li>
              <button>Customize</button>
            </li>
            <li>
              <button>Exit</button>
            </li>
          </ul>
        </li>
        <li className={classnames(styles.leftLi, styles.hidden )}>Edit</li>
        <li className={classnames(styles.leftLi, styles.hidden )}>View</li>
        <li className={classnames(styles.leftLi, styles.hidden )}>Go</li>
        <li className={classnames(styles.leftLi, styles.hidden )}>Tools</li>
        <li className={styles.leftLi}>Help</li>
      </ul>
    </div>
    <div className={styles.dock}>
      <button className={styles.icon} >
        <Image src={finder} alt="Finder Logo" className={styles.hidden}  width={63} height={63}/>
      </button>
      <button
        accesskey="o"
        className={classnames('block-point', styles.icon,'onhover')} 
        onclick="handleOpenLaunching()"
      >
        <Image
          className={classnames(styles.launching, styles.launching )}
          src={launchpad}
          alt="Launchpad Logo"
            width={63} height={63}
        />
        <hr className={classnames(styles.point, styles.hidden )} id="point-launchpad" />
      </button>
      <button className={styles.icon} >
        <Image src={appstore} alt="App Store Logo"   width={63} height={63}/>
      </button>
      <button className={styles.icon} >
        <Image src={message} alt="Messages Logo"   width={63} height={63}/>
      </button>
      <button className={styles.icon} >
        <Image src={music} alt="Music Logo"   width={63} height={63}/>
      </button>
      <button className={classnames(styles.icon, "open_vscode" )}>
        <Image src={vscode} alt="Vscode apps" className={styles.hidden}   width={63} height={63}/>
        <hr className={classnames(styles.point, styles.hidden )}   id="point-vscode" />
      </button>
      <button className={styles.icon} >
        <Image src={mail} alt="Mail Logo" className={styles.hidden}   width={63} height={63}/>
      </button>
      <button className={styles.icon} >
        <Image src={photos} alt="Photos Logo" className={styles.hidden}   width={63} height={63}/>
      </button>
      <button className={classnames(styles.icon, "open_map" )}>
        <Image src={maps} alt="maps Logo" className={styles.hidden}   width={63} height={63}/>
        <hr className={classnames(styles.point, styles.hidden )}   id="point-maps" />
      </button>
      <button className={classnames(styles.icon, "open_cal" )}>
        <Image src={calculator} alt="Calculator Logo"   width={63} height={63}/>
        <hr className={styles.point} id="point-cal" />
      </button>
      <button className={classnames(styles.icon, "openNote" )}>
        <Image src={notes} alt="Notes Logo"   width={63} height={63}/>
        <hr className={classnames(styles.point, styles.hidden )}   id="point-note" />
      </button>
      <button accesskey="t" className={classnames(styles.icon, "opening" )}>
        <Image
          src={terminal}
          alt="Terminal Logo"
          className={styles.hidden}
            width={63} height={63}
        />
        <hr className={styles.point} id="point-terminal" />
      </button>
      <button className={styles.icon} >
        <Image
          src={preferences}
          alt="Preferences Logo"
          className={styles.hidden}
            width={63} height={63}
        />
      </button>
      <hr className={classnames(styles.column, styles.hidden)}/>
      <button className={styles.icon} >
        <Image
          src={trash}
          alt="Trash Bin Logo"
          className={classnames(styles.hidden, 'Trash')}
            width={63} height={63}
        />
      </button>
    </div>
    </>
  )
}
