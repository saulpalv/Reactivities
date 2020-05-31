import React, { useState, useEffect, Fragment } from 'react'
import { Container } from 'semantic-ui-react'
import axios from 'axios'
import IActivity from '../models/activity'
import NavBar from '../../features/nav/NavBar'
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard'

const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([])
  const [selectedActivity, setSelectedActivitiy] = useState<IActivity | null>(null)
  const [editMode, setEditMode] = useState<boolean>(false)

  const handleSelectActivity = (id: string) => {
    setSelectedActivitiy(activities.filter(a => a.id === id)[0])
  }

  const handleOpenCreateForm = () => {
    setSelectedActivitiy(null)
    setEditMode(true)
  }

  useEffect(() => {
    axios
      .get<IActivity[]>('http://localhost:5000/api/activities')
      .then(response => setActivities(response.data))
  }, [])

  return (
    <Fragment>
      <NavBar openCreateForm={handleOpenCreateForm} />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard
          activities={activities}
          selectActivity={handleSelectActivity}
          selectedActivity={selectedActivity}
          setSelectedActivitiy={setSelectedActivitiy}
          editMode={editMode}
          setEditMode={setEditMode}
        />
      </Container>
    </Fragment>
  );
}

export default App
