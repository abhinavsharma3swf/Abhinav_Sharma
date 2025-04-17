
import { Box, Typography } from '@mui/material';
import noResult from './noResult.webp'
import theme from "./Ui/Theme.jsx";


export const ErrorPage = ({error}) => {

    if(error === 'noResult')
        return <div align={'center'} className='noResult'>
            <img src={noResult} alt="no Result"/>
        </div>


    return (
        <Box textAlign="center" mt={10}>
            <Typography variant="h3" color="error">
                Oops! Something went wrong 🎬
            </Typography>
            <Typography variant="h5" sx={{ mt: 2 }}>
                No results found or network error.
            </Typography>
        </Box>
    );
};
