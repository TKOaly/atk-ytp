import axios from 'axios'
import contentFixtures from '../content/fixtures.json'

const isEventCompleted = new Date('2019-10-18 11:00') < new Date()

const PROD_URL = 'https://mysterious-wave-58026.herokuapp.com'

const resolveUri = () =>
  typeof window === 'undefined' ? PROD_URL : (window.location.hostname === 'localhost' ? 'http://localhost:3000' : PROD_URL)

export const getInfo = () =>
  isEventCompleted ?
  Promise.resolve(contentFixtures.info)
    .then(({ title, content }) => ({
      title,
      text: content
    })) :
  axios
    .get(`${resolveUri()}/api/content/info`)
    .then(({ data }) => ({
      title: data.info.title,
      text: data.info.content
    }))

export const getSchedule = day =>
    isEventCompleted ?
    Promise.resolve(contentFixtures.schedule[day]) :
    axios
      .get(`${resolveUri()}/api/content/calendars/${day}`)
      .then(({data}) => data)

export const getTeam = () =>
    isEventCompleted ?
    Promise.resolve(contentFixtures.people) :
    axios
      .get(`${resolveUri()}/api/content/people`)
      .then(({data}) => data)

export const getAccomodationInfo = () =>
    isEventCompleted ?
    Promise.resolve(contentFixtures.accomodation) :
    axios
      .get(`${resolveUri()}/api/content/accomodation`)
      .then(({data}) => data)

export const getSponsors = () =>
    isEventCompleted ?
    Promise.resolve(contentFixtures.sponsors) :
    axios
      .get(`${resolveUri()}/api/content/sponsors`)
      .then(({data}) => data)