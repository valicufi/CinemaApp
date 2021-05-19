import React from 'react'
import { Grid, List } from 'semantic-ui-react'
import { Activity } from '../../../app/models/activity'
import ActivityForm from '../../form/ActivityForm'
import ActivityDetails from '../details/ActivityDetails'


import ActivityList from './ActivityList'


interface Props{
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode : boolean;
    openForm: (id:string) => void;
    closeForm:() => void;
    createOrEdit: (activity: Activity) => void;
    deleteActivity: (id:string) => void;
    submitting: boolean;
}

function ActivityDashboard({activities,selectActivity,selectedActivity,
    cancelSelectActivity,editMode,openForm,closeForm,createOrEdit,
    deleteActivity,submitting}:Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList 
                    activities={activities} 
                    selectActivity={selectActivity}
                    deleteActivity={deleteActivity}
                    submitting={submitting}
                 />
            </Grid.Column>

            <Grid.Column width='6'>
                {selectedActivity && !editMode &&
                    <ActivityDetails activity={selectedActivity} 
                        cancelSelectActivity={cancelSelectActivity}
                        openForm={openForm}
                    />  }

                {editMode && 
                <ActivityForm 
                    closeForm={closeForm} 
                    activity={selectedActivity}
                    createOrEdit={createOrEdit}
                    submitting={submitting}
                />  } 
                  
            </Grid.Column>
        </Grid>
    )
}

export default ActivityDashboard


 
