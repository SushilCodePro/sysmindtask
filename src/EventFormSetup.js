import React, { useState } from 'react';

const EventFormSetup = ({data, setData}) => {
    const [formData, setFormData] = useState({
        eventTitle: '',
        eventDescription: '',
        duration: '',
        buffer: '',
        location: '',
        visibility: '',
      });
      
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleVisibility = (visibility) => {
    setFormData({ ...formData, visibility });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setData([...data, formData]);
    console.log('Submitted data:', data);
  };

  return (
    <div className="p-1 grid grid-cols-12">
      <div className="col-span-10">
        <p className="text-sm font-bold mb-3">One-On-One</p>
        <form onSubmit={onSubmit}>
          <label htmlFor="event-title">Event title<span className="text-red-500">*</span></label>
          <input
            id="event-title"
            name="eventTitle"
            type="text"
            placeholder="Add a title"
            value={formData.eventTitle}
            onChange={handleChange}
            className="border p-1 w-full rounded-sm"
          />
          <br /><br />
          <label htmlFor="event-description">Event description<span className="text-red-500">*</span></label>
          <input
            id="event-description"
            name="eventDescription"
            type="text"
            placeholder="Write a summary ..."
            value={formData.eventDescription}
            onChange={handleChange}
            className="border p-1 w-full rounded-sm"
          />
          <br /><br />
          <div className="flex gap-4">
            <div>
              <label htmlFor="duration" className="block">Duration</label>
              <select
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="border p-1 rounded-sm"
              >
                <option value="">Select Time</option>
                <option value="30">30 Min</option>
                <option value="60">1 Hour</option>
                <option value="120">2 Hour</option>
                <option value="180">3 Hour</option>
              </select>
            </div>
            <div>
              <label htmlFor="buffer" className="block">Buffer Time</label>
              <select
                id="buffer"
                name="buffer"
                value={formData.buffer}
                onChange={handleChange}
                className="border p-1 rounded-sm"
              >
                <option value="">Select Time</option>
                <option value="30">30 Min</option>
                <option value="60">1 Hour</option>
                <option value="120">2 Hour</option>
                <option value="180">3 Hour</option>
              </select>
            </div>
          </div>
          <br />
          <label htmlFor="location" className="block">Location</label>
          <select
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="border p-1 rounded-sm w-full"
          >
            <option value="">Select Location</option>
            <option value="Teams">Teams</option>
            <option value="Google Meet">Google Meet</option>
            <option value="Myapp">My App</option>
            <option value="AWS Meet">AWS Meet</option>
          </select>
          <br /><br />
          <div className="grid grid-cols-2 gap-2">
            <div
              className={`rounded col-span-1 border px-4 py-1 font-bold bg-gray-100 hover:cursor-pointer ${formData.visibility === 'Private' ? 'bg-red-300' : ''}`}
              onClick={() => handleVisibility('Private')}
            >
              Private
              <p className="text-xs font-normal">Only people with a booking link can view this</p>
            </div>
            <div
              className={`rounded col-span-1 border px-4 py-1 font-bold bg-gray-100 hover:cursor-pointer ${formData.visibility === 'Public' ? 'bg-red-300 border-red-500' : ''}`}
              onClick={() => handleVisibility('Public')}
            >
              Public
              <p className="text-xs font-normal">These will appear on your booking page</p>
            </div>
          </div>
          <br />
          <button type="submit" className="rounded border font-bold px-4 py-1 bg-gray-100 hover:cursor-pointer">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EventFormSetup;
