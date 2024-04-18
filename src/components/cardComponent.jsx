
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default class CardFunc extends React.Component  {
    
    render() {
        return (
            <React.Fragment>
                <Card sx={{maxWidth: 300}} style={{"margin-top": '100px'}}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {this.props.formDataCard.firstname} {this.props.formDataCard.lastname}
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div">
                    class: {this.props.formDataCard.class}
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div">
                    nationality: {this.props.formDataCard.nationality}
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div">
                    team: {this.props.formDataCard.team}
                    </Typography>   
                   
                </CardContent>
                <CardActions>
                    <Button size="small">Attack</Button>
                </CardActions>
                </Card>
            </React.Fragment> 
            
        ) 
    }
}
