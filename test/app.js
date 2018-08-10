const request = require('supertest')
const { expect } = require('chai')

const app = require('../src/app')

describe('app', () => {
  it('responds to a GET on / with hello world', () => {
    return request(app)
      .get('/')
      .then(response => {
        expect(response.text).to.equal('hello world')
      })
  })
})
