import React, { useState } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'
import IActivity, { getEmptyIActivity } from '../../../app/models/activity'

interface IProps {
    activity: IActivity | null
    setEditMode: (editMode: boolean) => void
}

const ActivityForm: React.FC<IProps> = ({ setEditMode, activity: initializeFormSate }) => {

    const initializeForm = () => {
        if (initializeFormSate) return initializeFormSate
        else return getEmptyIActivity()
    }

    const [activity, setActivity] = useState<IActivity>(initializeForm)

    return (
        <Segment clearing>
            <Form>
                <Form.Input placeholder="title" value={activity.title} />
                <Form.TextArea rows={2} placeholder="Description" value={activity.description} />
                <Form.Input placeholder="Category" value={activity.category} />
                <Form.Input type='date' placeholder="Date" value={activity.date} />
                <Form.Input placeholder="City" value={activity.city} />
                <Form.Input placeholder="Venue" value={activity.venue} />
                <Button floated='right' positive type='submit' content='Submit' />
                <Button onClick={() => setEditMode(false)} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
}

export default ActivityForm
