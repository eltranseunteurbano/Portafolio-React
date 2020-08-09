import React from 'react';
import * as LinkRedes from '../../js/redes';
import './index.scss';

const Redes = ({name, round = false}) => {
  var link = ''

  switch(name) {
    case 'Email':
      link = LinkRedes.EMAIL;
    break;

    case 'LinkedIn':
      link = LinkRedes.LINKEDIN;
    break;

    case 'Behance':
      link = LinkRedes.BEHANCE;
    break;

    case 'Github':
      link = LinkRedes.GITHUB;
    break;

    case 'Photo':
      link = LinkRedes.PHOTO;
    break;

    case 'Instagram':
      link = LinkRedes.INSTAGRAM;
    break;

    case 'Dribbble':
      link = LinkRedes.DRIBBBLE;
    break;

    default :
    break;
    }


  return(
    <a href={link} target='_blank' rel='noreferrer' className={ round ? 'icono icono-round': 'icono'}>
      {
        name === 'Email' ? 
        <svg width='18' height='15' viewBox='0 0 18 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M16.2 0H1.8C0.81 0 0.00899999 0.81 0.00899999 1.8L0 12.6C0 13.59 0.81 14.4 1.8 14.4H16.2C17.19 14.4 18 13.59 18 12.6V1.8C18 0.81 17.19 0 16.2 0ZM16.2 3.6L9 8.1L1.8 3.6V1.8L9 6.3L16.2 1.8V3.6Z' fill='#A8A8A8'/>
        </svg>
        :
        name === 'LinkedIn' ? 
          <svg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M1.70643 3.41287C2.64887 3.41287 3.41287 2.64887 3.41287 1.70643C3.41287 0.763996 2.64887 0 1.70643 0C0.763996 0 0 0.763996 0 1.70643C0 2.64887 0.763996 3.41287 1.70643 3.41287Z' fill='#A8A8A8'/>
            <path d='M5.02416 4.70614V14.1734H7.96362V9.49164C7.96362 8.25627 8.19603 7.05989 9.72777 7.05989C11.2384 7.05989 11.2572 8.4723 11.2572 9.56963V14.1742H14.1982V8.98236C14.1982 6.43207 13.6491 4.47217 10.6683 4.47217C9.23721 4.47217 8.27792 5.25753 7.88563 6.00078H7.84585V4.70614H5.02416ZM0.233978 4.70614H3.17812V14.1734H0.233978V4.70614Z' fill='#A8A8A8'/>
          </svg>
        :
        name === 'Behance' ? 
        <svg width='20' height='12' viewBox='0 0 20 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M13.0582 0.793783H18.0488V1.95099H13.0582V0.793783ZM8.05754 5.37238C9.16073 4.8679 9.73859 4.10042 9.73859 2.91452C9.73859 0.569038 7.91245 0 5.80363 0H0V11.7729H5.96623C8.20263 11.7729 10.3014 10.7448 10.3014 8.35386C10.3014 6.87627 9.57098 5.78362 8.05754 5.37238ZM2.70669 2.00837H5.24578C6.22389 2.00837 7.10194 2.26898 7.10194 3.35445C7.10194 4.35386 6.41901 4.75553 5.45091 4.75553H2.70669V2.00837ZM5.596 9.77406H2.70419V6.53198H5.65353C6.84428 6.53198 7.59725 7.00777 7.59725 8.21279C7.59725 9.39868 6.69919 9.77406 5.596 9.77406ZM20 7.63419C20 5.11178 18.4565 3.01016 15.6648 3.01016C12.9506 3.01016 11.1044 4.96354 11.1044 7.52421C11.1044 10.1781 12.853 12 15.6648 12C17.7936 12 19.172 11.0843 19.8349 9.1309H17.676C17.4409 9.86013 16.4853 10.2427 15.7423 10.2427C14.3064 10.2427 13.556 9.43933 13.556 8.07412H19.9825C19.99 7.93305 20 7.78482 20 7.63419ZM13.556 6.59653C13.6335 5.47519 14.4165 4.77466 15.5872 4.77466C16.818 4.77466 17.4334 5.46563 17.541 6.59653H13.556Z' fill='#A8A8A8'/>
        </svg>

        :
        name === 'Github' ? 
        <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M8.99899 0.000244914C13.9721 -0.00182073 18 4.13359 18 9.23779C18 13.2741 15.4803 16.7051 11.9712 17.9651C11.4986 18.087 11.571 17.742 11.571 17.5066V15.9057C14.2999 16.2341 14.4105 14.3792 14.5935 14.0693C14.9635 13.4207 15.8382 13.2555 15.5768 12.9456C14.9554 12.6172 14.322 13.0282 13.588 14.1416C13.0571 14.9493 12.0215 14.813 11.4966 14.6787C11.382 14.1933 11.1366 13.7595 10.7988 13.4228C13.6262 12.9022 14.8046 11.1299 14.8046 9.02297C14.8046 8.00047 14.4768 7.06061 13.8333 6.30252C14.2435 5.0528 13.7951 3.9828 13.7348 3.82375C12.5664 3.71633 11.3518 4.68305 11.2573 4.75948C10.5937 4.57564 9.83555 4.47856 8.98693 4.47856C8.13429 4.47856 7.37415 4.57977 6.7045 4.76568C6.47726 4.58803 5.35113 3.75765 4.26522 3.85886C4.2069 4.01792 3.76852 5.06313 4.15462 6.29632C3.50307 7.05648 3.17126 8.00461 3.17126 9.02916C3.17126 11.1402 4.35772 12.9146 7.19316 13.4269C6.9503 13.6722 6.75746 13.9648 6.62591 14.2876C6.49436 14.6103 6.42674 14.9568 6.42699 15.3066V17.6305C6.4109 17.8164 6.42699 18.0002 6.12535 18.0002C2.56396 16.7671 0 13.3112 0 9.23986C0 4.13359 4.02994 0.000244914 8.99899 0.000244914Z' fill='#A8A8A8'/>
        </svg>
        :
        name === 'Photo' ? 
        <svg width='19' height='18' viewBox='0 0 19 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M6.66161 7.65025L10.9546 0.216267C9.62712 -0.0801916 8.24965 -0.0714095 6.92605 0.241951C5.60246 0.555311 4.36727 1.16507 3.31362 2.02526L6.60761 7.74025L6.66161 7.65025ZM17.5876 6.30025C16.7596 3.67226 14.7526 1.56626 12.1876 0.594266L8.89361 6.30025H17.5876ZM17.8216 7.20025H11.0806L11.3416 7.65025L15.6256 15.0752C17.1563 13.4229 18.0051 11.2526 18.0016 9.00024C18.0016 8.37925 17.9386 7.78525 17.8216 7.20025ZM5.88761 9.00024L2.37762 2.92526C1.41328 3.96966 0.711201 5.22848 0.329366 6.59776C-0.0524685 7.96705 -0.103108 9.40752 0.181629 10.8002H6.92261L5.88761 9.00024ZM0.415628 11.7002C1.24363 14.3282 3.25062 16.4342 5.81561 17.4062L9.1096 11.7002H0.415628ZM10.5586 11.7002L7.04861 17.7842C8.3761 18.0807 9.75356 18.0719 11.0772 17.7585C12.4008 17.4452 13.6359 16.8354 14.6896 15.9752L11.3956 10.2602L10.5586 11.7002Z' fill='#A8A8A8'/>
        </svg>
        :
        ''
      }
    </a>
  )

}

export default Redes;