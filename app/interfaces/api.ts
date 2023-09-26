export type Appointment = {
  data: Array<string>
}

export type Result = {
  name: string
  url: string
}

export type Pagination = {
  count: number
  next: null
  previous: null
  results: Result[]
}

export type City = {
  id: number
  locations: Result[]
}