import React, { SyntheticEvent } from 'react'
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
    createActivity: (activity: IActivity) => void
    editActivity: (activity: IActivity) => void
    deleteActivity: (e: SyntheticEvent<HTMLButtonElement>, id: string) => void
    target: string
    submitting: boolean
}

const ActivityDashboard: React.FC<IProps> = ({
    activities,
    selectActivity,
    selectedActivity,
    setSelectedActivitiy,
    editMode,
    setEditMode,
    createActivity,
    editActivity,
    deleteActivity,
    target,
    submitting
}) => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityList
                    activities={activities}
                    selectActivity={selectActivity}
                    deleteActivity={deleteActivity}
                    submitting={submitting}
                    target={target} />
            </Grid.Column>
            <Grid.Column width={6}>
                {selectedActivity && !editMode &&
                    <ActivityDetails
                        activity={selectedActivity}
                        setEditMode={setEditMode}
                        setSelectedActivitiy={setSelectedActivitiy} />}
                {editMode &&
                    <ActivityForm
                        key={selectedActivity?.id || 0}
                        setEditMode={setEditMode}
                        activity={selectedActivity}
                        createActivity={createActivity}
                        editActivity={editActivity}
                        submitting={submitting} />}
            </Grid.Column>
        </Grid>
    )
}

export default ActivityDashboard