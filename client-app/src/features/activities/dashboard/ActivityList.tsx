import React from 'react'
import { Button, Item, Label, Segment } from 'semantic-ui-react'
import { Activity } from '../../../app/models/activity'

interface Props{
    activities: Activity[];
    selectActivity: (id: string) => void;
    deleteActivity: (id:string) => void;
}

function ActivityList({activities,selectActivity,deleteActivity}:Props) {
    return (
        <Segment>
            <Item.Group divided>
                {activities.map(activity =>(
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as='a'>{activity.title}</Item.Header>
                            <Item.Meta>{activity.year}</Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={()=>selectActivity(activity.id)} floated='right' content='View' color='violet' />
                                <Button onClick={()=>deleteActivity(activity.id)} floated='right' content='Delete' color='red' />
                                <p>
                                    <Label basic >{activity.duration} min</Label>
                                    <Label basic content={activity.quality}  />
                                    <Label basic content={activity.genre}  />
                                </p>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}

export default ActivityList
