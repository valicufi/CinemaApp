import { observer } from 'mobx-react-lite'
import React, { Fragment } from 'react'
import { Grid, List } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store'
import ActivityForm from '../../form/ActivityForm'
import ActivityDetails from '../details/ActivityDetails'


import ActivityList from './ActivityList'



export default observer( function ActivityDashboard() {

    const {activityStore} = useStore();
    const {selectedActivity, editMode} = activityStore;
    return (
        <Fragment>
            <div className="activity-container">
                <div className="left-container">
                    <ActivityList  />
                </div>
                <div className="right-container">
                    {selectedActivity && !editMode &&
                        <ActivityDetails/>  }
    
                    {editMode && 
                    <ActivityForm />  } 
                </div>
            </div>
        </Fragment>

    )
})




 
