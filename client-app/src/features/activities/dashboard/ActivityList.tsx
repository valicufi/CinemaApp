import { observer } from 'mobx-react-lite';
import React,{SyntheticEvent, useState} from 'react'
import { Button, Item, Label, Segment } from 'semantic-ui-react'
import { Activity } from '../../../app/models/activity'
import { useStore } from '../../../app/stores/store';



export default observer( function ActivityList() {
    const [target, setTarget] = useState('');
    const {activityStore} = useStore();
    const {deleteActivity, activitiesByYear, loading} = activityStore;

    function handleDelete(e:SyntheticEvent<HTMLButtonElement>,id:string) {
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }


    return (
        <Segment>
            <Item.Group divided>
                {activitiesByYear.map(activity =>(
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as='a'>{activity.title}</Item.Header>
                            <Item.Meta>{activity.year}</Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={()=> activityStore.selectActivity(activity.id)} floated='right' content='View' color='violet' />
                                <Button 
                                    name={activity.id}
                                    loading={loading && target === activity.id } 
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
})


