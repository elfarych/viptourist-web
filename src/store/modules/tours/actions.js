import errorHandler from 'src/utils/error-handler'
import axios from 'axios'
import config from 'src/config'

export function init ({ dispatch }, language) {
}

export async function loadCities ({ commit }, language) {
  try {
    await axios.get(`${config.serverURI}`)
  } catch (e) {
    errorHandler(e)
  }
}

export async function loadTours ({ commit }, params) {
  try {
    await axios.get(`${config.serverURI}`, {
      params
    })
  } catch (e) {
    errorHandler(e)
  }
}
