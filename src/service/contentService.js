import axios from 'axios'

const PROD_URL = 'https://mysterious-wave-58026.herokuapp.com'

const resolveUri = () =>
  typeof window === 'undefined' ? PROD_URL : (window.location.hostname === 'localhost' ? 'http://localhost:3000' : PROD_URL)

export const getInfo = () =>
  axios
    .get(`${resolveUri()}/api/content/info`)
    .then(({ data }) => ({
      title: data.info.title,
      text: data.info.content
    }))

export const getSchedule = day =>
    axios
      .get(`${resolveUri()}/api/content/calendars/${day}`)
      .then(({data}) => data)

export const getTeam = () =>
    axios
      .get(`${resolveUri()}/api/content/people`)
      .then(({data}) => data)

export const getAccomodationInfo = () =>
    axios
      .get(`${resolveUri()}/api/content/accomodation`)
      .then(({data}) => data)