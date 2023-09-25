type Appointment = {
  data: Array<string>
}

export async function getAppointmentDate(): Promise<Appointment> {
  const response = await fetch('http://localhost:3000/api/date');
  const data = await response.json();
  return data;
}

export async function getAppointmentHour(value: string): Promise<Appointment> {
  const response = await fetch('http://localhost:3000/api/time', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ date: value }),
  });
  const data = await response.json();
  return data;
}