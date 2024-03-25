
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function CardFunc(formData) {
    return (
        <Card sx={{minWidth: 300}} style={{"margin-top": '30px'}}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {formData.firstname} {formData.lastname}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Nationalité: {formData.nationality}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Équipe: {formData.team}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Edit</Button>
                <Button size="small">Delete</Button>
            </CardActions>
        </Card>
    ) 
}
export default CardFunc;