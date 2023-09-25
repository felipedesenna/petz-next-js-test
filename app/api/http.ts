type Appointment = {
  data: Array<string>
}

export async function getAppointmentDate(): Promise<Appointment> {
  const response = await fetch('http://localhost:3000/api/date');
  const data = await response.json();
  return data;
}

export async function getAppointmentTime(date: string): Promise<Appointment> {
  const response = await fetch('http://localhost:3000/api/time', {
    body: JSON.stringify(date)
  });
  const data = await response.json();
  return data;
}