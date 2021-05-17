import React from 'react'
import { Button, Card, Icon,Image, Label } from 'semantic-ui-react'
import { Activity } from '../../../app/models/activity'

interface Props{
    activity: Activity;
    cancelSelectActivity: () => void;
    openForm : (id:string) =>void;
}

function ActivityDetails({activity,cancelSelectActivity,openForm}:Props) {
    return (
        <Card >
        <Image src={`/assets/categoryImages/${activity.genre}.jpg`} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{activity.title}</Card.Header>
          <Card.Meta>
            <span className='date'>{activity.year}</span>
          </Card.Meta>
          <Card.Description>
            {activity.description}
            <p>
                <Label>{activity.genre}</Label>
                <Label>{activity.quality}</Label>
                <Label>{activity.imdb} IMDB</Label>
                <Label>{activity.duration} min</Label>
                
            </p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Button onClick={()=> openForm(activity.id)} color='violet' content='Edit' />
            <Button onClick={cancelSelectActivity} color='grey' content='Cancel' />
        </Card.Content>
      </Card>
    )
}

export default ActivityDetails
