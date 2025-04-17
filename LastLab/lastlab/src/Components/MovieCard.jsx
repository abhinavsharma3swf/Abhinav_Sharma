import {Results} from "./Results.jsx"
import { Card, CardMedia, CardContent} from '@mui/material';
import Typography from "@mui/material/Typography";
import Missing from './Missing.jpg'

export const MovieCard = ({data}) => {
    let {title, overview, vote_average, poster_path} = data;

    const posterImage = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
        : Missing;

    return (
        <Card sx={{ maxWidth: 300, marginTop: 11 }}>
            <CardMedia
                component="img"
                image={posterImage}
                alt={title}
                height="450"
            />
            <CardContent>
                <Typography variant="h6">{title}</Typography>
                <Typography variant="body2">{overview}</Typography>
                <Typography variant="subtitle1">⭐ {vote_average}</Typography>
            </CardContent>
        </Card>
    );
};


