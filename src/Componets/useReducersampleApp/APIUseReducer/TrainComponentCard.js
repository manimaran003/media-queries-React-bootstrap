import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Typography ,Button} from '@mui/material'
const TrainComponentCard = (props) => {
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        from :{props.trainPass.from}  to:{props.trainPass.to}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.trainPass.arrival}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">edit</Button>
                    <Button size="small">delete</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default TrainComponentCard