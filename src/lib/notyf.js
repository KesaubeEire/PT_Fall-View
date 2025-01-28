import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

export const notyf = new Notyf({
  duration: 5000,
  dismissible: true
});

export const notyf_lt = new Notyf({
  duration: 3000,
  dismissible: true,
  position: {
    x: 'left',
    y: 'top'
  },
  types: [
    {
      type: 'warning',
      background: 'orange',
      icon: {
        className: 'material-icons',
        tagName: 'i',
        text: 'warning'
      }
    }
  ]
});

// const notyf = new Notyf({
//   duration: 1000,
//   position: {
//     x: 'right',
//     y: 'top',
//   },
//   types: [
//     {
//       type: 'warning',
//       background: 'orange',
//       icon: {
//         className: 'material-icons',
//         tagName: 'i',
//         text: 'warning'
//       }
//     },
//     {
//       type: 'error',
//       background: 'indianred',
//       duration: 2000,
//       dismissible: true
//     }
//   ]
// });
