import { Appointment, Region, City } from '@/interfaces/api'

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

export async function getPokemonRegion(): Promise<Region> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/region`);
  const data = await response.json();
  return data;
}

export async function getPokemonCity(city: string): Promise<City> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/region/${city}`);
  const data = await response.json();
  return data;
}
