import { observer } from 'mobx-react-lite';
import React,{SyntheticEvent, useState} from 'react'
import { Button, Image, Item, Label, Segment } from 'semantic-ui-react'
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
        
            <div className="movieContainer">
                {activitiesByYear.map(eachMovie =>(
                    <ul key={eachMovie.id} >
                        <li  className="booking-card" >
                           
                        <div className="book-container">
                        <img src={`/assets/categoryImages/${eachMovie.genre}.jpg`}/>
                          <div className="content">
                            <button className="btn">Watch Movie</button>
                          </div>
                        </div>
                        <div className="informations-container">
                          <h2 className="title">{eachMovie.title}</h2>
                          <p className="sub-title">{eachMovie.description}</p>
                          <div className="more-information">
                          
                                <p>
                                    <Label basic >{eachMovie.duration} min</Label>
                                    <Label basic content={eachMovie.quality}  />
                                    <Label basic content={eachMovie.genre}  />
                                    <Label basic content={eachMovie.year}  />
                                </p>
                            <p className="disclaimer">
                            <Button onClick={()=> activityStore.selectActivity(eachMovie.id)} floated='left' content='View' color='violet' />
                                <Button 
                                    name={eachMovie.id}
                                    loading={loading && target === eachMovie.id } 
                                    onClick={(e)=> handleDelete(e,eachMovie.id)} 
                                    floated='right' 
                                    content='Delete'
                                    color='red' />
                            </p>
                            </div>
                        </div>
                      </li>
                    </ul>
                ))}
            </div>
        
    )
})


