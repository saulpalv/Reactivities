import React from 'react'
import { Grid } from 'semantic-ui-react'
import IActivity from '../../../app/models/activity'
import ActivityList from './ActivityList'
import ActivityDetails from '../details/ActivityDetails'
import ActivityForm from '../form/ActivityForm'

interface IProps {
    activities: IActivity[]
    selectActivity: (id: string) => void
    selectedActivity: IActivity | null
    setSelectedActivitiy: (activity: IActivity | null) => void
    editMode: boolean
    setEditMode: (editMode: boolean) => void
}

const ActivityDashboard: React.FC<IProps> = ({
    activities,
    selectActivity,
    selectedActivity,
    setSelectedActivitiy,
    editMode,
    setEditMode
}) => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityList activities={activities} selectActivity={selectActivity} />
            </Grid.Column>
            <Grid.Column width={6}>
                {selectedActivity && !editMode &&
                    <ActivityDetails
                        activity={selectedActivity}
                        setEditMode={setEditMode}
                        setSelectedActivitiy={setSelectedActivitiy} />}
                {editMode && <ActivityForm setEditMode={setEditMode} />}
            </Grid.Column>
        </Grid>
    )
}

export default ActivityDashboard