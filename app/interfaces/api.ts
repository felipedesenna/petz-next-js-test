export type Appointment = {
  data: Array<string>
}

export type RegionResult = {
  name: string
  url: string
}

export type Region = {
  count: number
  next: null
  previous: null
  results: RegionResult[]
}

export type City = {
  id: number
  locations: RegionResult[]
}