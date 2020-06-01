import React, { useState, FormEvent } from 'react'
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

    const handleSubmit = () => {
        console.log(activity)
    }

    const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.currentTarget
        setActivity({ ...activity, [name]: value })
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit}>
                <Form.Input onChange={handleInputChange} name="title" placeholder="title" value={activity.title} />
                <Form.TextArea onChange={handleInputChange} name="description" rows={2} placeholder="Description" value={activity.description} />
                <Form.Input onChange={handleInputChange} name="category" placeholder="Category" value={activity.category} />
                <Form.Input onChange={handleInputChange} name="date" type='date' placeholder="Date" value={activity.date} />
                <Form.Input onChange={handleInputChange} name="city" placeholder="City" value={activity.city} />
                <Form.Input onChange={handleInputChange} name="venue" placeholder="Venue" value={activity.venue} />
                <Button floated='right' positive type='submit' content='Submit' />
                <Button onClick={() => setEditMode(false)} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
}

export default ActivityForm
