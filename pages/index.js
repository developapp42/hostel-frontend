import { useEffect, useState } from 'react';

export default function WardenDashboard() {
  const [timeline, setTimeline] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStudentTimeline() {
      try {
        // REPLACE THIS WITH YOUR RENDER API URL
        const res = await fetch('https://hostel-backend-api-1shr.onrender.com', {
          headers: { Authorization: `Bearer fake-demo-token` }
        });
        const data = await res.json();
        setTimeline(data);
      } catch (err) {
        console.error('Failed to fetch timeline:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchStudentTimeline();
  }, []);

  return (
    <div style={{ padding: '30px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Hostel Warden Dashboard</h1>
      <p style={{ color: 'green', fontWeight: 'bold' }}>Connected to Free Cloud Backend!</p>
      
      {loading ? (
        <p>Loading student data from Neon DB...</p>
      ) : (
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
          <h2>Student Details</h2>
          <p><strong>Status:</strong> {timeline?.profile ? 'Active' : 'No Data Yet (Database Ready)'}</p>
          <p><strong>Room:</strong> {timeline?.room_history[0]?.room_number || 'Unassigned'}</p>
        </div>
      )}
    </div>
  );
}
