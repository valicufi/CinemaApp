import React,{SyntheticEvent, useState} from 'react'
import { Button, Item, Label, Segment } from 'semantic-ui-react'
import { Activity } from '../../../app/models/activity'

interface Props{
    activities: Activity[];
    selectActivity: (id: string) => void;
    deleteActivity: (id:string) => void;
    submitting : boolean;
}

function ActivityList({activities,selectActivity,deleteActivity,submitting}:Props) {
    const [target, setTarget] = useState('');
    function handleDelete(e:SyntheticEvent<HTMLButtonElement>,id:string) {
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }
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
                                <Button 
                                    name={activity.id}
                                    loading={submitting && target === activity.id } 
                                    onClick={(e)=> handleDelete(e,activity.id)} 
                                    floated='right' 
                                    content='Delete'
                                    color='red' />
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
