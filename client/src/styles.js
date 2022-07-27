import { createStyles } from "@mui/material/styles";
console.log(createStyles())

// import { createTheme } from '@mui/material';

// const theme = createTheme({
//   components: {
//     // Name of the component ⚛️
//     MuiButtonBase: {
//       defaultProps: {
//         // The props to apply
//         disableRipple: true, // No more ripple, on the whole application 💣!
//       },
//     },
//   },
// });

// this will eturn an object 
export default createStyles(() => ({
    
    yasi: {
        
        borderRadius: '15px',
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center'
    },

    heading: {

        color:'rgba(0,183,255,1)'
    },

    image: {

        marginLeft: '15px'
        
    }

}));