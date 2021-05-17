import React,{useState,ChangeEvent} from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { Activity } from '../../app/models/activity';



interface Props{
    activity: Activity | undefined;
    closeForm:()=>void;
    createOrEdit: (activity: Activity) => void;
}

function ActivityForm({activity:selectActivity,closeForm,createOrEdit}:Props) {

    const initialState = selectActivity ?? {
        id: '',
        title:'',
        description:'',
        genre:'',
        year: Number(''),
        imdb: Number(''),
        quality:'',
        duration:Number(''),
    }

    const[activity,setActivity] = useState(initialState);

    function handleSubmit() {
        createOrEdit(activity);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name,value} = event.target;
        setActivity({...activity,[name]:value});
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autocomplete='off' >
                <Form.Input placeholder='Title' value={activity.title} name='title' onChange={handleInputChange} />
                <Form.TextArea placeholder='Description' value={activity.description} name='description' onChange={handleInputChange}/>
                <Form.Input placeholder='Genre' value={activity.genre} name='genre' onChange={handleInputChange} />
                <Form.Input placeholder='Year' value={activity.year} name='year' onChange={handleInputChange} />
                <Form.Input placeholder='Imdb' value={activity.imdb} name='imdb' onChange={handleInputChange} />
                <Form.Input placeholder='Quality' value={activity.quality} name='quality' onChange={handleInputChange} />
                <Form.Input placeholder='Duration' value={activity.duration} name='duration' onChange={handleInputChange} />
                <Button floated='right' positive type='submit' content='Submit' />
                <Button onClick={closeForm} floated='right'  type='button' content='Cancel' />
            </Form>
        </Segment>
    )
}

export default ActivityForm
